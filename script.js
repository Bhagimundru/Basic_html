
/*(function (n, t, a, e, co) {
    var i = "aptrinsic"; n[i] = n[i] || function () {
        (n[i].q = n[i].q || []).push(arguments)
    }, n[i].p = e; n[i].c = co;
    var r = t.createElement("script"); r.async = !0, r.src = a + "?a=" + e;
    var c = t.getElementsByTagName("script")[0]; c.parentNode.insertBefore(r, c)
})(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-JKAKZLOR3QV4-2");*/

/*(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-MTUFRPVCOSHV-2",{ "iframeModeEnabled": false });*/

window.onerror = function(message, source, lineno, colno, error) {
    // Construct an error object
    const errorObject = {
        message,
        source,
        lineno,
        colno,
        error: JSON.stringify(error)
    };

    // Send the error to the server
    console.log(errorObject);
    aptrinsic('track', 'consoleError', {"name":errorObject.message});
}

/*!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="Hfg1fBe2BwxFi7g8YLQDInaSJHa2yrxS";;analytics.SNIPPET_VERSION="4.15.3";
  analytics.load("Hfg1fBe2BwxFi7g8YLQDInaSJHa2yrxS");
  analytics.page();
  }}();*/
/* Full story Code*/
/*
window['_fs_host'] = 'fullstory.com';
window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
window['_fs_org'] = 'o-1KN9BE-na1';
window['_fs_namespace'] = 'FS';
(function(m,n,e,t,l,o,g,y){
    if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
    g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
    o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
    y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
    g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
    g.anonymize=function(){g.identify(!!0)};
    g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
    g.log = function(a,b){g("log",[a,b])};
    g.consent=function(a){g("consent",!arguments.length||a)};
    g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
    g.clearUserCookie=function(){};
    g.setVars=function(n, p){g('setVars',[n,p]);};
    g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
    if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
    g._v="1.3.0";
})(window,document,window['_fs_namespace'],'script','user');*/

function allowuser(form) {
    let a = document.getElementById("user").value;
    var b="";
    //if (a ==="bhagimundru@gmail.com" || a === "bhagi@gmail.com"||a==="demouser1@gmail.com") {
      if(a){
        b= a.substr(0,5);
        var id = b;
        //const emaillist= emailliststore.slice();
        const emaillist=getEmails().slice();
        //passing user and account objects:
        if(aptrinsic.init != undefined){
          if(!emaillist.includes(a)){
            emaillist.push(a);
            storeEmailinLocalStorage(a);
          }
          var EmailAppend= emaillist.toString()
        aptrinsic("identify",
            {
                //User Fields
                "id": b, // Required for logged in app users
                "email": a,
                "userrole": "Admin",
                "EmailAppend":EmailAppend
            
            },
            {
                //Account Fields
                "id": "GSID-1234", //Required
                "name": "International Business Machine"
            });
          }
            globalcontext();
           alert("Valid User");
            //window.location = "https://bhagimundru.github.io/Basic_html/Home.html";
            //window.location = "Home.html";
            //aptrinsic('track', 'User Login');
            form.action = "Home.html";
           alert("Logged in user id :"+b);
           //emailliststore = emaillist.slice();
           //return emailliststore

        
    }
    else {
        alert("Please enter a valid username");
    }
    return b;
}
function storeEmailinLocalStorage(Email) {
  let emails;
  if (localStorage.getItem('emails') === null) {
    emails = [];
  } else {
    emails = JSON.parse(localStorage.getItem('emails'));
  }
  emails.push(Email);
  localStorage.setItem('emails', JSON.stringify(emails));
}

function getEmails() {
  let emails;
  if (localStorage.getItem('emails') === null) {
      emails = [];
  } else {
      emails = JSON.parse(localStorage.getItem('emails'));
  }
  return emails;
}

function globalcontext(){
  if(document.getElementById("user").value=="demouser@gmail.com" ||document.getElementById("user").value== "bhagimundru@gmail.com"){
  aptrinsic('set', 'globalContext', {"version":12345, "plan":"Salesforce", "type":"Iframe"});}
}

