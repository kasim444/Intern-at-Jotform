document.querySelector("#button1").addEventListener("click", getTextFile);
document.querySelector("#button2").addEventListener("click",getJson);
document.querySelector("#button3").addEventListener("click", getJsonApi);

//getJsonApi fetch
function getJsonApi(){
    fetch("https://api.github.com/users")
    .then( (res) => res.json())
    .then ( (data) => {
        let output = "<h3>Github Kullanıcıları</h3>";
        data.forEach(function(user){
            output += `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.login}</li>
                </ul>
            `;
        });
        document.getElementById("output").innerHTML += output;
    }).catch( (err) => console.log(err) );
}


//getTextFile fetch
function getTextFile(){
    fetch("textfile.txt").then(function(response){
        return response.text();
    }).then(function(data){
        document.querySelector("#output").innerHTML += data;
    }).catch(function(err){console.log(err);});
}
//getJson fetch
function getJson() {

    fetch("article.json").then(function (response) {
        return response.json();

    }).then(function (articles) {

        let output = "<ul>";
        articles.forEach(function(article){
            output += `<li>Başlık ${article.title} - İçerik ${article.body}</li>`;
        })
        output += "</li>";
        document.getElementById("output").innerHTML += output;
        
    }).catch(function (err) { console.log(err); });
}