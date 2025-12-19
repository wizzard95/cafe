import menu1 from "./assets/menu-1.jpg";
import menu2 from "./assets/menu-2.jpg";
import menu3 from "./assets/menu-3.jpg";
import menu4 from "./assets/menu-4.jpg";
import menu5 from "./assets/menu-5.jpg";
import menu6 from "./assets/menu-6.jpg";


import pollopapas from "./assets/pollopapas.jpg";

export const menuItems = [
  {
    name: "MADEMOISELLE KETO",
    img: menu1,
    price: "$6.950",
    description: "1 CAFÉ CORTADO O AMERICANO O TÉ, 2 HUEVOS POCHADOS, PALTAS, TOCINO, SOBRE UNA CAMA DE LECUGA.",
    category: "Desayunos",
  },
  {
    name: "BIEN-ETRE",
    img: menu2,
    price: "$13.950",
    description: "CAFÉ CORTADO O AMERICANO O TÉ CON TOSTADAS EN PAN CASERO, HUEVOS REVUELTOS, QUESILLO, PALTA, FRUTAS DE TEMPORADA Y GRANOLA CASERO C/ YOGURTH.",
    category: "Desayunos",
  },
  
];

export const almuerzos = [

  {
      
    name: "ALMUERZO",
    img: menu2,
    price: "$9.650",
    description: "DISPONIBLE DE 13:00 HASTA 15:00 EL MENÚ INCLUYE ENTRADA - PLATO DE FONDO - POSTRE PAN CASERO Y SALSA CASERA",
    category: "Almuerzos",
  },
    {
      
    name: "ALMUERZO PARA LLEVAR",
    img: menu2,
    price: "$8.750",
    description: "EL ALMUERZO INCLUYE: ENTRADA- PLATO DE FONDO - POSTRE DISPONIBLE DE 13:00 HASTA 15:00",
    category: "Almuerzos",
  },
  {
      
    name: "PAN MOLDE INTEGRAL C/ SEMILLAS",
    img: menu2,
    price: "$4.750",
    description: "PAN DE MOLDE DE HARINA INTEGRAL CON SEMILLAS DE LINAZA, ZAPALLO, AVENA, CHIA, AMAPOLA Y GIRASOL",
    category: "Almuerzos",
  },
    {
      
    name: "POLLO C/ PAPAS FRITAS",
    img: pollopapas,
    price: "$8.250",
  /*   description: "PAN DE MOLDE DE HARINA INTEGRAL CON SEMILLAS DE LINAZA, ZAPALLO, AVENA, CHIA, AMAPOLA Y GIRASOL", */
    category: "Almuerzos",
  },
   {
      
    name: "SOPA DEL DÍA",
    img: menu2,
    price: "$2.500",
  /*   description: "PAN DE MOLDE DE HARINA INTEGRAL CON SEMILLAS DE LINAZA, ZAPALLO, AVENA, CHIA, AMAPOLA Y GIRASOL", */
    category: "Sopa",
  },
  {
      
    name: "ENSALADA DEL DÍA",
    img: menu2,
    price: "$2.500",
  /*   description: "PAN DE MOLDE DE HARINA INTEGRAL CON SEMILLAS DE LINAZA, ZAPALLO, AVENA, CHIA, AMAPOLA Y GIRASOL", */
    category: "Ensalada",
  },
    {
      
    name: "POSTRE DEL DÍA",
    img: menu2,
    price: "$2.500",
  /*   description: "PAN DE MOLDE DE HARINA INTEGRAL CON SEMILLAS DE LINAZA, ZAPALLO, AVENA, CHIA, AMAPOLA Y GIRASOL", */
    category: "Postre",
  },
  
]

import alfajorhojarascacasero from "./assets/alfajorhojarascacasero.jpg";
import maicena from "./assets/maicena.jpg";
import mendocinoChoco from "./assets/mendocinoChoco.jpg";
import muffinArandano from "./assets/muffinArandano.jpg";
import muffinChoco from "./assets/muffinChoco.jpg";
import porcionGalletas from "./assets/porcionGalletas.jpg";
import bolsaMagdalenas from "./assets/bolsaMagdalenas.jpg";
import ecleir from "./assets/ecleir.jpg";
import parisBrest from "./assets/parisBrest.jpg";
import panPascua from "./assets/panPascua.jpg";
import ppCobertura from "./assets/ppCobertura.jpg";
import gNavidad from "./assets/gNavidad.jpg";
import merenguitos from "./assets/merenguitos.jpg";
export const pasteleria = [
  {
    name: "ALFAJOR DE HOJARASCA CASERA",
    img: alfajorhojarascacasero,
    price: "$1.450",
    /* description: "1 CAFÉ CORTADO O AMERICANO O TÉ, 2 HUEVOS POCHADOS, PALTAS, TOCINO, SOBRE UNA CAMA DE LECUGA.", */
    category: "Pasteleria",
  },
  {
    name: "ALFAJOR DE MAICENA",
    img: maicena,
    price: "$1.650",
   /*  description: "CAFÉ CORTADO O AMERICANO O TÉ CON TOSTADAS EN PAN CASERO, HUEVOS REVUELTOS, QUESILLO, PALTA, FRUTAS DE TEMPORADA Y GRANOLA CASERO C/ YOGURTH.", */
    category: "Pasteleria",
  },
  {
    name: "MENDOCINO CHOCOLATE",
    img: mendocinoChoco,
    price: "$2.150",
   /*  description: "CAFÉ CORTADO O AMERICANO O TÉ CON TOSTADAS EN PAN CASERO, HUEVOS REVUELTOS, QUESILLO, PALTA, FRUTAS DE TEMPORADA Y GRANOLA CASERO C/ YOGURTH.", */
    category: "Pasteleria",
  },
   {
    name: "MUFFIN DE ARÁNDANO",
    img: muffinArandano,
    price: "$1.750",
    description: "MUFFIN CASERO RELLENO CON ARANDANOS.",
    category: "Pasteleria",
  },
  {
    name: "MUFFIN DE CHOCOLATE",
    img: muffinChoco,
    price: "$1.750",
    description: "MUFFIN CASERO RELLENO CON CHISPAS DE CHOCOLATE",
    category: "Pasteleria",
  },
  {
    name: "PORCIÓN DE GALLETAS",
    img: porcionGalletas,
    price: "$4.500",
   /*  description: "MUFFIN CASERO RELLENO CON CHISPAS DE CHOCOLATE", */
    category: "Pasteleria",
  },
   {
    name: "BOLSA DE MAGDALENAS",
    img: bolsaMagdalenas,
    price: "$5.500",
   /*  description: "MUFFIN CASERO RELLENO CON CHISPAS DE CHOCOLATE", */
    category: "Pasteleria",
  },
   {
    name: "ECLAIR PRALINÉ",
    img: ecleir,
    price: "$5.500",
    description: "MASA CHOUX EN FORMA LARGA RELLEN CON CREMA DIPLOMATICA DE PRALINÉ DE ALMENDRAS CASERO",
    category: "Pasteleria",
  },
   {
    name: "PARIS BREST",
    img: parisBrest,
    price: "$5.500",
    description: "MASA DE PROFITEROLES RELLENO CON UNA CREMA PASTELERA DE VAINILLA Y PRALINÉ DE AVELLANAS EUROPEAS.",
    category: "Pasteleria",
  },
  {
    name: "PÁN DE PASCUA",
    img: panPascua,
    price: "$5.800",
    description: "PAN DE PASCUA CASERO 1/2KG, CON FRUTOS SECOS.",
    category: "Pasteleria",
  },
  {
    name: "PÁN DE PASCUA COBERTURA",
    img: ppCobertura,
    price: "$6.800",
    description: "PAN DE PASCUA CASERO 1/2KG, CON FRUTOS SECOS CON COBERTURA DE CHOCOLATE.",
    category: "Pasteleria",
  },
  {
    name: "GALLETAS NAVIDEÑAS",
    img: gNavidad,
    price: "$7.500",
    description: "GALLETAS DE GENGIBRE EN FORMA NAVIDEÑA Y DECORADA CON GLACEADO CASERO.",
    category: "Pasteleria",
  },
   {
    name: "MERENGUITOS DE NAVIDAD",
    img: merenguitos,
    price: "3.850",
    /* description: "GALLETAS DE GENGIBRE EN FORMA NAVIDEÑA Y DECORADA CON GLACEADO CASERO.", */
    category: "Pasteleria",
  },
];


import cAmericano from "./assets/cAmericano.jpg";
import anouk from "./assets/anouk.jpg";
import avellana from "./assets/avellana.jpg";
import bombonFrances from "./assets/bombonFrances.jpg";
import cafeLeche from "./assets/cafeLeche.jpg";
import capuccino from "./assets/capuccino.jpg";
import caramMakiato from "./assets/caramMakiato.jpg";
import cCortado from "./assets/cCortado.jpg";
import espresso from "./assets/espresso.jpg";
import espMakiato from "./assets/espMakiato.jpg";
import lagrima from "./assets/lagrima.jpg";
import latte from "./assets/latte.jpg";
import moka from "./assets/moka.jpg";
import vienes from "./assets/vienes.jpg";
import afogato from "./assets/afogato.jpg";
import dShot from "./assets/dShot.jpg";




