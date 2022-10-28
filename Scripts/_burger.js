function restart() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.getElementById("submit").style.display = "block";
  document.getElementById("result").style.display = "none";
}

const app2 = Vue.createApp({
    data() {
        return {
          foodType: "burger",
          Q1:"",
          Q2:"",
          Q3:"",
          Q4:"",
          quiz_result:"",
          quiz_desc:"",
          quiz_image:"",
          question_option:{
            Q1:
              [{key:"Q1_1", value:"Plain"}, 
              {key:"Q1_2", value: "Sesame"}, 
              {key:"Q1_3", value: "Charcoal"}, 
              {key:"Q1_4", value: "Sourdough"}],
            Q2:
              [{key:"Q2_1", value:"Beef"}, 
              {key:"Q2_2", value: "Chicken"}, 
              {key:"Q2_3", value: "Fish"}, 
              {key:"Q2_4", value: "Pork"}],
            Q3:
              [{key:"Q3_1", value:"Mushroom"}, 
              {key:"Q3_2", value: "Tomato"}, 
              {key:"Q3_3", value: "Lettuce"}, 
              {key:"Q3_4", value: "Onion"}],
            Q4:
              [{key:"Q4_1", value:"American"}, 
              {key:"Q4_2", value: "Cheddar"}, 
              {key:"Q4_3", value: "Brie"}, 
              {key:"Q4_4", value: "None"}]
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
          const url = '../Scripts/sql_retrieve.php';
          const data = { foodType: this.foodType,
                         burBun: this.Q1,
                         burPatty: this.Q2,
                         burHated: this.Q3,
                         burCheese: this.Q4 
                      }
          axios.get(url, {
              params: data
          })
          .then(response => {
              this.quiz_result = response.data["Bur_Result"];
              this.quiz_desc = response.data["Bur_Description"];
              this.quiz_image = "../Images/burger/" + response.data["Bur_Result"] + ".png";

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