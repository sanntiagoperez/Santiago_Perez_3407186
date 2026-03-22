# 🚀 Proyecto Semanal — Semana 06: Reporte con Bucles

> 🎯 **ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la semana.

---

## 🎯 Objetivo

Implementar un **sistema de reporte** que procese una colección de datos de tu dominio asignado usando todos los tipos de bucle vistos esta semana.

---

## 📋 Tu dominio asignado

**Dominio**: El instructor te ha asignado un dominio único al inicio del trimestre.

Cada aprendiz tiene un dominio diferente. Adapta todos los elementos de este proyecto a ese contexto.

---

## ✅ Requisitos Funcionales

Tu `script.js` debe implementar los siguientes 6 componentes:

### 1. Datos del dominio (array de elementos)

Define un array con **al menos 6 elementos** representativos de tu dominio. Cada elemento debe tener al menos: nombre, categoría y un valor numérico relevante.

### 2. Listar todos los elementos con `for...of`

Recorre el array e imprime cada elemento con su información básica.

### 3. Contar por categoría con `for...of` + contador

Usando un `for...of`, cuenta cuántos elementos pertenecen a cada categoría usando contadores.

### 4. Calcular totales y promedio con acumulador

Suma el valor numérico de todos los elementos y calcula el promedio.

### 5. Encontrar el máximo y mínimo

Identifica el elemento con mayor y menor valor numérico.

### 6. Generar reporte con `for` clásico

Usando un `for` clásico, imprime un reporte numerado de todos los elementos, indicando si su valor está por encima o por debajo del promedio.

---

## 💡 Ejemplos de adaptación por dominio

| Dominio     | Elemento    | Categorías posibles          | Valor numérico        |
| ----------- | ----------- | ---------------------------- | --------------------- |
| Biblioteca  | Libro       | ficción, no-ficción, ciencia | número de páginas     |
| Farmacia    | Medicamento | analgésico, antibiótico      | stock disponible      |
| Gimnasio    | Máquina     | cardio, fuerza, flexibilidad | horas de uso diario   |
| Restaurante | Platillo    | entrada, principal, postre   | precio                |
| Hospital    | Paciente    | urgente, programado, alta    | días de estancia      |
| Cine        | Película    | acción, comedia, drama       | duración en minutos   |
| Hotel       | Habitación  | simple, doble, suite         | precio por noche      |
| Escuela     | Estudiante  | primaria, secundaria         | calificación promedio |

---

## 🗂️ Estructura de archivos

```
3-proyecto/
├── README.md          ← este archivo
└── starter/
    └── script.js      ← aquí desarrollas tu proyecto
```

> **Nota**: La carpeta `solution/` existe localmente para referencia del instructor
> pero **no se publica en GitHub**. Debes completar el proyecto por tu cuenta.

---

## 📤 Entregables

1. `starter/script.js` completamente implementado con tu dominio
2. El script debe ejecutarse sin errores: `node starter/script.js`
3. La salida debe mostrar todos los componentes del reporte

---

## 🛠️ Evaluación

Ver `rubrica-evaluacion.md` para los criterios detallados (100 puntos).

| Componente                        | Puntos |
| --------------------------------- | ------ |
| Script sin errores                | 20     |
| `for` clásico funcional           | 20     |
| `while` o `do...while`            | 15     |
| `for...of` funcional              | 15     |
| `break` o `continue`              | 10     |
| Contadores y/o acumuladores       | 10     |
| Dominio coherente + código limpio | 10     |


**Salida de mi script**
´´´
=== LISTADO COMPLETO ===
1. Condenado Al Exito II— song — reproducciones: 61000000
2. Ex sicario rompe el silencio sobre carmen salinas— podcast — reproducciones: 289000000
3. Yo sé— song — reproducciones: 150000000
4. Nunca te lleves nada de a basura— podcast — reproducciones: 87000000
5. E.M.H.D.M— song — reproducciones: 3300000000
6. Lo que naide te dice sobre ser disciplinado— podcast — reproducciones: 8000000
7. Pico y Chao— song — reproducciones: 53000000
8. Bosques siniestros, iglesia malditas y afecciones demonicas— podcast — reproducciones: 87000000
9. 4.4.4— song — reproducciones: 354000000
10. F*cksNews: El niño satena— podcast — reproducciones: 423000000

=== CONTEO POR CATEGORÍA ===
song: 5 elemento(s)
podcast: 5 elemento(s)

=== ESTADÍSTICAS ===
Total reproducciones: 4812000000
Promedio reproducciones: 481200000.0

=== MÁXIMO Y MÍNIMO ===
Mayor reproducciones: E.M.H.D.M (3300000000)
Menor reproducciones: Lo que naide te dice sobre ser disciplinado (8000000)

=== REPORTE DETALLADO ===
1. Condenado Al Exito II — bajo el promedio
2. Ex sicario rompe el silencio sobre carmen salinas — bajo el promedio
3. Yo sé — bajo el promedio
4. Nunca te lleves nada de a basura — bajo el promedio
5. E.M.H.D.M — sobre el promedio
6. Lo que naide te dice sobre ser disciplinado — bajo el promedio
7. Pico y Chao — bajo el promedio
8. Bosques siniestros, iglesia malditas y afecciones demonicas — bajo el promedio
9. 4.4.4 — bajo el promedio
10. F*cksNews: El niño satena — bajo el promedio

=== FIN DEL REPORTE ===
´´´