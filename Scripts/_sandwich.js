function restart() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.getElementById("submit").style.display = "block";
  document.getElementById("result").style.display = "none";
}


const app2 = Vue.createApp({
    data() {
        return {
          foodType: "sandwich",
          Q1:"",
          Q2:"",
          Q3:"",
          Q4:"",
          quiz_result:"",
          quiz_desc:"",
          quiz_image:"",
          question_option:{
            Q1:
              [{key:"Q1_1", value:"Baguette"}, 
              {key:"Q1_2", value: "White Bread"}, 
              {key:"Q1_3", value: "Sourdough"}, 
              {key:"Q1_4", value: "Wholemeal"}],
            Q2:
              [{key:"Q2_1", value:"Chicken"}, 
              {key:"Q2_2", value: "Beef"}, 
              {key:"Q2_3", value: "Pork"}, 
              {key:"Q2_4", value: "Fish"}],
            Q3:
              [{key:"Q3_1", value:"Tomato"}, 
              {key:"Q3_2", value: "Lettuce"}, 
              {key:"Q3_3", value: "Cheese"}, 
              {key:"Q3_4", value: "Egg"}],
            Q4:
              [{key:"Q4_1", value:"Grilled"}, 
              {key:"Q4_2", value: "Pressed"}, 
              {key:"Q4_3", value: "Cold"}, 
              {key:"Q4_4", value: "Oven Bake"}]
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
          const url = '../Scripts/sql_retrieve.php';
          const data = { foodType: this.foodType,
                         sanBread: this.Q1,
                         sanMeat: this.Q2,
                         sanHated: this.Q3,
                         sanCook: this.Q4 
                      }
          // GET request
          axios.get(url, {
              params: data
          })
          .then(response => {
              this.quiz_result = response.data["San_Result"];
              this.quiz_desc = response.data["San_Description"];
              this.quiz_image = "../Images/sandwich/" + response.data["San_Result"] + ".png";

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

                const api_query ='q=' + response.data["San_Result"] + '&';
                const api_location = '&ll=@'+lat+','+long+',15.1z&';
                const api_key ='api_key=deef87ca117c8d3205a10106b24a953737416128acc78b7b14dd41d332b04180';
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