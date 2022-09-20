  
 alert('hi im jquery');
  
  
  
  (document).ready(function(){
    $(".upper_title").hover(function(){
      onload('oy')
      $(this).css("background-color", "yellow");
      }, function(){
      $(this).css("background-color", "pink");
    });
  });