export const cafes = [
  {
    name: "AMERICANO CHICO | GRANDE",
    img: cAmericano,
    price: "$2.250 $3.050",
    description: "SHOT DE ESPRESSO ALARGADO CON AGUA CALIENTE.",
    category: "Cafés",
  },
   {
    name: "ANOUK",
    img: anouk,
    price: "$4.550",
    description: "NUTELLA, LECHE TEXTURIZADA, SHOT DE CAFÉ ESPRESSO, ESPUMA DE LECHE Y CACAO EN POLVO.",
    category: "Cafés",
  },
  {
    name: "AVELLANA",
    img: avellana,
    price: "$4.150",
    description: "SYRUP DE AVELLANA, LECHE TEXTURIZADA, SHOT DE CAFÉ ESPRESSO, ESPUMA DE LECHE, CACAO EN POLVO.",
    category: "Cafés",
  },
   {
    name: "BOMBÓN FRANCÉS CHICO | GRANDE",
    img: bombonFrances,
    price: "$2.900 $3.800",
    description: "LECHE CONDENSADA, LECHE TEXTURIZADA, SHOT DE CAFÉ ESPRESSO, ESPUMA DE LECHE Y CACAO EN POLVO.",
    category: "Cafés",
  },
   {
    name: "CAFÉ CON LECHE CHICO | GRANDE",
    img: cafeLeche,
    price: "$2.500 $3.350",
    description: "LECHE TEXTURIZADA Y SHOT DE CAFÉ ESPRESSO POR IGUAL.",
    category: "Cafés",
  },
  {
    name: "CAPUCCINO CHICO | GRANDE",
    img: capuccino,
    price: "$2.750 $3.600",
    description: "SHOT DE CAFÉ ESPRESSO, ESPUMA DE LECHE ONCTUOSA, CACAO EN POLVO Y CANELA.",
    category: "Cafés",
  },

  {
    name: "CARAMEL MACHIATO CHICO | GRANDE",
    img: caramMakiato,
    price: "$2.950 $3.800",
    description: "SALSA DE CARAMELO, LECHE TEXTURIZADA, SHOT DE CAFÉ ESPRESSO, ESPUMA DE LECHE CACAO EN POLVO.",
    category: "Cafés",
  },
  {
    name: "CORTADO CHICO | GRANDE",
    img: cCortado,
    price: "$2.550 $3.400",
    description: "",
    category: "Cafés",
  },
    {
    name: "ESPRESSO CHICO | GRANDE",
    img: espresso,
    price: "$2.950 $3.250",
    description: "SALSA DE CARAMELO, LECHE TEXTURIZADA, SHOT DE CAFÉ ESPRESSO, ESPUMA DE LECHE CACAO EN POLVO.",
    category: "Cafés",
  },
  {
    name: "ESPRESSO MACHIATO | DOBLE",
    img: espMakiato,
    price: "$2.350 $3.650",
    description: "SALSA DE CARAMELO, LECHE TEXTURIZADA, SHOT DE CAFÉ ESPRESSO, ESPUMA DE LECHE CACAO EN POLVO.",
   category: "Cafés",
  },
  {
    name: "LAGRIMA CHICO | GRANDE",
    img: lagrima,
    price: "$2.150 $3.050",
    description: "SALSA DE CARAMELO, LECHE TEXTURIZADA, SHOT DE CAFÉ ESPRESSO, ESPUMA DE LECHE CACAO EN POLVO.",
    category: "Cafés",
  },
  {
    name: "LATTE CHICO | GRANDE",
    img: latte,
    price: "$2.300 $3.200",
    /* description: "SALSA DE CARAMELO, LECHE TEXTURIZADA, SHOT DE CAFÉ ESPRESSO, ESPUMA DE LECHE CACAO EN POLVO.", */
    category: "Cafés",
  },
 {
    name: "MOCHA CHICO | GRANDE",
    img: moka,
    price: "$2.900 $3.800",
    /* description: "SALSA DE CARAMELO, LECHE TEXTURIZADA, SHOT DE CAFÉ ESPRESSO, ESPUMA DE LECHE CACAO EN POLVO.", */
    category: "Cafés",
  },
  {
    name: "VIENÉS CHICO | GRANDE",
    img: vienes,
    price: "$2.750 $3.900",
    /* description: "SALSA DE CARAMELO, LECHE TEXTURIZADA, SHOT DE CAFÉ ESPRESSO, ESPUMA DE LECHE CACAO EN POLVO.", */
    category: "Cafés",
  },
  {
    name: "AFOGATO",
    img: afogato,
    price: "$4.900",
    description: "DOBLE ESPRESSO CON HEADO DE VAINILLA.", 
    category: "Cafés",
  },
  {
    name: "DOBLE SHOT",
    img: dShot,
    price: "$1.750",
    description: "", 
    category: "Cafés",
  },
]

import amaretto from "./assets/amaretto.jpg";
import carajillo from "./assets/carajillo.jpg"
import cFrances from "./assets/cFrances.jpg";
import irlandes from "./assets/irlandes.jpg";



export const cafesCM = [

   {
    name: "CAFÉ AMARETTO",
    img: amaretto,
    price: "$4.750",
    description: "Shot de café, licor de Amaretto, Crema liquida y Canela en polvo.", 
    category: "Cafés con malicia",
  },
  
   {
    name: "CAFÉ CARAJILLO",
    img: carajillo,
    price: "$4.750",
    description: "Shot de café, Bailey´s, Leche condensada, Leche texturizada y Crema liquida.", 
   category: "Cafés con malicia",
  },
    {
    name: "CAFÉ FRANCÉS",
    img: cFrances,
    price: "$4.750",
    description: "Shot de café, Cognac y Crema liquida.", 
    category: "Cafés con malicia",
  },
     {
    name: "CAFÉ IRLANDÉS",
    img: irlandes,
    price: "$4.750",
    description: "Shot de café, Whisky y Crema liquida.", 
    category: "Cafés con malicia",
  },
]

export const chocolates = [

  {
    name: "TAZA DE LECHE",
    img: menu2,
    price: "$1.650",
    description: "TAZA DE LECHE CALIENTE TEXTURIZADA.", 
    category: "Chocolates",
  },
   {
    name: "SUBMARINO",
    img: menu2,
    price: "$2.350",
    description: "Taza de Leche Caliente con Chocolate casero.", 
    category: "Chocolates",
  },
   {
    name: "CHOCO MÉMÉ",
    img: menu2,
    price: "$3.650",
    description: "Chocolate Caliente con espuma de leche.", 
    category: "Chocolates",
  },
   {
    name: "CHOCO VIENÉS",
    img: menu2,
    price: "$4.200",
    description: "Chocolate caliente con Crema Chantilly.", 
    category: "Chocolates",
  },
    {
    name: "CHOCO VAINILLA",
    img: menu2,
    price: "$4.200",
    description: "Chocolate Caliente con Syrup de Vainilla.", 
    category: "Chocolates",
  },   
   {
    name: "CHOCO MENTA",
    img: menu2,
    price: "$4.200",
    description: "Chocolate Caliente con Syrup de Menta.", 
    category: "Chocolates",
  },
     {
    name: "CHOCO NARANJA",
    img: menu2,
    price: "$4.200",
    description: "Chocolate Caliente con Licor de Naranja y Zestes de Naranjas.", 
    category: "Chocolates",
  },
       {
    name: "CHOCO COCO",
    img: menu2,
    price: "$4.200",
    description: "Chocolate Caliente con Syrup de Coco.", 
    category: "Chocolates",
  },
 {
    name: "CHOCO GRINGO",
    img: menu2,
    price: "$4.500",
    description: "Chocolate Caliente con Marshmallows.", 
    category: "Chocolates",
  },
   {
    name: "CHOCO GLOTÓN",
    img: menu2,
    price: "$4.500",
    description: "Chocolate Caliente con Crema Chantilly y Leche Condensada.", 
    category: "Chocolates",
  },
    {
    name: "CHOCO TIWI",
    img: menu2,
    price: "$4.500",
    description: "Chocolate Caliente con Crema Chantilly y Salsa de Caramelo.", 
    category: "Chocolates",
  },
      {
    name: "SUP, MASHEMELOW",
    img: menu2,
    price: "$1.150",
    description: "", 
    category: "Chocolates",
  },
]

