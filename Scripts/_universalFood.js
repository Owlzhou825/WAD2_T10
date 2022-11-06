function restart() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById("submit").style.display = "block";
    document.getElementById("result").style.display = "none";
  }
  
  const app2 = Vue.createApp({
      data() {
          return {
            foodType: "",
            Q1:"",
            Q2:"",
            Q3:"",
            Q4:"",
            quiz_result:"",
            quiz_desc:"",
            quiz_image:"",
            options_for_food_type:{
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
            },
            question_option:{
              Q1:
                [{key:"Q1_1", value:""}, 
                {key:"Q1_2", value: ""}, 
                {key:"Q1_3", value: ""}, 
                {key:"Q1_4", value: ""}],
              Q2:
                [{key:"Q2_1", value:""}, 
                {key:"Q2_2", value: ""}, 
                {key:"Q2_3", value: ""}, 
                {key:"Q2_4", value: ""}],
              Q3:
                [{key:"Q3_1", value:""}, 
                {key:"Q3_2", value: ""}, 
                {key:"Q3_3", value: ""}, 
                {key:"Q3_4", value: ""}],
              Q4:
                [{key:"Q4_1", value:""}, 
                {key:"Q4_2", value: ""}, 
                {key:"Q4_3", value: ""}, 
                {key:"Q4_4", value: ""}]
            }
          }
      },methods:{
        initialise(){
          this.foodType = sessionStorage.getItem("food_cat")
          for (question in this.question_option) {
            question_arr = this.question_option[question]
            for (idx in question_arr) {
              option = question_arr[idx]
              option.value = this.options_for_food_type[this.foodType][question][idx]
            }
          }
        },
        to_question2(){
          this.$refs["Q2"].scrollIntoView({ behavior: "smooth" });
        },
        to_question3(){
          this.$refs["Q3"].scrollIntoView({ behavior: "smooth" });
        },
        to_question4(){
          this.$refs["Q4"].scrollIntoView({ behavior: "smooth" });
        },
        result(){
          if(this.Q1 == "" || this.Q2 == "" || this.Q3 == "" || this.Q4 == ""){
            alert("Answer all the questions sweetie! I ain't got no premonition skill.");
          }else{
            //PHP
            const url = '../Scripts/alt_sql_retrieve.php';
            const data = { foodType: this.foodType,
                           Q1: this.Q1,
                           Q2: this.Q2,
                           Q3: this.Q3,
                           Q4: this.Q4 
                        }
            axios.get(url, {
                params: data
            })
            .then(response => {
                foodType_shorthand = this.foodType.charAt(0).toUpperCase() + this.foodType.slice(1,3);
                this.quiz_result = response.data[`${foodType_shorthand}_Result`];
                this.quiz_desc = response.data[`${foodType_shorthand}_Description`];
                this.quiz_image = `../Images/${this.foodType}/` + response.data[`${foodType_shorthand}_Result`] + ".png";
  
                /*API*/
                var lat = "";
                var long = "";
  
                //Citing https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_geolocation
                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(get_rec);
                }
                //End of citation
  
                function get_rec(position) {
                  document.getElementById("api_list").innerHTML = "";
                  lat = position.coords.latitude;
                  long = position.coords.longitude;
  
                  const api_query ='q=' + response.data["Bur_Result"] + '&';
                  const api_location = '&ll=@'+lat+','+long+',15.1z&';
                  const api_key ='api_key=8e365c1c857ef28683f96abda3b5b5e2f88c1b69cea158dcb1ca04f63b423ec9';
                  const api_url ='https://serpapi.com/search.json?engine=google_maps&'+api_query+api_location+'google_domain=google.com&hl=en&type=search&'+api_key;
                  axios
                    .get(api_url)
                    .then((resp) => {
                      var api_list = "";
                      var data = resp.data.local_results;
                      if(data.length >= 5){
                        for(var row = 0; row < 5; row++){
                          restaurantName = data[row].title;
                          rating = data[row].rating;
                          address = data[row].address;
                          open_state = data[row].open_state;
                          phone = data[row].phone;
                          website = data[row].website;
  
                          restaurantName = restaurantName === undefined ? "" : restaurantName;
                          rating = rating === undefined ? "0" : rating;
                          address = address === undefined ? "" : address;
                          open_state = open_state === undefined ? "" : open_state;
                          phone = phone === undefined ? "" : phone;
                          website = website === undefined? "#" : website;
    
                          api_list += `
                            <a href="`+website+`" class="list-group-item list-group-item-action" target="_blank">
                              <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">`+restaurantName+`</h5>
                              </div>
                              <div class="pt-2">
                                <small class="text-muted">(`+rating+`<i class="bi-star-fill"></i>)</small>
                                <small class="text-muted">`+open_state+` | </small>
                                <small class="text-muted">`+phone+`</small>
                              </div>
                              <div>
                                <small class="text-muted">`+address+`</small>
                              </div>
                            </a>
                          `;
                        }
                      }else{
                        for(var row = 0; row < data.length; row++){
                          restaurantName = data[row].title;
                          rating = data[row].rating;
                          address = data[row].address;
                          open_state = data[row].open_state;
                          phone = data[row].phone;
                          phone = phone === undefined ? "" : phone;
                          website = data[row].website;
  
                          restaurantName = restaurantName === undefined ? "" : restaurantName;
                          rating = rating === undefined ? "0" : rating;
                          address = address === undefined ? "" : address;
                          open_state = open_state === undefined ? "" : open_state;
                          phone = phone === undefined ? "" : phone;
                          website = website === undefined? "#" : website;
    
                          api_list += `
                            <a href="`+website+`" class="list-group-item list-group-item-action" target="_blank">
                              <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">`+restaurantName+`</h5>
                                <small class="text-muted">`+rating+`<i class="star-fill"></i></small>
                              </div>
                              <div class="pt-2">
                                <small class="text-muted">`+open_state+` | </small>
                                <small class="text-muted">`+phone+`</small>
                              </div>
                              <div>
                                <small class="text-muted">`+address+`</small>
                              </div>
                            </a>
                          `;
                        }
                      }
                      document.getElementById("api_list").innerHTML = api_list;
                    })
                    .catch((err) => {
                      console.log(err.message);
                    });
                }
            })
            .catch(error => {
                console.log('There was an error: ' + error.message)
            });
            document.getElementById("submit").style.display = "none";
            document.getElementById("result").style.display = "block";
            this.$refs["result"].scrollIntoView({ behavior: "smooth" });
          }
        }
      }
  })
  const vm = app2.mount('#quiz');