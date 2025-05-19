// Sistema de sonido
const BASE_SOUNDS_PATH = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '/') + 'sounds/';

const sounds = {
    spin: new Audio(BASE_SOUNDS_PATH + 'spin.mp3'),
    tick: new Audio(BASE_SOUNDS_PATH + 'tick.mp3'),
    win: new Audio(BASE_SOUNDS_PATH + 'win.mp3')
};

// Configurar volúmenes específicos para cada sonido
sounds.spin.volume = 0.5;  // 50% del volumen
sounds.tick.volume = 0.3;  // 30% del volumen
sounds.tick.loop = true;   // El tick se repite
sounds.win.volume = 0.4;   // 40% del volumen
sounds.spin.loop = true;   // El spin también se repetirá

// Variable para controlar si ya se está reproduciendo el sonido de victoria
let isWinSoundPlaying = false;

// Función para verificar si los sonidos están disponibles
function checkSoundsAvailability() {
    console.log('Verificando disponibilidad de sonidos...');
    console.log('Ruta base de sonidos:', BASE_SOUNDS_PATH);
    
    let allSoundsAvailable = true;
    Object.entries(sounds).forEach(([name, sound]) => {
        console.log(`Intentando cargar sonido ${name} desde:`, sound.src);
        
        // Verificar si el archivo existe
        fetch(sound.src)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                console.log(`Sonido ${name} cargado correctamente`);
            })
            .catch(error => {
                console.error(`Error cargando el sonido ${name}:`, error);
                allSoundsAvailable = false;
            });
            
        sound.addEventListener('error', (e) => {
            console.error(`Error en el evento de sonido ${name}:`, e);
            allSoundsAvailable = false;
        });
        
        sound.addEventListener('canplaythrough', () => {
            console.log(`Sonido ${name} listo para reproducir`);
        });
    });
    
    return allSoundsAvailable;
}

// Variables para el control de sonido
let isSoundEnabled = true;
let currentVolume = 0.7; // 70% por defecto
let soundsAvailable = false;

// Función para actualizar el volumen de todos los sonidos
function updateVolume(volume) {
    if (!soundsAvailable) return;
    
    currentVolume = volume / 100;
    Object.values(sounds).forEach(sound => {
        sound.volume = currentVolume;
    });
}

// Función para alternar el sonido
function toggleSound() {
    if (!soundsAvailable) {
        console.log('Los sonidos no están disponibles');
        return;
    }
    
    isSoundEnabled = !isSoundEnabled;
    const toggleSoundBtn = document.getElementById('toggleSound');
    const volumeControl = document.getElementById('volumeControl');
    
    if (isSoundEnabled) {
        toggleSoundBtn.classList.remove('muted');
        volumeControl.disabled = false;
        updateVolume(volumeControl.value);
    } else {
        toggleSoundBtn.classList.add('muted');
        volumeControl.disabled = true;
        Object.values(sounds).forEach(sound => {
            sound.volume = 0;
        });
    }
}

// Modificar la función playSound para incluir más información de depuración
function playSound(soundName) {
    if (!soundsAvailable || !isSoundEnabled) {
        console.log(`No se reproduce ${soundName}: soundsAvailable=${soundsAvailable}, isSoundEnabled=${isSoundEnabled}`);
        return;
    }
    
    // Si es el sonido de victoria y ya se está reproduciendo, no lo reproduzcas de nuevo
    if (soundName === 'win' && isWinSoundPlaying) {
        console.log('El sonido de victoria ya se está reproduciendo');
        return;
    }
    
    console.log(`Intentando reproducir sonido: ${soundName}`);
    
    // Detener todos los sonidos primero
    Object.values(sounds).forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
    });
    
    // Reproducir el sonido solicitado
    if (sounds[soundName]) {
        const playPromise = sounds[soundName].play();
        
        if (playPromise !== undefined) {
            if (soundName === 'win') {
                isWinSoundPlaying = true;
                // Resetear la bandera cuando termine el sonido
                sounds[soundName].onended = () => {
                    isWinSoundPlaying = false;
                };
            }
            
            playPromise
                .then(() => {
                    console.log(`Sonido ${soundName} reproducido correctamente`);
                })
                .catch(error => {
                    console.error(`Error reproduciendo sonido ${soundName}:`, error);
                    if (soundName === 'win') {
                        isWinSoundPlaying = false;
                    }
                });
        }
    } else {
        console.error(`Sonido ${soundName} no encontrado`);
    }
}

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

