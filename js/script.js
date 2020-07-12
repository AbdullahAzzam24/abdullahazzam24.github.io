const textElement = ['Web Developer', 'Mobile Developer'];
let count = 0;
let textIndex = 0;
let currentText = '';
let words = '';

(function ngetik() {

  if(count == textElement.length){
    count = 0;
  }

  currentText = textElement[count];

  words = currentText.slice(0, ++textIndex);
  document.querySelector('.efek').textContent = words;

  if(words.length == currentText.length){
    count++;
    textIndex = 0;
  }

  setTimeout(ngetik, 500);

})();

function flip(event){
	var element = event.currentTarget;
	if (element.className === "cards") {
    if(element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }
};

// function flip(event){
// 	var element = event.currentTarget;
// 	if (element.className === "col-4") {
//     if(element.style.transform == "rotateY(180deg)") {
//       element.style.transform = "rotateY(0deg)";
//     }
//     else {
//       element.style.transform = "rotateY(180deg)";
//     }
//   }
// };
