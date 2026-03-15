// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Adapta este archivo a tu dominio asignado.
//
// Ejemplos con dominios no asignables:
// - Planetario    → calcular ingresos por función, capacidad disponible
// - Acuario       → calcular costo de alimentación, volumen total de tanques
// - Museo         → calcular valor de exhibición, costo de entrada
// - Zoológico     → calcular gasto diario por especie, total de visitantes
// - Observatorio  → calcular duración total de eventos, aforo restante
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define las constantes base de tu dominio
// Ejemplos con dominios no asignables:
//   Planetario:   TICKET_PRICE = 12_000, MAX_CAPACITY = 45
//   Acuario:      DAILY_FEEDING_KG = 150, ENTRY_PRICE = 35_000
//   Museo:        ADULT_TICKET = 20_000, GUIDED_TOUR = 15_000
//   Zoológico:    FOOD_COST_PER_DAY = 500_000, MAX_VISITORS = 800
//   Observatorio: SESSION_DURATION = 90, TICKET_PRICE = 18_000

    const PREMIUM_INDIVIDUAL = 18500;
    const PREMIUM_STUDENT = 10100;
    const PREMIUM_DUO = 24500;
    const PREMIUM_FAMILY = 30500;

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// TODO: Calcula totales, subtotales o valores clave de tu dominio
// Usa: +, -, *, /, %, **
// Etiqueta cada resultado con console.log()

// Ejemplo con dominio Planetario (NO copiar):
// const ticketPrice = 12_000;
// const attendees = 38;
// const totalRevenue = ticketPrice * attendees;
// console.log("Ingresos función:", totalRevenue);
// const remainingSeats = 45 - attendees;
// console.log("Asientos disponibles:", remainingSeats);

// Dominio de APP DE MUSICA Y PODCASTS
    const INDIVIDUAL_USERS = 390;
    const STUDENT_USERS = 234;
    const DUO_USERS = 120;
    const FAMILY_USERS = 85;
    
// Calculo de ingresos por planes
    const INDIVIDUAL_REVENUE = INDIVIDUAL_USERS * PREMIUM_INDIVIDUAL;
    console.log("Ingresos por plan individual:", INDIVIDUAL_REVENUE);

    const STUDENT_REVENUE = STUDENT_USERS * PREMIUM_STUDENT;
    console.log("Ingresos por plan estudiantes:", STUDENT_REVENUE);

    const DUO_REVENUE = DUO_USERS * PREMIUM_DUO;
    console.log("Ingresos por plan duo:", DUO_REVENUE);

    const FAMILY_REVENUE = FAMILY_USERS * PREMIUM_FAMILY;
    console.log("Ingresos por plan familiar:", FAMILY_REVENUE);

// INGREOSOS TOTALES DE LA PLATAFORMA
    const TOTAL_REVENUE = INDIVIDUAL_REVENUE + STUDENT_REVENUE + DUO_REVENUE + FAMILY_REVENUE;
    console.log("Ingresos totales de la plataforma:", TOTAL_REVENUE);
// DIFERENCIA ENTRE EL PLAN MÁS CARO AL MÁS BARATO
   const PLAN_DIFFERENCE = PREMIUM_FAMILY - PREMIUM_STUDENT;
   console.log("Diferencia entre plan familiar y estudiantes:", PLAN_DIFFERENCE);

// PROMEDIO DE PRECIOS DE LOS PLANES
   const AVERAGE_PRICES = (PREMIUM_INDIVIDUAL + PREMIUM_STUDENT + PREMIUM_DUO + PREMIUM_FAMILY) / 4;
   console.log("Precio promedio de los planes:", AVERAGE_PRICES);
// EJEMPLO USANDO MODULO
    const EVEN_CHECK = INDIVIDUAL_USERS % 2;
    console.log("¿Número de usuarios individuales es par? (0 = SI)", EVEN_CHECK);

//EJEMPLO USANDO POTENCIA
    const USERS_GROWTH = INDIVIDUAL_USERS ** 2;
    console.log("Estimación de crecimiento de usuarios:", USERS_GROWTH);

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// TODO: Usa +=, -=, *=, /= para actualizar valores acumulados
// Muestra el valor antes y después de cada operación

// Ejemplo (NO copiar):
// let runningTotal = 0;
// runningTotal += 25_000;
// console.log("Tras primer item:", runningTotal);
// runningTotal += 18_000;
// console.log("Tras segundo item:", runningTotal);
// runningTotal *= 0.90; // descuento del 10%
// console.log("Con descuento:", runningTotal);

let accumulatedRevenue = 0;
console.log("Ingresos iniciales:", accumulatedRevenue);

accumulatedRevenue += PREMIUM_INDIVIDUAL;
console.log("Después del plan individual:", accumulatedRevenue);

accumulatedRevenue += PREMIUM_STUDENT;
console.log("Después del plan estudiantes:", accumulatedRevenue);

accumulatedRevenue += PREMIUM_DUO;
console.log("Después del plan dúo:", accumulatedRevenue);

accumulatedRevenue += PREMIUM_FAMILY;
console.log("Después del plan familiar:", accumulatedRevenue);

