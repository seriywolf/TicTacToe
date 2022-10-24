const message = document.querySelector(".message");

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
    game.setIsGameOver(false);
    message.textContent = `Player ${game.player.name} turn`;
    GetPlayer.resetplayersArrays();
  };
  const getArray = () => {
    return arr;
  };
  const addToArrayElement = (element, value) => {
    arr[element] = value;
    gameboard.render();
  };
  return {
    render,
    restart,
    getArray,
    addToArrayElement,
  };
})();

const Player = (sign, name) => {
  this.sign = sign;
  let array = [];
  getArray = () => {
    return array;
  };
  addToArray = (value) => {
    array.push(value);
  };
  clearArray = () => {
    array = [];
  };
  return {
    getArray,
    sign,
    addToArray,
    clearArray,
    name,
  };
};

const GetPlayer = (() => {
  const playerX = Player("X", window.prompt("X player name?", "X"));
  const player0 = Player("0", window.prompt("0 player name?", "0"));
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
  const resetplayersArrays = () => {
    playerX.clearArray();
    player0.clearArray();
  };
  return {
    playerSelect,
    resetplayersArrays,
  };
})();

const game = (() => {
  let player = GetPlayer.playerSelect();
  message.textContent = `Player ${player.name} turn`;
  document.querySelector(".gameboard").addEventListener("click", (event) => {
    if (getIsGameOver()) {
      return;
    } else {
      if (event.target.textContent === "") {
        gameboard.addToArrayElement([+event.target.classList[1]], player.sign);
        player.addToArray(+event.target.classList[1]);
        if (checkWinConditions(player)) {
          gameOver(player);
        } else {
          player = GetPlayer.playerSelect();
          message.textContent = `Player ${player.name} turn`;
        };
      };
    };
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

  document.querySelector("#restart").addEventListener("click", () => {
    gameboard.restart();
  });
  const checkWinConditions = (player) => {
    return winConditions.some((array) =>
      array.every((element) => player.getArray().includes(element))
    );
  };
  let isGameOver;
  const setIsGameOver = (value) => {
    isGameOver = value;
  };
  const getIsGameOver = () => {
    return isGameOver;
  };
  const gameOver = (player) => {
    setIsGameOver(true);
    message.textContent = `Player ${player.name} win!!!`;
  };
  return { getIsGameOver, setIsGameOver, player };
})();
