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
    { pizzaType: 'nonveg', pizzaName: 'tandoori paneer', smallPrice: 150, mediumPrice: 250, largePrice: 370 }
]

// PizzaType,PizzaName,SmallPrice,MediumPrice,largePrice
// nonveg,paneer chicken,140,240,380


function priceAverage(price1,price2){
    return Math.floor((price1 + price2) / 2)
}

function toppingMenu(toppingData){
    let menuCard = {}
    let toppingMenuArr = []
    const studentToppingPrice = priceAverage(smallToppingPrice, mediumToppingPrice)
    toppingMenuArr.push('toppingName, smallToppingPrice, mediumToppingPrice, largeToppingPrice, studentToppingPrice')

    for(const topping of toppingData){
        const {toppingName} = topping

        if(!menuCard[toppingName]){
            menuCard[toppingName] = {}
        }
        menuCard[toppingName]['small'] = smallToppingPrice
        menuCard[toppingName]['medium'] = mediumToppingPrice
        menuCard[toppingName]['large'] = largeToppingPrice
        menuCard[toppingName]['student'] = priceAverage(smallToppingPrice, mediumToppingPrice)
        toppingMenuArr.push(`${toppingName}, ${smallToppingPrice}, ${mediumToppingPrice}, ${largeToppingPrice}, ${studentToppingPrice}`)
    }
    // console.log(menuCard,"Tmenucard")
    return toppingMenuArr.join('\n')
}

function pizzaMenu(pizzaData){
    let menuCard = {}
    let pizzaMenuArr = []
    pizzaMenuArr.push('pizzaType, pizzaName, smallPrice, mediumPrice, largePrice')
    for(const pizza of pizzaData){
        const {pizzaType, pizzaName, smallPrice, mediumPrice, largePrice} = pizza
        const studentPrice = priceAverage(smallPrice, mediumPrice)
        
        if(!menuCard[pizzaType]){
            menuCard[pizzaType] = {}
        }
        if(!menuCard[pizzaType][pizzaName]){
            menuCard[pizzaType][pizzaName] = {}
        }
        
        menuCard[pizzaType][pizzaName]['small'] = smallPrice
        menuCard[pizzaType][pizzaName]['medium'] = mediumPrice
        menuCard[pizzaType][pizzaName]['large'] = largePrice
        menuCard[pizzaType][pizzaName]['student'] = studentPrice
        pizzaMenuArr.push(`${pizzaType}, ${pizzaName}, ${smallPrice}, ${mediumPrice}, ${largePrice}, ${studentPrice}`)
    }
    return pizzaMenuArr.join('\n')
}

let toppingMenuCard = toppingMenu(toppingData) 
let pizzaMenuCard = pizzaMenu(pizzaData)

const fs = require('fs')
const path = require('path')

const csvFileForPizzaMenu = path.join(__dirname, 'pizzaMenu.csv')
const csvFileForToppingMenu = path.join(__dirname, 'toppingMenu.csv')
const csvFileCreation = path.join(__dirname, 'check2.csv')

function isFileExists(fileName){
    return fs.existsSync(fileName)
}
function createAndWriteCSVFile(content, fileName){
    if(!isFileExists(fileName)){
        fs.appendFileSync(fileName, content)
        console.log('File created successfully');
    }
    else{
        console.log('File already exists')
    }
}
createAndWriteCSVFile(toppingMenuCard, csvFileForToppingMenu)
createAndWriteCSVFile(pizzaMenuCard, csvFileForPizzaMenu)
createAndWriteCSVFile(toppingMenuCard, csvFileForPizzaMenu)
createAndWriteCSVFile('File created successfully!', csvFileCreation)
// function validateOrder(pizzaType, pizza, size, toppingsList){

//     const unavailableToppings = toppingsList.filter(topping => !toppingMenuCard[topping])
    
//     if(!pizzaMenuCard[pizzaType]){
//         return {isValid: false, reason : `PizzaType "${pizzaType}" is not available`}
//     }
//     if(!pizzaMenuCard[pizzaType][pizza]){
//         return {isValid: false, reason : `"${pizza}" pizza is not available`}
//     }
//     if(!pizzaMenuCard[pizzaType][pizza][size]){
//         return {isValid: false, reason : `"${size}" size is not available`}
//     }
//     if(unavailableToppings.length > 0){
//         return {isValid: false, reason : unavailableToppings.length === 1 ? `Topping - "${unavailableToppings}" is not available` : `Toppings - "${unavailableToppings}" are not available`}
//     }
//     return {isValid: true, reason : ''}
// }

// function pizzaPriceCalculator(pizzaOrder){
//     let orderDetails = [];
//     let total = 0
//     for(const items of pizzaOrder){
//         const {pizzaType, pizza, size, toppingsList} = items
//         // console.log(pizzaType, pizza, size, toppingsList);
//         let result = validateOrder(pizzaType, pizza, size, toppingsList)
        
//         if(!result.isValid){
//             return result.reason
//         }
//         let toppingsTotal = 0
//         if(toppingsList){
//             toppingsTotal += toppingsList.reduce((acc,cur) =>{
//                 acc += toppingMenuCard[cur][size]
//                 return acc
//             },0)
            
//         }
        
//         const pizzaPrice = pizzaMenuCard[pizzaType][pizza][size]
//         total = pizzaPrice + toppingsTotal + total;
//         orderDetails.push(`"${pizzaType}" - "${pizza}" "${size}" pizza with toppings "${toppingsList}"`);
//     }
//     return `Your order details are: ${orderDetails.join(' & ')} and the total is: ${total}`;
// }

// const pizzaOrder = [
//     {pizzaType: 'veg', pizza: 'Mexican green wave', size: 'student', toppingsList: ['extra chicken', 'black olives']},
//     {pizzaType: 'nonveg', pizza: 'paneer chicken', size: 'large', toppingsList: ['extra chicken', 'black olives']}
// ]
// console.log(pizzaPriceCalculator(pizzaOrder));