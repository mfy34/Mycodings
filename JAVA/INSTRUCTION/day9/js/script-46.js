const txtScore1 = document.querySelector("#txtScore1")
const txtScore2 = document.querySelector("#txtScore2")
const txtScore3 = document.querySelector("#txtScore3")
const btnAverage = document.querySelector("#btnAverage")
const txtResult = document.querySelector("#txtResult")

btnAverage.addEventListener("click", () =>{
    

})


const isScoreValid = (score) => {
          return score || score === 0  && !isNaN(score<=100) && score>=0
}
const getAverage = (num1, num2, num3) => { 
          return (num1 + num2 + num3) / 3
 }
const convertScoreToLetter = (score) => { 
    let letter = "";
    if(score>=90 && score<=100){
        letter = "A";
    }
    else if(score>=80 && score<90){
        letter = "B";
    }
    else if(score>=70 && score<80){
        letter="C";
    }
    else if(score>=50 && score<70){
        letter="D";
    }
    else if(score>=0 && score<50){
        letter = "F";
    }
    return letter;
}


