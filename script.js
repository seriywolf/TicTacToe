const gameboard = (() => {
  new Array(9);
  let arr = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'x', 'x'];
  const render = (arr) => {
    let elements = document.querySelectorAll(".boardElement");
    elements.forEach(function(element,currentIndex) {
        //console.log(arr[currentIndex])
        element.textContent = arr[currentIndex];
        //console.log(element.textContent);
        //console.log(typeof currentIndex);
        
    });    


  };
  return {
    render,arr    
  };
})();

const players = (name) => {};
