// ============================================
// PROYECTO SEMANA 04: Generador de Mensajes
// ============================================
//
// 🎯 OBJETIVO: Construir un generador de mensajes 
//  en consola usando métodos de string y 
//  template literals. 
// 📋 TU DOMINIO: Adapta cada TODO al dominio 
//  que te fue asignado por el instructor. 
//⚠️ POLÍTICA ANTICOPIA: Tu implementación debe 
//  ser única y coherente con tu dominio. 
// Usa dominios no asignables como referencia 
// conceptual, pero NO copies valores.
//
// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const DOMAIN_NAME = "APP DE MÚSICA Y PODCASTS";

const rawEntityName = "Podcast Premium Exclusivo";

const ENTITY_CATEGORY = "Podcast";

const ENTITY_CODE = "POD-001";

const ENTITY_DESCRIPTION = "Podcast exclusivo sobre tecnología, música digital y tendencias del streaming.";

const MAIN_VALUE = 15000; // valor de suscripción o precio

const IS_ACTIVE = true;


// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================

const entityName = rawEntityName.trim();

const entityNameUpper = entityName.toUpperCase();

const entityNameLower = entityName.toLowerCase();

const codePrefix = ENTITY_CODE.slice(0, 3);


// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

const hasValidPrefix = ENTITY_CODE.startsWith(codePrefix);

const descriptionIsRelevant = ENTITY_DESCRIPTION.includes("música");

const hasValidSuffix = ENTITY_CODE.endsWith("001");


// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

const separator = "=".repeat(45);
const subSeparator = "-".repeat(45);

const mainCard = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DE ENTIDAD
${separator}
Nombre:      ${entityNameUpper}
Categoría:   ${ENTITY_CATEGORY}
Código:      ${ENTITY_CODE}
Prefijo:     ${codePrefix}
Valor:       ${MAIN_VALUE}
Estado:      ${IS_ACTIVE ? "Activo" : "Inactivo"}

${subSeparator}
Descripción:
${ENTITY_DESCRIPTION}
${separator}
`;

console.log(mainCard);


// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Validaciones ---");

console.log(`¿Código empieza con '${codePrefix}'?: ${hasValidPrefix}`);
console.log(`¿Descripción contiene 'música'?: ${descriptionIsRelevant}`);
console.log(`¿Código termina con '001'?: ${hasValidSuffix}`);
console.log("");


// ============================================
// SECCIÓN 6: Mensaje de notificación corto
// ============================================

console.log("--- Notificación ---");

const notification = `📢 Nuevo contenido disponible: ${entityName} (${ENTITY_CODE})`;

console.log(notification);
console.log("");
