# 📦 Proyecto Semana 09: Catálogo de Elementos

> **🎯 ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la semana 09.

---

## 🎯 Objetivo

Implementar un **catálogo por consola** que use todos los conceptos de objetos vistos esta semana: creación de objetos literales, métodos `Object.*`, `Object.hasOwn()`, iteración con `for...in`, spread operator y operaciones sobre arrays de objetos.

---

## 🏛️ Tu Dominio Asignado

> **Dominio**: _El instructor te asignará tu dominio al inicio del trimestre._

Tu catálogo debe representar una colección de elementos coherente con tu dominio. Por ejemplo:

- **Biblioteca** → catálogo de libros
- **Farmacia** → catálogo de medicamentos
- **Gimnasio** → catálogo de equipos o miembros
- **Restaurante** → catálogo de platillos
- **Hospital** → catálogo de servicios médicos
- **Cine** → catálogo de películas en cartelera

---

## 📋 Requisitos Funcionales

Tu `script.js` debe:

### 1. Datos (Array de Objetos)

- Definir un array `items` con **mínimo 6 objetos**
- Cada objeto debe tener **mínimo 5 propiedades** (incluyendo `id` y `available`/`active`)
- Al menos una propiedad **numérica** (precio, cantidad, rating, etc.)
- Al menos una propiedad **booleana** (`available`, `active`, `visible`, etc.)
- Al menos una propiedad **opcional** (no todos los objetos la tienen)

### 2. Inspección con Object.\*

- Usar `Object.keys()` para listar las propiedades del primer elemento
- Usar `Object.values()` para calcular estadísticas (promedio, total, máx/mín)
- Usar `Object.entries()` para imprimir el detalle formateado de un elemento

### 3. Verificación con Object.hasOwn()

- Verificar propiedades opcionales antes de usarlas
- Mostrar diferencias entre elementos que tienen/no tienen la propiedad

### 4. Iteración con for...in o forEach

- Recorrer y mostrar todas las propiedades de un elemento usando `for...in`
- O usar `Object.keys().forEach()` como alternativa

### 5. Spread Operator

- Crear al menos una copia de un objeto con `{...item}`
- Aplicar al menos una actualización inmutable: `{ ...item, prop: newValue }`

### 6. Operaciones con el Array

- `filter()` — filtrar por al menos dos criterios diferentes
- `find()` — buscar un elemento por `id` o nombre
- `map()` — transformar objetos añadiendo una propiedad calculada
- `sort()` — ordenar por el campo numérico (sin mutar el original)

### 7. Reporte Final

- Imprimir un reporte completo del catálogo con título, estadísticas y listado

---

## 💡 Ejemplos de Adaptación

| Dominio     | items        | Propiedad num. | Propiedad bool. | Propiedad optional |
| ----------- | ------------ | -------------- | --------------- | ------------------ |
| Biblioteca  | libros       | pages          | available       | isbn               |
| Farmacia    | medicamentos | price          | inStock         | prescription       |
| Gimnasio    | equipos      | capacity       | operational     | maintenanceDate    |
| Restaurante | platillos    | price          | available       | allergens          |
| Hospital    | servicios    | duration       | active          | specialist         |
| Cine        | películas    | duration       | showing         | rating             |

---

## 🗂️ Estructura del Proyecto

```
3-proyecto/
├── README.md         ← este archivo
└── starter/
    └── script.js     ← tu punto de partida (completar los TODOs)
```

---

## 🛠️ Cómo empezar

1. Abre `starter/script.js`
2. Define tu dominio en `DOMAIN_NAME` y `VALUE_LABEL`
3. Completa el array `items` con datos de tu dominio
4. Implementa cada función siguiendo los TODOs
5. Ejecuta con `node starter/script.js`

---

## ✅ Entregables

1. `starter/script.js` completamente implementado con tu dominio
2. `README.md` en la carpeta de tu entrega con:
   - Descripción de tu dominio
   - Screenshot o captura de la salida en consola
