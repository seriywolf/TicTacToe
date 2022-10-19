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

const Player = (sign) => {
  this.sign = sign;
  let array = [];
  getArray = () => {
    return array;
  };
  setArray = (value) => {
    array.push(value);
  };
  return {
    getArray,
    sign,
    setArray,
  };
};

const playerX = Player("X");
const player0 = Player("0");

const GetPlayer = (() => {
  const randomPlayerSelect = () => {
    const players = [playerX, player0];
    const rand = Math.floor(Math.random() * 2);
    return players[rand];
  };
  let player;
  const playerSelect = () => {
    if (player === undefined) {
      player = randomPlayerSelect();
    } else if (player === playerX) {
      player = player0;
    } else if (player === player0) {
      player = playerX;
    }
    return player;
  };
  return {
    playerSelect,
  };
})();

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

const game = (() => {
  document.querySelector(".gameboard").addEventListener("click", (event) => {
    if (event.target.textContent === "") {
      let player = GetPlayer.playerSelect();
      gameboard.setArrayElement([+event.target.classList[1]], player.sign);
      player.setArray(+event.target.classList[1]);
      if (checkWinConditions(player)) {
        gameOver(player);
      }
    }
  });
  const checkWinConditions = (player) => {
    console.log(player.sign + " " + player.getArray());
    return winConditions.some((array) =>
      array.every((element) => player.getArray().includes(element))
    );
  };
  const gameOver = (player) =>{
    document.querySelector(".message").textContent = `Player ${player.sign} win!!!` 
  }  ;
})();

document.querySelector("#restart").addEventListener("click", () => {
  gameboard.restart();
});
