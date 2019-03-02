!(function() {
  var youtube = document.querySelectorAll(".youtube");
  for (var i = 0; i < youtube.length; i++) {
    var source =
      "https://img.youtube.com/vi/" +
      youtube[i].dataset.embed +
      "/sddefault.jpg";
    var image = new Image();
    image.src = source;
    image.addEventListener(
      "load",
      (function() {
        youtube[i].appendChild(image);
      })(i)
    );
    youtube[i].addEventListener("click", function() {
      this.innerHTML = "";
      let player = new YT.Player(this, {
          height: this.clientHeight,
          width: this.clientWidth,
          videoId: this.dataset.embed,
          events: {
            'onReady': () => {
              setTimeout(() => player.playVideo(), 2000);
            }
          }
        });
    });
  }
})();