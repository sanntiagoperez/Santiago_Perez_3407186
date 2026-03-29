# 📦 Proyecto Semana 8: Gestión de Inventario con Arrays

> **🎯 ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la semana.

---

## 🎯 Objetivo

Aplicar todos los métodos de arrays vistos en la semana para construir un script de gestión de inventario adaptado a tu **dominio asignado**.

---

## 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio al inicio del trimestre]

Ejemplos de adaptación:

- **Biblioteca** → inventario de libros
- **Farmacia** → inventario de medicamentos
- **Gimnasio** → cartera de miembros
- **Restaurante** → carta de platillos
- **Banco** → portafolio de productos financieros
- **Hospital** → registro de pacientes en espera

---

## ✅ Requisitos Funcionales

Tu script debe demostrar el uso de los siguientes elementos:

### 1. Estructura de datos

- [ ] Un array con **mínimo 5 objetos** representativos de tu dominio
- [ ] Cada objeto debe tener al menos: `id`, `name`, y **3 propiedades adicionales** relevantes al dominio
- [ ] Una de las propiedades debe ser booleana (ej: `active`, `available`, `inStock`)
- [ ] Una de las propiedades debe ser numérica (ej: `price`, `quantity`, `score`)

### 2. Métodos de mutación (mínimo 4)

- [ ] `push` — agregar un nuevo elemento al array
- [ ] `pop` o `shift` — eliminar un elemento
- [ ] `unshift` — agregar un elemento prioritario al inicio
- [ ] `splice` — eliminar o reemplazar un elemento por posición

### 3. Métodos de búsqueda (mínimo 2)

- [ ] `find` o `findIndex` — localizar un elemento por condición
- [ ] `filter` — obtener un subconjunto de elementos por condición
- [ ] `includes` o `indexOf` (opcional, como bonus)

### 4. Métodos de iteración (mínimo 2)

- [ ] `forEach` — mostrar o imprimir elementos
- [ ] `map` — transformar los datos para presentarlos

### 5. Spread operator (mínimo 1 uso)

- [ ] Usar `...` para copiar, fusionar o agregar elementos sin mutar el original

### 6. Reporte final con `console.log`

- [ ] Mostrar el estado inicial del inventario
- [ ] Mostrar cambios realizados con los métodos de mutación
- [ ] Mostrar resultados de búsqueda y filtrado
- [ ] Mostrar el inventario final

---

## 🛠️ Entregables

1. `script.js` — código funcional adaptado a tu dominio
2. `README.md` — descripción de tu dominio y cómo ejecutar el script

---

## 💡 Cómo empezar

1. Abre `starter/script.js`
2. Cambia `DOMAIN_NAME` y `VALUE_LABEL` por los de tu dominio
3. Define tu array `items` con objetos de tu dominio
4. Completa cada `TODO` con la implementación de tu dominio
5. Ejecuta con `node starter/script.js` para verificar que funcione

---

## 🚀 Cómo ejecutar

```bash
# Desde la carpeta week-08/3-proyecto
node starter/script.js
```

---

## 📊 Criterios de Evaluación

| Criterio                                   | Puntos     |
| ------------------------------------------ | ---------- |
| Script ejecuta sin errores                 | 10 pts     |
| Mínimo 5 objetos con propiedades correctas | 5 pts      |
| Demuestra ≥ 4 métodos de mutación          | 10 pts     |
| Demuestra ≥ 2 métodos de búsqueda/filtrado | 5 pts      |
| Demuestra `map` para transformar datos     | 5 pts      |
| Spread operator usado correctamente        | 5 pts      |
| Reporte final claro y bien etiquetado      | 5 pts      |
| Código coherente con el dominio asignado   | 10 pts     |
| Nombres descriptivos, formato correcto     | 5 pts      |
| **Total**                                  | **60 pts** |

> Ver `rubrica-evaluacion.md` para el detalle completo de la evaluación.

## Resultado de la terminal
```
==================================================
🎧 GESTIÓN DE APP DE MUSICA Y PODCAST
==================================================

📻 Inventario inicial (5 Tracks):
  [1] Condenado Al Exito II song 61000000 4.17 Activo
  [2] Arruino dos matrimonios por accidente podcast 150000000 60.58 Activo   
  [3] Yo se song 150000000 2.09 Activo
  [4] Las redes sociales estan fuera de control podcast 87000000 120.3 Activo
  [5] Pico y Chao (WSound 08) song 54000000 3.22 Activo

--- Operaciones de mutación ---

Agregado: Ella queria huir de ese lugar y no la dejaron
Elemento prioritario agregado: Yogurcito
Eliminado: Yo se
Eliminado: Ella queria huir de ese lugar y no la dejaron

--- Inventario después de mutaciones ---

  [7] Yogurcito song 999999999 3.03 Activo
  [1] Condenado Al Exito II song 61000000 4.17 Activo
  [2] Arruino dos matrimonios por accidente podcast 150000000 60.58 Activo   
  [4] Las redes sociales estan fuera de control podcast 87000000 120.3 Activo
  [5] Pico y Chao (WSound 08) song 54000000 3.22 Activo

--- Búsqueda y filtrado ---

🔍 Elemento no encontrado

✅ Elementos activos (5):
Snapshot original: 5
Snapshot extendido: 6

--- Transformación con map ---

Nombres: [
  'Yogurcito',
  'Condenado Al Exito II',
  'Arruino dos matrimonios por accidente',
  'Las redes sociales estan fuera de control',
  'Pico y Chao (WSound 08)'
]
Reproducciones aumentadas:
Yogurcito: NaN
Condenado Al Exito II: NaN
Arruino dos matrimonios por accidente: NaN
Las redes sociales estan fuera de control: NaN
Pico y Chao (WSound 08): NaN

--- Resumen final ---

Total en inventario: 5 Tracks
Activos: 5 | Inactivos: 0

==================================================
✅ Reporte completado
==================================================
```