export const tes = [
  {
    name: "TÉ ENGLISH BREAKFAST",
    img: menu2,
    price: "$2.650",
    description: "", 
    category: "Tés",
  },
   {
    name: "TÉ EARL GREY",
    img: menu2,
    price: "$2.650",
    description: "", 
    category: "Tés",
  },
   {
    name: "TÉ VERDE",
    img: menu2,
    price: "$2.650",
    description: "", 
   category: "Tés",
  },
   {
    name: "TÉ ARÁNDANO-VAINILLA",
    img: menu2,
    price: "$2.650",
    description: "", 
    category: "Tés",
  },
     {
    name: "TÉ MANGO Y FRUTILLA",
    img: menu2,
    price: "$2.650",
    description: "", 
    category: "Tés",
  },
     {
    name: "TÉ FRAMBUESA",
    img: menu2,
    price: "$2.650",
    description: "", 
    category: "Tés",
  },
     {
    name: "TÉ MANZANA CANELA",
    img: menu2,
    price: "$2.650",
    description: "", 
    category: "Tés",
  },
     {
    name: "TÉ LIMÓN LIMA",
    img: menu2,
    price: "$2.650",
    description: "", 
    category: "Tés",
  },
       {
    name: "TÉ CARAMELO",
    img: menu2,
    price: "$2.650",
    description: "", 
    category: "Tés",
  },
       {
    name: "TÉ MENTA",
    img: menu2,
    price: "$2.650",
    description: "", 
    category: "Tés",
  },
       {
    name: "TÉ MANZANILLA",
    img: menu2,
    price: "$2.650",
    description: "", 
    category: "Tés",
  },
       {
    name: "TÉ CORTADO",
    img: menu2,
    price: "$2.900",
    description: "", 
    category: "Tés",
  },
        {
    name: "TÉ CON LECHE",
    img: menu2,
    price: "$3.250",
    description: "", 
    category: "Tés",
  },
]

export const icf = [
  {
    name: "FRAPUCCINO CLÁSICO",
    img: menu2,
    price: "$4.050",
    description: "", 
    category: "Ice Coffee-Frapucciono",
  },
    {
    name: "FRAPUCCINO MOCKA",
    img: menu2,
    price: "$4.450",
    description: "", 
     category: "Ice Coffee-Frapucciono",
  },
    {
    name: "FRAPUCCINO CARAMELO",
    img: menu2,
    price: "$4.450",
    description: "", 
      category: "Ice Coffee-Frapucciono",
  },
    {
    name: "FRAPUCCINO VAINILLA",
    img: menu2,
    price: "$4.450",
    description: "", 
     category: "Ice Coffee-Frapucciono",
  },
    {
    name: "FRAPUCCINO OREO",
    img: menu2,
    price: "$4.800",
    description: "", 
      category: "Ice Coffee-Frapucciono",
  },
    {
    name: "ICE AMERICANO",
    img: menu2,
    price: "$3.650",
    description: "", 
      category: "Ice Coffee-Frapucciono",
  },
    {
    name: "ICE LATTE",
    img: menu2,
    price: "$4.250",
    description: "", 
      category: "Ice Coffee-Frapucciono",
  },
    {
    name: "ICE LATTE SABORES",
    img: menu2,
    price: "$4.050",
    description: "", 
    category: "Ice Coffee-Frapucciono",
  },
    {
    name: "ESPRESSO TONICA",
    img: menu2,
    price: "$4.600",
    description: "", 
      category: "Ice Coffee-Frapucciono",
  },
      {
    name: "ESPRESSO TONICA LAVANDA",
    img: menu2,
    price: "$4.800",
    description: "", 
      category: "Ice Coffee-Frapucciono",
  },
]

