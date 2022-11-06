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
        redirectPage(foodType)
        {            
            global_food_type = foodType.toLowerCase();
            sessionStorage.setItem("food_cat", global_food_type);
            window.location.href = "universalFood.html";
        }
    },
    computed:
    {
        initialise()
        {
            options_for_food_type = JSON.parse(sessionStorage.getItem("options_for_food_type"))
            for (foodType in options_for_food_type) {
                key = foodType.charAt(0).toUpperCase() + foodType.slice(1)
                this.food_img[key] = `../Images/${foodType}.png`
            }
        },
    }
}).mount('#categories')