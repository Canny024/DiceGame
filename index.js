// Random number generation

let ran1 = Math.floor(Math.random()*6)+1;
let ran2 = Math.floor(Math.random()*6)+1;

// Changing the heading

let head = document.getElementsByTagName('h1')
if(ran1>ran2){head[0].innerText="🚩Player 1 Wins!";}
else if(ran1===ran2){head[0].innerText="Draw!";}
else{head[0].innerText="Player 2 Wins!🚩";}

// Changing the images

let img1 = document.getElementsByClassName('img1');
let img2 = document.getElementsByClassName('img2');
img1[0].setAttribute("src",`dice${ran1}.png`);
img2[0].setAttribute("src",`dice${ran2}.png`);
