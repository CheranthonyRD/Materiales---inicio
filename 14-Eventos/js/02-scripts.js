const cards = document.querySelectorAll('.contenedor-cards .card');
const infos = document.querySelectorAll('.contenedor-cards .card .info');
const imgs = document.querySelectorAll('.contenedor-cards .card img');
cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.borderRadius = "8px";
    card.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
    card.style.cursor = "pointer";
    infos.forEach( info => {
        info.style.padding = "5px";
    } );

    imgs.forEach( img => {
        img.style.borderRadius = "8px 8px 0 0";
    } );
    
  })
});


cards.forEach( card => {
  card.addEventListener('mouseout', () => {
    card.style.borderRadius = "0px";
    card.style.boxShadow = "none";
    infos.forEach( info => {
        info.style.padding = "0px";
    } );

    imgs.forEach( img => {
        img.style.borderRadius = "0";
    } );
    
  })

  
});