accumulatedRevenue *= 0.90;
console.log("Después del descuento promocional:", accumulatedRevenue);

accumulatedRevenue /= 4;
console.log("Promedio de ingreso por plan:", accumulatedRevenue);

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// TODO: Valida condiciones usando === y operadores de orden
// NUNCA uses == (penalización en la rúbrica)

// Ejemplo (NO copiar):
// const daysLate = 5;
// const isOnTime = daysLate === 0;
// console.log("¿Entregado a tiempo?", isOnTime);
// const hasFine = daysLate > 0;
// console.log("¿Tiene multa?", hasFine);

// Datos de ejemplo del sistema
    const PLAN_TYPE = "FAMILIAR";

// Validar si el plan seleccionado es familiar
    const IS_FAMILY_PLAN = PLAN_TYPE === "FAMILIAR";
    console.log("¿El usuario tiene plan familiar?", IS_FAMILY_PLAN);


// Verificar si el número de usuarios individuales es mayor que 300
    const MANY_INDIVIDUAL_USERS = INDIVIDUAL_USERS > 300;
    console.log("¿Hay más de 300 usuarios individuales?", MANY_INDIVIDUAL_USERS);

// Verificar si el plan estudiante tiene menos usuarios que el plan individual
    const STUDENTS_LESS_THAN_INDIVIDUAL = STUDENT_USERS < INDIVIDUAL_USERS;
console.log("¿Usuarios estudiantes son menos que individuales?", STUDENTS_LESS_THAN_INDIVIDUAL);

// Verificar si el número de usuarios dúo es exactamente 120
    const IS_EXACTLY_DUO = DUO_USERS === 120;
    console.log("¿Usuarios del plan dúo son exactamente 120?", IS_EXACTLY_DUO);
// Verificar si el plan familiar tiene más de 50 usuarios
    const POPULAR_FAMILY_PLAN = FAMILY_USERS >= 50;
    console.log("¿El plan familiar es popular?", POPULAR_FAMILY_PLAN);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

// TODO: Combina condiciones con &&, ||, !
// Al menos una condición con && y una con ||

// Ejemplo (NO copiar):
// const isMember = true;
// const purchaseAmount = 150_000;
// const qualifiesForDiscount = isMember && purchaseAmount >= 100_000;
// console.log("¿Descuento aplicable?", qualifiesForDiscount);

//DATOS DE EJEMLPOS DEL SISTEMA
    const HAS_PREMIUM = true;
    const MONTHLY_STREAMS = 1200;
    const PODCAST_DOWNLOADS = false;
//CONDICION USANDO && (AND)
// EL USUARIO ESTA ACTIVO SI TIENE PREMIUM Y MAS DE 500 REPRODUCCIONES
   const ACTIVE_USER = HAS_PREMIUM && MONTHLY_STREAMS > 500;
   console.log("¿El usuario está activo?", ACTIVE_USER);
 

//CONDICION USANDO || (OR)
// EL USUARIO PUEDE ACCEDER A CONTENIDO EXCLUSIVO SI TIENE PREMIUM O HA DESCARGADO PODCAST
    const EXCLUSIVE_CONTENT_ACCESS = HAS_PREMIUM || PODCAST_DOWNLOADS;
    console.log("¿El usuario tiene acceso a contenido exclusivo?", EXCLUSIVE_CONTENT_ACCESS);


//CONDICION USANDO ! (NOT)
// VERIFICA SI EL USUARIO NO HA DESCARGADO PODCASTS
    const NO_PODCAST_DOWNLOADS = !PODCAST_DOWNLOADS;
    console.log("¿El usuario no ha descargado podcasts?", NO_PODCAST_DOWNLOADS);

//OTRA CONDICION COMBINADA
    const VERY_ACTIVE_USER = HAS_PREMIUM && MONTHLY_STREAMS > 1000;
    console.log("¿El usuario es muy activo?", VERY_ACTIVE_USER);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

// TODO: Muestra un resumen con los valores más importantes
// calculados en las secciones anteriores

//RESUMEN DE USUARIOS POR PLAN
    console.log("Usuarios plan individual:", INDIVIDUAL_USERS);
    console.log("Usuarios plan estudiantes:", STUDENT_USERS);
    console.log("Usuarios plan dúo:", DUO_USERS);
    console.log("Usuarios plan familiar:", FAMILY_USERS);

//RESUMEN DE INGRESOS POR PLAN
    console.log("Ingresos por plan individual:", INDIVIDUAL_REVENUE);
    console.log("Ingresos por plan estudiantes:", STUDENT_REVENUE);
    console.log("Ingresos por plan dúo:", DUO_REVENUE);
    console.log("Ingresos por plan familiar:", FAMILY_REVENUE);
    
//RESUMEN DE INGRESOS TOTALES
    console.log("Ingresos totales de la plataforma:", TOTAL_REVENUE);

//PROMEDIO DE PRECIOS DE LOS PLANES
    console.log("Ingresos totales de la plataforma:", TOTAL_REVENUE);

//DIFERENCIA ENTRE EL PLAN MÁS CARO AL MÁS BARATO
console.log("Diferencia entre plan familiar y estudiantes:", PLAN_DIFFERENCE);

console.log("");
