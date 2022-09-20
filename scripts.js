
alert('hi im javascript');


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



