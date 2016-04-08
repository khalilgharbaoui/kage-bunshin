// init bunch of sounds
ion.sound({
    sounds: [
        {name: "tajukagebunshin"}

    ],

    // main config
    path: "sounds/",
    preload: true,
    multiplay: false,
    volume: 0.9
});
var objContainer = document.getElementById( "clone-container" );
  var intLevels = 0;
  var strBlocksHTML = '';
  var callCount = 1;
var kagebunshin = function(){
    var repeater = setInterval(function () {
      if (callCount < 10) {
    // Using innerHTML is faster than DOM appendChild
    for( var i = Math.floor(Math.random() * 5) + 3; i > intLevels; i-- ){

        for( var n = Math.floor(Math.random() * 7) + 1; n < i + Math.floor(Math.random() * 7) + 1; n++ ){
          var number = Math.floor(Math.random() * 10) + 5;
            strBlocksHTML += "<div class='naruto-clone' style='margin-left:"+number+"px; margin-right:"+number+"px;'><img src='images/naruto.gif' /></div>";
        }


       // Line break after each row
         strBlocksHTML += "<div style='margin-top:-180px;'></div>";

    }



    callCount += 1;
  } else {
    clearInterval(repeater);



  }
  objContainer.innerHTML = strBlocksHTML;

  }, 200);
      var callCount = 1;
  }




  var delay = 1;//in milliseconds
  var scroll_amount = 50;// in pixels
  var interval;
  function animatedScroll()
  {
    if(window.pageYOffset >= document.body.scrollHeight)
    {
      clearInterval(interval);
    }else
    {
      window.scrollBy(0,scroll_amount);
    }
  }
  function scrollToBottom()
  {
    interval = setInterval("animatedScroll()",delay);
  }

window.addEventListener("click", function(){
  // play sound
  ion.sound.play("tajukagebunshin");
  setTimeout(kagebunshin, 3000);
  setTimeout(scrollToBottom, 3000);
});
