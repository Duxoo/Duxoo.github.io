

$(document).ready(function() {
$('a[href^="#"]').click(function(){
var el = $(this).attr('href');
$('body').animate({
scrollTop: $(el).offset().top}, 2000);
return false;
});
});
function go(){
    alert("This article was not created yet");
}
















function show(){
    if(document.getElementById("navig").style.display=='none')
        {
   document.getElementById("navig").style.display='block';
             document.getElementById("navigation").style.backgroundImage="url(images/delete.png)";
            var obj=document.getElementById("navig");
            obj.style.height="100";
        }
    else{
    document.getElementById("navig").style.display='none';
       document.getElementById("navigation").style.backgroundImage="url(images/navig.png)";
    }

}