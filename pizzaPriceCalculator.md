Pizza price calculator:

Summary:
    - INPUT : PizzaType, PizzaName, Size and ToppingList will be given
    - We have to calculate pizza price

Logic:
    -First we have to validate all the inputs. If any of the input is not match the menu, we should return 'item is not available'
    -If all the inputs matches the menu, we should calculate the total price of the pizza.

    SAMPLE INPUT 1: 
    [
        {pizzaType: 'veg', pizza: 'Mexican green wave', size: 'small', toppingsList: ['extra chicken', 'black olives']},
        {pizzaType: 'nonveg', pizza: 'paneer chicken', size: 'large', toppingsList: ['extra chicken', 'black olives']}
    ]

    OUTPUT : 
      Your order details are: "veg" - "Mexican green wave" pizza "small" with toppings "extra chicken,black olives" & "nonveg" - "paneer chicken" pizza "large" with toppings "extra chicken,black olives" and the total is: 660

    SAMPLE INPUT 2:
    [
        {pizzaType: 'nonveg', pizza: 'paneer green chicken', size: 'large', toppingsList: ['extra chicken', 'black olives']}
    ]

    OUTPUT: 
        "paneer green chicken" pizza is not available