// Función para hacer fade out de un sonido
function fadeOutSound(sound, duration = 500) {
    const startVolume = sound.volume;
    const fadeOutInterval = 50; // ms
    const steps = duration / fadeOutInterval;
    const volumeStep = startVolume / steps;
    
    const fadeOut = setInterval(() => {
        if (sound.volume > volumeStep) {
            sound.volume -= volumeStep;
        } else {
            sound.pause();
            sound.currentTime = 0;
            sound.volume = startVolume; // Restaurar volumen original
            clearInterval(fadeOut);
        }
    }, fadeOutInterval);
}

function iniciarRuleta() {
    const ANIMATION_DURATION = 4000; // 4 segundos
    const SPIN_SOUND_DURATION = 3000; // 3 segundos de sonido de spin
    
    // Reproducir sonido de inicio en bucle
    playSound('spin');
    
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
    
    // Después de SPIN_SOUND_DURATION, hacer la transición al sonido de tick
    setTimeout(() => {
        // Hacer fade out del sonido de spin
        fadeOutSound(sounds.spin, 300);
        // Iniciar el sonido de tick con un fade in
        sounds.tick.volume = 0;
        playSound('tick');
        // Fade in del tick
        const fadeInInterval = setInterval(() => {
            if (sounds.tick.volume < 0.3) {
                sounds.tick.volume += 0.05;
            } else {
                clearInterval(fadeInInterval);
            }
        }, 50);
    }, SPIN_SOUND_DURATION);
    
    // Variable para controlar si ya se procesó el final de la animación
    let animationEndProcessed = false;
    
    // Esperar a que termine la animación completamente
    $(".roulette-item").one('transitionend', function() {
        // Si ya se procesó el final de la animación, no hacer nada
        if (animationEndProcessed) return;
        animationEndProcessed = true;
        
        // Hacer fade out del sonido de tick
        fadeOutSound(sounds.tick, 200);
        
        // Pequeña pausa para asegurar que todo está completamente detenido
        setTimeout(() => {
            const premioGanador = obtenerPremioGanador();
            mostrarPremio(premioGanador);
            
            // Reproducir sonido de victoria
            playSound('win');
            
            // Limpiar el flag de procesado
            animationEndProcessed = false;
        }, 100);
    });
}

$(document).ready(function() {
    // Verificar disponibilidad de sonidos
    soundsAvailable = checkSoundsAvailability();
    
    // Si los sonidos no están disponibles, deshabilitar los controles
    if (!soundsAvailable) {
        const toggleSoundBtn = document.getElementById('toggleSound');
        const volumeControl = document.getElementById('volumeControl');
        
        toggleSoundBtn.classList.add('muted');
        toggleSoundBtn.disabled = true;
        toggleSoundBtn.title = 'Sonidos no disponibles';
        volumeControl.disabled = true;
        
        console.log('Los archivos de sonido no están disponibles. Por favor, asegúrate de que los archivos spin.mp3, tick.mp3 y win.mp3 estén en la carpeta sounds/');
    }
    
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
    
    // Configurar el control de volumen
    const volumeControl = document.getElementById('volumeControl');
    volumeControl.addEventListener('input', (e) => {
        updateVolume(e.target.value);
    });
    
    // Configurar el botón de silencio
    const toggleSoundBtn = document.getElementById('toggleSound');
    toggleSoundBtn.addEventListener('click', toggleSound);
    
    // Establecer volumen inicial
    updateVolume(volumeControl.value);
});