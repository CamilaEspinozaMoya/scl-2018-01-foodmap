window.onload = (() => {
  
  const preload = document.getElementById("preload");
  let loading = 0;
  let id = setInterval(frame, 64);

  function frame() {
    if(loading == 100){
      window.location("index.html");
    }else{
      loading = loading + 1;
      if(loading == 90) {
        preload.style.animation = "fadeout 1s aese"
      }
    }
  }
});