export const tortas = [
  {
    name: "KUCHEN CREMOSO DE FRAMBUESAS",
    img: menu2,
    price: "$3.950",
    description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS", 
      category: "Trozos de torta",
  },
    {
    name: "PIE DE LIMÓN",
    img: menu2,
    price: "$3.950",
    description: "PIE HECHO CON JUGO DE LIMON 100% NATURAL CON MERENGUE SUIZO", 
      category: "Trozos de torta",
  },
    {
    name: "TORTA TRES LECHES",
    img: menu2,
    price: "$3.900",
    description: "TORTA DE BISCOCHO DE VAINILLA REMOJADA CON UNA MEZCLA DE TRES LECHES ( LECHE EVAPORADA, LECHE CONDENSADA Y CREMA). RELLENA CON CREPASTELERA Y UNA FINA CAPA DE MANJAR", 
     category: "Trozos de torta",
  },
    {
    name: "TORTA AMOR",
    img: menu2,
    price: "$5.150",
    description: "HOJARASCAS CASERA RELLENAS CON CREMA PASTELERA, MANJAR, FRAMBUESAS FRESCAS Y UN TOQUE DE MERMELADA DE FRAMBUESAS", 
      category: "Trozos de torta",
  },
    {
    name: "TORTA PANQUEQUE NARANJA CHOCOLAT",
    img: menu2,
    price: "$4.950",
   /*  description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Trozos de torta",
  },
    {
    name: "KUCHEN CREMOSO DE FRAMBUESAS",
    img: menu2,
    price: "$3.950",
    description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS", 
     category: "Trozos de torta",
  },
    {
    name: "TORTA OPERA",
    img: menu2,
    price: "$5.850",
    description: "TORTA DE BISCOCHO DE HARINA DE ALMENDRAS, REMOJADO UN ALMIBAR CASERO DE CAFÉ ESPRESSO. RELLENA CON GANACHE DE CHOCOLATE SEMI-AMRGO Y CREMA MANTEQUILLA DE CAFÉ", 
      category: "Trozos de torta",
  },
    {
    name: "TIRAMISU",
    img: menu2,
    price: "$4.250",
    /* description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Trozos de torta",
  },
    {
    name: "CHEESE CAKE DE MARACUYÁ",
    img: menu2,
    price: "$4.250",
    /* description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Trozos de torta",
  },
    {
    name: "TORTA MATILDE",
    img: menu2,
    price: "$4.950",
    description: "BIZCOCHO HUMEDO DE CHOCOLATE CON CREMA PARIS DE CHOCOLATE", 
     category: "Trozos de torta",
  },
    {
    name: "KUCHEN NUEZ",
    img: menu2,
    price: "$4.150",
    /* description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Trozos de torta",
  },
]

export const crepesDulces = [
  {
    name: "CRÊPE CANELA-AZÚCAR",
    img: menu2,
    price: "$3.300",
    /* description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Crepes Dulces",
  },
    {
    name: "CRÊPE LIMÓN Y AZÚCAR",
    img: menu2,
    price: "$3.850",
    /* description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Crepes Dulces",
  },
   {
    name: "CRÊPE MERMELADA FRAMBUESA",
    img: menu2,
    price: "$3.500",
    /* description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Crepes Dulces",
  },
 {
    name: "CRÊPE MERMELADA FRUTILLA",
    img: menu2,
    price: "$3.500",
    /* description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Crepes Dulces",
  },
   {
    name: "CRÊPE MERMELADA DURAZNO",
    img: menu2,
    price: "$3.500",
    /* description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Crepes Dulces",
  },
    {
    name: "CRÊPE SALSA CHOCOLATE",
    img: menu2,
    price: "$4.850",
    /* description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Crepes Dulces",
  },
   {
    name: "CRÊPE SALSA CARAMELO",
    img: menu2,
    price: "$4.850",
    /* description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Crepes Dulces",
  },
     {
    name: "CRÊPE SALSA FRAMBUESA",
    img: menu2,
    price: "$4.850",
    /* description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Crepes Dulces",
  },
 {
    name: "CRÊPE MIEL",
    img: menu2,
    price: "$3.500",
    /* description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Crepes Dulces",
  },
   {
    name: "CRÊPE BANANA-CHOCOLATE",
    img: menu2,
    price: "$5.800",
    /* description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Crepes Dulces",
  },
     {
    name: "CRÊPE BANANA-LECHE CONDENSADA",
    img: menu2,
    price: "$5.900",
    /* description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Crepes Dulces",
  },
  {
    name: "CRÊPE BANANA-MANJAR",
    img: menu2,
    price: "$5.800",
    /* description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Crepes Dulces",
  },
 {
    name: "CRÊPE FRUTOS ROJOS",
    img: menu2,
    price: "$5.800",
    /* description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Crepes Dulces",
  },
  {
    name: "CRÊPE CREMA PASTELERA-FRUTOS ROJOS",
    img: menu2,
    price: "$5.900",
    /* description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Crepes Dulces",
  },
  {
    name: "CRÊPE LECHE CONDENSADA-FRUTOS ROJOS",
    img: menu2,
    price: "$5.900",
    /* description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Crepes Dulces",
  },
    {
    name: "CRÊPE MANJAR",
    img: menu2,
    price: "$5.350",
    /* description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Crepes Dulces",
  },
   {
    name: "CRÊPE MANJAR-CREMA PASTELERA",
    img: menu2,
    price: "$5.800",
    /* description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Crepes Dulces",
  },
   {
    name: "CRÊPE MANJAR-FRUTOS ROJOS",
    img: menu2,
    price: "$5.900",
    /* description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Crepes Dulces",
  },
    {
    name: "CRÊPE NUTELLA",
    img: menu2,
    price: "$6.350",
    /* description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Crepes Dulces",
  },
  {
    name: "CRÊPE NUTELLA-BANANA",
    img: menu2,
    price: "$6.850",
    /* description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Crepes Dulces",
  },
   {
    name: "CRÊPE NUTELLA-FRUTOS ROJOS",
    img: menu2,
    price: "$6.850",
    /* description: "MASA SABLE, RELLENO UN MEZCLA ELABORADA CON CRMEA, AZUCAR, HUEVOS Y FRAMBUSAS FRESCAS",  */
     category: "Crepes Dulces",
  },
{
    name: "CRÊPE SUZETTE",
    img: menu2,
    price: "$6.650",
    description: "UN CLASICO FRANCES!!! CREPE PREPARADO EN UN CARAMEL DE NARANJA Y FLAMBEADA CON LICOR DE NARANJA", 
     category: "Crepes Dulces",
  },
    {
    name: "FLORENCE",
    img: menu2,
    price: "$7.250",
    description: "CRÉPE RELLENO CON CREMA PASTELERA Y FRUTOS ROJOS ACOMPAÑADO CON HELADO DE PISTACHO", 
     category: "Crepes Dulces",
  },
     {
    name: "ADÈLE",
    img: menu2,
    price: "$7.500",
    description: "CREPE RELLENO CON NUTELLA, LECHE CONDENSADA Y CHISPAS DE CHOCOLATE, ACOMPAÑADO CON HELADO DE VAINILLA", 
     category: "Crepes Dulces",
  },
    {
    name: "BELLE HÉLÈNE",
    img: menu2,
    price: "$7.950",
    description: "CREPE RELLENO CON PERAS CARAMELIZADAS, ACOMPAÑADO CON SALSA DE CHOCOLATE, CREMA CHANTILLY Y HELADO DE VAINILLA", 
     category: "Crepes Dulces",
  },
   {
    name: "MADININA",
    img: menu2,
    price: "$7.250",
    description: "CREPE RELLLENO CON RODAJAS DE PLATANOS CARAMELIZADAS Y FLAMBEADAS CON RON", 
     category: "Crepes Dulces",
  },
   {
    name: "MIAM-MIAM",
    img: menu2,
    price: "$7.250",
    description: "CREPE RELLENO CON MANJAR Y RODAJAS DE PLATANO, ACOMPAÑADO CON HELADO DE CHOCOLATE", 
     category: "Crepes Dulces",
  },
     {
    name: "MOULIN ROUGE",
    img: menu2,
    price: "$7.150",
    description: "CREPE RELLENO CON FRUTOS ROJOS Y SU SALSA CASERA ACOMPAÑADO CON HELADO DE VAINILLA", 
     category: "Crepes Dulces",
  },
  {
    name: "OREO",
    img: menu2,
    price: "$7.450",
    description: "CREPE RELLENO CON NUTELLA, GALLETAS DE OREO ACOMPAÑADO CON HELADO DE VAINILLA", 
     category: "Crepes Dulces",
  },
    {
    name: "PETIT NINO",
    img: menu2,
    price: "$7.250",
    description: "CREPE RELLENO CON CREMA DE CASTAÑAS, CUBIERTO CON SALSA DE CHOCOLATE Y CREMA CHANTILLY", 
     category: "Crepes Dulces",
  },
     {
    name: "TATIN",
    img: menu2,
    price: "$7.250",
    description: "CREPE RELLENO CON MANZANAS CARAMELIZADAS, CUBIERTO CON MIEL, NUECES PARTIDAS Y HELADO DE VAINILLA", 
     category: "Crepes Dulces",
  },
]
export const crepesSalados = [
  {
    name: "GALETTE JAMÓN-QUESO",
    img: menu2,
    price: "$5.350",
    description: "", 
     category: "Crepes Salados",
  },
 {
    name: "GALETTE JAMÓN QUESO CHAMPIÑONES",
    img: menu2,
    price: "$6.250",
    description: "", 
     category: "Crepes Salados",
  },
 {
    name: "GALETTE JAMÓN-HUEVO",
    img: menu2,
    price: "$5.300",
    description: "", 
     category: "Crepes Salados",
  },
 {
    name: "GALETTE JAMÓN-CHAMPIÑONES",
    img: menu2,
    price: "$5.650",
    description: "", 
     category: "Crepes Salados",
  },
 {
    name: "GALETTE HUEVO-QUESO",
    img: menu2,
    price: "$5.300",
    description: "", 
     category: "Crepes Salados",
  },
   {
    name: "GALETTE HUEVO-CHAMPIÑONES",
    img: menu2,
    price: "$5.550",
    description: "", 
     category: "Crepes Salados",
  },
   {
    name: "GALETTE QUESO-CHAMPIÑONES",
    img: menu2,
    price: "$6.250",
    description: "", 
     category: "Crepes Salados",
  },
   {
    name: "GAËLITO",
    img: menu2,
    price: "$6.250",
    description: "CREPE DE HARINA INTEGRAL RELLENO CON HUEVO, SALSA BANCA CASERA, JAMON Y QUESO", 
     category: "Crepes Salados",
  },
     {
    name: "DIJON",
    img: menu2,
    price: "$6.250",
    description: "CREPE DE HARINA INTEGRAL RELLENO CON LAMINAS DE PECHUGA DE POLLO, CHAMPIÑONES SATEADOS, CEBOLLA CARAMELIZADA Y SALSA DE MOSTAZA DIJON", 
     category: "Crepes Salados",
  },
 {
    name: "LA PARISIENNE",
    img: menu2,
    price: "$7.400",
    description: "CREPE DE HARINA INTEGRAL RELLENO CON JAMON, QUESO RALLADO, CHAMPIÑONES SALTEADOS Y SALSA DE TOMATES CASERA", 
     category: "Crepes Salados",
  },
 {
    name: "DON LUCO",
    img: menu2,
    price: "$7.850",
    description: "CREPE DE HARINA INTEGRAL RELLENO CON CHURASCO DE ASIENTO NACIONAL, QUESO RALLADO Y CEBOLLA CARAMELIZADA.", 
     category: "Crepes Salados",
  },
 {
    name: "MADAME CHACARERA",
    img: menu2,
    price: "$8.250",
    description: "CREPE DE HARINA INTEGRAL RELLENO CON CHURASCO DE ASIENTO NACIONAL, TOMATES, POROTOS VERDES Y AJI (opcional).", 
     category: "Crepes Salados",
  },
   {
    name: "POULET",
    img: menu2,
    price: "$8.250",
    description: "CREPE DE HARINA INTEGRAL RELLENO CON LAMINAS DE PECHUGA DE POLLO, CEBOLLA CARAMELIZADA, MORONES SALTEADOS, SALSA BLANCA CASERA Y QUESO RALLADO.", 
     category: "Crepes Salados",
  },
   {
    name: "LA DORDOGNE",
    img: menu2,
    price: "$7.950",
    description: "CREPE DE HARINA INTEGRAL RELLENO CON CHAMPIÑONES SALTEADOS, CEBOLLA CARAMELIZADA, QUESO RALLADO Y SALSA BLANCA CASERA.", 
     category: "Crepes Salados",
  },
   {
    name: "LA VEGGI",
    img: menu2,
    price: "$7.650",
    description: "CREPE DE HARINA INTEGRAL RELLENO CONSALSA DE TOMATES CASERA, CHAMPIÑONES SALTEADOS, CEBOLLA CARAMELIZADA, CHOCLO, MORONES SALTEADOS.", 
     category: "Crepes Salados",
  },
   {
    name: "MEGÈVE",
    img: menu2,
    price: "$7.750",
    description: "CREPE DE HARINA INTEGRAL RELLENO CON JAMON DE PIERNA, TOCINO, CEBOLLA CARAMELIZADA, QUESO RALLADO Y SALSA BLANCA CASERA.", 
     category: "Crepes Salados",
  },
  {
    name: "PÍO PÍO",
    img: menu2,
    price: "$8.350",
    description: "CREPE DE HARINA INTEGRAL RELLENO CON LAMINAS DE PECHUGA DE POLLO, CHAMPIÑONES FRESCOS SALTEADOS, TOCINO Y SALSA BLANCA CASERA.", 
     category: "Crepes Salados",
  },
  {
    name: "PAYSANNE",
    img: menu2,
    price: "$8.250",
    description: "CREPE DE HARINA INTEGRAL RELLENO CON HUEVO, CHAMPIÑONES FRESCOS SALTEADOS, TOCINO, SALSA BLANCA CASERA Y PEREJIL.", 
     category: "Crepes Salados",
  },
  {
    name: "TOMATICÁN",
    img: menu2,
    price: "$8.250",
    description: "CREPE DE HARINA INTEGRAL RELLENO CON CHURRASCO DE ASIENTO NACIONAL, CEBOLLA CARAMELIZADA, CHOCLO, SALSA DE TOMATE CASERA Y HUEVO FRITO.", 
     category: "Crepes Salados",
  },
  {
    name: "MECHADA BOLOGNESA",
    img: menu2,
    price: "$8.250",
    description: "CREPE DE HARINA INTEGRAL RELLENO CON CARNE MECHADA, SALSA DE TOMATE CASERA, SALSA BALNCA CASERA Y QUESO RALLADO.", 
     category: "Crepes Salados",
  },
 {
    name: "SAINT TROPEZ",
    img: menu2,
    price: "$8.950",
    description: "CREPE DE HARINA INTEGRAL RELLENO CON CAMARONES, CEBOLLA CARAMELIZADA, QUESO RALLADO Y SALSA BLANCA CASERA.", 
     category: "Crepes Salados",
  },
 {
    name: "ESCANDINAVA",
    img: menu2,
    price: "$8.950",
    description: "CREPE DE HARINA INTEGRAL RELLENO CON SALMON, CREMA, CIBOULETTE Y LIMON (opcional).", 
     category: "Crepes Salados",
  },
]

