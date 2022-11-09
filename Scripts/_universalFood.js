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
            question_list: [],
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
  
                  const api_query ='q=' + response.data[`${foodType_shorthand}_Result`] + '&';
                  const api_location = '&ll=@'+lat+','+long+',15.1z&';
                  const api_key ='api_key=3b04a243f1aa5d7e4234bd32faefda76b61fe63ec37d12c929c62662ec4842c5';
                  const api_url ='https://serpapi.com/search.json?engine=google_maps&'+api_query+api_location+'google_domain=google.com&hl=en&type=search&'+api_key;

                  var api_list = "<div><p style='text-align:center; font-weight:bold'>Finding the restaurant now. Hold on...</p></div>";
                  document.getElementById("api_list").innerHTML = api_list;
                  axios
                    .get(api_url)
                    .then((resp) => {
                      api_list = "";
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
                          website = website === undefined? "noWebsite.html" : website;
    
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
                          website = website === undefined? "noWebsite.html" : website;
    
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
      },
      computed: {
        initialise(){
            this.foodType = sessionStorage.getItem("food_cat")
            let options_for_food_type = JSON.parse(sessionStorage.getItem("options_for_food_type"))[this.foodType]
            for (question_no in this.question_option) {
              question_arr = this.question_option[question_no]
              question_text = options_for_food_type[question_no]["question"]
              this.question_list.push(question_text)
              for (idx in question_arr) {
                option = question_arr[idx]
                option_arr = options_for_food_type[question_no]["options"]
                option.value = option_arr[idx]
              }
          }
        },
      }
  })
  const vm = app2.mount('#quiz');