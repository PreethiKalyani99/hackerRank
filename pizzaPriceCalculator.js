let toppings = {
    'extra cheese' : {'small' : 20, 'medium': 40, 'large': 60},
    'tomato': {'small' : 20, 'medium': 40, 'large': 60},
    'black olives': {'small' : 20, 'medium': 40, 'large': 60},
    'onions': {'small' : 20, 'medium': 40, 'large': 60},
    'extra chicken': {'small' : 20, 'medium': 40, 'large': 60}
}
const pizzaData = [
    { pizzaType: 'nonveg', pizzaName: 'paneer chicken', smallPrice: 140, mediumPrice: 240, largePrice: 380 },
    { pizzaType: 'nonveg', pizzaName: 'chicken dominator', smallPrice: 150, mediumPrice: 250, largePrice: 390 },
    { pizzaType: 'nonveg', pizzaName: 'double cheese chicken', smallPrice: 200, mediumPrice: 350, largePrice: 490 },
    { pizzaType: 'veg', pizzaName: 'Mexican green wave', smallPrice: 120, mediumPrice: 220, largePrice: 350 },
    { pizzaType: 'veg', pizzaName: 'cheese N corn', smallPrice: 130, mediumPrice: 240, largePrice: 370 },
    { pizzaType: 'veg', pizzaName: 'tandoori paneer', smallPrice: 150, mediumPrice: 250, largePrice: 370 },
]

function pizzaMenu(pizzaData){
    let menuCard = {}
    for(const pizza of pizzaData){
        // console.log(pizza);
        const {pizzaType, pizzaName, smallPrice, mediumPrice, largePrice} = pizza
         if(!menuCard[pizzaType]){
            menuCard[pizzaType] = {}
        }
        if(!menuCard[pizzaType][pizzaName]){
            menuCard[pizzaType][pizzaName] = {}
        }

        menuCard[pizzaType][pizzaName]['small'] = smallPrice
        menuCard[pizzaType][pizzaName]['medium'] = mediumPrice
        menuCard[pizzaType][pizzaName]['large'] = largePrice
    }
    return menuCard
}

let pizzaMenuCard = pizzaMenu(pizzaData)

function validateOrder(pizzaType, pizza, size, toppingsList){

    const unavailableToppings = toppingsList.filter(topping => !toppings[topping])
    
    if(!pizzaMenuCard[pizzaType]){
        return {isValid: false, reason : `PizzaType "${pizzaType}" is not available`}
    }
    if(!pizzaMenuCard[pizzaType][pizza]){
        return {isValid: false, reason : `"${pizza}" pizza is not available`}
    }
    if(!pizzaMenuCard[pizzaType][pizza][size]){
        return {isValid: false, reason : `"${size}" size is not available`}
    }
    if(unavailableToppings.length > 0){
        return {isValid: false, reason : unavailableToppings.length === 1 ? `Topping - "${unavailableToppings}" is not available` : `Toppings - "${unavailableToppings}" are not available`}
    }
    return {isValid: true, reason : ''}
}

function pizzaPriceCalculator(pizzaOrder){
    let orderDetails = [];
    let total = 0
    for(const items of pizzaOrder){
        const {pizzaType, pizza, size, toppingsList} = items
        // console.log(pizzaType, pizza, size, toppingsList);
        let result = validateOrder(pizzaType, pizza, size, toppingsList)
        
        if(!result.isValid){
            return result.reason
        }
        let toppingsTotal = 0
        if(toppingsList){
            toppingsTotal += toppingsList.reduce((acc,cur) =>{
                acc += toppings[cur][size]
                return acc
            },0)
            
        }
        
        const pizzaPrice = pizzaMenuCard[pizzaType][pizza][size]
        total = pizzaPrice + toppingsTotal + total;
        orderDetails.push(`"${pizzaType}" - "${pizza}" pizza "${size}" with toppings "${toppingsList}"`);
    }
    return `Your order details are: ${orderDetails.join(' & ')} and the total is: ${total}`;
}

const pizzaOrder = [
    {pizzaType: 'veg', pizza: 'Mexican green wave', size: 'small', toppingsList: ['extra chicken', 'black olives']},
    {pizzaType: 'nonveg', pizza: 'paneer green chicken', size: 'large', toppingsList: ['extra chicken', 'black olives']}
]
console.log(pizzaPriceCalculator(pizzaOrder));