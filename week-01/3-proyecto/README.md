# 🏛️ Proyecto Semana 1: Ficha de Presentación de Dominio

> **🎯 ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la Semana 1.

---

## 📋 Tu Dominio Asignado

**Dominio**: [Aplicación de Música y Podcast]

> ⚠️ **POLÍTICA ANTICOPIA**: Cada aprendiz tiene un **dominio único**. Tu código debe reflejar tu dominio específico. Una implementación copiada o no adaptada resulta en calificación de cero.

---

## 🎯 Objetivo

Construir un script JavaScript que se ejecute en Node.js y muestre en la consola una ficha de presentación de una entidad de una aplicación de música y podcasts, aplicando todo lo aprendido esta semana: `console.log()`, tipos primitivos (string, number, boolean) y comentarios.

No se utilizan variables todavía. Solo `console.log()`, tipos de datos, expresiones y comentarios bien estructurados.

---

## 📋 Descripción

En este proyecto se desarrolla un script en JavaScript que muestra en la consola una ficha informativa sobre una canción o podcast dentro de una aplicación de música.

La aplicación permite a los usuarios:

Escuchar canciones

Descubrir nuevos podcasts

Crear perfiles de usuario

Crear listas de reproducción

Buscar música o episodios de podcast

El objetivo del script es mostrar información organizada sobre una canción o episodio de podcast dentro de la plataforma.

---

## ✅ Requisitos

### Requisitos de contenido (adaptados a tu dominio)

El script debe mostrar **como mínimo**:

1. Nombre de la **entidad principal** de tu dominio (string)
2. Identificador o código único (string o number)
3. Descripción o categoría (string)
4. Al menos **un dato numérico** relevante al dominio (number)
5. Al menos **dos valores boolean** que representen estados de la entidad
6. Una **expresión aritmética** calculada (ej: precio con descuento, total, capacidad restante)
7. Una sección de **resumen del dominio**

### Requisitos técnicos

- [ ] El archivo se llama `script.js` y corre con `node script.js`
- [ ] Usa `console.log()` para toda la salida
- [ ] Incluye como mínimo **3 comentarios** que expliquen secciones del código
- [ ] La salida está organizada con separadores visuales (líneas de `-` o `=`)
- [ ] Los comentarios están escritos en **español**
- [ ] No hay errores al ejecutar con `node`

---

## 💡 Ejemplo de salida esperada

```
=========================================
[APP DE MUSICA Y PODCAST] - FICHA DE PRESENTACIÓN: 3407186
=========================================

INFORMACIÓN GENERAL
El programa consiste en el desarrollo de una aplicaciòn web de mùsica y podcasts deonde los usuarios pòdrian escuchar sus canciones favoritas y descubrir nuevos podcasts en un mismos lugar. la plataforma permitirà a los usuarios crear sus propios perfiles y añadir canciones a sus listas de reproducciòn. Además, la aplicaciòn permitirà a los usuarios buscar mùsica, reproducir canciones, escuchar episodios de podcast y crear listas de reproducción según sus gustos.
Nombre:          [NOMBRE DE LA CANCION O PODCAST]
Creador:          [NOMBRE DEL ARTISTA]
Genero:          [GENERO ]
Duración:          [MINUTOS]
Popularidad:       [ALTA, MEDIA O BAJA]
Estado:          [PBLICADO O EN PROCESO ]

DETALLES
--------------------
Reproducciones:    [NÚMERO]
Likes:     [NÚMERO]
Es favorito:  [true o false]
Disponible offline:  [true o false]

RESUMEN DEL DOMINIO
--------------------
Dominio:          [PATAFORMA DE MÚSICA Y PODCAST]
Entidad:          [CANCIÓN / EPISODIO]
Total registros:  [12]

=========================================
[Gracias por usar mi app:)]
=========================================
```

---

## 💡 Ejemplos de Adaptación por Dominio

| Si tu dominio es... | Tu entidad principal es... | Datos numéricos relevantes            |
| ------------------- | -------------------------- | ------------------------------------- |
| Planetario          | Exhibición                 | capacidad, duración, asistentes       |
| Acuario             | Especie marina             | ejemplares, tamaño, temperatura       |
| Museo               | Obra o artefacto           | valor estimado, año de creación, sala |
| Zoológico           | Animal o especie           | ejemplares, peso, edad                |
| Observatorio        | Evento astronómico         | duración, distancia, magnitud         |
| Archivo Histórico   | Documento                  | páginas, año, categoría               |

---

## 📁 Estructura del Proyecto

```
3-proyecto/
├── README.md         ← Este archivo
└── starter/
    └── script.js     ← Tu punto de partida
```

---

## 🛠️ Cómo Empezar

1. **Confirma tu dominio** con el instructor
2. Abre `starter/script.js`
3. Lee los comentarios y TODOs
4. Adapta cada TODO al contexto de **tu** dominio asignado
5. Ejecuta para verificar: `node starter/script.js`
6. Ajusta el formato hasta que la salida sea legible y organizada

---

## 🏃 Cómo Ejecutar

```bash
cd bootcamp/week-01/3-proyecto
node starter/script.js
```

---

## 📊 Criterios de Evaluación

| Criterio                                 | Puntos      |
| ---------------------------------------- | ----------- |
| El script corre sin errores              | 20 pts      |
| Muestra los 7 datos requeridos           | 25 pts      |
| Al menos 3 comentarios en español        | 15 pts      |
| Salida organizada y legible              | 15 pts      |
| Usa string, number Y boolean             | 15 pts      |
| Adaptación coherente al dominio asignado | 10 pts      |
| **Total**                                | **100 pts** |

> Mínimo para aprobar: **70 puntos**

---

## ❓ Preguntas Frecuentes

**P: ¿Qué dominio debo usar?**
R: El que te asigne tu instructor. Si no lo sabes, pregúntale antes de empezar.

**P: ¿Puedo ver el código de un compañero?**
R: No. Cada dominio es único — tu implementación debe ser original y coherente con tu dominio.

**P: ¿Puedo usar variables?**
R: No todavía. Esta semana solo `console.log()`, valores literales y comentarios. Las variables llegan en la Semana 2.

**P: ¿Qué pasa si mi dominio no aparece en la tabla de ejemplos?**
R: Si tu dominio es distinto, aplica la misma lógica: elige una entidad principal con nombre, código, descripción, datos numéricos y estados booleanos.

---

## 🔗 Navegación

⬅️ [Volver a Prácticas](../2-practicas/)
➡️ [Semana 2: Variables y Tipos de Datos](../../week-02/README.md)
