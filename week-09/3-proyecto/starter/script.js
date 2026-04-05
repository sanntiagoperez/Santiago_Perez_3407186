// ============================================
// PROYECTO SEMANA 09: Catálogo de Elementos
// ============================================
//
// INSTRUCCIONES:
// 1. Define tu dominio en DOMAIN_NAME y VALUE_LABEL
// 2. Completa el array `items` con datos de tu dominio
// 3. Implementa cada función siguiendo los TODOs
// 4. Ejecuta con: node script.js
//
// Tu catálogo debe tener:
//   - Mínimo 6 objetos con al menos 5 propiedades cada uno
//   - Al menos 1 propiedad numérica, 1 booleana y 1 opcional
// ============================================

// ============================================
// CONFIGURACIÓN DEL DOMINIO
// ============================================

// TODO: Reemplaza con el nombre de tu dominio
// Ejemplos: "Biblioteca", "Farmacia", "Gimnasio", "Restaurante"
const DOMAIN_NAME = "App de musica y podcast";

// TODO: Reemplaza con el nombre del tipo de elemento
// Ejemplos: "libros", "medicamentos", "equipos", "platillos"
const VALUE_LABEL = "Tracks";

// ============================================
// DATOS DEL CATÁLOGO
// ============================================

// TODO: Define al menos 6 objetos con mínimo 5 propiedades cada uno
// Incluye:
//   - id (número)
//   - name (string)
//   - Al menos 1 propiedad numérica (price, pages, duration, capacity, etc.)
//   - Al menos 1 propiedad booleana (available, active, inStock, visible, etc.)
//   - Al menos 1 propiedad opcional (no todos los objetos la tienen)

const items = [
  {ID: 1, Name: "Condenado al exito II", Type: "song", Duration: 4.17, Reproductions: 61000000 , Active: true, Artist: "Blessd"},
  {ID: 2, Name: "Arruinó 2 matrimonios por accidente", Type: "podcast", Duration: 60.58, Reproductions: 15000000, Active: true, Artist: "Dark soul"},
  {ID: 3, Name: "Yo se", Type: "song", Duration: 2.09, Reproductions: 150000000, Active: true},
  {ID: 4, Name: "Nunaca te lleves nada de la basura", Type: "podcast", Duration: 45.30, Reproductions: 87000000, Active: false},
  {ID: 5, Name: "La noche más linda del mundo", Type:"song", Duration: 5.43, Reproductions: 120000000, Active: true, Artist: "Adalberto Santiago"},
  {ID: 6, Name: "Historias de Impacto", Type: "podcast", Duration: 30.15, Reproductions: 20000000, Active: true},
];

// ============================================
// INSPECCIÓN CON Object.*
// ============================================

/**
 * Muestra las claves y valores de un objeto usando Object.entries()
 * @param {Object} item - El objeto a inspeccionar
 */
const inspectItem = (item) => {
  console.log(`\n📋 Detalle de: ${item.Name}`);
  Object.entries(item).forEach(([key, value]) => {
    console.log(`${key.padEnd(15)}: ${value}`);
  });
  // Alinear las claves con padEnd para formato de tabla
};

/**
 * Calcula estadísticas numéricas del catálogo
 * @param {string} numericKey - El nombre de la propiedad numérica a analizar
 */
const calculateStats = (numericKey) => {
  // Ontener solo los valores numericos de esa propiedad
  const values = items.map(item => item[numericKey]).filter(value => typeof value === "number");
  
  // Convertir a object.values() 
  const numericValues = Object.values(values);

  const total = numericValues.reduce((acc, val) => acc + val, 0);
  const average = total / numericValues.length;
  const min = Math.min(...numericValues);
  const max = Math.max(...numericValues);

  console.log(`\n📊 Estadísticas para "${numericKey}":`)
  console.log(`   Total: ${total}`)
  console.log(`   Promedio: ${average.toFixed(2)}`)
  console.log(`   Mínimo: ${min}`)
  console.log(`   Máximo: ${max}`)
};

// ============================================
// VERIFICACIÓN CON Object.hasOwn()
// ============================================

/**
 * Muestra el detalle de un elemento, incluyendo propiedades opcionales
 * si existen en ese objeto
 * @param {Object} item - El objeto a mostrar
 */
const showWithOptionals = (item) => {
  console.log(`\n→ ${item.Name}`);
  // TODO: Mostrar propiedades básicas siempre
  // TODO: Usar Object.hasOwn() para verificar propiedades opcionales
  //       y mostrarlas solo si existen

  // Propiedades básicas (siempre presentes)
  console.log(`ID ${item.ID}`);
  console.log(`Type ${item.Type}`);
  console.log(`Duration ${item.Duration}`);
  console.log(`Reproductions ${item.Reproductions}`);
  console.log(`Active ${item.Active}`);

  // Propiedades opcionales (solo si existen)
  if (Object.hasOwn(item, "Artist")) {
    console.log(`Artist ${item.Artist}`);
  }

  if (Object.hasOwn(item, "Guest")) {
    console.log(`Guest ${item.Guest}`);
  }
};

// ============================================
// ITERACIÓN CON for...in
// ============================================

/**
 * Imprime todas las propiedades de un objeto usando for...in
 * @param {Object} item - El objeto a recorrer
 */
