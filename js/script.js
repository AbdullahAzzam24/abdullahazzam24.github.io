const textElement = ['Web Developer', 'Mobile Developer'];
let count = 0;
let textIndex = 0;
let currentText = '';
let words = '';

(function typing() {

  if(count == textElement.length){
    count = 0;
  }

  currentText = textElement[count];

  words = currentText.slice(0, ++textIndex);
  document.querySelector('.efect').textContent = words;

  if(words.length == currentText.length){
    count++;
    textIndex = 0;
  }

  setTimeout(typing, 500);

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


$(".myBtn").on('click', function(){
  $(this).parent().toggleClass("showContent");

  // shorthand if else statement
  var replaceText = $(this).parent().hasClass("showContent") ? "Read Less" : "Read More";
  $(this).text(replaceText);
});