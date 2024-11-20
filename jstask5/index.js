// Print in console 1, 2, 3, 4, 5 … 10, after each and every second. Means 1 after 1 sec, 2 after 2 sec, 3 after 3 sec and so on. How would you do it?
function a(){
    for( let i=0;i<=10;i++){
         setTimeout(function(){
            console.log(i);
        },i*1000);
    } 
}
a()