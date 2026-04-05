// ============================================
// PROYECTO INTEGRADOR — ETAPA 0
// Semana 10 — JavaScript ES2023 Bootcamp
// ============================================
//
// INSTRUCCIONES:
// 1. Reemplaza DOMAIN_NAME y los datos de ejemplo con tu dominio asignado
// 2. Implementa cada TODO siguiendo las instrucciones de los comentarios
// 3. Ejecuta con: node 3-proyecto/starter/app.js
// 4. Valida el checklist del README antes de entregar
//
// DOMINIO ASIGNADO: [App de Musica y Podcast]
// ============================================

// ============================================
// SECCIÓN 1: Configuración y Constantes (Semanas 01–02)
// ============================================

// TODO: Renombrar con el nombre de tu dominio (en inglés, UPPER_SNAKE_CASE)
const DOMAIN_NAME = "MUSIC_PODCAST_APP";
const VALUE_LABEL = "Tracks";

// TODO: Ajustar al límite razonable para tu dominio
// Usa separadores numéricos (ES2021): 1_000, 10_000
const MAX_ITEMS = 1_000;

// ============================================
// SECCIÓN 2: Datos — Array Principal (Semanas 01–02)
// ============================================

// TODO: Definir el array con MÍNIMO 6 objetos
// Requisitos:
// - Mínimo 5 propiedades por objeto (tipos mixtos)
// - Al menos 1 propiedad numérica (para calcular estadísticas)
// - Al menos 1 propiedad booleana (para filtrar activos/inactivos)
// - Al menos 1 propiedad OPCIONAL (no todos los objetos la tienen)
//
// Nota para el aprendiz — Adaptaciones por dominio:
// - Biblioteca:    { id, title, author, year, pages, available, notes? }
// - Farmacia:      { id, name, price, stock, laboratory, active, prescription? }
// - Gimnasio:      { id, name, memberType, fee, joinDate, active, plan? }
// - Restaurante:   { id, name, category, price, calories, available, allergens? }
// - Banco:         { id, owner, type, balance, rate, active, creditLimit? }

const items = [
  // TODO: Reemplazar con objetos de tu dominio
  {
    id: 1,
    title: "Condenado al exito II",
    type: "song",
    plays: 61000000,
    duration: 4.17,
    active: true,
    artist: "Blessd",
    genre: "Reggaeton"
  },
  {
    id: 2,
    title: "Arruinó 2 matrimonios por accidente",
    type: "podcast",
    plays: 15000000,
    duration: 60.58,
    active: true,
    artist: "Dark soul"
  },
  {
    id: 3,
    title: "Yo se",
    type: "song",
    plays: 150000000,
    duration: 2.09,
    active: true,
    artist: "Yan Block",
    genre: "Trap"
  },
  {
    id: 4,
    title: "Nunca te lleves nada de la basura",
    type: "podcast",
    plays: 87000000,
    duration: 45.30,
    active: false,
    artist: "Oscurantismo"
  },
  {
    id: 5,
    title: "La noche más linda del mundo",
    type: "song",
    plays: 120000000,
    duration: 5.43,
    active: true,
    artist: "Adalberto Santiago",
    genre: "Salsa"
  },
  {
    id: 6,
    title: "El viaje de la vida",
    type: "podcast",
    plays: 95000000,
    duration: 50.25,
    active: true,
    artist: "Historias de Impacto",
    description: "Historias motivacionales"
  }

  // TODO: Agregar al menos 3 objetos más (mínimo 6 en total)
];

// ============================================
// SECCIÓN 3: Funciones CRUD (Semanas 07–08)
// ============================================

/**
 * Agrega un nuevo elemento al array principal
 * @param {Object} item - El elemento a agregar
 */
const addItem = (item) => {
  // TODO: Implementar
  // 1. Verificar que no supere MAX_ITEMS (usar items.length)
  if (items.length >= MAX_ITEMS) {
    console.log(`❌ No se puede agregar más de ${VALUE_LABEL} items.`);
    return;
  }
  // 2. Agregar el item al array con .push()
  items.push(item);
  // 3. Mostrar confirmación con console.log y template literal
  console.log(`✅ ${VALUE_LABEL} agregado: ${item.title}`);

};

/**
 * Busca un elemento por su id
 * @param {number} id - El id a buscar
 * @returns {Object|undefined} - El elemento encontrado o undefined
 */
const findById = (id) => {
  // TODO: Implementar usando .find()
  return items.find(item => item.id === id);
};

/**
 * Retorna todos los elementos activos
 * @returns {Object[]}
 */
const getActive = () => {
  // TODO: Implementar usando .filter() con la propiedad booleana
  return items.filter(item => item.active === true);
};

/**
 * Filtra elementos por el valor de un campo
 * @param {string} field - El nombre de la propiedad
 * @param {*} value - El valor a buscar
 * @returns {Object[]}
 */
const filterByField = (field, value) => {
  // TODO: Implementar usando .filter()
  return items.filter(item => item[field] === value);
};

