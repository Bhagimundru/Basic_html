
(function (n, t, a, e, co) {
    var i = "aptrinsic"; n[i] = n[i] || function () {
        (n[i].q = n[i].q || []).push(arguments)
    }, n[i].p = e; n[i].c = co;
    var r = t.createElement("script"); r.async = !0, r.src = a + "?a=" + e;
    var c = t.getElementsByTagName("script")[0]; c.parentNode.insertBefore(r, c)
})(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-JKAKZLOR3QV4-2");



function allowlogin(user) {
    //var a = document.form.usermail.value;
    var a = document.getElementById("user").value;
    var b;
    const myaccount = {
        a1: "1P02N2O3HJFZDMR72BQ1ITZ36JWWW92DAMFR",
        a2: "1P02N2O3HJFZDMR72BZ8RJ62ZF1EJWQBV7G3",
        a3: "1P02N2O3HJFZDMR72B8P7ILYJVLZWGLQ5ENV",
        a4: "1P02N2O3HJFZDMR72BNYO3ZSAL5U6L7BQ421",
        a5: "1P02N2O3HJFZDMR72BAJN72MCCYJOU5JRR77"

    }
    var c;


    if (a != "") {
        if (a == "dileepnalla29@gmail.com" || a == "y09me034@gmail.com"|| a == "sid@dummy.com" || a == "dileepnalla6@gmail.com" || a == "dnalla@gainsight.com" || a == "demouser@gmail.com"||a == "gsuser@gmail.com"|| a == "nareshkumar564@gmail.com"|| a == "dilsfarm@gmail.com"|| a == "gsuser@test.com") {
            alert("valid User");
            b = a.substr(8, 5);
            var id = b;
            // var hash = CryptoJS.HmacSHA256(id, "9rmLVS939teSt3cILUccAPiqBBxSsQNmREc8CwpAj");

            //Segment Identify
            // analytics.identify(id+"segment", {
            //     name: "Segment User",
            //     email: "dileepnalla6+"+"segm"+"@gmail.com",
            //     plan: "premium",

            //   });

            /*<!-- Aptrinsic Tag-->*/


            if (a == 'dileepnalla29@gmail.com') {
                aptrinsic('identify', {
                        //User Fields
                        "id": "0057F000001wxPcQAIMandiantUsecase", // Required for logged in app users
                        "email": a,
                        "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c"

                        // "userHash": hash.toString()// optional transient for HMAC identification
                    },

                    {
                        //Account Fields
                        "id": myaccount.a4, //Required
                        "name": myaccount.a4,
                        // flat custom attributes
                    });
            } else if (a == 'dileepnalla6@gmail.com'||a== "gsuser@gmail.com") {
                aptrinsic('identify', {
                        //User Fields
                        "id": id, // Required for logged in app users
                        "email": a,
                        "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c"

                        // "userHash": hash.toString()// optional transient for HMAC identification
                    },

                    {
                        //Account Fields
                        "id": myaccount.a1, //Required
                        "name": myaccount.a1,
                        // flat custom attributes
                    });
            } else if (a == 'demouser@gmail.com') {
                aptrinsic('identify', {
                        //User Fields
                        "id": id, // Required for logged in app users
                        "email": a,
                        "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c"

                        // "userHash": hash.toString()// optional transient for HMAC identification
                    },

                    {
                        //Account Fields
                        "id": myaccount.a2, //Required
                        "name": myaccount.a2,
                        // flat custom attributes
                    });
            } 
            else if (a == 'dilsfarm@gmail.com') {
                aptrinsic('identify', {
                        //User Fields
                        "id": id, // Required for logged in app users
                        "email": a,
                        "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c"

                        // "userHash": hash.toString()// optional transient for HMAC identification
                    },

                    {
                        //Account Fields
                        "id": myaccount.a3, //Required
                        "name": myaccount.a3,
                        // flat custom attributes
                    });
            } 
            else if (a == 'sid@dummy.com') {
                aptrinsic('identify', {
                        //User Fields
                        "id": id, // Required for logged in app users
                        "email": a,
                        "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c"

                        // "userHash": hash.toString()// optional transient for HMAC identification
                    },

                    {
                        //Account Fields
                        "id": myaccount.a5, //Required
                        "name": myaccount.a5,
                        // flat custom attributes
                    });
            } 
            
            else {
                aptrinsic('identify', {
                        //User Fields
                        "id": id, // Required for logged in app users
                        "email": a,
                        "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c"

                        // "userHash": hash.toString()// optional transient for HMAC identification
                    },

                    {
                        //Account Fields
                        "id": myaccount.a1, //Required
                        "name": myaccount.a1,
                        // flat custom attributes
                    });
            }





            // Call this whenever information about your visitors becomes available
            // Please use Strings, Numbers, or Bools for value types.
            // pendo.initialize({
            //     visitor: {
            //         id: id ,  // Required if user is logged in
            //          email: a       // Recommended if using Pendo Feedback, or NPS Email
            //         // full_name:    // Recommended if using Pendo Feedback
            //         // role:         // Optional

            //         // You can add any additional visitor level key-values here,
            //         // as long as it's not one of the above reserved names.
            //     },

            //     account: {
            //         id:    myaccount.a1 // Highly recommended
            //         // name:         // Optional
            //         // is_paying:    // Recommended if using Pendo Feedback
            //         // monthly_value:// Recommended if using Pendo Feedback
            //         // planLevel:    // Optional
            //         // planPrice:    // Optional
            //         // creationDate: // Optional

            //         // You can add any additional account level key-values here,
            //         // as long as it's not one of the above reserved names.
            //     }
            // });


            // Full story
            // This is an example script - don't forget to change it!
            FS.identify(id, {
                displayName: a,
                email: a
                // TODO: Add your own custom user variables here, details at
                // https://help.fullstory.com/hc/en-us/articles/360020623294-FS-setUserVars-Recording-custom-user-data

            });

            alert("Logged in user id :" + b);

            window.location = "https://bhagimundru.github.io/Basic_html/Index.html";
            aptrinsic('track', 'User Login');

        } else
            alert("Invalid User,enter \"demouser@gmail.com\"");
    } else
        alert("enter \"demouser@gmail.com\"");


    return b;
}

function ClickbuttonOne() {
    //alert("hello from button one");
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