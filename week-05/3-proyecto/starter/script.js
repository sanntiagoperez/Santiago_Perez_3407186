// ============================================
// PROYECTO SEMANA 05: Clasificador
// Condicionales — if/else, ternario, switch, ??, ?.
// ============================================
//
// NOTA PARA EL APRENDIZ:
// Adapta este script a tu dominio asignado.
// Reemplaza los comentarios TODO con tu propia implementación.
// Usa los conceptos aprendidos esta semana.
//
// Ejecuta con: node starter/script.js
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

// TODO: Define al menos 5 variables con datos de un elemento de tu dominio.
// Ejemplos orientativos:
// - Un libro, medicamento, miembro, estudiante, producto, etc.
// - Incluye: nombre, estado, valor numérico, tipo (string), y alguna propiedad opcional

const elementName = "Condenado Al Exito II";           // TODO: nombre de la cancion o podcast (string)
const elementStatus = "active";         // TODO: estado actual (string: "active", "inactive", etc.)
const elementValue = 61000000;          // TODO: valor numérico para mostrar la cantidad de reproducciones (ocupación, stock, puntaje…)
const elementType = "song";          // TODO: Si es musica o podcast (string)

const elementInfo = {
    artist:"Blessd",
    album:"SI SABE",
    genre:"Urbano",
    year:2024,
    duration:4.17
};

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

// TODO: Clasifica el elemento en al menos 3 niveles según elementValue.
// Ejemplo de estructura:
// let classification;
// if (elementValue >= ...) {
//   classification = "...";
// } else if (elementValue >= ...) {
//   classification = "...";
// } else {
//   classification = "...";
// }

let classification = "Sin clasificar"; // TODO: implementar if/else if/else

if (elementValue >= 100000000) {
    classification ="Hit Global Historico";
}

else if (elementValue >= 50000000) {
    classification = "Exito Mundial";
}

else if (elementValue >= 10000000) {
    classification = "Muy Popular";
}

else {
    classification = "Emergente";
}



// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

// TODO: Usa el ternario para determinar un estado de dos opciones.
// Ejemplo: const statusLabel = elementStatus === "active" ? "Activo" : "Inactivo";

const statusLabel = "active" ? "Activo" : "Inactivo"; // TODO: implementar con ternario



// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

// TODO: Usa switch sobre elementType para asignar una etiqueta.
// Ejemplo:
// switch (elementType) {
//   case "typeA": typeLabel = "..."; break;
//   case "typeB": typeLabel = "..."; break;
//   default: typeLabel = "Tipo desconocido";
// }

let typeLabel = "Sin tipo"; // TODO: implementar con switch

switch (elementType) {
    case "song":
        typeLabel = "Canción";
        break;
    case "podcast":
        typeLabel = "Podcast";
        break;
    default:
        typeLabel = "Tipo desconocido";
};



// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

// TODO: Usa ?? para obtener un valor de fallback cuando sea null o undefined.
// Ejemplo: const displayName = elementName ?? "Sin nombre";

const displayName = elementName ?? "Sin nombre";      // TODO: elementName ?? "Sin nombre"

const infoDetail = elementInfo?.artist ?? "Sin información adicional";       // TODO: elementInfo?.detail ?? "Sin información adicional"



// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

// TODO: Accede de forma segura a una propiedad de elementInfo.
// Ejemplo: const location = elementInfo?.location ?? "Ubicación no especificada";

const safeProperty = elementInfo?.album ?? "Álbum no especificado"; // TODO: elementInfo?.tuPropiedad ?? "valor por defecto"



// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

// TODO: Muestra la ficha en consola con template literals (sin concatenación +)
// Incluye todos los resultados de las secciones anteriores

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));
console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Propiedad adicional: ${safeProperty}`);
console.log("=".repeat(40));
