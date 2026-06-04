# Playwright Learning Guide

## Proyecto

Playwright QA Project

## Objetivo

Documentar el aprendizaje, conceptos, ejercicios, escenarios automatizados y lecciones aprendidas durante la construcción de un proyecto QA Automation utilizando Playwright, JavaScript, Git y GitHub.

---

# 1. Descripción del Proyecto

Este proyecto fue creado con el objetivo de aprender automatización de pruebas UI y API utilizando Playwright.

Durante el proyecto se desarrollaron escenarios de prueba automatizados para una aplicación web de práctica (SauceDemo) y para APIs públicas de aprendizaje.

Tecnologías utilizadas:

* Playwright
* JavaScript
* Git
* GitHub
* Visual Studio Code

---

# 2. Inventario de Escenarios Automatizados

## UI Testing

### Login

| ID     | Escenario               |
| ------ | ----------------------- |
| UI-001 | Login válido            |
| UI-002 | Login inválido          |
| UI-003 | Login con campos vacíos |

### Cart

| ID     | Escenario                |
| ------ | ------------------------ |
| UI-004 | Add to cart              |
| UI-005 | Cart counter increases   |
| UI-006 | Button changes to Remove |

### Checkout

| ID     | Escenario                  |
| ------ | -------------------------- |
| UI-007 | Checkout con campos vacíos |
| UI-008 | Checkout exitoso           |

---

## API Testing

| ID      | Escenario              |
| ------- | ---------------------- |
| API-001 | GET Post by ID         |
| API-002 | POST Create Post       |
| API-003 | GET Invalid Post (404) |

---

# 3. Resumen de Aprendizaje

Conceptos aprendidos:

* Locators
* Assertions
* UI Testing
* API Testing
* GET Requests
* POST Requests
* Status Codes
* JSON Responses
* Git Commits
* Git Push
* GitHub Repository Management


# 4. Conceptos Fundamentales

## Cómo leer un script de automatización

Durante el aprendizaje se identificó una regla fundamental:

Toda línea de código suele pertenecer a una de estas categorías:

### Acción

Realiza una operación dentro del sistema.

Ejemplos:

```js
await page.click();
await page.fill();
await request.get();
await request.post();
```

Traducción:

* Hacer click
* Llenar un campo
* Solicitar información
* Enviar información

---

### Lectura

Obtiene información del sistema.

Ejemplos:

```js
response.status();
response.json();
body.id;
```

Traducción:

* Obtener código de respuesta
* Obtener contenido JSON
* Leer valor de un campo

---

### Validación

Compara el resultado obtenido con el resultado esperado.

Ejemplos:

```js
expect(response.status()).toBe(200);

expect(body.title).toContain('sunt');
```

Traducción:

* Validar que el código sea 200
* Validar que el texto contenga la palabra sunt

---

## Fórmula Mental para Leer Código

En lugar de leer símbolos y paréntesis, se recomienda traducir cada línea a lenguaje QA.

Ejemplo:

Código:

```js
expect(response.status()).toBe(200);
```

Traducción QA:

Validar que el código de respuesta sea 200.

---

Código:

```js
await request.get('/posts/1');
```

Traducción QA:

Realizar una petición GET al endpoint del post 1.

---

# 5. Conceptos de UI Testing

## Locator

Definición:

Método utilizado para identificar elementos dentro de una página web.

Ejemplo:

```js
page.locator('[data-test="error"]');
```

Traducción:

Buscar el elemento cuyo atributo data-test tiene el valor error.

---

## Click

Definición:

Acción utilizada para interactuar con un botón o elemento.

Ejemplo:

```js
await page.click();
```

Traducción:

Hacer click sobre un elemento.

---

## Fill

Definición:

Acción utilizada para ingresar información en un campo.

Ejemplo:

```js
await page.fill('#first-name', 'Juan');
```

Traducción:

Ingresar el valor Juan en el campo First Name.

---

## Expect

Definición:

Método utilizado para validar resultados esperados.

Ejemplo:

```js
expect(locator).toHaveText('Remove');
```

Traducción:

Validar que el texto del elemento sea Remove.

# 6. Conceptos de API Testing

## ¿Qué es una API?

API (Application Programming Interface) es un mecanismo que permite la comunicación entre sistemas.

En API Testing no se interactúa directamente con botones o pantallas.

La comunicación se realiza mediante solicitudes (requests) y respuestas (responses).

---

## Request

Definición:

Solicitud enviada desde un cliente hacia un servidor.

Ejemplo:

```js
await request.get('/posts/1');
```

Traducción:

Solicitar información al servidor.

---

## Response

Definición:

Respuesta recibida desde el servidor después de una solicitud.

Ejemplo:

```js
const response = await request.get('/posts/1');
```

Traducción:

Guardar la respuesta enviada por el servidor.

---

## GET

Definición:

Método utilizado para obtener información.

Ejemplo:

```js
await request.get('/posts/1');
```

Traducción:

Solicitar información del recurso con ID 1.

---

## POST

Definición:

Método utilizado para enviar información al servidor.

Ejemplo:

```js
await request.post('/posts');
```

Traducción:

Enviar información para crear un nuevo recurso.

---

## JSON

Definición:

Formato utilizado para intercambiar datos entre sistemas.

Ejemplo:

```json
{
  "userId": 1,
  "id": 1,
  "title": "QA Test"
}
```

---

## response.json()

Definición:

Método utilizado para convertir la respuesta en formato JSON y poder leer sus datos.

