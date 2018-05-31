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
//функция показа карты
function show() {
var array = [];
var array2 = [];
var array3 = [];
//РАНДОМ БЕЗ ПОВТОРЕНИЙ НАЧАЛО
var divs = document.querySelectorAll(".rowwrapper2 div");
 for (var i = 0; i < 12; i++) {
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
for(var div of divs) {
    var ran = GetRan(array3.length);
    div.setAttribute("name",array3[ran]);
    arraytest[i] = array3[ran];
    array3.splice(ran,1);
    i++;
    
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
            ScoreCounter+=5;
            document.getElementById('score').innerHTML = "Ваш счет: " + ScoreCounter;
                if(WinCount == 12) {
        alert("Победа!");
    }
            return 0;
            
        }
        //если карты неодинаковые
        else {
           setTimeout(function() {
                ScoreCounter-=10;
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

  //таймер
  function startTimer() {
    s++;
    if(s == 60) {
        s=0;
        m++;
    }
    document.getElementById("time").innerHTML="Time: "+m+" min"+" : "+s+" sec";
    setTimeout(startTimer, 1000);
  }

//начать игру заного
  function reload() {
    location.reload();
  }