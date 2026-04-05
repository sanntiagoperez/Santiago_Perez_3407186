# 🚀 Proyecto Integrador — Etapa 0

> **🎯 ÚNICO ENTREGABLE OBLIGATORIO de la semana.**
> Este proyecto representa **5 horas** del tiempo semanal (de 8 horas totales).

---

## 🏛️ ¿Qué es este proyecto?

Es una **aplicación de consola completa** que integra **todos** los conceptos
aprendidos en las semanas 01–09 (Etapa 0).

No hay sintaxis nueva. La habilidad a demostrar es la **integración y diseño**:
combinar variables, funciones, arrays, objetos y condicionales para construir
algo coherente con tu **dominio asignado**.

---

## 📋 Tu Dominio Asignado

> **Dominio**: El instructor lo asignó al inicio del trimestre.  
> Si no recuerdas cuál es el tuyo, consulta al instructor.

Ejemplos de dominios: Biblioteca, Farmacia, Gimnasio, Restaurante, Banco,
Hospital, Cine, Hotel, Agencia de Viajes, Concesionario, Tienda de ropa...

---

## 🎯 Objetivos del Proyecto

1. Aplicar **todos** los conceptos de las semanas 01–09 en un archivo único
2. Diseñar primero, codificar después (usa el ejercicio-01 como guía)
3. Construir una aplicación coherente con tu dominio asignado
4. Entregar código limpio, comentado y funcional

---

## ✅ Requisitos Funcionales

### Datos obligatorios

- [ ] **Array principal** con **mínimo 6 objetos** del dominio
- [ ] Cada objeto con **mínimo 5 propiedades** (tipos mixtos: string, number, boolean)
- [ ] **Al menos una propiedad opcional** (puede existir o no, manejada con `?.` y `??`)
- [ ] **Al menos una constante** de configuración con separador numérico (`1_000`)

### Funciones obligatorias (mínimo 6)

| #   | Función                       | Conceptos involucrados                        |
| --- | ----------------------------- | --------------------------------------------- |
| 1   | `addItem(item)`               | Arrays, push, validación básica               |
| 2   | `findById(id)`                | find, optional chaining                       |
| 3   | `getActive()`                 | filter, boolean                               |
| 4   | `filterByField(field, value)` | filter, comparación                           |
| 5   | `updateItem(id, changes)`     | spread, map, Object.\*                        |
| 6   | `calculateStats(field)`       | Object.values, reduce, mínimo/máximo/promedio |
| 7   | `formatItem(item)`            | template literals, padEnd/padStart            |
| 8   | `buildReport()`               | Object.entries, forEach, display completo     |

### Técnicas requeridas (checklist de integración)

| Semana | Técnica                                                   | ¿Usada? |
| ------ | --------------------------------------------------------- | ------- |
| 01–02  | `const`/`let`, tipos primitivos, separadores numéricos    | ☐       |
| 03     | Operadores aritméticos, comparación, lógicos              | ☐       |
| 04     | Template literals, `.padEnd()`, `.toUpperCase()`          | ☐       |
| 05     | `if/else`, ternario, `switch` o `&&`/`\|\|`               | ☐       |
| 06     | `for`, `while` o `for...of`                               | ☐       |
| 07     | Arrow functions, parámetros por defecto, `??`, `?.`       | ☐       |
| 08     | `.filter()`, `.map()`, `.find()`, `.sort()`, `.forEach()` | ☐       |
| 09     | `Object.keys/values/entries`, `Object.hasOwn`, spread     | ☐       |

---

## 🗂️ Estructura del Archivo Final

El proyecto debe seguir esta estructura (6 secciones):

```
// ============================================
// SECCIÓN 1: Configuración y Constantes
// ============================================

// ============================================
// SECCIÓN 2: Datos — Array principal
// ============================================

// ============================================
// SECCIÓN 3: Funciones CRUD
// ============================================

// ============================================
// SECCIÓN 4: Funciones de Análisis
// ============================================

// ============================================
// SECCIÓN 5: Funciones de Display
// ============================================

// ============================================
// SECCIÓN 6: Ejecución Principal
// ============================================
```

---

## 💡 Ejemplos de Adaptación por Dominio

| Dominio     | Array principal | Propiedad numérica para stats   |
| ----------- | --------------- | ------------------------------- |
| Biblioteca  | `books`         | precio, páginas, año            |
| Farmacia    | `medicines`     | precio, stock, dosificación     |
| Gimnasio    | `members`       | edad, cuota, días asistencia    |
| Restaurante | `dishes`        | precio, calorías, tiempo prep.  |
| Banco       | `accounts`      | saldo, límite crédito, tasa     |
| Hospital    | `patients`      | edad, días ingreso, temperatura |

