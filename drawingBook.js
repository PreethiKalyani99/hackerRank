function drawingBook(n,p){
    let front = Math.floor(p / 2);
    let back = Math.abs(n - p) / 2;

    if(n % 2 === 0){
        back = Math.ceil(back)
    }
    else{
        back = Math.floor(back)
    }

    if(front < back){
        return front;
    }
    else if(front === back){
        return front;
    }
    else{
        return back;
    }
}
console.log(drawingBook(100,49));