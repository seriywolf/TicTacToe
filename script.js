const gameboard = (() => {
  let arr = new Array(9);

  const render = () => {
    let elements = document.querySelectorAll(".boardElement");
    elements.forEach(function (element, currentIndex) {
      element.textContent = getArray()[currentIndex];
    });
  };

  const restart = () => {
    arr = new Array(9);
    render();
  };

  const getArray = () => {
    return arr;
  };

  const setArrayElement = (element, value) => {
    arr[element] = value;
    gameboard.render();
  };

  return {
    render,
    restart,
    getArray,
    setArrayElement,
  };
})();

const Player = (mark) => {
  const win = () => {
    console.log(`Player ${mark} win!`);
  };
  return { mark, win };
};

const xPlayer = Player("X");
const oPlayer = Player("0");

const randomPlayerSelect = () => {
  const players = ["X", "0"];
  const rand = Math.floor(Math.random() * 2);
  return players[rand];
};
let playerMark = randomPlayerSelect();

document.querySelector(".gameboard").addEventListener("click", (event) => {
  if (event.target.textContent === "") {
    game(event);
  }
});

const game = (event) => {
  if (playerMark === "X") {
    playerMark = "0";
  } else if (playerMark === "0") {
    playerMark = "X";
  }
  gameboard.setArrayElement([+event.target.classList[1]], playerMark);
  if (checkWinConditions()) {
    console.log("Player X win!!!")
  }
};

document.querySelector("#restart").addEventListener("click", () => {
  gameboard.restart();
});

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinConditions = () => {
  let newArr = [];
  gameboard.getArray().forEach(function (value, index) {
    if (value === "X") {
      newArr.push(index);
    }
  });
  return winConditions.some(array =>array.every(element => newArr.includes(element)));
};

