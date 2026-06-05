# Suite de Pruebas Automatizadas - SauceDemo 🚀

Este repositorio contiene una suite de pruebas de punta a punta (End-to-End) desarrollada con **Cypress** para la plataforma de prácticas **SauceDemo**. El objetivo del proyecto es validar los flujos principales del negocio, aplicar pruebas de regresión y documentar comportamientos inesperados (bugs).



## 🛠️ Tecnologías y Herramientas
* **Framework de Pruebas:** Cypress (v13+)
* **Lenguaje:** JavaScript / Node.js
* **Gestión de Defectos:** Trello
* **Control de Versiones:** Git & GitHub



## 🧪 Casos de Prueba Automatizados

La suite está dividida en módulos estratégicos dentro de la carpeta `cypress/e2e/`:

1. **`Login.cy.js`:** Validación de control de accesos con credenciales válidas e inicio de sesión bloqueado.
2. **`inventario.cy.js`:** Verificación de comportamiento de los filtros de ordenamiento de productos y visualización de la interfaz.
3. **`carrito.cy.js`:** Pruebas funcionales sobre el flujo de adición y remoción de productos en el carrito de compras.
4. **`checkout.cy.js`:** * **Camino feliz:** Completar una orden de compra de punta a punta con datos válidos.
   * **Caso negativo:** Intento de avanzar en el formulario con campos obligatorios vacíos para validar las alertas del sistema.

---

## 📊 Reporte y Gestión de Bugs

Durante la ejecución de las pruebas automatizadas se detectaron fallas críticas en la aplicación (especialmente interactuando con el usuario `problem_user`). Los reportes de error correspondientes se encuentran documentados formalmente en el tablero de gestión:

📌 **https://trello.com/invite/b/6a1df63c6b6b570b314b7c4f/ATTIb05c5406bdd807ccc211231ffd973f9115F5A6FA/saucedemo-qa** 

### Resumen de bugs reportados:
* **BUG-001:** Error de consistencia visual (Imágenes de productos rotas/reemplazadas por la foto de un perrito).
* **BUG-002:** Falla funcional en el ordenamiento del catálogo por precio (Menor a Mayor).
* **BUG-003:** Bloqueo crítico en el formulario de Checkout (el campo *Last Name* no procesa la escritura de datos).

---

## 🚀 Cómo ejecutar las pruebas localmente

1. Clonar este repositorio.
2. Instalar las dependencias del proyecto ejecutando en la terminal:
   ```bash
   npm install
