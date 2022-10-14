const gameboard = (() => {
  //let arr = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'x', 'x'];
  let arr = new Array(9);
  const render = (arr) => {
    let elements = document.querySelectorAll(".boardElement");
    elements.forEach(function (element, currentIndex) {
      element.textContent = arr[currentIndex];
    });
  };
  return {
    arr,
    render,
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


document
    .querySelector(".gameboard")
    .addEventListener("click", (event) =>{
      if (event.target.textContent === ""){
        game(event);
      };      
    });


const game = ((event) => {      
        if (playerMark === "X") {
          playerMark = "0";
        } else if (playerMark === "0") {
          playerMark = "X";
        }
        gameboard.arr[+event.target.classList[1]] = playerMark;
        gameboard.render(gameboard.arr);   
});
