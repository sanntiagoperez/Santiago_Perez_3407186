// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// ============================================
// INSTRUCCIONES:
// 1. Reemplaza DOMAIN_NAME con el nombre de tu dominio asignado
// 2. Reemplaza VALUE_LABEL con la etiqueta de tu unidad de valor
//    Ejemplos: "unidades", "libros", "medicamentos", "miembros"
// 3. Define tu array items con objetos de tu dominio
// 4. Completa cada TODO con la implementación contextualizada
// ============================================

// ---- CONFIGURA TU DOMINIO ----
const DOMAIN_NAME = "App de musica y podcast"; // TODO: Cambiar por tu dominio
const VALUE_LABEL = "Tracks";     // TODO: Cambiar por unidad de tu dominio

// ============================================
// 1. ARRAY INICIAL — Define tu inventario
// ============================================

// TODO: Definir el array con mínimo 5 objetos de tu dominio.
// Cada objeto debe tener:
//   - id: número único
//   - name: nombre del elemento
//   - [propiedad numérica]: precio, cantidad, puntuación, etc.
//   - [propiedad booleana]: active, available, inStock, etc.
//   - [otras 2+ propiedades relevantes a tu dominio]
//
// Ejemplos por dominio:
// Biblioteca:  { id, name, author, year, available: true }
// Farmacia:    { id, name, price, stock, requiresPrescription: false }
// Gimnasio:    { id, name, memberSince, plan, active: true }
// Restaurante: { id, name, price, category, available: true }

const items = [
  // TODO: Agrega al menos 5 objetos de tu dominio
  {id: 1, name: "Condenado Al Exito II", type: "song", reproductions: 61000000, duration: 4.17, active: true},
  {id: 2, name: "Arruino dos matrimonios por accidente", type: "podcast", reproductions: 150000000, duration: 60.58 , active: true},
  {id: 3, name: "Yo se", type: "song", reproductions: 150000000,duration: 2.09, active: true},
  {id: 4, name: "Las redes sociales estan fuera de control", type: "podcast", reproductions: 87000000, duration: 120.30, active: true},
  {id: 5, name: "Pico y Chao (WSound 08)", type: "song", reproductions: 54000000, duration: 3.22, active: true},
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

/**
 * Agrega un nuevo elemento al inventario
 * @param {Object} newItem - Elemento a agregar
 */
const addItem = (newItem) => {
  // TODO: Usar push para agregar newItem al array items
  // console.log(`Agregado: ${newItem.name}`);
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

/**
 * Elimina el último elemento del inventario
 * @returns {Object} El elemento eliminado
 */
const removeLastItem = () => {
  // TODO: Usar pop para eliminar y retornar el último elemento
  // Guardar el resultado en una variable y mostrar el nombre
  const eliminado = items.pop();
    if (eliminado) {
      console.log(`Eliminado: ${eliminado.name}`);
      return eliminado;
    }
};

/**
 * Agrega un elemento prioritario al inicio del inventario
 * @param {Object} priorityItem - Elemento a agregar con prioridad
 */
const addPriorityItem = (priorityItem) => {
  // TODO: Usar unshift para agregar priorityItem al inicio de items
  // console.log(`Elemento prioritario agregado: ${priorityItem.name}`);
  items.unshift(priorityItem);
  console.log(`Elemento prioritario agregado: ${priorityItem.name}`);
};

/**
 * Elimina un elemento por su posición (índice)
 * @param {number} index - Posición del elemento a eliminar
 */
const removeByIndex = (index) => {
  // TODO: Usar splice para eliminar 1 elemento en la posición index
  // Mostrar el nombre del elemento eliminado
  const eliminado = items.splice(index, 1); // splice devuelve un array de elementos eliminados
     if (eliminado.length > 0) {
      console.log(`Eliminado: ${eliminado[0].name}`);
    }
};

/**
 * Obtiene todos los elementos activos/disponibles
 * @returns {Array} Array de elementos activos
 */
const getActiveItems = () => {
  // TODO: Usar filter para retornar solo los elementos con la propiedad
  // booleana en true (ajusta el nombre de la propiedad a tu dominio)
  return items.filter(item => item.active === true);
};

/**
 * Busca un elemento por su nombre
 * @param {string} name - Nombre a buscar
 * @returns {Object|undefined} El elemento encontrado o undefined
 */
const findByName = (name) => {
  // TODO: Usar find para retornar el primer elemento cuyo name coincida
  return items.find(item => item.name.toLowerCase() === name.toLowerCase());
};

/**
 * Formatea un elemento para mostrar en el reporte
 * @param {Object} item - Elemento a formatear
 * @returns {string} Texto formateado
 */
const formatItem = (item) => {
  // TODO: Retornar un string con la información relevante del elemento
  // Usar template literals y mostrar las propiedades más importantes
  // Ejemplo (adaptar al dominio):
  // return `[${item.id}] ${item.name} — ...propiedades...`;
  return `[${item.id}] ${item.name} ${item.type} ${item.reproductions} ${item.duration} ${item.active ? "Activo" : "Inactivo"}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`🎧 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

// Estado inicial
console.log(`📻 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
// TODO: Usar forEach para mostrar cada elemento con formatItem
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

// Agragar nuevo elemento

 addItem({id: 6, name: "Ella queria huir de ese lugar y no la dejaron", type: "podcast", reproductions: 20000000, duration: 59.46, active: true});

//Agrgar elemento prioritario

  addPriorityItem({id: 7, name: "Yogurcito", type: "song", reproductions: 999999999, duration: 3.03, active: true});

// Eliminar elemento del medio

  removeByIndex(3);
  
// Eliminar último elemento

  removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");
// TODO: Mostrar el inventario actualizado con forEach + formatItem
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

// Buscar por nombre

const encontrado = findByName("Yo se");
    if (encontrado) {
      console.log(`🔍 Elemento encontrado: ${formatItem(encontrado)}`);
    }
    
    else {
      console.log(`🔍 Elemento no encontrado`);
    }

// Filtrar activos

const activos = getActiveItems();
console.log(`\n✅ Elementos activos (${activos.length}):`);

//  Snaptshot inmutables

const snapshot = [...items]; // Crear una copia del array items

const snapshotExtendido = [
  ...snapshot,
  {
    id: 99,
    name: "Contenido extra",
    tipo: "podcast",
    anfitrion: "Extra",
    reproducciones: 1000,
    duracion: 10,
    active: true
  }
];

console.log(`Snapshot original: ${snapshot.length}`);

console.log(`Snapshot extendido: ${snapshotExtendido.length}`);

console.log("\n--- Transformación con map ---\n");

// Solo nombres
const nombres = items.map(item => item.name);

console.log("Nombres:", nombres);

// Transformar reproducciones (ej: +10%)
const reproduccionesAumentadas = items.map(item => {
  return {
    ...item,
    reproducciones: Math.floor(item.reproducciones * 1.1)
  };
});

console.log("Reproducciones aumentadas:");
reproduccionesAumentadas.forEach(item => {
  console.log(`${item.name}: ${item.reproducciones}`);
});

console.log("\n--- Resumen final ---\n");
console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);
// TODO: mostrar total de activos vs total general
const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);
