function pizzaCalculator(pizzaType, pizza, size, toppingsList){

    let total = 0, str = "Pizza is not available", isPizzaAvailable = false, isToppingAvailable = true
    let pizzaMenu = {
       'veg': {
           'pepper paneer': {'small' : 120, 'medium': 220, 'large': 350},
           'Mexican green wave' : {'small' : 140, 'medium': 250, 'large': 380},
           'cheese N corn': {'small' : 130, 'medium': 240, 'large': 350},
           'tandoori paneer': {'small' : 150, 'medium': 250, 'large': 370}
        }, 
        'nonveg':{
            'chicken golden delight': {'small' : 120, 'medium': 220, 'large': 350},
            'chicken dominator': {'small' : 150, 'medium': 250, 'large': 380},
            'double cheese chicken pizza': {'small' : 200, 'medium': 350, 'large': 500},
            'pepper barbeque chicken': {'small' : 190, 'medium': 300, 'large': 450} 
        }
    }
   
    let toppings = {
        'extra cheese' : {'small' : 20, 'medium': 40, 'large': 60},
        'tomato': {'small' : 20, 'medium': 40, 'large': 60},
        'black olives': {'small' : 20, 'medium': 40, 'large': 60},
        'onions': {'small' : 20, 'medium': 40, 'large': 60},
        'extra chicken': {'small' : 20, 'medium': 40, 'large': 60}
    }
    for(const [key, value] of Object.entries(pizzaMenu)){
        if(key === pizzaType){
            for(const [pizzaList, pizzaSize] of Object.entries(value)){
                if(pizzaList === pizza){
                    for(const [sizeOfPizza, amount] of Object.entries(pizzaSize)){
                        if(sizeOfPizza === size){
                            total += amount
                            isPizzaAvailable = true
                        }
                    }
                }
            }
        }
    }
  
    if(!isPizzaAvailable){
        return str
    }

    if(toppingsList.length > 0){
        toppingsList.map(topping => {
            if(topping){
                for(const [key, value] of Object.entries(toppings)){
                    if(key === topping){
                        for(const [pizzaSize, amount] of Object.entries(value)){
                            if(pizzaSize === size){
                                total += amount
                                isToppingAvailable = true
                            }
                        }
                    }
                }
            }
        })
    }
    for (const topping of toppingsList) {
        if (!toppings[topping]) {
            isToppingAvailable = false;
        }
    }

    if (!isToppingAvailable) {
        return `Some toppings are not available. Your total amount is: ${total}`;
    }
    return `Your total amount is: ${total}`
}

console.log(pizzaCalculator('veg','Mexican green wave', 'large', ['extra cheese','extra chicken', 'black olives']));