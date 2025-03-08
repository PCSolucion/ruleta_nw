function generateItems() {
    const wrapper = $(".roulette-item-wrapper");
    
    // Repetir los items varias veces para crear el efecto de ruleta infinita
    const repetitions = 10;
    for (let i = 0; i < repetitions; i++) {
        ruletaItems.forEach(item => {
            const itemHtml = `
                <div class="roulette-item">
                    <div class="img-back">
                        <img src="${item.background}" alt="itemback" class="roulette-item-back">
                    </div>
                    <div class="img-wrapper">
                        <img src="${item.image}" alt="GameItem">
                    </div>
                    <h3 class="roulette-subtitle-first">${item.title}</h3>
                    <h3 class="roulette-subtitle-second">${item.subtitle}</h3>
                </div>
            `;
            wrapper.append(itemHtml);
        });
    }
}

function slideImages() {
    var widthHalfContainer = $("body > .container").outerWidth() / 2;
    var parent = $(".roulette-item-wrapper");
    var totalItems = $(".roulette-item-wrapper").children().length;
    var randomValue = Math.floor(Math.random() * (totalItems * 4)) + 1;
    
    var actualIndex = (randomValue - 1) % totalItems;
    var spunAmount = $(".roulette-item-wrapper").children()[actualIndex].getBoundingClientRect().left - 626.8333129882812 + 138/2;
    
    console.log(widthHalfContainer, randomValue, spunAmount);
    
    $(".roulette-item").css("transform", "translateX(-" + spunAmount + "px)");
}

$(document).ready(function() {
    generateItems();
    slideImages();
});