const printAllProperties = (item) => {
  console.log(`\n🔍 Propiedades de "${item.Name}":`);
  // TODO: Usar for...in + Object.hasOwn() para recorrer propiedades propias
  // Imprimir cada clave y su valor

  for (let key in item) {
    // Verificar que la propiedad sea propia del objeto
    if (Object.hasOwn(item, key)) {
      console.log(`${key}: ${item[key]}`);
    }
  }
};

// ============================================
// SPREAD OPERATOR
// ============================================

/**
 * Aplica una actualización inmutable a un elemento
 * @param {Object} item - El objeto original
 * @param {Object} changes - Las propiedades a actualizar
 * @returns {Object} Nuevo objeto con los cambios aplicados
 */
const updateItem = (item, changes) => {
  // TODO: Retornar un nuevo objeto usando spread + changes
  // El objeto original NO debe modificarse
  return {
    ...item,
    ...changes
  };

};

// ============================================
// OPERACIONES CON EL ARRAY
// ============================================

/**
 * Filtra los elementos disponibles/activos
 * @returns {Object[]} Array de elementos disponibles
 */
const getAvailable = () => {
  // TODO: Usar filter() por la propiedad booleana de tu dominio
  return items.filter(item => item.Active);
};

/**
 * Busca un elemento por su id
 * @param {number} id - El id a buscar
 * @returns {Object|undefined} El elemento encontrado o undefined
 */
const findById = (id) => {
  // TODO: Usar find()
  return items.find(item => item.ID === id);
};

/**
 * Agrega una propiedad calculada a cada elemento
 * @returns {Object[]} Nuevo array con la propiedad adicional
 */
const addCalculatedProp = () => {
  // TODO: Usar map() para agregar una propiedad calculada
  // Ejemplos: priceWithTax, totalPages, formattedDuration
  // Recuerda: item => ({ ...item, newProp: calculation })
  return items.map(item => ({
    ...item,
    formattedDuration: `${Math.floor(item.Duration)} min ${Math.round((item.Duration % 1) * 60)} seg`
  }));
};

/**
 * Ordena los elementos por valor numérico (sin mutar el original)
 * @param {boolean} ascending - true para ascendente, false para descendente
 * @returns {Object[]} Nuevo array ordenado
 */
const sortByNumericProp = (ascending = true) => {
  // TODO: Usar [...items].sort() con un comparador
  // No mutar el array original
  return [...items].sort((a, b) => {
    return ascending ? a.Reproductions - b.Reproductions : b.Reproductions - a.Reproductions;
  });
};

// ============================================
// REPORTE FINAL
// ============================================

/**
 * Imprime el reporte completo del catálogo
 */
const buildReport = () => {
  console.log("\n" + "=".repeat(50));
  console.log(`📦 CATÁLOGO: ${DOMAIN_NAME.toUpperCase()}`);
  console.log("=".repeat(50));

  //Cantidad total
  console.log(`Total de elementos: ${items.length}`);

  //Disponibes / Activos
  const availableItems = getAvailable();
  console.log(`Activos: ${availableItems.length}`); 

  //Estadísticas (ejemplo con "Reproductions")
  calculateStats("Reproductions");

  //Lista Ordenada
  console.log("\n🎵 Elementos ordenados por reproducciones:");
  const sorted = sortByNumericProp(false); // Descendente

  sorted.forEach((item, index) => {
    console.log(`${index + 1}. ${item.Name} - ${item.Reproductions} reproducciones`)
  });

  console.log("=".repeat(50));

  //Mayor y menor
  const maxItem = sorted[0];
  const minItem = sorted[sorted.length - 1];
  console.log("\n🏆 Más Popular:");
  console.log(`${maxItem.Name}(${maxItem.Reproductions})`);

  console.log("\n🐢 Menos Popular:");
  console.log(`${minItem.Name} (${minItem.Reproductions})`);

  console.log("=".repeat(50));
};

// ============================================
// EJECUCIÓN PRINCIPAL
// ============================================

console.log(`\n🚀 Iniciando catálogo: ${DOMAIN_NAME}`);
console.log(`   Total de ${VALUE_LABEL}: ${items.length}`);

// 1. Inspeccionar un elemento
inspectItem(items[0]);

// 2. Estadísticas (ej: reproducciones)
calculateStats("Reproductions");

// 3. Mostrar todos con opcionales
items.forEach(showWithOptionals);

// 4. Imprimir todas las propiedades de uno
printAllProperties(items[0]);

// 5. Demostrar updateItem
const updatedItem = updateItem(items[0], {
  Reproductions: 999999999,
  Active: false
});
console.log("\n🛠️ Item actualizado (inmutable):");
console.log(updatedItem);

// 6. Mostrar disponibles
console.log("\n✅ Elementos activos:");
console.log(getAvailable());

// 7. Buscar por ID
console.log("\n🔎 Buscar ID 2:");
console.log(findById(2));

console.log("\n🔎 Buscar ID inexistente (99):");
console.log(findById(99));

// 8. Propiedad calculada
console.log("\n🧮 Elementos con duración formateada:");
console.log(addCalculatedProp());

// 9. Ordenados
console.log("\n📊 Ordenados por reproducciones (desc):");
console.log(sortByNumericProp(false));

// 10. Reporte final
buildReport();
