//массив с картами
var Cards = [
{
  cardName: "0C",
},
  {
    cardName: "0D",
  },
  {
    cardName: "0H",
  },
  {
    cardName: "0S",
  },
  {
    cardName: "0C",
  },
  {
    cardName: "2C",  
  },
  {
    cardName: "2D",
  },
  {
    cardName: "2H",
  },
             
               {
    cardName: "2S",
  },
               {
    cardName: "3C",
  },
               {
    cardName: "3D",
  },
               {
    cardName: "3H",
  },
               {
    cardName: "3S",
  },
               {
    cardName: "4C",
  },
               {
    cardName: "4D",
  },
               {
    cardName: "4H",
  },
               {
    cardName: "4S",
  },
               {
    cardName: "5C",
  },
               {
    cardName: "5D",
  },
  {
    cardName: "5H",  
  },
  {
    cardName: "5S",
  },
{
    cardName: "6C",
  },
{
    cardName: "6D",
  },
{
    cardName: "6H",
  },    
  {
    cardName: "6S",
  },
  {
    cardName: "7C",
  },
{
    cardName: "7D",
  },
{
    cardName: "7H",
  },    
  {
    cardName: "7S",
  },
  {
    cardName: "8C",
  },
{
    cardName: "8D",
  },
{
    cardName: "8H",
  },    
  {
    cardName: "8S",
  },
  {
    cardName: "9C",
  },
{
    cardName: "9D",
  },
{
    cardName: "9H",
  },    
  {
    cardName: "9S",
  },
  {
    cardName: "AC",
  },
{
    cardName: "AD",
  },
{
    cardName: "AH",
  },    
  {
    cardName: "AS",
  },
  {
    cardName: "JC",
  },
{
    cardName: "JD",
  },
{
    cardName: "JH",
  },    
  {
    cardName: "JS",
  },
  {
    cardName: "KC",
  },
{
    cardName: "KD",
  },
{
    cardName: "KH",
  },    
  {
    cardName: "KS",
  },
  {
    cardName: "QC",
  },
{
    cardName: "QD",
  },
{
    cardName: "QH",
  },    
  {
    cardName: "QS",
  },
];
var arraytest =[];
var id;//подсчет
var clickCounter = 0;//подсчет количества нажатий
var test;//временная переменная для хранения значения первой карты
var test2;//временная переменная для хранения значения второй карты
var div1,div2;//временные переменные для хранения блока с открытыми картами
var diff,diff2;//переменные для проверки, что не было нажатия на одну и ту же карту
var WinCount = 0;//для подсчета количества пар для победы
var ScoreCounter = 0;//для подсчета количества очков
var m=0;//минуты для таймера
var s=0;//секунды для таймера
var n1;
var stopTimer = false;
//функция расфасовки карт 
function show(n) {
  n1=n/2;
  document.getElementById("field").style.display = "block";
   var divs = document.querySelectorAll(".rowwrapper2 div");
      for(var i = 0 ;i < n; i++) {
    divs[i].style.backgroundImage = "url('http://img1.liveinternet.ru/images/attach/c/1//49/532/49532290_d00132r01.jpg')";
  }
  clickCounter = 0;
  WinCount = 0;
  ScoreCounter = 0;
  clearTimeout(timer);
  m=0;
  s=0;
   document.getElementById("time").innerHTML="Time: "+m+" min"+" : "+s+" sec";
      /*for(var i = 0 ;i < n; i++) {
    divs[i].style.display= "block";
  }*/
  switch(n) {
    case 12:
        for(var i = 0 ;i < n; i++) {
    divs[i].style.display= "block";
  }
          for(var i = 12;i < 36; i++) {
    divs[i].style.display= "none";
  }
    break;
    case 24:   
      for(var i = 0 ;i < n; i++) {
        divs[i].style.display= "block";
  }
      for(var i = 24 ;i < 36; i++) {
       divs[i].style.display= "none";
  }
  break;
  case 36:
      for(var i = 0 ;i < n; i++) {
        divs[i].style.display= "block";
  }
  break;
  }
var array = [];
var array2 = [];
var array3 = [];
//РАНДОМ БЕЗ ПОВТОРЕНИЙ НАЧАЛО
var divs = document.querySelectorAll(".rowwrapper2 div");
 for (var i = 0; i < n/2; i++) {
     var cardsCopy = Cards[GetRan(52)].cardName;
     if(array.indexOf(cardsCopy) == -1){ array.push(cardsCopy);
     array2 = array.slice(0);
     array3 = array.concat(array2);
                                       }
     else {
         i--;
         continue;
     }      
     }
    array2 = array.slice(0);
    var array3 = array.concat(array2);
    //РАНДОМ БЕЗ ПОВТОРЕНИЙ КОНЕЦ. РАНДОМНЫЕ ЗНАЧЕНИЯ ХРАНЯТСЯ В ARRAY3
    //ставим атрибут name каждому блоку рандомно и заносим их в массив,чтобы потом сверять их с id
    var i =0;
 for(var i = 0; i < n; i++) {
  var ran = GetRan(array3.length);
    divs[i].setAttribute("name",array3[ran]);
    arraytest[i] = array3[ran];
    array3.splice(ran,1);
 }
}