//clearing cookies
function deleteAllCookies() {
  console.log("deleting cookies...");
  aptrinsic('reset');
  // counter = 0;
}

function ClickbuttonOne() {
    alert("hello from button one");
    document.getElementById("extrainfoOne").style.display = "block";
    document.getElementById("buttonOne").style.display = "none";
}

function SubcategoryDropdown() {
  aptrinsic('track', 'Dropdownselected', {"valuechoosen":document.getElementById("Issue category").value});
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
  //console.log(document.cookie)
  if(document.cookie.includes("apt.uid")){
    var cookiepresent = true;
    //console.log(cookiepresent)
  }
  else{
    var cookiepresent = false;
  }
    aptrinsic('track', 'Cookie', {"name":document.getElementById("name").value,"cookiepresent":cookiepresent});
}

function OnHomePage(){
    aptrinsic('track','HomePageTrack');
}

/*function PXPageTimer(maxSecondsTracked, trackPagesOverMax) {
    this.pageName = null;
    this.startTime = null;
    this.maxSecondsTracked = maxSecondsTracked || 3600 * 24;
    this.trackPagesOverMax = trackPagesOverMax !== false;
    this.startTimer = function (pageName) {
      try {
        if (this.pageName && this.pageName !== pageName) {
          this.endTimer();
        }
        this.pageName = pageName;
        this.startTime = Date.now();
      } catch (e) {
        console.log("Unable to start timer on ", this.pageName);
      }
    };
    this.endTimer = function (pageUnloaded) {
      try {
        if (this.pageName) {
          let endTime = Date.now();
          let secondsOnPage = (endTime - this.startTime) / 1000;
          if (secondsOnPage <= this.maxSecondsTracked || this.trackPagesOverMax) {
            window.aptrinsic('track', 'timeOnPage', {
              'pageName': this.pageName,
              'seconds': Math.min(secondsOnPage,this.maxSecondsTracked),
              'pageUnloaded': pageUnloaded
            });
          }
          this.pageName = undefined;
        }
      } catch (e) {
        console.log("Unable to log time on page", this.pageName);
      }
    };
  }
  
  (function InitializeTimer() {
    let maxSecondsTracked = 60 * 60; // Track time on page for up to one hour
    let trackPagesOverMax = false;  // Ignore any pages over one hour
    let featureTimer = new PXPageTimer(maxSecondsTracked, trackPagesOverMax);
    
    // Initial page
    featureTimer.startTimer(window.location.href);
  
    window.addEventListener('hashchange', () => {
      featureTimer.startTimer(window.location.href);
    });
    window.addEventListener('popstate', () => {
      featureTimer.startTimer(window.location.href);
    });
    window.addEventListener('beforeunload', () => {
      featureTimer.endTimer(true);
    });
    let realPushState = window.history.pushState;
    window.history.pushState = function (state, title, newLocation) {
      featureTimer.startTimer(newLocation.href);
      return realPushState.apply(window.history, arguments); // Call the original
    };
  })();*/

  function Paynow(){
    alert("Transaction of "+document.getElementById("amount").value+"is"+document.getElementById("PaymentStatus").value);
    document.getElementById("TextDisplay").textContent = "Transaction of "+document.getElementById("amount").value+"is"+document.getElementById("PaymentStatus").value;
    aptrinsic('track','Transaction',{'AmountTransferred':document.getElementById("amount").value,'Status':document.getElementById("PaymentStatus").value});
    /*analytics.track("Form submitted", {
      product: "book",
      title: "The Name of the Wind"
    });*/
  }

  function SetAttribute(){
    aptrinsic('set', 'user', {'firstName' : 'Elle', 'lastName' : 'Carol', 'role': 'Software Engineer'});
    aptrinsic('track', 'SetAttribute', {'FirstName' : 'Elle', 'LastName' : 'Carol', 'Role': 'Software Engineer'});
  }

  /*function CallVisitorIdentify(){
    aptrinsic("identify",
            {
                //User Fields
                "id": "visitor", // Required for logged in app users
            },
            {
                //Account Fields
                "id": "Visitors"
            });
  }*/

  function HomePageload(){
    //aptrinsic('set', 'user', {'URL' : 'Home'});
    (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-MTUFRPVCOSHV-2",{ "iframeModeEnabled": false });
  }
  function AboutPageload(){
    //aptrinsic('set', 'user', {'URL' : 'About'});
    
  }
  function QueryPageload(){
    //aptrinsic('set', 'user', {'URL' : 'Query'});
    (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-MTUFRPVCOSHV-2",{ "iframeModeEnabled": false }); 
  }
  function LoginPageLoad(){
    (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-MTUFRPVCOSHV-2",{ "iframeModeEnabled": false });
  }


// Drag

function handleDrag(event) {
  const draggedText = event.target.textContent;
  event.dataTransfer.setData('text/plain', draggedText);
  dragFunction(draggedText);
}

function dragFunction(draggedText) {
  console.log('Dragged Element Text:', draggedText);
  aptrinsic('track', 'Dragevent', {"draggedElement":draggedText});
}

//Drop

function allowDrop(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  const draggedText = event.dataTransfer.getData('text/plain');
  appendDraggedElement(draggedText);
}

function appendDraggedElement(text) {
  const draggedElement = document.createElement('div');
  draggedElement.className = 'draggable';
  draggedElement.textContent = text;
  const dropTarget = document.getElementById('dropTarget');
  dropTarget.appendChild(draggedElement);
  dropFunction(text);
}

function dropFunction(dropText) {
  console.log('Dropped Element Text:', dropText);
  storedropeventsinLocalStorage(dropText);
  aptrinsic('track', 'Dropevent', {"droppedElement":dropText});
}


function storedropeventsinLocalStorage(dropElement) {
  let dropElements;
  if (localStorage.getItem('dropElements') === null) {
    dropElements = [];
  } else {
    dropElements = JSON.parse(localStorage.getItem('dropElements'));
  }
  dropElements.push(dropElement);
  localStorage.setItem('dropElements', JSON.stringify(dropElements));
}

function sendCountOfElements(){
  let elementarray= getdropElements();
  let count= elementarray.length;
  console.log('Count of dropped Elements', count,"Element1",getCount(elementarray,"Element 1"),"Element2",getCount(elementarray,"Element 2"),"Element3",getCount(elementarray,"Element 3"));
  aptrinsic('track', 'onSave', {"count":count,"Element1":getCount(elementarray,"Element 1"),"Element2":getCount(elementarray,"Element 2"),"Element3":getCount(elementarray,"Element 3")});
}

function getdropElements() {
  let dropElements;
  if (localStorage.getItem('dropElements') === null) {
    dropElements = [];
  } else {
    dropElements = JSON.parse(localStorage.getItem('dropElements'));
  }
  return dropElements;
}

function getCount(array,element) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] == element) {
      count++;
    }
  }
  return count;
}

function passglobalcontextfortest2(){
  aptrinsic('remove', 'globalContext', ["name"])
  aptrinsic('set', 'globalContext', {"name":"DOWN1"});

}
function passglobalcontextfortest(){
  aptrinsic('remove', 'globalContext', ["name"])
  aptrinsic('set', 'globalContext', {"name":"DOWN2"});
}

document.addEventListener("DOMContentLoaded", function () {
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          navbarPlaceholder.innerHTML = xhr.responseText;
      }
  };

  xhr.open("GET", "navbar.html", true);
  xhr.send();
});
//test
document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scrollButton");
  const targetElement = document.getElementById("test");

  scrollButton.addEventListener("click", function () {
      // Scroll smoothly to the target element
      targetElement.scrollIntoView({ behavior: "smooth" });

      // Add #test to the URL without causing a page reload
      history.pushState({}, '', '#test');
  });
});
//test2

document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scrollButton2");
  const targetElement = document.getElementById("test2");

  scrollButton.addEventListener("click", function () {
      // Scroll smoothly to the target element
      targetElement.scrollIntoView({ behavior: "smooth" });

      // Add #test to the URL without causing a page reload
      history.pushState({}, '', '#test2');
  });
});
