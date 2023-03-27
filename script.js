
/*(function (n, t, a, e, co) {
    var i = "aptrinsic"; n[i] = n[i] || function () {
        (n[i].q = n[i].q || []).push(arguments)
    }, n[i].p = e; n[i].c = co;
    var r = t.createElement("script"); r.async = !0, r.src = a + "?a=" + e;
    var c = t.getElementsByTagName("script")[0]; c.parentNode.insertBefore(r, c)
})(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-JKAKZLOR3QV4-2");*/

(function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-YXISPE4Y7RWZ-2");
/*!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="Hfg1fBe2BwxFi7g8YLQDInaSJHa2yrxS";;analytics.SNIPPET_VERSION="4.15.3";
  analytics.load("Hfg1fBe2BwxFi7g8YLQDInaSJHa2yrxS");
  analytics.page();
  }}();*/


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