const app = document.getElementById('root');

const logo = document.createElement('img');

logo.src = 'assets/img/logo.png';

const container = document.createElement('div');

container.setAttribute('class','container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function(){
    var data = JSON.parse(request.response);

    if ( request.status >=200 && request.status<400 ){
        data.forEach(movie => {
            // Her film için bir kart olmalı
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            // Her kartta filmin ismi ve açıklaması olmalı
            const title = document.createElement('h1');
            const description = document.createElement('p');

            //Oluşturulan Title ve description taglerinin içerisine request ten gelen response un title ve desc. larını aktarmamız gerekli. Fakat description uzunlukları farklı olabileceğinden ötürü bunu bir standarta oturtmamız gerekli.
            
            //title
            title.textContent = movie.title;

            //description
            var oldDesc = movie.description;
            var newDesc = oldDesc.substring(1,300);
            description.textContent = newDesc;

            // Ve bu kartlar ise container sınıfımızın içerisinde olmalı.

            app.appendChild(card);
            card.appendChild(title);
            card.appendChild(description);
            container.appendChild(card);
        });
    }else{
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = 'Nayırr Nolamazzz';
        app.appendChild(errorMessage);
    }
};

request.send();