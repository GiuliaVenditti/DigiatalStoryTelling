
console.log("hey")

window.onscroll = () => {
    let scrollTop = window.scrollY;
   
    let docHeight = document.body.offsetHeight;
    
    let winHeight = window.innerHeight;
   
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    document.querySelector(
      ".pb"
    ).style.background = `linear-gradient(to right, rgb(160, 163, 222) ${scrollPercentRounded}%, rgb(238, 238, 238) ${scrollPercentRounded}%)`;

    document.querySelector(
      ".circle"
    ).style.left = `${scrollPercentRounded}%`;
  };



function next() {
  console.log("eeeeeey")
  window.scrollBy({
    top: window.innerHeight,
    left: 0,
    behavior: 'smooth'
  });

}


function prevoius() {
  console.log("yyyyy")
  window.scrollBy({
    top: -(window.innerHeight),
    left: 0,
    behavior: 'smooth'
  });

}

$( "#show_graph" ).click(function() {
  $('#first').toggle();
  $('#second').toggle();
  if ($('.change').text() == "Critics over Public")
       $('.change').text("Public over Critics")
    else
       $('.change').text("Critics over Public");
});
