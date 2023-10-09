const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');

button1.addEventListener('click', handleOption1);
button2.addEventListener('click', handleOption2);
button3.addEventListener('click', handleOption3);


function handleOption1() {
    const startingRoom = dovument.querySelector('#starting-room');
startingRoom.testContent = "You choose to stay indoors. Excellent. You have enough food for 3 or 4 days, depending on consumption rate, obviously."
}
function handleOption2() {
   const startingRoom = document.querySelector('#starting-room');
    startingRoom.textContent = "You choose to go outdoors. Gingerly opening your backdoor to the rear garden, you peer left to right checking the coast is clear. You tip toe to the end of the garden - when suddenly- a loud crash of splintering wood to your right, the neighbour has burst through their garden fence and is immediately upon you! They have become a zombie! All this happens far too fast, you are bitten, taken down and your neighbour and their zombified children join in the feast upon your flesh. Better luck next time, sucker."
}
function handleOption3() {
    const startingRoom = document.querySelector('#starting-room');
    startingRoom.textContent = "You choose to spend an hour or so cooking up some delicious and comforting breakfast: eggs, sausages, bacon, black pudding, beans, toast. A greasy fry up should help prepare you for any challenges ahead. Considering this is the healthiest kind of food in existence, and the calorie and protein content is so high and of such high quality, choosing this option has given you the strength of 3 men, and your chances of survival are much higher."
}
