function onRoll() {

    var images = [
        './images/dice1.png',
        './images/dice2.png',
        './images/dice3.png',
        './images/dice4.png',
        './images/dice5.png',
        './images/dice6.png',
    ]

    var imagesLength = images.length;
    var position1 = Math.floor(Math.random() * imagesLength);
    var mapping = images[position1];

    document.querySelector(".dice1").lastElementChild.setAttribute("src", mapping);


    var imagesLength = images.length;
    var position2 = Math.floor(Math.random() * imagesLength);
    var mapping = images[position2];

    document.querySelector(".dice2").lastElementChild.setAttribute("src", mapping);

    if (position1 > position2) {
        document.querySelector("h1").innerHTML = '🚩 Player 1 Wins';
    }
    else if (position2 > position1) {
        document.querySelector("h1").innerHTML = 'Player 2 Wins 🚩';
    }
    else if (position1 === position2) {
        document.querySelector("h1").innerHTML = 'DRAW';
    }
}
// if (window.performance && window.performance.navigation.type === 1) {
//     onRoll();
// }
// works when page reloads