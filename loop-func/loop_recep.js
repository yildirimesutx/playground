// let i = 0;
// let sum = 0;

// while (i < 6) {
//     sum += i
//     i++
// }
// console.log(sum);

// let i = 1;
// let sum = 4;
// while (i<5){
//     sum *= i;
//     i++;
// }
// console.log({sum}, {i});

// let i = +prompt("enter a number");
// let sum = 0;

// while(i<100){
//     sum = i*i;
//     break;
// }
// console.log("i'nin karesi :", sum)

// let i = 0;

// for (i; i<10;){
//     console.log(i);
//     i++
// }
// console.log({i})

// let m= "Clarusway"

// console.log(str.length);
// console.log(str[0]);

// console.log(str[str.length-5]);

// console.log(str[1]);

// for (i=3; i<m.length;i++){
//     console.log({i},m[i])
// }

// for (let i=1; i<100; i++){
//     if (i % 5 == 0 || i%4==0) 
//     console.log(i); 
// }

// while(true){
//     let x = prompt("bir sayı giriniz: \n q ile çıkış yapınız");
//     if(x =="q") {
//         console.log("çıkış yapıldı")
//         break
//     }else if(isNaN(x)){
//         continue;
//     }else{
//         console.log("x'in karesi :", x*x);
//     }
    
// }

// let x = Math.trunc(Math.random()*6)+1;

// console.log(x);
// let x,y;
// let count = 0;
// let cift = 0;

// while(true) {

//     x = Math.trunc(Math.random()*6)+1;
//     y = Math.trunc(Math.random()*6)+1;
   
//     if ( x == 6 && y == 6){
//         count++;
//         console.log(x,y, "Kazandınız")
//         break;
//     }else if ( x == y && x !=6){
//         cift++;
//         console.log(x,y, cift+".", "çift zar")
//         if (cift == 3){
//             console.log("kaybettiniz");
//             break;
//         }
//     }

//     console.log(x,y);
//     count++;
// }

// console.log(count);

// let x,y ;
// let count = 0;

// while(count<20){
//     x = Math.trunc(Math.random()*6)+1
//     y = Math.trunc(Math.random()*6)+1
//     console.log(x,y);
//     count++;
// }
 

// for (let i = 0 ; i<8; i++) {
//     console.log(i);
// }


// for (let i = 0 ; i<8; i++) {
//     if (i===5){
//         break;
//     }
//     console.log(i);
// }

// var sum = 0;
// for (var i = 3; i < 7; i++) {
// sum += i;
// if (i ===3 || sum > 10) {
// continue;
// }
// console.log(i);
// }

// What is the output of the following code?

var players = ["Messi ", "Ronaldo ", "Hazard ", "Neymar ", "Salah "];
var text = "";
var i;  
for (i = 2; i < players.length; i++) {
text += players[i];
}
document.write(text);
