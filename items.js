const BASE_URL = 'https://pc-solucion.es/wp-content/uploads/2025/03/';
const CLOUDINARY_URL = 'https://res.cloudinary.com/pcsolucion/image/upload/';
const NWDB_URL = 'https://cdn.nwdb.info/db/images/live/v52/icons/items/';

const DEFAULT_BACKGROUND = `${BASE_URL}consumergrade-1-1.png`;
const GOLD_BACKGROUND = `${BASE_URL}bg-gold.png`;

const ruletaItems = [
    {
        background: DEFAULT_BACKGROUND,
        image: `${CLOUDINARY_URL}v1700984860/Aeternum/esmeralda_tallada_impecable.png`,
        title: "x10 Esmeralda Talladas Impecables",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${CLOUDINARY_URL}v1700984703/Aeternum/piedra_de_luna_tallada_impecable.png`,
        title: "x10 Piedra de Luna Talladas Impecables",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${CLOUDINARY_URL}v1700982271/Aeternum/rubi_tallado_impecable.png`,
        title: "x10 Rubí Tallados Impecables",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${CLOUDINARY_URL}v1700979814/Aeternum/ambar_tallado_impecable.png`,
        title: "x10 Ámbar Tallado Impecable",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${CLOUDINARY_URL}v1700453352/Aeternum/protección_fisica_4.png`,
        title: "x10 Ónice Tallado Impecable",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${NWDB_URL}resource/matrix-jewelryt52.png`,
        title: "x1 Matriz de Joyería",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${CLOUDINARY_URL}v1700416662/Aeternum/opalcutt4.png`,
        title: "x10 Ópalo Tallado Impecable",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `https://pc-solucion.es/wp-content/uploads/2025/03/blockt53.png`,
        title: "x3 Bloque Prismático",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${CLOUDINARY_URL}v1699795933/Aeternum/cornalina_tallada_impecable.png`,
        title: "x10 Cornalina Tallada Impecable",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `https://pc-solucion.es/wp-content/uploads/2025/03/fooddext51.png`,
        title: "x20 Natillas de Plátano",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${NWDB_URL}resource/matrix-armort52.png`,
        title: "x1 Matriz de Armadura",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${CLOUDINARY_URL}v1699103941/Aeternum/amatista.png`,
        title: "x10 Amatista Tallada Impecable",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `https://pc-solucion.es/wp-content/uploads/2025/03/timbert53.png`,
        title: "x4 Tablones Prismáticos",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${CLOUDINARY_URL}v1699102512/Aeternum/diamante.png`,
        title: "x10 Dimante Tallado Impecable",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `https://pc-solucion.es/wp-content/uploads/2025/03/foodintt51.png`,
        title: "x20 Macedonia de Frutas",
        subtitle: ""
    },
    {
        background: GOLD_BACKGROUND,
        image: `${CLOUDINARY_URL}v1682325800/coin_stack_5000.webp`,
        title: "x1.000 Gold",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${NWDB_URL}consumable/fooddext5.png`,
        title: "x10 Albenaja Frita",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${NWDB_URL}resource/prismaticscarab.png`,
        title: "x1 Escarabajo Prismático",
        subtitle: ""
    },
    {
        background: GOLD_BACKGROUND,
        image: `${CLOUDINARY_URL}v1682325800/coin_stack_5000.webp`,
        title: "x1.200 Gold",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${NWDB_URL}consumable/honingstonet5.png`,
        title: "x10 Piedras de Afilar potentes",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${NWDB_URL}resource/goldenscarab.png`,
        title: "x1 Escarabajo de Oro",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${NWDB_URL}resource/matrix-weapont52.png`,
        title: "x1 Matriz de Arma",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${NWDB_URL}resource/goldenscarab.png`,
        title: "x1 Escarabajos de Oro",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `https://pc-solucion.es/wp-content/uploads/2025/03/foodcont51.png`,
        title: "x20 Parfait de Plátano",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${NWDB_URL}consumable/restorationserumt5.png`,
        title: "x20 Sueros de Regeneración",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${NWDB_URL}consumable/gemstonedustt5.png`,
        title: "x20 Polvo de Gemas Potente",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${NWDB_URL}consumable/foodstrt5.png`,
        title: "x15 Pez Ñú Asado",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${NWDB_URL}consumable/foodfoct5.png`,
        title: "x20 Carpa de Lava",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${NWDB_URL}consumable/fooddext5.png`,
        title: "x10 Albenaja Frita",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${NWDB_URL}consumable/incenset5.png`,
        title: "x20 Incienso Potente",
        subtitle: ""
    },
]; 