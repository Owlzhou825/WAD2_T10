const { createApp } = Vue

createApp
({
    data() 
    {
        return {
            chosen_food_cat: "",
            food_img: {}
        }
    },
    methods: 
    {
        initialise()
        {
            food_cat_arr = JSON.parse(sessionStorage.getItem("food_cat_arr"))
            for (idx in food_cat_arr) {
                foodType = food_cat_arr[idx]
                key = foodType.charAt(0).toUpperCase() + foodType.slice(1)
                this.food_img[key] = `../Images/${foodType}.png`
            }
        },
        redirectPage(foodType)
        {            
            global_food_type = foodType.toLowerCase();
            sessionStorage.setItem("food_cat", global_food_type);
            window.location.href = "universalFood.html";
        }
    },
}).mount('#categories')