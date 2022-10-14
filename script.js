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

  const getArray = () =>{
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
    setArrayElement
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
        console.log(event);
      };      
    });


const game = ((event) => {      
        if (playerMark === "X") {
          playerMark = "0";
        } else if (playerMark === "0") {
          playerMark = "X";
        }
        gameboard.setArrayElement([+event.target.classList[1]], playerMark);          
});


document
    .querySelector("#restart")
    .addEventListener("click", () =>{
      gameboard.restart();
    });