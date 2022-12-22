
  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-JKAKZLOR3QV4-2");



function allowuser(user) {
    let a= document.getElementById("user").value;
    if (a=="bhagimundru@gmail.com" || a=="demouser@gmail.com"){
        alert("Valid User");
        window.location = "https://bhagimundru.github.io/Basic_html/Home.html";
    }
    else{
        alert("Please enter a valid username");
    }
    }

// document.getElementById("buttonOne").onclick=function(){
//     ClickbuttonOne()
// };
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