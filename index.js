const heading = document.querySelector(".heading");
const image1 = document.querySelector(".image_1");
const image2 = document.querySelector(".image_2");

const group1 = [
  "./one.png",
  "./two.png",
  "./three.png",
  "./four.png",
  "./five.png",
  "./six.png",
];

const group2 = [
  "./one.png",
  "./two.png",
  "./three.png",
  "./four.png",
  "./five.png",
  "./six.png",
];

const randomNumberDice1 = Math.floor(Math.random() * group1.length);
image1.setAttribute("src", `${group1[randomNumberDice1]}`);

const randomNumberDice2 = Math.floor(Math.random() * group2.length);
image2.setAttribute("src", `${group2[randomNumberDice2]}`);

function rollTheDice() {
  if (randomNumberDice1 > randomNumberDice2) {
    heading.textContent = "Player 1 wins!";
  } else if (randomNumberDice2 > randomNumberDice1) {
    heading.textContent = "Player 2 wins!";
  } else {
    heading.textContent = "It's a draw, refresh again to know the winner!";
  }
}

rollTheDice();
