//Citing https://www.w3schools.com/HOWTO/howto_js_scroll_to_top.asp
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function restart() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.getElementById("submit").style.display = "block";
  document.getElementById("result").style.display = "none";
}
//End of citation

const app2 = Vue.createApp({
    data() {
        return {
          foodType: "wings",
          Q1:"",
          Q2:"",
          Q3:"",
          Q4:"",
          quiz_result:"",
          quiz_desc:"",
          quiz_image:"",
          question_option:{
            Q1:
              [{key:"Q1_1", value:"Sweet"}, 
              {key:"Q1_2", value: "Spicy"}, 
              {key:"Q1_3", value: "Sour"}, 
              {key:"Q1_4", value: "Plain"}],
            Q2:
              [{key:"Q2_1", value:"Mayo"}, 
              {key:"Q2_2", value: "Mustard"}, 
              {key:"Q2_3", value: "Chilli"}, 
              {key:"Q2_4", value: "Tomato"}],
            Q3:
              [{key:"Q3_1", value:"Pan Fry"}, 
              {key:"Q3_2", value: "Deep Fry"}, 
              {key:"Q3_3", value: "Oven Bake"}, 
              {key:"Q3_4", value: "Air Fry"}],
            Q4:
              [{key:"Q4_1", value:"Garlic"}, 
              {key:"Q4_2", value: "Onion"}, 
              {key:"Q4_3", value: "Sesame"}, 
              {key:"Q4_4", value: "Pepper"}]
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
                         winFlav: this.Q1,
                         winDip: this.Q2,
                         winCook: this.Q3,
                         winHated: this.Q4 
                      }
          // GET request
          axios.get(url, {
              params: data
          })
          .then(response => {
              console.log(response.data);
              this.quiz_result = response.data["Win_Result"];
              this.quiz_desc = response.data["Win_Description"];
              this.quiz_image = "../Images/wings/" + response.data["Win_Result"] + ".png";
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