export const waffles = [
   {
    name: "WAFFLE AZUCAR FLOR",
    img: menu2,
    price: "$4.850",
    description: "", 
     category: "Waffles",
  },
   {
    name: "WAFFLE SALSA CHOCOLATE",
    img: menu2,
    price: "$5.150",
    description: "", 
     category: "Waffles",
  },
  {
    name: "WAFFLE SALSA CARAMELO",
    img: menu2,
    price: "$5.150",
    description: "", 
     category: "Waffles",
  },
  {
    name: "WAFFLE SALSA FRAMBUESA",
    img: menu2,
    price: "$5.150",
    description: "", 
     category: "Waffles",
  },
    {
    name: "WAFFLE MANJAR",
    img: menu2,
    price: "$5.500",
    description: "", 
     category: "Waffles",
  },
    {
    name: "WAFFLE FRUTOS ROJOS",
    img: menu2,
    price: "$6.050",
    description: "", 
     category: "Waffles",
  },
      {
    name: "WAFFLE CREMA PASTELERA-MANJAR",
    img: menu2,
    price: "$6.050",
    description: "", 
     category: "Waffles",
  },
  {
    name: "WAFFLE BANANA-MANJAR",
    img: menu2,
    price: "$6.100",
    description: "", 
     category: "Waffles",
  },
  {
    name: "WAFFLE MANJAR-FRUTOS ROJOS",
    img: menu2,
    price: "$6.150",
    description: "", 
     category: "Waffles",
  },
    {
    name: "WAFFLE BANANA-CHOCOLATE",
    img: menu2,
    price: "$6.100",
    description: "", 
     category: "Waffles",
  },
      {
    name: "WAFFLE LECHE CONDENSADA-BANANA",
    img: menu2,
    price: "$7.200",
    description: "", 
     category: "Waffles",
  },
  {
    name: "WAFFLE LECHE CONDENSADA-FRUTOS ROJOS",
    img: menu2,
    price: "$7.150",
    description: "", 
     category: "Waffles",
  },
  {
    name: "WAFFLE NUTELLA",
    img: menu2,
    price: "$6.650",
    description: "", 
     category: "Waffles",
  },
 {
    name: "WAFFLE NUTELLA-BANANA",
    img: menu2,
    price: "$7.200",
    description: "", 
     category: "Waffles",
  },
 {
    name: "WAFFLE NUTELLA-FRUTOS ROJOS",
    img: menu2,
    price: "$7.150",
    description: "", 
     category: "Waffles",
  },
 {
    name: "WAFFLE NUTELLA-OREO-CHANTILLY",
    img: menu2,
    price: "$7.300",
    description: "", 
     category: "Waffles",
  },
 {
    name: "WAFFLE BANANA SPLIT",
    img: menu2,
    price: "$9.050",
    description: "WAFFLE CON PLATANO, HELADO DE VAINILLA, HALDO DE CHOCOLATE, HELADO DE FRUTILLA, SALSA DE CHOCOLATE Y CREMA CHANTILLY", 
     category: "Waffles",
  }
]
export const sandwiches = [
   {
    name: "AVE MAYO",
    img: menu2,
    price: "$6.050",
    description: "SANDWICH EN PAN DE MOLDE (BLANCO O INTEGRAL) RELLENO CON PECHUGA DE POLLO LAMINADA Y MAYONESA", 
     category: "Sandwiches",
  },
   {
    name: "AVE PIMIENTÓN",
    img: menu2,
    price: "$6.350",
    description: "SANDWICH EN PAN DE MOLDE (BLANCO O INTEGRAL) RELLENO CON PECHUGA DE POLLO LAMINADA, PASTA MORONES CASERA Y MAYONESA", 
     category: "Sandwiches",
  },
  {
    name: "AVE PALTA",
    img: menu2,
    price: "$6.850",
    description: "SANDWICH EN PAN DE MOLDE (BLANCO O INTEGRAL) RELLENO CON PECHUGA DE POLLO LAMINADA, PALTA MOLIDA Y MAYONESA", 
     category: "Sandwiches",
  },
  {
    name: "BARROS LUCO",
    img: menu2,
    price: "$7.550",
    description: "SANDWICH EN PAN CASERO RELLENO CON CHURASCO DE ASIENTO NACIONAL Y QUESO DERETIDO", 
     category: "Sandwiches",
  },
  {
    name: "CHACARERO",
    img: menu2,
    price: "$7.450",
    description: "", 
     category: "Sandwiches",
  },
    {
    name: "CHURASCO ITALIANO",
    img: menu2,
    price: "$8.350",
    description: "SANDWICH EN PAN DE PAPA CASERO, CHURRASCO (ANSIENTO NACIONAL), PALTA MOLIDA Y TOMATE", 
     category: "Sandwiches",
  },
    {
    name: "BURGER LA RUSIA",
    img: menu2,
    price: "$11.500",
    description: "SANDWICH EN PAN DE PAPAS RELLENO CON HAMURGUESA CASERA, QUESO CHEDDAR, CEBOLLA MORADA, LECHUGA Y SALSA BARBECUE. PORCION INDIVIDUAL DE PAPAS FRITAS CASERAS", 
     category: "Sandwiches",
  },
   {
    name: "BURGER OLALAAAA",
    img: menu2,
    price: "$11.500",
    description: "SANDWICHE EN PAN DE PAPA, HABURGFUESA CASER, CEBOLLA CARAMILAZADA, TOCINO, CHAMPIÑONES Y SALSA DE QUESO AZUL. PORCION INDIVIDUAL DE PAPAS FRITAS CASERAS", 
     category: "Sandwiches",
  },
   {
    name: "CLUB SANDWICH ELEY",
    img: menu2,
    price: "$10.850",
    description: "SANWICH EN PAN CASERO, LAMINAS DE PECHUGA DE POLLO, TOCINO, TOMATE, LECHUGA, JAMON DE PIERNA Y PASTA DE HUEVO CON MAYONESA", 
     category: "Sandwiches",
  },
  {
    name: "COTOTO",
    img: menu2,
    price: "$7.950",
    description: "SANDWICH EN PAN DE PAPAS RELLENO CON CHURASCOS DE ASIENTO NACIONAL, CEBOLLA CARAMELIZADA, TOCINO Y QUESO CALIENTE", 
     category: "Sandwiches",
  },
    {
    name: "DESMECHADO ITALIANO",
    img: menu2,
    price: "$7.950",
    description: "SANDWICH EN PAN DE PAPA CASERO, CARNE MECHADA, PALTA MOLIDA Y TOMATE", 
     category: "Sandwiches",
  },
    {
    name: "EIFFEL",
    img: menu2,
    price: "$8.250",
    description: "SANDWICH EN PAN DE MOLDE CASERO EMBEBIDO CON UN MEZCLA DE HUEVO Y CREMA, RELLENO CON JAMON DE PIERNA Y QUESO CALIENTE", 
     category: "Sandwiches",
  },
    {
    name: "GRINGA DESMECHADA",
    img: menu2,
    price: "$11.500",
    description: "SANDWICH EN PAN DE PAPA CASERO, CARNE MECHADA, CEBOLLA CARAMELIZADA, TOCINO, HUEVO FRITO, QUESO CALIENTE, SALSA BARBECUE Y PORCION INDIVIDUAL DE PAPAS FRITAS CASERAS", 
     category: "Sandwiches",
  },
    {
    name: "PACIFICO",
    img: menu2,
    price: "$8.200",
    description: "SANDWICH DE PAN CASERO, FILETE DE SALMON COCIDO, QUESO CREMA, TOQUE JUGO DE LIMON NATURAL Y CIBOULETTE", 
     category: "Sandwiches",
  },
    {
    name: "TÍO CATO",
    img: menu2,
    price: "$8.200",
    description: "SANDWICH EN PAN CASERO RELLENO CON MOZZARELLA FIOR DI LATTE TRANZADA, TOMATE, LECHUGA Y PESTO CASERO", 
     category: "Sandwiches",
  },

]

