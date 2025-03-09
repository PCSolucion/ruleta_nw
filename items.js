const BASE_URL = 'https://pc-solucion.es/wp-content/uploads/2025/03/';
const CLOUDINARY_URL = 'https://res.cloudinary.com/pcsolucion/image/upload/';
const NWDB_URL = 'https://cdn.nwdb.info/db/images/live/v52/icons/items/';

const DEFAULT_BACKGROUND = `${BASE_URL}consumergrade-1-1.png`;
const GOLD_BACKGROUND = `${BASE_URL}bg-gold.png`;

const ruletaItems = [
    {
        background: DEFAULT_BACKGROUND,
        image: `${CLOUDINARY_URL}v1700984860/Aeternum/esmeralda_tallada_impecable.png`,
        title: "x20 Esmeralda Talladas Impecables",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${CLOUDINARY_URL}v1700984703/Aeternum/piedra_de_luna_tallada_impecable.png`,
        title: "x20 Piedra de Luna Talladas Impecables",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${CLOUDINARY_URL}v1700982271/Aeternum/rubi_tallado_impecable.png`,
        title: "x20 Rubí Tallados Impecables",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${CLOUDINARY_URL}v1700979814/Aeternum/ambar_tallado_impecable.png`,
        title: "x20 Ámbar Tallado Impecable",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${CLOUDINARY_URL}v1700453352/Aeternum/protección_fisica_4.png`,
        title: "x20 Ónice Tallado Impecable",
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
        title: "x20 Ópalo Tallado Impecable",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${CLOUDINARY_URL}v1700984703/Aeternum/piedra_de_luna_tallada_impecable.png`,
        title: "x10 Bloque Prismático",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${CLOUDINARY_URL}v1699795933/Aeternum/cornalina_tallada_impecable.png`,
        title: "x20 Cornalina Tallada Impecable",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${CLOUDINARY_URL}v1700984703/Aeternum/piedra_de_luna_tallada_impecable.png`,
        title: "x100 Natillas de Plátano",
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
        title: "x20 Amatista Tallada Impecable",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${CLOUDINARY_URL}v1700984703/Aeternum/piedra_de_luna_tallada_impecable.png`,
        title: "x10 Tablones Prismáticos",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${CLOUDINARY_URL}v1699102512/Aeternum/diamante.png`,
        title: "x20 Dimante Tallado Impecable",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${CLOUDINARY_URL}v1700984703/Aeternum/piedra_de_luna_tallada_impecable.png`,
        title: "x100 Macedonia de Frutas",
        subtitle: ""
    },
    {
        background: GOLD_BACKGROUND,
        image: `${CLOUDINARY_URL}v1682325800/coin_stack_5000.webp`,
        title: "x5.000 Gold",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${NWDB_URL}consumable/fooddext5.png`,
        title: "x50 Albenaja Frita",
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
        title: "x10.000 Gold",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${NWDB_URL}consumable/honingstonet5.png`,
        title: "x20 Piedras de Afilar potentes",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${NWDB_URL}resource/goldenscarab.png`,
        title: "x2 Escarabajos de Oro",
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
        title: "x4 Escarabajos de Oro",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${CLOUDINARY_URL}v1700984703/Aeternum/piedra_de_luna_tallada_impecable.png`,
        title: "x100 Parfait de Plátano",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${NWDB_URL}consumable/restorationserumt5.png`,
        title: "x100 Sueros de Regeneración",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${NWDB_URL}consumable/gemstonedustt5.png`,
        title: "x100 Polvo de Gemas Potente",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${NWDB_URL}consumable/foodstrt5.png`,
        title: "x50 Pez Ñú Asado",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${NWDB_URL}consumable/foodfoct5.png`,
        title: "x50 Carpa de Lava",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${NWDB_URL}consumable/fooddext5.png`,
        title: "x50 Albenaja Frita",
        subtitle: ""
    },
    {
        background: DEFAULT_BACKGROUND,
        image: `${NWDB_URL}consumable/incenset5.png`,
        title: "x100 Incienso Potente",
        subtitle: ""
    },
]; 