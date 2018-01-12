

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
    if(document.getElementById("main1").style.display=='flex')
        {
    document.getElementById("main1").style.display='none';
    document.getElementById("row").style.display='none';
    document.getElementById("grey").style.display='none';
   document.getElementById("navig").style.display='block';
        }
    else{
    document.getElementById("main1").style.display='flex';
    document.getElementById("row").style.display='flex';
    document.getElementById("grey").style.display='block';
    document.getElementById("navig").style.display='none';
    }

}