export const ppff = [
   {
    name: "FRENCH POMME DE TERRE",
    img: menu2,
    price: "$8.000",
    description: "1/2 KG DE PAPAS FRITAS CASERAS CON SALSA DE QUESO AZUL Y CEBOLLA MORADA EN PLUMA", 
     category: "Papas Fritas",
  },
    {
    name: "ITALIAN POMME DE TERRE",
    img: menu2,
    price: "$9.050",
    description: "1/2 KG DE PAPAS FRITAS CASERAS CON MOZZARELA TRENZADA, SALSA DE TOMATE CASERA Y PESTO CASERO", 
     category: "Papas Fritas",
  },
   {
    name: "MILENIAL POMME DE TERRE",
    img: menu2,
    price: "$7.750",
    description: "1/2 KG DE PAPAS FRITAS CASERAS CON SALSA CASERA DE QUESO CHEDDAR Y TOCINO", 
     category: "Papas Fritas",
  },
  {
    name: "PORCIÓN DE PAPAS FRITAS",
    img: menu2,
    price: "$4.500",
    description: "1/2 KG DE PAPAS FRITAS CASERAS", 
     category: "Papas Fritas",
  },
]

export const ensaladas = [
   {
    name: "ENSALADA VEGETARIANA",
    img: menu2,
    price: "$7.250",
    description: "LECHUGA COSTRINA, TOMATES, PALMITOS, MORRONES SALTEADOS, CHOCLO Y POROTOS VERDES", 
     category: "Ensaladas",
  },
   {
    name: "ENSALADA MEDITERRANÉA",
    img: menu2,
    price: "$7.950",
    description: "LECHUGA COSTRINA, ATÚN, FONDOS DE ALCACHOFAS, TOMATE, QUESILLO Y ACEITUNAS", 
     category: "Ensaladas",
  },
    {
    name: "ENSALADA GURU-GURU",
    img: menu2,
    price: "$8.250",
    description: "LECHUGA COSTRINA, LAMINAS DE PECHUGAS POLLO, PIMENTON SALTEADO Y CHOCLO", 
     category: "Ensaladas",
  },
     {
    name: "ENSALADA CESARITO",
    img: menu2,
    price: "$8.650",
    description: "LECHUGA COSTRINA, LAMINAS DE PECHUGAS DE POLLO, QUESO Y SALSA CESAR CASERA", 
     category: "Ensaladas",
  },
     {
    name: "ENSALADA CAMPESTRE",
    img: menu2,
    price: "$8.750",
    description: "LECHUGA COSTRINA, LAMINAS DE PECHUGA DE POLLO, PALTA, HUEVO, MORONES SALTEADOS, TOMATE Y CHOCLO", 
     category: "Ensaladas",
  },
     {
    name: "ENSALADA LA MER",
    img: menu2,
    price: "$9.250",
    description: "LECHUGA COSTRINA, CAMARONES SALTEADOS, SÁLMON, SALA DE YOGURTH CON CIBOULETTE", 
     category: "Ensaladas",
  },
]

export const huevos = [
  {
    name: "HUEVO CON JAMÓN",
    img: menu2,
    price: "$3.250",
    description: "CON TOSTADAS EN PAN DE MOLDE BLANCO O INTEGRAL, A ELECCION", 
     category: "Paila de Huevos",
  },
    {
    name: "HUEVOS CON QUESO",
    img: menu2,
    price: "$3.900",
    description: "CON TOSTADAS EN PAN DE MOLDE BLANCO O INTEGRAL, A ELECCION", 
     category: "Paila de Huevos",
  },
  {
    name: "HUEVOS CON TOCINO",
    img: menu2,
    price: "$4.100",
    description: "CON TOSTADAS EN PAN DE MOLDE BLANCO O INTEGRAL, A ELECCION", 
    category: "Paila de Huevos",
  },
  {
    name: "HUEVOS REVUELTOS",
    img: menu2,
    price: "$3.600",
    description: "CON TOSTADAS EN PAN DE MOLDE BLANCO O INTEGRAL, A ELECCION", 
    category: "Paila de Huevos",
  },
]

export const omelettes = [
    {
    name: "OMELETTE",
    img: menu2,
    price: "$5.750",
    description: "HUEVOS BATIDOS Y COCINADOS AL PUNTO, SERVIDO CON PAN TOSTADO Y UNA PEQUEÑA ENSALADA.", 
    category: "Omelettes",
  },
    {
    name: "OMELETTE CHAMPIÑONES",
    img: menu2,
    price: "$6.450",
    description: "HUEVOS BATIDOS Y COCINADOS AL PUNTO, RELLENOS CON CHAMPIÑONES. SERVIDO CON PAN TOSTADO Y UNA PEQUEÑA ENSALADA.", 
    category: "Omelettes",
  },
     {
    name: "OMELETTE QUESO",
    img: menu2,
    price: "$6.200",
    description: "HUEVOS BATIDOS Y COCINADOS AL PUNTO, RELLENOS CON QUESO, SERVIDO CON PAN TOSTADO Y UNA PEQUEÑA ENSALADA.", 
    category: "Omelettes",
  },
   {
    name: "OMELETTE CHAMPIÑON-QUESO",
    img: menu2,
    price: "$6.800",
    description: "HUEVOS BATIDOS Y COCINADOS AL PUNTO, RELLENOS CON QUESO Y CHAMPIÑONES, SERVIDO CON PAN TOSTADO Y UNA PEQUEÑA ENSALADA.", 
    category: "Omelettes",
  },
   {
    name: "OMELETTE JAMÓN",
    img: menu2,
    price: "$6.300",
    description: "HUEVOS BATIDOS Y COCINADOS AL PUNTO, RELLENOS CON JAMÓN, SERVIDO CON PAN TOSTADO Y UNA PEQUEÑA ENSALADA.", 
    category: "Omelettes",
  },
   {
    name: "OMELETTE JAMON-CHAMPIÑON",
    img: menu2,
    price: "$6.200",
    description: "", 
    category: "Omelettes",
  },
 {
    name: "OMELETTE JAMÓN-QUESO",
    img: menu2,
    price: "$6.450",
    description: "HUEVOS BATIDOS Y COCINADOS AL PUNTO, RELLENOS CON JAMÓN Y QUESO, SERVIDO CON PAN TOSTADO Y UNA PEQUEÑA ENSALADA.", 
    category: "Omelettes",
  },
 {
    name: "OMELETTE JAMON-QUESO-CHAMPIÑON",
    img: menu2,
    price: "$7.150",
    description: "HUEVOS BATIDOS Y COCINADOS AL PUNTO, RELLENOS CON JAMÓN, QUESO Y CHAMPIÑONES SERVIDO CON PAN TOSTADO Y UNA PEQUEÑA ENSALADA.", 
    category: "Omelettes",
  },
 {
    name: "OMELETTE TOCINO",
    img: menu2,
    price: "$7.100",
    description: "HUEVOS BATIDOS Y COCINADOS AL PUNTO, RELLENOS CON JAMÓN, QUESO Y CHAMPIÑONES SERVIDO CON PAN TOSTADO Y UNA PEQUEÑA ENSALADA.", 
    category: "Omelettes",
  },
  
]

export const sellados = [
    {
    name: "SELLADO QUESO",
    img: menu2,
    price: "$3.750",
    description: "PAN DE MOLDE CASERO BLANCO O INTEGRAL SELLADO A LA PLANCHA, RELLENO CON QUESO DERRETIDO.", 
    category: "Sellados",
  }, 
  {
    name: "SELLADO JAMÓN-CHAMPIÑÓN",
    img: menu2,
    price: "$4.300",
    description: "PAN DE MOLDE CASERO BLANCO O INTEGRAL SELLADO A LA PLANCHA, RELLENO CON JAMÓN DE PIERNA Y CHAMPIÑONES SALTEADOS", 
    category: "Sellados",
  },
    {
    name: "SELLADO QUESO-CHAMPIÑÓN",
    img: menu2,
    price: "$4.300",
    description: "PAN DE MOLDE CASERO BLANCO O INTEGRAL SELLADO A LA PLANCHA, RELLENO CON QUESO DERRETIDO Y CHAMPIÑONES SALTEADOS.", 
    category: "Sellados",
  },
 {
    name: "SELLADO JAMÓN-QUESO",
    img: menu2,
    price: "$4.300",
    description: "PAN DE MOLDE CASERO BLANCO O INTEGRAL SELLADO A LA PLANCHA, RELLENO CON JAMÓN DE PIERNA Y QUESO DERRETIDO.", 
    category: "Sellados",
  },
 {
    name: "SELLADO JAMÓN-QUESO-CHAMPIÑON",
    img: menu2,
    price: "$5.150",
    description: "PAN DE MOLDE CASERO BLANCO O INTEGRAL SELLADO A LA PLANCHA, RELLENO CON JAMÓN DE PIERNA, QUESO DERRETIDO Y CHAMPIÑONES.", 
    category: "Sellados",
  },
   {
    name: "SELLADO JAMÓN-QUESO-TOMATE",
    img: menu2,
    price: "$4.800",
    description: "PAN DE MOLDE CASERO BLANCO O INTEGRAL SELLADO A LA PLANCHA, RELLENO CON JAMÓN DE PIERNA Y QUESO DERRETIDO Y TOMATE.", 
    category: "Sellados",
  },
]

