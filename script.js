function slideImages() {
  var widthHalfContainer = $("body > .container").outerWidth() / 2;
  var parent = $(".roulette-item-wrapper");
  var totalItems = $(".roulette-item-wrapper").children().length;
  var randomValue = Math.floor(Math.random() * (totalItems * 4)) + 1; // Genera un valor aleatorio entre 1 y el doble del total de elementos
  
  // Asegurarse de que randomValue esté dentro del rango de índices válidos
  var actualIndex = (randomValue - 1) % totalItems;
  
  var spunAmount = $(".roulette-item-wrapper").children()[actualIndex].getBoundingClientRect().left - 626.8333129882812 + 138/2;
  
  console.log(widthHalfContainer, randomValue, spunAmount);
  
  $(".roulette-item").css("transform", "translateX(-" + spunAmount + "px)");
}

$(document).ready(function() {
  slideImages();
});