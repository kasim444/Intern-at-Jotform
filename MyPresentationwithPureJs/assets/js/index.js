//JF.login(success, error) method takes two optional arguments
//Both arguments should be function 
//First argument will be called after successful login
//Second argument will be called if authorization fails
var apiKey = JF.getAPIKey();
console.log(apiKey); //should log currently used API key
JF.initialize({ apiKey: "a07d6a84de54aeedf77f0888619f067d" }); 

let submissionIdArray = [];
JF.login(
    
    function success() {
        let submissionID;
        //Get After Select Form -> Submissions
        function getFormSubmis(event) {
            submissionID = event.target.value;
            //After select option this part execute. jotform submissonids push to submissionIdArray
            JF.getFormSubmissions(submissionID, {limit: 100}, function (response) {
                for (var i = 0; i < response.length; i++) {
                    submissionIdArray.push(response[i].id);
                }
            });
        //First of We need to make the #qr-code-reader visible in the getFormSubmis method.
        (function(){
            document.getElementById("qr-code-reader").style.display = "block";
        }());
        }

        //Get Forms
        JF.getForms(response => {
            let output = "<div class='mt-4'><img src='assets/img/ok.svg' alt='Check submission in JotForm' width='70px' class='img'/><h4>Your Forms</h4><p class='body-text'>Please select the form you would like to check :</p><span class='custom-dropdown'><select id='mySelect'>";
            response.forEach(function (form) {
                output += `<option value="${form.id}">${form.title}</option>`;
            });
            output += "</select></span</div>";
            document.getElementById("output").innerHTML = output;
            document.getElementById("mySelect").addEventListener("change", getFormSubmis);
        });

        scanStart((data) => {
            let resultId = data.substr(0,19);
            let name = data.substr(20,data.length-21);

            function decode_utf8(name) {
                return decodeURIComponent(escape(name));
            }
            if (submissionIdArray.some(function(subId){
                return subId === resultId ;
            })){
                document.getElementById("result").innerHTML = "<img src='assets/img/mascot_my_forms.png' alt='Enjoy with JotForm' width='100px'/><br>Have a good time, " + decode_utf8(name)+ " .";
            }else{
                document.getElementById("result").innerHTML = "<img src='assets/img/404_podo_qr.png' alt='Enjoy with JotForm' width='70px'/><br>The entry is invalid.<br>Please read the qr code that came to your e-mail address.";
            }
        });
    },
    function error() {
        window.alert("Could not authorize user");
    }
);