export const tostadas = [
    {
    name: "TOSTADAS C/ MANTEQUILLA",
    img: menu2,
    price: "$2.900",
    description: "", 
    category: "Tostadas",
  },
  {
    name: "TOSTADAS C/ MANTEQUILLA Y MERMELADA",
    img: menu2,
    price: "$3.850",
    description: "", 
    category: "Tostadas",
  },
  {
    name: "TOSTADAS C/ MERMELADA",
    img: menu2,
    price: "$3.600",
    description: "", 
    category: "Tostadas",
  },
  {
    name: "TOSTADAS C/ MIEL",
    img: menu2,
    price: "$3.800",
    description: "", 
    category: "Tostadas",
  },
  {
    name: "TOSTADAS C/ PALTA",
    img: menu2,
    price: "$3.950",
    description: "", 
    category: "Tostadas",
  },
  {
    name: "TOSTADAS C/ QUESILLO",
    img: menu2,
    price: "$3.350",
    description: "", 
    category: "Tostadas",
  },
  {
    name: "TOSTADAS FRANCESAS",
    img: menu2,
    price: "$6.950",
    description: "", 
    category: "Tostadas",
  },
]

export const jugoBebida = [
    {
    name: "AGUA MINERAL CON | SIN GAS",
    img: menu2,
    price: "$1.900",
    description: "", 
    category: "Jugos y Bebidas",
  },
  {
    name: "Bebidas",
    img: menu2,
    price: "$2.500",
    description: "Coca-cola, Coca zero, Fanta, Sprite, Sprite zero, Ginger Ale, Ginger Ale Light, Limon soda", 
    category: "Jugos y Bebidas",
  },
  {
    name: "Jugos Naturales",
    img: menu2,
    price: "$3.650",
    description: "Piña, Arandano, Frambuesa, Mango, Frutilla", 
    category: "Jugos y Bebidas",
  },
  {
    name: "Nectar Guallarauco",
    img: menu2,
    price: "$2.350",
    description: "Mango, Naranja", 
    category: "Jugos y Bebidas",
  },
  {
    name: "Nectares Tetra | Soda",
    img: menu2,
    price: "$950",
    description: "Piña, Naranja, Manzana, Durazno | Soda", 
    category: "Jugos y Bebidas",
  },
   {
    name: "TONICA",
    img: menu2,
    price: "$2.500",
    description: "", 
    category: "Jugos y Bebidas",
  },
]

export const limonadas = [
   {
    name: "LIMONADA CLÁSICA",
    img: menu2,
    price: "$3.650",
    description: "", 
    category: "Limonadas",
  },
  {
    name: "LIMONADA ALBAHACA",
    img: menu2,
    price: "$4.500",
    description: "", 
    category: "Limonadas",
  },
  {
    name: "LIMONADA ARANDANO",
    img: menu2,
    price: "$4.500",
    description: "", 
    category: "Limonadas",
  },
  {
    name: "LIMONADA JENGIBRE Y MENTA",
    img: menu2,
    price: "$4.500",
    description: "", 
    category: "Limonadas",
  },
]

export const cervezas = [
 {
    name: "CORONA",
    img: menu2,
    price: "$2.750",
    description: "", 
    category: "Cervezas",
  },
   {
    name: "AUSTRAL CALAFATE",
    img: menu2,
    price: "$3.250",
    description: "", 
    category: "Cervezas",
  },
   {
    name: "AUSTRAL PATAGONIA",
    img: menu2,
    price: "$3.250",
    description: "", 
    category: "Cervezas",
  },
   {
    name: "KUNTSMANN BOCK",
    img: menu2,
    price: "$3.250",
    description: "", 
    category: "Cervezas",
  },
  {
    name: "KUNTSMANN LAGER",
    img: menu2,
    price: "$3.250",
    description: "", 
    category: "Cervezas",
  },
    {
    name: "KUNTSMANN LAGER SIN FILTRAR",
    img: menu2,
    price: "$3.250",
    description: "", 
    category: "Cervezas",
  },
    {
    name: "KUNTSMANN TOROBAYO",
    img: menu2,
    price: "$3.250",
    description: "", 
    category: "Cervezas",
  },
    {
    name: "STELLA ARTOIS SIN ALCOHOL",
    img: menu2,
    price: "$3.350",
    description: "", 
    category: "Cervezas",
  },
    {
    name: "LUTHIER DESIERTO",
    img: menu2,
    price: "$4.050",
    description: "CERVEZA RUBIA AL ESTILO ALEMAN KÖLSCH", 
    category: "Cerveza Artesanal",
  },
    {
    name: "LUTHIER CAJA NEGRA",
    img: menu2,
    price: "$4.050",
    description: "CERVEZA NEGRA AL ESTILO INGLÉS PORTER", 
    category: "Cerveza Artesanal",
  },
   {
    name: "LUTHIER LUNA ROJA",
    img: menu2,
    price: "$4.050",
    description: "UN CERVEZA ROJA AL ESTILO IRLANDES", 
    category: "Cerveza Artesanal",
  },
   {
    name: "LUTHIER VITAMINA",
    img: menu2,
    price: "$4.050",
    description: "CERVEZA RUBIS CON TOQUE DE CRANBERRY", 
    category: "Cerveza Artesanal",
  },
]

export const tragos = [
  {
    name: "SHOT DE LICOR",
    img: menu2,
    price: "$3.100",
    description: "", 
    category: "Tragos",
  },
  {
    name: "COKTAIL DEL DIA",
    img: menu2,
    price: "$4.550",
    description: "", 
    category: "Tragos",
  },
   {
    name: "AMARETTO SOUR",
    img: menu2,
    price: "$3.700",
    description: "", 
    category: "Tragos",
  },
   {
    name: "APEROL SPRITZ",
    img: menu2,
    price: "$5.700",
    description: "", 
    category: "Tragos",
  },
  {
    name: "COPA ESPUMANTE",
    img: menu2,
    price: "$3.400",
    description: "", 
    category: "Tragos",
  },
  {
    name: "JENGIBRE SOUR",
    img: menu2,
    price: "$4.800",
    description: "", 
    category: "Tragos",
  },
 {
    name: "MANGO SOUR",
    img: menu2,
    price: "$4.800",
    description: "", 
    category: "Tragos",
  },
{
    name: "MOJITO CUBANO",
    img: menu2,
    price: "$5.350",
    description: "", 
    category: "Tragos",
  },
 {
    name: "MOJITO ARÁNDANO",
    img: menu2,
    price: "$6.300",
    description: "", 
    category: "Tragos",
  },
 {
    name: "MOJITO FRAMBUESA",
    img: menu2,
    price: "$6.300",
    description: "", 
    category: "Tragos",
  },
 {
    name: "PISCO SOUR",
    img: menu2,
    price: "$4.400",
    description: "", 
    category: "Tragos",
  },
{
    name: "WHISKY SOUR",
    img: menu2,
    price: "$5.500",
    description: "", 
    category: "Tragos",
  },
  {
    name: "ALTO DEL CARMEN 40°",
    img: menu2,
    price: "$4.750",
    description: "", 
    category: "Tragos",
  },
  {
    name: "PISCO SOUR CATEDRAL",
    img: menu2,
    price: "$7.300",
    description: "", 
    category: "Tragos",
  },
  {
    name: "RAMAZZOTI SPRITZ",
    img: menu2,
    price: "$5.700",
    description: "", 
    category: "Tragos",
  },
{
    name: "ALMENDRADO",
    img: menu2,
    price: "$5.800",
    description: "", 
    category: "Tragos",
  },
{
    name: "NEGRONI",
    img: menu2,
    price: "$6.700",
    description: "", 
    category: "Tragos",
  },
]

export const helados = [
  {
    name: "BANANA SPLIT",
    img: menu2,
    price: "$6.550",
    description: "", 
    category: "Helados",
  },
{
    name: "CAFÉ HELADO",
    img: menu2,
    price: "$5.450",
    description: "", 
    category: "Helados",
  },
{
    name: "CHOCOLATE HELADO",
    img: menu2,
    price: "$5.250",
    description: "", 
    category: "Helados",
  },
{
    name: "CHOCOLÉ",
    img: menu2,
    price: "$6.150",
    description: "", 
    category: "Helados",
  },
  {
    name: "COPA DE UN SABOR",
    img: menu2,
    price: "$2.950",
    description: "", 
    category: "Helados",
  },

{
    name: "COPA DE DOS SABORES",
    img: menu2,
    price: "$3.450",
    description: "", 
    category: "Helados",
  },
{
    name: "COPA DE TRES SABORES",
    img: menu2,
    price: "$4.150",
    description: "", 
    category: "Helados",
  },
{
    name: "DAMA BLANCA 2.0",
    img: menu2,
    price: "$6.150",
    description: "", 
    category: "Helados",
  },
{
    name: "PÊCHE MELBA",
    img: menu2,
    price: "$6.150",
    description: "", 
    category: "Helados",
  },
{
    name: "POIRE BELLE HÉLÈNE",
    img: menu2,
    price: "$6.150",
    description: "", 
    category: "Helados",
  },
]

