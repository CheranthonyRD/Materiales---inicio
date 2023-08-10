//seleccionar elementos

const form = document.querySelector("#formulario");
const tweets = document.querySelector("#lista-tweets");
const tweet_area = document.querySelector("#tweet");
const input = document.querySelector("input[type=submit]");
const contenido = document.querySelector("#contenido");
let lista_tweets = [];

//eventos
form.addEventListener("submit", send);
document.addEventListener("DOMContentLoaded", ()=>{
    lista_tweets = JSON.parse(localStorage.getItem("tweets")) || [];
    addToTweets();
});

tweets.addEventListener("click", deleteTweet);

// functiones

function verifyTweet(value){
    if(value === ''){
        return false;
    }
}

function send(e){
    e.preventDefault(); 
    const text = tweet_area.value;

    if(verifyTweet(text) === false){
        alert("El campo no puede estar vacio");
        return;
    }
    addTweet(text);
}

function alert(message){
    const span = document.createElement("p");
    const exist = document.querySelector(".error");

    if(exist){
        exist.remove();
    }

    span.textContent = message;
    span.classList.add("error");
    contenido.appendChild(span);
    setTimeout(()=>{
        span.remove();
    }, 2000);
}

function addTweet(tweet){
    tweet_area.value = "".trim();
    const listOfTweets = {
        id: Date.now(),
        tweet: tweet
    }
    lista_tweets = [...lista_tweets, listOfTweets];    
    addToTweets();
}

function addToTweets(){
    cleanTweets();
    if(lista_tweets.length > 0){        
        lista_tweets.forEach(tweet => {
            const li = document.createElement("li");
            li.textContent = tweet.tweet;
            li.setAttribute("data-id", tweet.id);
            tweets.appendChild(li);    
        });          
    }

    localStorage.setItem("tweets", JSON.stringify(lista_tweets));  
}

function cleanTweets(){
    while(tweets.firstChild){
        tweets.removeChild(tweets.firstChild);
    }
}

function deleteTweet(e){
    if(e.target.getAttribute("data-id")){
        const tweets = JSON.parse(localStorage.getItem("tweets"));
        const id = Number.parseInt(e.target.getAttribute("data-id"));
        const index = lista_tweets.findIndex(t => t.id === id );
        
    }
}