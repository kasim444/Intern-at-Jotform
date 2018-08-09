<?php
 

 ?>

 <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <title>First Web Api App with JOTFORM API</title>
 </head>
 <body>
    <h1>First Web Api App with JOTFORM API</h1>

 <script src="https://js.jotform.com/JotForm.js"></script>
 <script>

    //JF.login(success, error) method takes two optional arguments
    //Both arguments should be function 
    //First argument will be called after successful login
    //Second argument will be called if authorization fails
    JF.login(

        function success(){
            JF.getForms(function(response){
                for(var i=0; i<response.length; i++){
                    document.write( "<li> " + response[i].title);
                }
            });
        },

        function error(){
            window.alert("Could not authorize user");
        }
    );
    var apiKey = JF.getAPIKey();
    console.log(apiKey); //should log currently used API key
    JF.initialize( {apiKey: "b10d1c01395d3b86c8f39bd95666bfa8"} ); 
 </script> 
 </body>
 </html>