export const milkShake = [
  {
    name: "MILK SHAKE CHOCOLATE Y BANANA",
    img: menu2,
    price: "$3.800",
    description: "", 
    category: "Milk Shake",
  },
 {
    name: "MILK SHAKE VAINILLA Y ARÁNDANO",
    img: menu2,
    price: "$3.800",
    description: "", 
    category: "Milk Shake",
  },
 {
    name: "MILK SHAKE VAINILLA Y BANANA",
    img: menu2,
    price: "$3.800",
    description: "", 
    category: "Milk Shake",
  },
 {
    name: "MILK SHAKE VAINILLA Y DURAZNO",
    img: menu2,
    price: "$3.800",
    description: "", 
    category: "Milk Shake",
  },
 {
    name: "MILK SHAKE VAINILLA Y FRAMBUESA",
    img: menu2,
    price: "$3.800",
    description: "", 
    category: "Milk Shake",
  },
 {
    name: "MILK SHAKE OREO",
    img: menu2,
    price: "$4.450",
    description: "", 
    category: "Milk Shake",
  },
{
    name: "LECHE CON PLATANO",
    img: menu2,
    price: "$4.450",
    description: "", 
    category: "Milk Shake",
  },
]

import fondue from "./assets/fondue.jpg"

export const paraCompartir = [
  {
    name: "FONDUE DE CHOCOLATE",
    img: fondue,
    price: "$16.500",
    description: "FONDUE DE CHOCOLATE PARA 2 PERSONAS. CHOCOLATE DERETIDO SERVIDO CON WAFFLE CASERO, MALVAVISCOS, FRUTOS FRESCOS", 
    category: "Para compartir",
  },
]

import product1 from "./assets/product-1.jpg";
import product2 from "./assets/product-2.jpg";
import product3 from "./assets/product-3.jpg";
import product4 from "./assets/product-4.jpg";

export const products = [
  {
    name: "Pie de limon entero",
    img: product1,
    price: "$18.150",
    type: "Reposteria",
    description: "Smooth and balanced",
  },
  {
    name: "Pie de maracuya",
    img: product2,
    price: "$18.150",
    type: "Reposteria",
    description: "Mellow and soft",
  },
  {
    name: "Cheese Cake de Maracuya | Frambuesa entero",
    img: product3,
    price: "$22.500",
    type: "Reposteria",
    description: "Bold and earthy",
  },
  {
    name: "Torta Amor para 20 | 30 prs.",
    img: product4,
    price: "$40.150 | $56.650",
    type: "Reposteria",
    description: "Rich and lively",
  },
  {
    name: "Torta Antonia para 20 | 30 prs.",
    img: product4,
    price: "$44.550 | $56.650",
    type: "Reposteria",
    description: "Rich and lively",
  },
   {
    name: "Torta Chocolte-Manjar para 20 | 30 prs.",
    img: product4,
    price: "$38.500 | $49.500",
    type: "Reposteria",
    description: "Rich and lively",
  },
  {
    name: "Torta Chocolte-Manjar-Nuez para 20 | 30 prs.",
    img: product4,
    price: "$44.550 | $56.650",
    type: "Reposteria",
    description: "Rich and lively",
  },
  {
    name: "Torta Manjar-Mocka-Nuez para 20 | 30 prs.",
    img: product4,
    price: "$40.150 | $56.650",
    type: "Reposteria",
    description: "Rich and lively",
  },
  {
    name: "Torta Panqueque Cholate-Naranja para 20 | 30 prs.",
    img: product4,
    price: "$46.200 | $69.800",
    type: "Reposteria",
    description: "Rich and lively",
  },
   {
    name: "Tiramisu Entero",
    img: product4,
    price: "$40.500",
    type: "Reposteria",
    description: "Rich and lively",
  },
  {
    name: "Torta 3 Leches para 20 | 30 prs",
    img: product4,
    price: "$35.000 | 48.500",
    type: "Reposteria",
    description: "Rich and lively",
  },

  {
    name: "Kuchen de Nuez Entero",
    img: product4,
    price: "$7.500",
    type: "Reposteria",
    description: "Rich and lively",
  },
  {
    name: "Torta Huevo Moll para 20 | 30 prs",
    img: product4,
    price: "$48.000 |58.000",
    type: "Reposteria",
    description: "Rich and lively",
  },
];

export const vinos = [

  {
    name: "MARSELAN MES GRAINS",
    img: product4,
    price: "$12.800",
    type: "Vinos",
    description: "Vino de cepa Marselan, Año 2022",
  },
  {
    name: "LA RESERVE GARNACHA",
    img: product4,
    price: "$14.850",
    type: "Vinos",
    description: "VINO 100% GARNACHA",
  },
  {
    name: "CRUX VENTOUX",
    img: product4,
    price: "$14.450",
    type: "Vinos",
    description: "",
  },
  {
    name: "LES BLOUSONS NOIRS",
    img: product4,
    price: "$14.250",
    type: "Vinos",
    description: "",
  },
  {
    name: "FRONTON HAUT CAPITOLE",
    img: product4,
    price: "$13.650",
    type: "Vinos",
    description: "VINO DE ENSEMBLAJE NEGRETTE Y CABERNET SAUVIGNON",
  },
   {
    name: "COTE DE BOEUF",
    img: product4,
    price: "$14.550",
    type: "Vinos",
    description: "VINO DE ENSEMBLAJE SYRAH Y MARSELAN",
  },
    {
    name: "GRANDE TOQUE",
    img: product4,
    price: "$15.450",
    type: "Vinos",
    description: "VINO DE ENSEMBLAJE DEL LUBERON, 80% SYRAH, 20% GARNACHA",
  },  
   {
    name: "MAGNUM LEGENDES DES TOQUES",
    img: product4,
    price: "$31.950",
    type: "Vinos",
    description: "VINO DE ENSEMBLAJE DE COLINAS DE RHODONA, SYRAH, GARNACHA, CINSAULT",
  },
    {
    name: "LE CHENE NOIR",
    img: product4,
    price: "$13.650",
    type: "Vinos",
    description: "VINO DE ENSEMBLAJEDE COLINAS DEL RODANO PUEBLOS. CEPAS: SYRAH, GARNACHA, CARIGNAN, CINSAULT.",
  },
     {
    name: "LE CHENE NOIR",
    img: product4,
    price: "$15.950",
    type: "Vinos",
    description: "VINO DE ENSEMBLAJE DE LANGUEDOC-ROSELLON. CEPAS: SYRAH, CABERNET-SAUVIGNON, MERLOT.",
  },
       {
    name: "TARANI MALBEC",
    img: product4,
    price: "$15.950",
    type: "Vinos",
    description: "VINO DEL COMTÉ DE TOLOSA. CEPA: 100% MALBEC.",
  },
]

export const reviews = [
  {
    name: "Damián Acuña",
    rating: 5,
    comment:
      "¡El mejor café de la ciudad! El ambiente es increíble y los baristas son muy amables.",
    date: "Oct 2025",
  },
  {
    name: "Rocio Chavarria",
    rating: 5,
    comment:
      "¡Me encanta su café frío! Es el lugar perfecto para trabajar a distancia, con una conexión wifi estupenda.",
    date: "Sep 2025",
  },
  {
    name: "Marcela Vera",
    rating: 4,
    comment:
      "Excelente café y pasteles. Un poco concurrido durante las horas punta de la mañana, ¡pero merece la pena!",
    date: "Sep 2025",
  },
];

import blog1 from "./assets/blog-1.jpg";
import blog2 from "./assets/blog-2.jpg";
import blog3 from "./assets/blog-3.jpg";

export const blogs = [
  {
    title: "The Art of Coffee Brewing",
    date: "October 5, 2025",
    excerpt:
      "Discover the perfect techniques for brewing your favorite cup at home.",
    img: blog1,
  },
  {
    title: "Sustainability in Coffee",
    date: "October 1, 2025",
    excerpt:
      "Learn about our commitment to ethical sourcing and environmental responsibility.",
    img: blog2,
  },
  {
    title: "Fall Coffee Favorites",
    date: "September 28, 2025",
    excerpt:
      "Explore our seasonal menu featuring pumpkin spice and autumn-inspired drinks.",
    img: blog3,
  },
];
