const gameboard = (() => {
  //let arr = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'x', 'x'];
  let arr = new Array(9);
  return {
    arr,
  };  
})();

const player = (mark) => {
  const win = () => {
    console.log(`Player ${mark} win!`);
  };
  return { mark, win};
};

const xPlayer = player("X");
const oPlayer = player("0");

const randomPlayerSelect = () => {
  const players = ["X", "0"];
  const rand = Math.floor(Math.random() * 2);
  return players[rand];
};
let playerMark= randomPlayerSelect();


const game = (() => {
  const render = (arr) => {
    let elements = document.querySelectorAll(".boardElement");
    elements.forEach(function (element, currentIndex) {
      element.textContent = arr[currentIndex];
    });
    //console.log(arr);
  };  

  document
    .querySelector(".gameboard")
    .addEventListener("click", function (event) {
      if (event.target.textContent === "") { 
        if (playerMark === "X") {
           playerMark = "0";          
        } else if (playerMark === "0") {
          playerMark = "X";          
        };
        gameboard.arr[+event.target.classList[1]] = playerMark;
        render(gameboard.arr);
      };
    });
})();
