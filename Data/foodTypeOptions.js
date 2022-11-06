options_for_food_type = {
    burger: {
      Q1:{
        options: ["Plain", "Sesame", "Charcoal", "Sourdough"], 
        question: "Choose your buns (of steel)"},
      Q2:{
        options: ["Beef", "Chicken", "Fish", "Pork"], 
        question: "Pick your patty!"},
      Q3:{
        options: ["Mushroom", "Tomato", "Lettuce", "Onion"], 
        question: "Your least favourite topping."},
      Q4:{
        options: ["American", "Cheddar", "Brie", "None"], 
        question: "How cheesy do you want this to be?"}
    },
    pasta: {
      Q1:{
        options: ["Spaghetti", "Fusilli", "Linguine", "Fettuccine"], 
        question: "What shape of pasta would you be devouring?"},
      Q2:{
        options: ["Beef", "Chicken", "Seafood", "None"], 
        question: "Name your meat!"},
      Q3:{
        options: ["White Cream", "Tomato", "Pesto", "None"], 
        question: "Choose the sauce to coat your pasta all over"},
      Q4:{
        options: ["Herbs", "Pepper", "Garlic", "None"], 
        question: "Sprinkle your favourite topping!"}
    },
    pizza: {
      Q1:{
        options: ["Pepperoni", "Beef", "Ham", "None"], 
        question: "Pick your favourite meat!"},
      Q2:{
        options: ["Pineapple", "Olive", "Bellpepper", "Chilli"], 
        question: "A topping you hate. Something you wouldn't even give to your worst enemy"},
      Q3:{
        options: ["Mozzarella", "Parmesan", "Cheddar", "Gouda"], 
        question: "Pick a cheese!"},
      Q4:{
        options: ["Chicken", "Bacon", "Pork", "None"], 
        question: "Another favourite type of meat? There's never too much meat"}
    },
    sandwich: {
      Q1: {
        options: ["Baguette", "White Bread", "Sourdough", "Wholemeal"], 
        question: "Choose your delicious, fluffy goodness"},
      Q2: {
        options: ["Chicken", "Beef", "Pork", "Fish"], 
        question: "Rank the meat and choose your favourite!"},
      Q3: {
        options: ["Tomato", "Lettuce", "Cheese", "Egg"], 
        question: "Pick it, bag it, and throw it away."},
      Q4: {
        options: ["Grilled", "Pressed", "Cold", "Oven Bake"], 
        question: "How do you want your sandwich to be prepared?"}
    },
    steak: {
      Q1: {
        options: ["Rare", "Medium Rare", "Medium", "Well Done"], 
        question: "What is your preferred rarity? (Mind you, there is a wrong answer to this)"},
      Q2: {
        options: ["Cabernet", "Syrah", "Merlot", "None"], 
        question: "What is your favourite wine pairing?"},
      Q3: {
        options: ["Peppercorn", "Mushroom", "Soy Butter", "Red Wine"], 
        question: "Sauce for your steak?"},
      Q4: {
        options: ["Fries", "Vegetable", "Potato", "None"], 
        question: "Any less preferred side dish?"}
    },
    wings: {
      Q1: {
        options: ["Sweet", "Spicy", "Sour", "Plain"], 
        question: "What flavour are you craving?"},
      Q2: {
        options: ["Mayo", "Mustard", "Chilli", "Tomato"], 
        question: "Your favourite dip? (skinny aside)"},
      Q3: {
        options: ["Pan Fry", "Deep Fry", "Oven Bake", "Air Fry"], 
        question: "Soft or crispy, oily or dry, name your method!"},
      Q4: {
        options: ["Garlic", "Onion", "Sesame", "Pepper"], 
        question: "Your absolutely no-no ingredient"}
    }
  }

sessionStorage.setItem("options_for_food_type", JSON.stringify(options_for_food_type))