---

## 📁 Archivos de Entrega

```
3-proyecto/
├── README.md              ← este archivo
├── starter/
│   └── app.js             ← plantilla con TODOs para comenzar
└── solution/              ← ⚠️ NO subido a GitHub (.gitignore)
    └── app.js
```

---

## 🛠️ Cómo Trabajar

### Paso 1: Planifica primero (usa ejercicio-01 como guía)

Antes de abrir `starter/app.js`, completa el documento de planificación:

```bash
# Copia la plantilla del ejercicio-01
cp 2-practicas/ejercicio-01-planificacion/starter/plan.md 3-proyecto/plan.md
```

Completa: dominio, modelo de datos, funciones, pseudocódigo.

### Paso 2: Implementa en el starter

```bash
# Edita el starter
code 3-proyecto/starter/app.js

# Ejecútalo mientras desarrollas
node 3-proyecto/starter/app.js
```

### Paso 3: Valida el checklist

Antes de entregar, revisa que cada fila del checklist de integración tenga ✓.

---

## 📊 Criterios de Evaluación

El proyecto representa el **30% (Pr)** de la rúbrica semanal:

| Criterio                   | Puntos | ¿Qué se evalúa?                      |
| -------------------------- | ------ | ------------------------------------ |
| Pr1 — Sin errores          | 10 pts | El código corre sin excepciones      |
| Pr2 — Integración completa | 10 pts | Usa los 9 conceptos requeridos       |
| Pr3 — Dominio + clean code | 5 pts  | Coherencia del dominio + legibilidad |
| Pr4 — Originalidad         | 5 pts  | Implementación propia, no copiada    |

---

## 🔗 Recursos de Apoyo

- [Cheatsheet Semanas 01–09](../1-teoria/01-revision-etapa-0.md)
- [Guía de Diseño de Solución](../1-teoria/02-diseño-solucion.md)
- [Ejemplo de Planificación](../2-practicas/ejercicio-01-planificacion/solution/plan.md)
- [Ejemplo de Integración](../2-practicas/ejercicio-02-integracion/solution/index.js)

---

## 🔗 Navegación

- [← Prácticas](../2-practicas/README.md)
- [📋 README de la semana](../README.md)
- [Semana 11 →](../../week-11/README.md)


## Resultado de la Terminal
```

========================================
  MUSIC_PODCAST_APP
========================================
Total de Tracks: 6 / 1000

Encontrado id=1: Condenado al exito II

Activos: 5
  [1]    [Condenado al exito II]             song         61000000 Activo Reggaeton
  [2]    [Arruinó 2 matrimonios por accidente] podcast      15000000 Activo N/A
  [3]    [Yo se]                             song        150000000 Activo Trap
  [5]    [La noche más linda del mundo]      song        120000000 Activo Salsa
  [6]    [El viaje de la vida]               podcast      95000000 Activo Historias motivacionales

Filtro type=song: 3 resultados
  [1]    [Condenado al exito II]             song         61000000 Activo Reggaeton
  [3]    [Yo se]                             song        150000000 Activo Trap
  [5]    [La noche más linda del mundo]      song        120000000 Activo Salsa

Actualizado id=1: plays=999999999

Estadísticas (plays): min=15000000 max=150000000 avg=88000000.00


📊 REPORTE — MUSIC_PODCAST_APP
======================================================================
[1]    [Condenado al exito II]             song         61000000 Activo Reggaeton
[2]    [Arruinó 2 matrimonios por accidente] podcast      15000000 Activo N/A
[3]    [Yo se]                             song        150000000 Activo Trap
[4]    [Nunca te lleves nada de la basura] podcast      87000000 Inactivo N/A
[5]    [La noche más linda del mundo]      song        120000000 Activo Salsa
[6]    [El viaje de la vida]               podcast      95000000 Activo Historias motivacionales

🔎 ESTADO:
Activos: 5
Inactivos: 1

📈 ESTADÍSTICAS (Reproducciones):
Min: 15000000
Max: 150000000
Promedio: 88000000
Total: 528000000

🧩 ESTRUCTURA DEL ITEM:
id: 1
title: Condenado al exito II
type: song
plays: 61000000
duration: 4.17
active: true
artist: Blessd
genre: Reggaeton

======================================================================
Total de Tracks: 6
✅ Tracks agregado: Energia
```