const { createApp } = Vue

createApp
({
    data() 
    {
        return {
            chosen_food_cat: "",
            food_cat_arr: [
                "burger",
                "pasta",
                "pizza",
                "sandwich",
                "steak",
                "wings",
            ],
            food_href_and_img: {}
        }
    },
    methods: 
    {
        initialise()
        {
            for (foodType of this.food_cat_arr) {
                key = foodType.charAt(0).toUpperCase() + foodType.slice(1)
                this.food_href_and_img[key] = [`${foodType}.html`, `../Images/${foodType}.png`]
            }
        },
        redirectPage(foodType)
        {            
            global_food_type = foodType.toLowerCase();
            sessionStorage.setItem("food_cat", global_food_type);
            window.location.href = this.food_href_and_img[foodType][0];
        }
    },
}).mount('#categories')