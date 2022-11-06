options_for_food_type = {
    burger: {
      Q1:["Plain", "Sesame", "Charcoal", "Sourdough"],
      Q2:["Beef", "Chicken", "Fish", "Pork"],
      Q3:["Mushroom", "Tomato", "Lettuce", "Onion"],
      Q4:["American", "Cheddar", "Brie", "None"]
    },
    pasta: {
      Q1:["Spaghetti", "Fusilli", "Linguine", "Fettuccine"],
      Q2:["Beef", "Chicken", "Seafood", "None"],
      Q3:["White Cream", "Tomato", "Pesto", "None"],
      Q4:["Herbs", "Pepper", "Garlic", "None"]
    },
    pizza: {
      Q1:["Pepperoni", "Beef", "Ham", "None"],
      Q2:["Pineapple", "Olive", "Bellpepper", "Chilli"],
      Q3:["Mozzarella", "Parmesan", "Cheddar", "Gouda"],
      Q4:["Chicken", "Bacon", "Pork", "None"]
    },
    sandwich: {
      Q1: ["Baguette", "White Bread", "Sourdough", "Wholemeal"],
      Q2: ["Chicken", "Beef", "Pork", "Fish"],
      Q3: ["Tomato", "Lettuce", "Cheese", "Egg"],
      Q4: ["Grilled", "Pressed", "Cold", "Oven Bake"]
    },
    steak: {
      Q1: ["Rare", "Medium Rare", "Medium", "Well Done"],
      Q2: ["Cabernet", "Syrah", "Merlot", "None"],
      Q3: ["Peppercorn", "Mushroom", "Soy Butter", "Red Wine"],
      Q4: ["Fries", "Vegetable", "Potato", "None"]
    },
    wings: {
      Q1: ["Sweet", "Spicy", "Sour", "Plain"],
      Q2: ["Mayo", "Mustard", "Chilli", "Tomato"],
      Q3: ["Pan Fry", "Deep Fry", "Oven Bake", "Air Fry"],
      Q4: ["Garlic", "Onion", "Sesame", "Pepper"]
    }
  }

sessionStorage.setItem("options_for_food_type", JSON.stringify(options_for_food_type))