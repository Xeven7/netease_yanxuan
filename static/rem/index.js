function setRem () {
  let htmlRem = document.documentElement.clientWidth
  document.documentElement.style.fontSize = htmlRem/7.5 + 'px'
}
setRem()

(function() {
  function autoRootFontSize() {
    document.documentElement.style.fontSize = Math.min(screen.width, document.documentElement.getBoundingClientRect().width) / 750 * 32 + 'px';}
  window.addEventListener('resize', autoRootFontSize);
  autoRootFontSize();
})();


(function() {
  function setRem () {
    let htmlRem = document.documentElement.clientWidth
    document.documentElement.style.fontSize = htmlRem/7.5 + 'px'
  }
  setRem()
})();

;(function (designWidth){
  var size = (window.innerWidth || document.documentElement.clientWidth) / designWidth * 100;
  document.documentElement.style.fontSize = size + "px";
  document.body.style.fontSize = "14px";
})(1080);

