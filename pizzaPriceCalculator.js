// const {pizzaMenu, toppings} = require('./variables/constants')

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
        'double cheese chicken': {'small' : 200, 'medium': 350, 'large': 500},
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


function validateOrder({pizzaType, pizza, size, toppingsList}){
    const unavailableToppings = toppingsList.filter(topping => !toppings[topping])

    if(!pizzaMenu[pizzaType]){
        return {isValid: false, reason : `PizzaType "${pizzaType}" is not available`}
    }
    if(!pizzaMenu[pizzaType][pizza]){
        return {isValid: false, reason : `"${pizza}" pizza is not available`}
    }
    if(!pizzaMenu[pizzaType][pizza][size]){
        return {isValid: false, reason : `"${size}" size is not available`}
    }
    if(unavailableToppings.length > 0){
        return {isValid: false, reason : unavailableToppings.length === 1 ? `Topping - "${unavailableToppings}" is not available` : `Toppings - "${unavailableToppings}" are not available`}
    }
    return {isValid: true, reason : ''}
}

function pizzaPriceCalculator(pizzaType, pizza, size, toppingsList){
   let result = validateOrder({pizzaType, pizza, size, toppingsList})

   if(!result.isValid){
      return result.reason
   }
    const toppingsTotal = toppingsList.reduce((acc,cur) =>{
        acc += toppings[cur][size]
        return acc
    },0)

    const total = pizzaMenu[pizzaType][pizza][size] + toppingsTotal
    return `Your order is: ${pizzaType} - ${pizza} pizza ${size} with topping(s) ${toppingsList} and your total is: ${total}`
}

console.log(pizzaPriceCalculator('v','Mexican green wave', 'large', ['extra chicken', 'black olives']));
console.log(pizzaPriceCalculator('veg','Mexican  wave', 'large', ['extra chicken', 'black olives']));
console.log(pizzaPriceCalculator('veg','Mexican green wave', 'huge', ['extra chicken', 'black olives']));
console.log(pizzaPriceCalculator('veg','Mexican green wave', 'large', ['potato', 'black olives']));
console.log(pizzaPriceCalculator('nonveg','double cheese chicken', 'large', ['extra chicken', 'black olives']));