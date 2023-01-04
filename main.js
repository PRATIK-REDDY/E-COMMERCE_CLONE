var sidenav = document.getElementById('sidenav');
var menubar = document.getElementById('menubar');
sidenav.style.width = "0px";

// when you click on this function will work 
menubar.onclick = function(){
if(sidenav.style.width == "0px")
{
    sidenav.style.width = "250px"
}
else
{
    sidenav.style.width = "0px";
}
}