3. Ejecución sin errores: `node script.js`

---

## 📊 Criterios de Evaluación

| Criterio                                             | Puntos |
| ---------------------------------------------------- | ------ |
| Array con ≥6 objetos de ≥5 propiedades               | 5      |
| Uso correcto de `Object.keys/values/entries`         | 5      |
| Uso de `Object.hasOwn()` para propiedades opcionales | 5      |
| Iteración con `for...in` o `Object.keys().forEach()` | 5      |
| Spread operator: copia + actualización inmutable     | 5      |
| `filter`, `find`, `map`, `sort` correctos            | 10     |
| Reporte final claro y completo                       | 5      |
| Dominio coherente + clean code                       | 10     |
| Originalidad (sin copia de otros aprendices)         | 5      |
| **Total**                                            | **55** |

> Nota: La rúbrica oficial está en [rubrica-evaluacion.md](../rubrica-evaluacion.md)

---

## 🔗 Navegación

[← Prácticas](../2-practicas/README.md) | [← README de la semana](../README.md)

## Resultado de la terminal

```
PS C:\Users\Windows\Desktop\santiago_perez_3407186\week-09\3-proyecto\starter> node script.js

🚀 Iniciando catálogo: App de musica y podcast
   Total de Tracks: 6

📋 Detalle de: Condenado al exito II  
ID             : 1
Name           : Condenado al exito II
Type           : song
Duration       : 4.17
Reproductions  : 61000000
Active         : true
Artist         : Blessd

📊 Estadísticas para "Reproductions": 
   Total: 453000000
   Promedio: 75500000.00
   Mínimo: 15000000
   Máximo: 150000000

→ Condenado al exito II
ID 1
Type song
Duration 4.17
Reproductions 61000000
Active true
Artist Blessd

→ Arruinó 2 matrimonios por accidente 
ID 2
Type podcast
Duration 60.58
Reproductions 15000000
Active true
Artist Dark soul

→ Yo se
ID 3
Type song
Duration 2.09
Reproductions 150000000
Active true

→ Nunaca te lleves nada de la basura
ID 4
Type podcast
Duration 45.3
Reproductions 87000000
Active false

→ La noche más linda del mundo
ID 5
Type song
Duration 5.43
Reproductions 120000000
Active true
Artist Adalberto Santiago

→ Historias de Impacto
ID 6
Type podcast
Duration 30.15
Reproductions 20000000
Active true

🔍 Propiedades de "Condenado al exito II":
ID: 1
Name: Condenado al exito II
Type: song
Duration: 4.17
Reproductions: 61000000
Active: true
Artist: Blessd

🛠️ Item actualizado (inmutable):
{
  ID: 1,
  Name: 'Condenado al exito II',
  Type: 'song',
  Duration: 4.17,
  Reproductions: 999999999,
  Active: false,
  Artist: 'Blessd'
}

✅ Elementos activos:
[
  {
    ID: 1,
    Name: 'Condenado al exito II',
    Type: 'song',
    Duration: 4.17,
    Reproductions: 61000000,
    Active: true,
    Artist: 'Blessd'
  },
  {
    ID: 2,
    Name: 'Arruinó 2 matrimonios por accidente',
    Type: 'podcast',
    Duration: 60.58,
    Reproductions: 15000000,
    Active: true,
    Artist: 'Dark soul'
  },
  {
    ID: 3,
    Name: 'Yo se',
    Type: 'song',
    Duration: 2.09,
    Reproductions: 150000000,
    Active: true
  },
  {
    ID: 5,
    Name: 'La noche más linda del mundo',
    Type: 'song',
    Duration: 5.43,
    Reproductions: 120000000,
    Active: true,
    Artist: 'Adalberto Santiago'
  },
  {
    ID: 6,
    Name: 'Historias de Impacto',
    Type: 'podcast',
    Duration: 30.15,
    Reproductions: 20000000,
    Active: true
  }
]

🔎 Buscar ID 2:
{
  ID: 2,
  Name: 'Arruinó 2 matrimonios por accidente',
  Type: 'podcast',
  Duration: 60.58,
  Reproductions: 15000000,
  Active: true,
  Artist: 'Dark soul'
}

🔎 Buscar ID inexistente (99):
undefined

🧮 Elementos con duración formateada:
[
  {
    ID: 1,
    Name: 'Condenado al exito II',
    Type: 'song',
    Duration: 4.17,
    Reproductions: 61000000,
    Active: true,
    Artist: 'Blessd',
    formattedDuration: '4 min 10 seg'
  },
  {
    ID: 2,
    Name: 'Arruinó 2 matrimonios por accidente',
    Type: 'podcast',
    Duration: 60.58,
    Reproductions: 15000000,
    Active: true,
    Artist: 'Dark soul',
    formattedDuration: '60 min 35 seg'
  },
  {
    ID: 3,
    Name: 'Yo se',
    Type: 'song',
    Duration: 2.09,
    Reproductions: 150000000,
    Active: true,
    formattedDuration: '2 min 5 seg'
  },
  {
    ID: 4,
    Name: 'Nunaca te lleves nada de la basura',
    Type: 'podcast',
    Duration: 45.3,
    Reproductions: 87000000,
    Active: false,
    formattedDuration: '45 min 18 seg'
  },
  {
    ID: 5,
    Name: 'La noche más linda del mundo',
    Type: 'song',
    Duration: 5.43,
    Reproductions: 120000000,
    Active: true,
    Artist: 'Adalberto Santiago',
    formattedDuration: '5 min 26 seg'
  },
  {
    ID: 6,
    Name: 'Historias de Impacto',
    Type: 'podcast',
    Duration: 30.15,
    Reproductions: 20000000,
    Active: true,
    formattedDuration: '30 min 9 seg'
  }
]

📊 Ordenados por reproducciones (desc):
[
  {
    ID: 3,
    Name: 'Yo se',
    Type: 'song',
    Duration: 2.09,
    Reproductions: 150000000,
    Active: true
  },
  {
    ID: 5,
    Name: 'La noche más linda del mundo',
    Type: 'song',
    Duration: 5.43,
    Reproductions: 120000000,
    Active: true,
    Artist: 'Adalberto Santiago'
  },
  {
    ID: 4,
    Name: 'Nunaca te lleves nada de la basura',
    Type: 'podcast',
    Duration: 45.3,
    Reproductions: 87000000,
    Active: false
  },
  {
    ID: 1,
    Name: 'Condenado al exito II',
    Type: 'song',
    Duration: 4.17,
    Reproductions: 61000000,
    Active: true,
    Artist: 'Blessd'
  },
  {
    ID: 6,
    Name: 'Historias de Impacto',
    Type: 'podcast',
    Duration: 30.15,
    Reproductions: 20000000,
    Active: true
  },
  {
    ID: 2,
    Name: 'Arruinó 2 matrimonios por accidente',
    Type: 'podcast',
    Duration: 60.58,
    Reproductions: 15000000,
    Active: true,
    Artist: 'Dark soul'
  }
]

==================================================
📦 CATÁLOGO: APP DE MUSICA Y PODCAST
==================================================
Total de elementos: 6
Activos: 5

📊 Estadísticas para "Reproductions":
   Total: 453000000
   Promedio: 75500000.00
   Mínimo: 15000000
   Máximo: 150000000

🎵 Elementos ordenados por reproducciones:
1. Yo se - 150000000 reproducciones
2. La noche más linda del mundo - 120000000 reproducciones
3. Nunaca te lleves nada de la basura - 87000000 reproducciones
4. Condenado al exito II - 61000000 reproducciones
5. Historias de Impacto - 20000000 reproducciones
6. Arruinó 2 matrimonios por accidente - 15000000 reproducciones
==================================================

🏆 Más Popular:
Yo se(150000000)

🐢 Menos Popular:
Arruinó 2 matrimonios por accidente (15000000)
==================================================
```
