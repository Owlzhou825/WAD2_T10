const { createApp } = Vue

createApp
({
    data() 
    {
        return {
            chosen_food_cat: "",
            food_href_and_img: {}
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