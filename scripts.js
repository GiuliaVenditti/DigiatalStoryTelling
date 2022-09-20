
console.log("hey")

window.onscroll = () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    
    
    document.querySelector(
      ".pb"
    ).style.background = `linear-gradient(to right, #498 ${scrollPercentRounded}%, #eee ${scrollPercentRounded}%)`;

    document.querySelector(
      ".circle"
    ).style.left = `${scrollPercentRounded}%`;
  };


  document.getElementById("icon_box").onmouseover = function() {mouseOver()};
  document.getElementById("icon_box").onmouseout = function() {mouseOut()};

  function mouseOver() {
    console.log("hhh")
    document.getElementById("upper_nav").style.backgroundColor = "#212529a1";
    document.getElementById("navbar-brand").style.color = "#fff !important";
  }
  
  function mouseOut() {
    document.getElementById("upper_nav").style.backgroundColor = "#21252900";
    document.getElementById("navbar-brand").style.color = "rgba(255, 255, 255, 0)!important";
  }
 

/* const box = document.getElementById('coso');

// 👇️ Change text color on mouseover
box.addEventListener('mouseover', function handleMouseOver() {
  box.style.color = 'red';
});

// 👇️ Change text color back on mouseout
box.addEventListener('mouseout', function handleMouseOut() {
  box.style.color = 'black';
});  */


/* const box = document.getElementById('box');

// 👇️ Change text color on mouseover
box.addEventListener('mouseover', function handleMouseOver() {
  box.style.color = 'red';
});

// 👇️ Change text color back on mouseout
box.addEventListener('mouseout', function handleMouseOut() {
  box.style.color = 'black';
});  */