// ============================================
// SECCIÓN 4: Funciones de Análisis (Semanas 08–09)
// ============================================

/**
 * Actualiza un elemento de forma inmutable usando spread
 * @param {number} id - Id del elemento a actualizar
 * @param {Object} changes - Objeto con los cambios a aplicar
 * @returns {Object[]} - Nuevo array con el elemento actualizado
 */
const updateItem = (id, changes) => {
  // TODO: Implementar
  // 1. Usar .map() para crear un nuevo array
  // 2. Para el item con el id buscado: retornar { ...item, ...changes }
  // 3. Para los demás: retornar el item sin cambios
  return items.map(item => item.id === id
    ? { ...item, ...changes }
    : item
  );
  // reemplazar esta línea
}



/**
 * Calcula estadísticas de un campo numérico
 * @param {string} field - El nombre de la propiedad numérica
 * @returns {{ min: number, max: number, avg: number, total: number }}
 */
const calculateStats = (field) => {
    const values = items.map(item => item[field]);

    const total = values.reduce((acc, val) => acc + val, 0);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const avg = total / values.length;
    
    return { min, max, avg, total };
};

// ============================================
// SECCIÓN 5: Funciones de Display (Semanas 04–07)
// ============================================

/**
 * Formatea un elemento para mostrar en consola (una línea)
 * @param {Object} item - El elemento a formatear
 * @returns {string}
 */
const formatItem = (item) => {
  const id = `[${item.id}]`.padEnd(6);
  const title = `[${item.title}]`.padEnd(35);
  const type = item.type.padEnd(10);
  const plays = String(item.plays).padStart(10);
  const status = item.active ? "Activo" : "Inactivo";
  const extra = item.genre ?? item.description ?? "N/A";

  return `${id} ${title} ${type} ${plays} ${status} ${extra}`;
};

/**
 * Genera el reporte completo del dominio
 * Usa: Object.entries, forEach, filter, map, calculateStats
 */
const buildReport = () => {
  // TODO: Implementar
  // 1. Cabecera: título del dominio con template literal
  console.log(`\n📊 REPORTE — ${DOMAIN_NAME}`);
  console.log("=".repeat(70));

  // 2. Listado completo usando formatItem + forEach
  items.forEach(item => console.log(formatItem(item)));

  // 3. Sección de activos vs inactivos (getActive)
  const activeItems = getActive();
  const inactiveItems = items.filter(item => !item.active);

  console.log("\n🔎 ESTADO:");
  console.log(`Activos: ${activeItems.length}`);
  console.log(`Inactivos: ${inactiveItems.length}`);

  // 4. Estadísticas con calculateStats para la propiedad numérica
  const stats = calculateStats("plays");

  console.log("\n📈 ESTADÍSTICAS (Reproducciones):");
  console.log(`Min: ${stats.min}`);
  console.log(`Max: ${stats.max}`);
  console.log(`Promedio: ${Math.round(stats.avg)}`);
  console.log(`Total: ${stats.total}`);

  // 5. Propiedades del primer elemento con Object.entries
   console.log("\n🧩 ESTRUCTURA DEL ITEM:");
  Object.entries(items[0]).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });

  // 6. Pie de reporte con conteo total
   // 6. Pie
  console.log("\n" + "=".repeat(70));
  console.log(`Total de ${VALUE_LABEL}: ${items.length}`);
};


// ============================================
// SECCIÓN 6: Ejecución Principal
// ============================================
//
// TODO: Descomentar a medida que implementes cada función
//

console.log("=".repeat(40));
console.log(`  ${DOMAIN_NAME.toUpperCase()}`);
console.log("=".repeat(40));
console.log(`Total de ${VALUE_LABEL}: ${items.length} / ${MAX_ITEMS}`);
console.log("");

// Paso 1: Buscar por id
const found = findById(1);
console.log("Encontrado id=1:", found?.title ?? "no encontrado");
console.log("");

// Paso 2: Listar activos
const active = getActive();
console.log(`Activos: ${active.length}`);
active.forEach(item => console.log(" ", formatItem(item)));
console.log("");

// Paso 3: Filtrar por campo
const filtered = filterByField("type", "song");
console.log(`Filtro type=song: ${filtered.length} resultados`);
filtered.forEach(item => console.log(" ", formatItem(item)));
console.log("");

// Paso 4: Actualizar con spread
const updated = updateItem(1, { plays: 999999999 });
console.log(
  `Actualizado id=1: plays=${updated.find(i => i.id === 1)?.plays}`
);
console.log("");

// Paso 5: Estadísticas
const stats = calculateStats("plays");
console.log(
  `Estadísticas (plays): min=${stats.min} max=${stats.max} avg=${stats.avg.toFixed(2)}`
);
console.log("");

// Paso 6: Reporte completo
buildReport();

// TODO: Agregar un nuevo elemento usando addItem
 addItem({
  id: 7,
  title: "Energia",
  type: "song",
  plays: 30,
  duration: 3.5,
  active: true,
  artist: "Alexis y Fido",
  genre: "Reggaeton"
});
