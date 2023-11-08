function findConnectedComponents(graph) {
    let visited = new Set();
    let components = [];
  
    function bfs(start, component) {
        let queue = [start];
        visited.add(start);
      
        while (queue.length > 0) {
            let vertex = queue.shift();
            component.push(vertex);
      
            for (let neighbor of graph.get(vertex)) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                    visited.add(neighbor);
                }
            }
        }
    }
    for (let vertex of graph.keys()) {
        if (!visited.has(vertex)) {
            let component = [];
            bfs(vertex, component);
            components.push(component);
        }
    }
    return components;
}


function roadsAndLibraries(n, cl, cr, cities){
    if(cr >= cl){
        return n * cl
    }
    if(cities.length === 0){
        return cl * n
    }
    
    let values = [].concat(...cities)
    const valueCounts = {}


    for (let value of values) {
        valueCounts[value] = (valueCounts[value] || 0) + 1
    }

   let adjacencyList = new Map();
    cities.forEach(item => {
        if (adjacencyList.has(item[0])) {
            adjacencyList.get(item[0]).push(item[1]);
        } else {
            adjacencyList.set(item[0], [item[1]]);
        }
    
        if (adjacencyList.has(item[1])) {
            adjacencyList.get(item[1]).push(item[0]);
        } else {
            adjacencyList.set(item[1], [item[0]]);
        }
    });
    
  
    let connectedComponents = findConnectedComponents(adjacencyList)
    let roads = 0

    connectedComponents.forEach(item => {
        roads += item.length - 1
    })

    let libraryCount = connectedComponents.length
    let cityWithConnection = Object.keys(valueCounts)
    let cityWithNoConnection = 0

    if(n !== cityWithConnection.length){
        cityWithNoConnection = n - cityWithConnection.length
    }

    return (roads * cr) + (libraryCount * cl)  + (cityWithNoConnection * cl)
}

console.log(roadsAndLibraries(5, 2,1, [[1,2],[1,3],[2,3], [4,5]]))