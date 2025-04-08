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

function mostrarPremio(premio) {
    if (!premio) return;
    
    const premioInfo = $("#premio-info");
    const premioTexto = premioInfo.find(".premio-texto");
    premioTexto.text(premio);
    premioInfo.removeClass("hidden");
}

function obtenerPremioGanador() {
    const stopper = $(".stopper");
    const stopperTopPosition = stopper.offset().top;
    const stopperCenterX = stopper.offset().left + (stopper.width() / 2);
    
    let premioGanador = null;
    let distanciaMinima = Infinity;
    
    $(".roulette-item").each(function() {
        const item = $(this);
        const itemTop = item.offset().top;
        const itemLeft = item.offset().left;
        const itemRight = itemLeft + item.width();
        
        // Verificar si el stopper está horizontalmente dentro del ítem
        if (stopperCenterX >= itemLeft && stopperCenterX <= itemRight) {
            const distancia = Math.abs(stopperTopPosition - itemTop);
            if (distancia < distanciaMinima) {
                distanciaMinima = distancia;
                premioGanador = item.find(".roulette-subtitle-first").text();
            }
        }
    });
    
    return premioGanador;
}

function iniciarRuleta() {
    const ANIMATION_DURATION = 4000; // 4 segundos
    
    // Calcular la posición aleatoria
    const totalItems = $(".roulette-item-wrapper").children().length;
    const randomValue = Math.floor(Math.random() * (totalItems * 4)) + 1;
    const actualIndex = (randomValue - 1) % totalItems;
    const spunAmount = $(".roulette-item-wrapper").children()[actualIndex].getBoundingClientRect().left - 626.8333129882812 + 138/2;
    
    // Ocultar mensaje anterior si existe
    $("#premio-info").addClass("hidden");
    
    // Aplicar la transformación
    $(".roulette-item").css({
        "transition": `transform ${ANIMATION_DURATION}ms cubic-bezier(0.17, 0.67, 0.12, 0.99)`,
        "transform": `translateX(-${spunAmount}px)`
    });
    
    // Esperar a que termine la animación completamente
    $(".roulette-item").one('transitionend', function() {
        // Asegurarse de que solo se ejecute una vez
        if (!$(this).data('processed')) {
            $(this).data('processed', true);
            
            // Pequeña pausa para asegurar que todo está completamente detenido
            setTimeout(() => {
                const premioGanador = obtenerPremioGanador();
                mostrarPremio(premioGanador);
                
                // Limpiar el flag de procesado de todos los items
                $(".roulette-item").removeData('processed');
            }, 100);
        }
    });
}

$(document).ready(function() {
    generateItems();
    $("#premio-info").addClass("hidden");
    
    // Asegurarse de que los estilos iniciales estén establecidos
    $(".roulette-item").css({
        "transition": "none",
        "transform": "translateX(0)"
    });
    
    // Pequeño retraso antes de iniciar la animación para asegurar que todo está cargado
    setTimeout(() => {
        iniciarRuleta();
    }, 100);
});