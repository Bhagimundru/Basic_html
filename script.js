
(function (n, t, a, e, co) {
    var i = "aptrinsic"; n[i] = n[i] || function () {
        (n[i].q = n[i].q || []).push(arguments)
    }, n[i].p = e; n[i].c = co;
    var r = t.createElement("script"); r.async = !0, r.src = a + "?a=" + e;
    var c = t.getElementsByTagName("script")[0]; c.parentNode.insertBefore(r, c)
})(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-JKAKZLOR3QV4-2");


function allowuser(form) {
    let a = document.getElementById("user").value;
    var b="";
    if (a ==="bhagimundru@gmail.com" || a === "demouser@gmail.com") {
        b= a.substr(8,5);
        var id = b;

        //passing user and account objects:
        aptrinsic("identify",
            {
                //User Fields
                "id": id, // Required for logged in app users
                "email": a,
                "userrole": "Admin"
            
            },
            {
                //Account Fields
                "id": "GSID-1234", //Required
                "name": "International Business Machine"
            });
           alert("Valid User");
            //window.location = "https://bhagimundru.github.io/Basic_html/Home.html";
            //window.location = "Home.html";
            //aptrinsic('track', 'User Login');
            form.action = "Home.html";
           alert("Logged in user id :"+b);
        
    }
    else {
        alert("Please enter a valid username");
    }
    return b;
}

function ClickbuttonOne() {
    alert("hello from button one");
    document.getElementById("extrainfoOne").style.display = "block";
    document.getElementById("buttonOne").style.display = "none";
}

function SubcategoryDropdown() {
    if (document.getElementById("Issue category").value == "JO") {
        document.getElementById("JO").style.display = "block";
        document.getElementById("Rules").style.display = "none";
        document.getElementById("Cockpit").style.display = "none";
    
    }
    if (document.getElementById("Issue category").value == "Rules") {
        document.getElementById("JO").style.display = "none";
        document.getElementById("Rules").style.display = "block";
        document.getElementById("Cockpit").style.display = "none";
    }
    if (document.getElementById("Issue category").value == "Cockpit") {
        document.getElementById("JO").style.display = "none";
        document.getElementById("Rules").style.display = "none";
        document.getElementById("Cockpit").style.display = "block";
    }

}
function SendData(){
    aptrinsic('track', 'QueryDetails', {"name":document.getElementById("name").value});
}

function OnHomePage(){
    aptrinsic('track','HomePageTrack')
}