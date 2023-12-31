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

module.exports = {pizzaMenu, toppings}