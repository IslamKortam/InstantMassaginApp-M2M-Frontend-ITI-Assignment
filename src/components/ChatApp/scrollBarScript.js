/* global bootstrap: false */
(function () {
  'use strict'
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()


function applyScrollBar(scrollBarClassName){
  var myCustomScrollbar = document.querySelector(scrollBarClassName);
  
  var scrollbarY = myCustomScrollbar.querySelector('.ps__rail-y');
  
  myCustomScrollbar.onscroll = function () {
    scrollbarY.style.cssText = `top: ${this.scrollTop}px!important; height: 400px; right: ${-this.scrollLeft}px`;
  }
}

applyScrollBar('.my-custom-scrollbar')
applyScrollBar('.my-custom-scrollbar2')
