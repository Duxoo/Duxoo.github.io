function show(){
    if(document.getElementById("nav2").style.display=='none')
        {
    document.getElementById("nav2").style.display='block';
          document.getElementById("navigation").style.backgroundImage="url(css/images/delete.png)";
        }
    else{
         document.getElementById("nav2").style.display='none';
         document.getElementById("navigation").style.backgroundImage="url(css/images/navigation.png)";
    }

}
document.getElementById("Cli").onclick = function() {
 if(document.getElementById("C").style.display == 'none') {
 	document.getElementById("C").style.display = 'block';
 }
 else {
 	document.getElementById("C").style.display = 'none';
}
}

document.getElementById("NETli").onclick = function() {
 if(document.getElementById("NET").style.display == 'none') {
 	document.getElementById("NET").style.display = 'block';
 }
 else {
 	document.getElementById("NET").style.display = 'none';
}
}

document.getElementById("Javali").onclick = function() {
 if(document.getElementById("Java").style.display == 'none') {
 	document.getElementById("Java").style.display = 'block';
 }
 else {
 	document.getElementById("Java").style.display = 'none';
}
}

document.getElementById("Testli").onclick = function() {
 if(document.getElementById("Test").style.display == 'none') {
 	document.getElementById("Test").style.display = 'block';
 }
 else {
 	document.getElementById("Test").style.display = 'none';
}
}

document.getElementById("Webli").onclick = function() {
 if(document.getElementById("Web").style.display == 'none') {
 	document.getElementById("Web").style.display = 'block';
 }
 else {
 	document.getElementById("Web").style.display = 'none';
}
}