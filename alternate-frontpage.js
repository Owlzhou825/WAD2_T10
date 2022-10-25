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
//End of citation

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
          //hard coded for now
          question_option:{
            Q1:
              [{key:"Q1_1", value:"Pepperoni"}, 
              {key:"Q1_2", value: "Beef"}, 
              {key:"Q1_3", value: "Ham"}, 
              {key:"Q1_4", value: "None"}],
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
        this.$refs["result"].scrollIntoView({ behavior: "smooth" });

        const url = 'proj.php';
        axios.get(url, {
          params: {
              foodType : 'pizza',
              pizMeat : this.Q1,
              pizHated: this.Q2,
              pizCheese: this.Q3,
              piz2meat: this.Q4
          }
        })
        .then(response =>  {
          this.result = response.data;
          console.log(response.data);
        })
        .catch(error => {
          console.log(error.message);
        });
      }

    }
})

const vm = app2.mount('#quiz');