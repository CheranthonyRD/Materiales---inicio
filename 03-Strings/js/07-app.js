// toUpperCase, toLowerCase y toString


const message = "this Is a Message frOm javaScript";

const uppercase = message.toUpperCase();

const lowercase = message.toLowerCase();

const number = 30;

const coleccion = [
    uppercase, 
    lowercase,
    number
];

coleccion.forEach(function(c){
    console.log(c);
});