Ejemplo:

```js
const body = await response.json();
```

Traducción:

Guardar los datos recibidos del servidor.

---

## body.id

Definición:

Acceso a un campo específico dentro del JSON.

Ejemplo:

```js
body.id
```

Traducción:

Leer el valor del campo id.

---

# 7. Status Codes

## 200 OK

Significado:

La solicitud fue procesada correctamente.

Ejemplo:

```js
expect(response.status()).toBe(200);
```

Traducción:

Validar que la respuesta fue exitosa.

---

## 201 Created

Significado:

El recurso fue creado correctamente.

Ejemplo:

```js
expect(response.status()).toBe(201);
```

Traducción:

Validar que el recurso fue creado exitosamente.

---

## 404 Not Found

Significado:

El recurso solicitado no existe.

Ejemplo:

```js
expect(response.status()).toBe(404);
```

Traducción:

Validar que el recurso no fue encontrado.

---

## Otros códigos importantes

| Código | Significado           |
| ------ | --------------------- |
| 200    | OK                    |
| 201    | Created               |
| 400    | Bad Request           |
| 401    | Unauthorized          |
| 403    | Forbidden             |
| 404    | Not Found             |
| 500    | Internal Server Error |

---

# 8. Assertions Utilizadas

## toBe()

Definición:

Valida que un valor sea exactamente igual al esperado.

Ejemplo:

```js
expect(body.id).toBe(1);
```

Traducción:

Validar que el valor sea exactamente 1.

---

## toContain()

Definición:

Valida que un texto contenga una palabra o fragmento específico.

Ejemplo:

```js
expect(body.title).toContain('sunt');
```

Traducción:

Validar que el texto contenga la palabra sunt.

# 9. Lecciones Aprendidas

Durante el desarrollo de este proyecto se identificaron varios conceptos que inicialmente generaron dificultades y que posteriormente fueron comprendidos mediante la práctica.

---

## Lección 1: No leer código como desarrollador

Error inicial:

Intentar entender cada símbolo, paréntesis o corchete individualmente.

Aprendizaje:

Traducir el código a lenguaje QA.

Ejemplo:

```js
expect(response.status()).toBe(200);
```

Traducción:

Validar que el código de respuesta sea 200.

---

## Lección 2: Diferenciar acción y validación

Error inicial:

Confundir una acción con una validación.

Aprendizaje:

Las acciones ejecutan algo.

Las validaciones comprueban algo.

Ejemplos:

Acción:

```js
await page.click();
```

Validación:

```js
expect(locator).toHaveText('Remove');
```

---

## Lección 3: Entender los locators

Error inicial:

No saber cómo identificar un locator dentro del HTML.

Aprendizaje:

Un locator se construye utilizando atributos, clases, ids o texto visible.

Ejemplo:

```html
<h3 data-test="error">
```

Tag:

```txt
h3
```

Atributo:

```txt
data-test
```

Valor:

```txt
error
```

Locator:

```js
page.locator('[data-test="error"]');
```

---

## Lección 4: Entender GET y POST

GET:

Obtener información.

POST:

Enviar información.

---

## Lección 5: Comprender JSON

Error inicial:

No entender de dónde salían los valores utilizados en las validaciones.

Aprendizaje:

Los datos provienen del JSON devuelto por la API.

Ejemplo:

```json
{
  "userId": 1,
  "id": 1,
  "title": "QA Test"
}
```

Los campos pueden ser accedidos mediante:

```js
body.userId
body.id
body.title
```

---

## Lección 6: Comprender WebKit

Error inicial:

Pensar que WebKit estaba relacionado con API Testing.

Aprendizaje:

WebKit representa Safari dentro de Playwright.

Las pruebas API no dependen del navegador.

Los tests API aparecían tres veces debido a la configuración de proyectos:

* Chromium
* Firefox
* WebKit

---

## Lección 7: Comprender Test, Project y Execution

Test:

Escenario automatizado individual.

Ejemplo:

```txt
Login válido
```

Project:

Configuración de navegador definida en playwright.config.js.

Ejemplo:

```txt
Chromium
Firefox
WebKit
```

Execution:

Resultado de ejecutar un test dentro de un proyecto.

Ejemplo:

```txt
1 Test × 3 Projects = 3 Executions
```

---

# 10. Chuleta Rápida Playwright

## UI

| Código       | Traducción      |
| ------------ | --------------- |
| goto()       | Abrir página    |
| click()      | Hacer click     |
| fill()       | Llenar campo    |
| locator()    | Buscar elemento |
| expect()     | Validar         |
| toHaveText() | Validar texto   |

---

## API

| Código            | Traducción               |
| ----------------- | ------------------------ |
| request.get()     | Obtener información      |
| request.post()    | Enviar información       |
| response.status() | Obtener código respuesta |
| response.json()   | Obtener JSON             |
| body.id           | Leer campo id            |
| body.title        | Leer campo title         |

---

## Assertions

| Método      | Significado                |
| ----------- | -------------------------- |
| toBe()      | Debe ser exactamente igual |
| toContain() | Debe contener              |

---

# 11. Próximos Pasos

Una vez completada esta primera etapa, los siguientes temas recomendados son:

1. Page Object Model (POM)
2. Fixtures
3. Hooks
4. Test Data Management
5. Reporting Avanzado
6. GitHub Actions
7. CI/CD
8. Automatización de APIs más complejas

---

# 12. Estado del Proyecto

Versión: Playwright UI + API V1

Estado: Completado

