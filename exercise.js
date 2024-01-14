let point=[];
let flag=0;
let sumpoint=0,sec=0,minute=0;
final= setInterval(counter,1000);

function movePage() {
    let name = document.getElementById("text").value;
    let password = document.getElementById("text2").value;
    if (name != "" && password != "" && password.length > 7) {
        document.getElementById("move").style.display = "block";
    } else {
        document.getElementById("move").style.display = "none";
    }
}

function set() {
    if (flag == 1) {
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "block";
    } else if (flag == 2) {
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "block";
    } else if (flag== 3) {
        document.getElementById("question3").style.display = "none";
        document.getElementById("question4").style.display = "block";
    } else if (flag== 4) {
        document.getElementById("question4").style.display = "none";
        document.getElementById("question5").style.display = "block";
    }else if (flag== 5) {
        document.getElementById("question5").style.display = "none";
        document.getElementById("question6").style.display = "block";
    }else if (flag== 6) {
        document.getElementById("question6").style.display = "none";
        document.getElementById("question7").style.display = "block";
    }else if (flag== 7) {
        document.getElementById("question7").style.display = "none";
        document.getElementById("question8").style.display = "block";
    }else if (flag== 8) {
        document.getElementById("question8").style.display = "none";
        document.getElementById("question9").style.display = "block";
    }else if (flag== 9) {
        document.getElementById("question9").style.display = "none";
        document.getElementById("question10").style.display = "block";
    }else if (flag== 10) {
        document.getElementById("question10").style.display = "none";
        document.getElementById("point").style.display = "block";
    }else if(flag==11){
        for (var i = 1; i <= 10; i++) {
            document.getElementById("question"+[i]).style.display = 'none';
          }
          document.getElementById("point").style.display = "block";
    }
   
}

function ques1(){
   
    let answer11 = document.getElementById("q1").value;

    if (answer11 == "1948") {
        document.getElementById("question1").style.backgroundColor = "#04ff0c";
        document.getElementById("result1").innerHTML = "صحيح";
        point.push(10);
        flag=1;
    }
    else if(answer11=="")
    {
    document.getElementById("question1").style.backgroundColor = "#f2f2f2";
   
    
       }
     else {
        document.getElementById("question1").style.backgroundColor = "#ff0202";
        document.getElementById("result1").innerHTML = "خطأ";
        point.push(0);
        flag=1;
    }
    setInterval(set, 3000);
}

function ques2() {
    let answer2 = document.getElementById("answerr").value;
    flag=0;
    if (answer2 == "2") {
        document.getElementById("question2").style.backgroundColor = "#04ff0c";
        document.getElementById("result2").innerHTML = "صحيح";
        point.push(10);
        flag=2;
        
    } 
    else {
        document.getElementById("question2").style.backgroundColor = "#ff0202";
        document.getElementById("result2").innerHTML = "خطأ";
        point.push(0);
        flag=2;
    }
    setInterval(set, 3000);
    
}

function ques3(){
    let answer3 = document.getElementById("q3").value;
    flag=0;
    if (answer3 == "بلاد الرافدين") {
        document.getElementById("question3").style.backgroundColor = "#04ff0c";
        document.getElementById("result3").innerHTML = "صحيح";
        point.push(10);
        flag=3;
    } 
    else if(answer3=="")
    {
    document.getElementById("question3").style.backgroundColor = "#f2f2f2";
    
    }
    
    else {
        document.getElementById("question3").style.backgroundColor = "#ff0202";
        document.getElementById("result3").innerHTML = "خطأ";
        point.push(0);
        flag=3;
    }
    setInterval(set, 3000);
}

function ques4() {
    flag=0;
    let answer4 = document.getElementById("history").value;
    if (answer4 == "٠٢/٠٩/١٩٣٩") {
        document.getElementById("question4").style.backgroundColor = "#04ff0c";
        document.getElementById("result4").innerHTML = "صحيح";
        point.push(10);
        flag=4;
    }  
     else {
        document.getElementById("question4").style.backgroundColor = "#ff0202";
        document.getElementById("result4").innerHTML = "خطأ";
        point.push(0);
        flag=4;
    }
    setInterval(set, 3000);
}


