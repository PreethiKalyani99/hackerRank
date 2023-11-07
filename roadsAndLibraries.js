function isVisited(cityArr, startValue, endValue){
    let start = 'No', end = 'No'
    for(let i = 0; i < cityArr.length; i++){
        if(startValue === cityArr[i].start || startValue === cityArr[i].end){
            start = 'Yes'
        }
        if(endValue === cityArr[i].end){
            end = 'Yes'
        }
        if(start === 'Yes' && endValue === cityArr[i].start){
            end = 'Yes'
        }
    }
    return [start,end]
}

function roadsAndLibraries(n, cl, cr, cities){
    if(cr >= cl){
        return n * cl
    }
    if(cities.length === 0){
        // console.log(cl, n)
        return cl * n
    }
    let cityArr = [], roadCount = 0

    cities.forEach(([startValue, endValue]) => {
        
        if(cityArr.length === 0){
            cityArr.push({ start: startValue, end: endValue });
            roadCount++
        }
        else{
            let result = isVisited(cityArr, startValue, endValue)
            if((result[0] === 'No' && result[1] === 'No') || (result[0] === 'No' && result[1] === 'Yes') || (result[0] === 'Yes' && result[1] === 'No') ){
                cityArr.push({ start: startValue, end: endValue })
                roadCount++
            }
        }
    });

    let values = [].concat(...cityArr.map(item => Object.values(item)))
    const valueCounts = {}

    for (let value of values) {
        valueCounts[value] = (valueCounts[value] || 0) + 1
    }

    let cityWithConnection = Object.keys(valueCounts)
    let cityWithNoConnection = 0

    if(n !== cityWithConnection.length){
        cityWithNoConnection = n - cityWithConnection.length
    }
    // let libraryCount = Object.values(valueCounts).filter(val => {return val > 1})
    // console.log(roadCount, cr, libraryCount.length,cl);
    // console.log(cityArr)
    
    // console.log(libraryCount )
    // console.log(cityWithConnection,'connection')
    // return (roadCount * cr) + (libraryCount.length * cl)  + (cityWithNoConnection * cl)
    return (roadCount * cr) + (cityWithNoConnection * cl)
}
// console.log(roadsAndLibraries(5,92,23, [[2,1],[5,3],[5,1],[3,4],[3,1],[5,4],[4,1],[5,2],[4,2]]))
console.log(roadsAndLibraries(5, 2, 1, [[1,2],[1,3],[4,5]]))