function GetRan(max) {
   return Math.floor(Math.random() * max);
}

//функция для показа карты и проверки на то, что они одинаковые
function show1(id)
{
        var div = document.getElementById(id);
    //1 клик
    if(clickCounter == 0) {
    div.style.backgroundImage="url("+'css/images/cards/'+arraytest[id]+'.png'+')';
        div1=div;
        diff=id;
        for(var i = 0; i< 52 ; i++) {
            if(Cards[i].cardName == arraytest[id])  {
                test = Cards[i].cardName;
                break;
            }
        }
    }
    //2 клик
    if(clickCounter == 1) {
    div.style.backgroundImage="url("+'css/images/cards/'+arraytest[id]+'.png'+')';
        div2=div;
        diff2=id;
        if(diff == diff2) {
            return 0;
        }
        for(var i = 0; i< 52 ; i++) {
            if(Cards[i].cardName == arraytest[id]) {
                test2 = Cards[i].cardName;
                break;
            }
        }
        //если карты одинаковые
        if(test == test2) {
            clickCounter = 0;
            WinCount++;
            ScoreCounter+=10;
            document.getElementById('score').innerHTML = "Ваш счет: " + ScoreCounter;
                if(WinCount == n1) {
        alert("Победа! Вы набрали " + ScoreCounter + " очков " + "за " + m + " минут и " + s + " секунд");
        stopTimer = true;
        return 1;
    }
            return 0;
            
        }
        //если карты неодинаковые
        else {
           setTimeout(function() {
                ScoreCounter-=5;
                document.getElementById('score').innerHTML = "Ваш счет: " + ScoreCounter;
            },1500);
            //меняем рубашку через 1,5 секунды
            setTimeout(function() {
                div1.style.backgroundImage = "url('http://img1.liveinternet.ru/images/attach/c/1//49/532/49532290_d00132r01.jpg')";
            },1500);
            setTimeout(function() {
                div2.style.backgroundImage = "url('http://img1.liveinternet.ru/images/attach/c/1//49/532/49532290_d00132r01.jpg')";
            },1500);
             setTimeout(function() {
                    clickCounter = 0;
            },1500);
                         setTimeout(function() {
                    return 0;
            },1500);
        }
    }
            clickCounter++;

}
var timer;
  //таймер
  function startTimer() {
    if(stopTimer) return;
    s++;
    if(s == 60) {
        s=0;
        m++;
    }
    document.getElementById("time").innerHTML="Time: "+m+" min"+" : "+s+" sec";
    timer=setTimeout(startTimer, 1000);
  }

//начать игру заного
  function reload() {
    location.reload();
  }