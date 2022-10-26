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
          foodType: "steak",
          Q1:"",
          Q2:"",
          Q3:"",
          Q4:"",
          quiz_result:"",
          quiz_desc:"",
          quiz_image:"",
          question_option:{
            Q1:
              [{key:"Q1_1", value:"Rare"}, 
              {key:"Q1_2", value: "Medium Rare"}, 
              {key:"Q1_3", value: "Medium"}, 
              {key:"Q1_4", value: "Well Done"}],
            Q2:
              [{key:"Q2_1", value:"Cabernet"}, 
              {key:"Q2_2", value: "Syrah"}, 
              {key:"Q2_3", value: "Merlot"}, 
              {key:"Q2_4", value: "None"}],
            Q3:
              [{key:"Q3_1", value:"Peppercorn"}, 
              {key:"Q3_2", value: "Mushroom"}, 
              {key:"Q3_3", value: "Soy Butter"}, 
              {key:"Q3_4", value: "Red Wine"}],
            Q4:
              [{key:"Q4_1", value:"Fries"}, 
              {key:"Q4_2", value: "Vegetable"}, 
              {key:"Q4_3", value: "Potato"}, 
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
          const url = '../Scripts/sql_retrieve.php';
          const data = { foodType: this.foodType,
                         steRarity: this.Q1,
                         steWine: this.Q2,
                         steSauce: this.Q3,
                         steHated: this.Q4 
                      }
          // GET request
          axios.get(url, {
              params: data
          })
          .then(response => {
              console.log(response.data);
              this.quiz_result = response.data["Ste_Result"];
              this.quiz_desc = response.data["Ste_Description"];
              this.quiz_image = "../Images/steak/" + response.data["Ste_Result"] + ".png";
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