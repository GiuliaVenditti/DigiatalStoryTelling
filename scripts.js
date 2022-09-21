
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

/* 
  document.getElementById("progress-bar").onmouseover = function() {mouseOver()};
  document.getElementById("progress-bar").onmouseout = function() {mouseOut()};

  function mouseOver() {
    console.log("hhh")
    document.getElementById("container-nav").classList.toggle("hide");
    console.log("gggh")
    document.getElementById("progress-bar").style.margin = '0rem 0rem 3rem 0rem';
  }
  function mouseOut() {
    document.getElementById("container-nav").classList.toggle("hide");
    document.getElementById("progress-bar").style.margin = '0rem 0rem 8rem 0rem';
  }
 */

const btn = document.getElementById('lower_nav');

btn.addEventListener('mouseover', () => {
    
      const box = document.getElementById('container-nav');
      const bar = document.getElementById('progress-bar');
      const circle = document.getElementById('circle')
      // 👇️ removes element from DOM
      box.style.visibility = 'visible'
      bar.style.margin = '0rem 0rem 7rem 0rem';
      circle.style.margin = '0rem 0rem 6.8rem 0rem';
      // 👇️ hides element (still takes up space on page)
      // box.style.visibility = 'hidden';
    
  });


btn.addEventListener('mouseout', () => {
    setTimeout(() => {
      const box = document.getElementById('container-nav');
      const bar = document.getElementById('progress-bar');
      const circle = document.getElementById('circle')
      // 👇️ removes element from DOM
      box.style.visibility = 'hidden';
      bar.style.margin = '0rem 0rem 2rem 0rem';
      circle.style.margin = '0rem 0rem 1.8rem 0rem';
      // 👇️ hides element (still takes up space on page)
      // box.style.visibility = 'hidden';
    }, 8000);
  });
 



  function appear() {
    document.getElementById("upper_nav").classList.toggle("hide")
    document.getElementById("watching").classList.toggle("hide")
    document.getElementById('container-nav').style.visibility = 'visible'
    document.getElementById('progress-bar').style.margin = '0rem 0rem 7rem 0rem';
    document.getElementById('circle').style.margin = '0rem 0rem 6.8rem 0rem';
  }
  
 function play(){
  document.getElementById("navs").classList.toggle("hide")
  document.getElementById("bod").classList.toggle("no-scroll")
  
  window.scrollBy({
    top: window.innerHeight,
    left: 0,
    behavior: 'smooth'
  });
 }

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
    top: -100,
    left: 0,
    behavior: 'smooth'
  });

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