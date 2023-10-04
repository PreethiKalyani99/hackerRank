const toppingData = [
    {toppingName: 'extra cheese'},
    {toppingName: 'black olives'},
    {toppingName: 'extra chicken'},
    {toppingName: 'onions'},
]

let smallToppingPrice = 20, mediumToppingPrice = 40, largeToppingPrice = 60

const pizzaData = [
    { pizzaType: 'nonveg', pizzaName: 'paneer chicken',smallPrice: 140, mediumPrice: 240, largePrice: 380 },
    { pizzaType: 'nonveg', pizzaName: 'chicken dominator',smallPrice: 150, mediumPrice: 250, largePrice: 390 },
    { pizzaType: 'nonveg', pizzaName: 'double cheese chicken', smallPrice: 200, mediumPrice: 350, largePrice: 490 },
    { pizzaType: 'veg', pizzaName: 'Mexican green wave',smallPrice: 120, mediumPrice: 220, largePrice: 350 },
    { pizzaType: 'veg', pizzaName: 'cheese N corn',smallPrice: 130, mediumPrice: 240, largePrice: 370 },
    { pizzaType: 'veg', pizzaName: 'tandoori paneer', smallPrice: 150, mediumPrice: 250, largePrice: 370 },
]


function priceAverage(price1,price2){
    return Math.floor((price1 + price2) / 2)
}

function toppingMenu(toppingData){
    let menuCard = {}

    for(const topping of toppingData){
        const {toppingName} = topping

        if(!menuCard[toppingName]){
            menuCard[toppingName] = {}
        }
        menuCard[toppingName]['small'] = smallToppingPrice
        menuCard[toppingName]['medium'] = mediumToppingPrice
        menuCard[toppingName]['large'] = largeToppingPrice
        menuCard[toppingName]['student'] = priceAverage(smallToppingPrice, mediumToppingPrice)
    }
    return menuCard
}

function pizzaMenu(pizzaData){
    let menuCard = {}
    for(const pizza of pizzaData){
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
        menuCard[pizzaType][pizzaName]['student'] = priceAverage(smallPrice, mediumPrice)
    }
    return menuCard
}

let toppingMenuCard = toppingMenu(toppingData)
let pizzaMenuCard = pizzaMenu(pizzaData)

function validateOrder(pizzaType, pizza, size, toppingsList){

    const unavailableToppings = toppingsList.filter(topping => !toppingMenuCard[topping])
    
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
                acc += toppingMenuCard[cur][size]
                return acc
            },0)
            
        }
        
        const pizzaPrice = pizzaMenuCard[pizzaType][pizza][size]
        total = pizzaPrice + toppingsTotal + total;
        orderDetails.push(`"${pizzaType}" - "${pizza}" "${size}" pizza with toppings "${toppingsList}"`);
    }
    return `Your order details are: ${orderDetails.join(' & ')} and the total is: ${total}`;
}

const pizzaOrder = [
    {pizzaType: 'veg', pizza: 'Mexican green wave', size: 'student', toppingsList: ['extra chicken', 'black olives']},
    {pizzaType: 'nonveg', pizza: 'paneer chicken', size: 'large', toppingsList: ['extra chicken', 'black olives']}
]
console.log(pizzaPriceCalculator(pizzaOrder));