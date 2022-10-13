const gameboard = (() => {
  //let arr = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'x', 'x'];
  let arr = new Array(9);
  return {
    arr
  };
})();

const player = (mark) =>{;
  this.mark = mark
  return {mark};  
};

const xPlayer = player("X");
const oPlayer = player("O");

const game = (() => {
  const render = (arr) => {
    let elements = document.querySelectorAll(".boardElement");
    elements.forEach(function (element, currentIndex) {
      element.textContent = arr[currentIndex];
    });
  };

  document
    .querySelector(".gameboard")
    .addEventListener("click", function (event) {
      if (event.target.textContent === "") {
        //event.target.textContent = "!";
        gameboard.arr[+event.target.classList[1]] = "!";
        render(gameboard.arr);
        //console.log(+event.target.classList[1]);
      }
    });
})();
