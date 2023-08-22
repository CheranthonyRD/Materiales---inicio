const content = document.querySelector(".card-content");
const url = "https://picsum.photos/v2/list";

export async function loadImages(){
    try {
        const response = await fetch(url);
        const images = await response.json();
        paintImages(images);
    } catch (error) {
        console.log(error);
    }
}

function paintImages(images){
    images.forEach( image =>{
        const {author, download_url} = image;
        const card = document.createElement("img");        
        card.className = "card";
        card.src = download_url;
        content.appendChild(card);        
    });
}


