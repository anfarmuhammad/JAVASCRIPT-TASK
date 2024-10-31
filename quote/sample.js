const btn=document.getElementById("btn");
const text=document.getElementById("para");
let quotes=[
    "Success is not final, failure is not fatal: It is the courage to continue that count – Winston Churchill",
    "Don't watch the clock; do what it does. Keep going. Sam Levenson", 
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh", 
    "Believe you can and you're halfway there. Theodore Roosevelt",
    "You miss 100% of the shots you don't take. – Wayne Gretzky", 
];
btn.addEventListener("click",function(){
    var out =quotes[Math.floor(Math.random()*quotes.length)]
    text.innerHTML =out;
});

