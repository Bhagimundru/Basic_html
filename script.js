function allowuser() {
    var a= document.getElementById("user").value;
    if (a== "bhagimundru@gmail.com" || a=="demouser@gmail.com"){
        window.open("Home.html");
    }
    else{
        alert("Please enter a valid username");
    }
    }

document.getElementById("buttonOne").onclick=function(){
    ClickbuttonOne()
};
function ClickbuttonOne(){
    //alert("hello from button one");
    document.getElementById("extrainfoOne").style.display="block";
    document.getElementById("buttonOne").style.display="none";
}2

function SubcategoryDropdown(){
    if( document.getElementById("Issue category").value=="JO"){
    document.getElementById("JO").style.display="block";
    document.getElementById("Rules").style.display="none";
    document.getElementById("Cockpit").style.display="none";
    }
    if( document.getElementById("Issue category").value=="Rules"){
        document.getElementById("JO").style.display="none";
        document.getElementById("Rules").style.display="block";
        document.getElementById("Cockpit").style.display="none";
    }
    if( document.getElementById("Issue category").value=="Cockpit"){
    document.getElementById("JO").style.display="none";
    document.getElementById("Rules").style.display="none";
    document.getElementById("Cockpit").style.display="block";
    }
    
}

function ButtonDropdown() {
    document.getElementById("Dropdown").classList.toggle("show");
  }