function ques5() {
    flag=0;
    let selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer && selectedAnswer.value === "abobaker") {
        document.getElementById("question5").style.backgroundColor = "#04ff0c";
        document.getElementById("result5").innerHTML = "صحيح";
        point.push(10);
        flag=5;
    }
    else {
        document.getElementById("question5").style.backgroundColor = "#ff0202";
        document.getElementById("result5").innerHTML = "خطأ";
        point.push(0);
        flag=5;
    }
    setInterval(set, 3000);
}
function ques6(){
    let answer6 = document.getElementById("q6").value;

    if (answer6 == "المغرب") {
        document.getElementById("question6").style.backgroundColor = "#04ff0c";
        document.getElementById("result6").innerHTML = "صحيح";
        point.push(10);
        flag=6;
    } 
    else if(answer6=="")
    {
    document.getElementById("question6").style.backgroundColor = "#f2f2f2";
    }
    else {
        document.getElementById("question6").style.backgroundColor = "#ff0202";
        document.getElementById("result6").innerHTML = "خطأ";
        point.push(0);
        flag=6;
    }
    setInterval(set, 3000);
}
function ques7(){
    let answer7 = document.getElementById("q7").value;

    if (answer7=== "بعلبك") {
        document.getElementById("question7").style.backgroundColor = "#04ff0c";
        document.getElementById("result7").innerHTML = "صحيح";
        point.push(10);
        flag=7;
    }
    else if(answer7=="")
    {
    document.getElementById("question7").style.backgroundColor = "#f2f2f2";
    }
    else {
        document.getElementById("question7").style.backgroundColor = "#ff0202";
        document.getElementById("result7").innerHTML = "خطأ";
        point.push(0);
        flag=7;
    }
    setInterval(set, 3000);
}
function ques8() {
    flag=0;
    let selectedAnswer8 = document.querySelector('input[name="answer8"]:checked');

    if (selectedAnswer8 && selectedAnswer8.value === "demashq") {
        document.getElementById("question8").style.backgroundColor = "#04ff0c";
        document.getElementById("result8").innerHTML = "صحيح";
        point.push(10);
        flag=8;
    } 
     else {
        document.getElementById("question8").style.backgroundColor = "#ff0202";
        document.getElementById("result8").innerHTML = "خطأ";
        point.push(0);
        flag=8;
    }
    setInterval(set, 3000);
}
function ques9() {
    flag=0;
    let selectedAnswer9 = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer9 && selectedAnswer9.value === "fateh") {
        document.getElementById("question9").style.backgroundColor = "#04ff0c";
        document.getElementById("result9").innerHTML = "صحيح";
        point.push(10);
        flag=9;
    }  
    else {
        document.getElementById("question9").style.backgroundColor = "#ff0202";
        document.getElementById("result9").innerHTML = "خطأ";
        point.push(0);
        flag=9;
    }
    setInterval(set, 3000);
    
}
function ques10() {
    let answer10 = document.getElementById("answer10").value;
    flag=0;
    if (answer10 == "1") {
        document.getElementById("question10").style.backgroundColor = "#04ff0c";
        document.getElementById("result10").innerHTML = "صحيح";
        point.push(10);
       flag=10;
        
    }  
     else {
        document.getElementById("question10").style.backgroundColor = "#ff0202";
        document.getElementById("result10").innerHTML = "خطأ";
        point.push(0);
        flag=10
    }
    setInterval(set, 3000);
}
function pointt(){
    for(let i=0;i<point.length;i++)
    {
        sumpoint+=point[i];
    }
    if(sumpoint>50)
    {
     document.getElementById("h1").innerHTML="your point is"
    document.getElementById("demo").innerHTML=`${sumpoint} succsses`;
    document.getElementById("point").style.backgroundColor = "#04ff0c";
    document.getElementById("demo").style.fontSize="150px"
    document.getElementById("submet").style.display="none";
    clearInterval(final);
    }
    if(sumpoint<50)
    {
     document.getElementById("h1").innerHTML="your point is"
    document.getElementById("demo").innerHTML=`${sumpoint} faild`
    document.getElementById("point").style.backgroundColor = "#ff0202";
    document.getElementById("demo").style.fontSize="150px"
    document.getElementById("submet").style.display="none";
    clearInterval(final);
    }
    
}

function counter(){
        if(sec!=60)
        {
            sec++;
        }

        if(sec==60)
        {
            minute++;
            sec=0;
        }
        if(minute==5)
        {
            flag=11;
            clearInterval(final);
            setInterval(set,50);
        }
        document.getElementById("timer").innerHTML=`مدة الامتحان 5 دقائق<br>${minute}:${sec}`
        }
    

