
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


/*   window.onscroll = () => {
    let scrollTop = window.scrollY;
    if(scrollTop <= 10){
      document.getElementById("container-nav").classList.add("rehides")
    }
    if(scrollTop >= 900){
      document.getElementById("container-nav").classList.remove("rehides")
    }
  };


 */
 


/*   

function play(){
  document.getElementById("navs").classList.toggle("hide")
  document.getElementById("bod").classList.toggle("no-scroll")
  
  window.scrollBy({
    top: window.innerHeight,
    left: 0,
    behavior: 'smooth'
  });
 }

 */

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