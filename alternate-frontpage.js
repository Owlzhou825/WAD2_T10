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
          question_option_no_obj: 
          {
            Q1: ["Q1_1", "Q1_2", "Q1_3", "Q1_4"],
            Q2: ["Q2_1", "Q2_2", "Q2_3", "Q2_4"],
            Q3: ["Q3_1", "Q3_2", "Q3_3", "Q3_4"],
            Q4: ["Q4_1", "Q4_2", "Q4_3", "Q4_4"]
          },
          // hard-coded for now, ideally should link to php file or something
          question_options:
          {
            Q1: ["Pepperoni", "Beef", "Ham", "None"],
            Q2: [],
            Q3: [],
            Q4: []
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