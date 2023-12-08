# Instructions  

Objetivo: El objetivo de este ejercicio es que los estudiantes apliquen los conceptos de enrutado utilizando React Router para crear una aplicación web con al menos cuatro rutas diferentes, un encabezado con barra de navegación y un componente de pie de página. Deberán crear rutas para las secciones "Home, "Quiénes Somos", "Productos y Servicios" y un "Formulario de Contacto".

```
Requisitos:

1. Conocimientos de como crear componentes de React y su importación.

2. Instalación previa de React y React Router en su entorno de desarrollo.
```

## Instrucciones paso a paso:

Configuración inicial:

Inicia un nuevo proyecto de React o utiliza uno existente.
Asegúrate de haber instalado React Router en tu proyecto usando el siguiente comando:

```javascript
npm install react-router-dom
```
### Estructura de carpetas:

Organiza tu proyecto en una estructura de carpetas adecuada, por ejemplo:
css

```
src/
├── components/
│   ├── Home.js
│   ├── Header.js
│   ├── NavBar.js
│   ├── Footer.js
│   ├── QuienesSomos.js
│   ├── ProductosServicios.js
│   ├── Contacto.js
├── App.js
├── index.js
```


## Creación de componentes:

Crea los siguientes componentes en sus respectivos archivos:
Header.js: Contiene el encabezado con un título y un enlace a la página de inicio.
NavBar.js: Contiene la barra de navegación con enlaces a las cuatro secciones.
Footer.js: Contiene el pie de página con información de contacto, derechos de autor, etc.
QuienesSomos.js, ProductosServicios.js y Contacto.js: Estos componentes representan el contenido de las secciones respectivas. Pueden contener texto, imágenes o cualquier otro contenido relevante.
Configuración de React Router:

En el archivo App.js, configura las rutas utilizando React Router. Debes importar los componentes que creaste y asignar una ruta a cada uno.

### Por ejemplo:

```
<Route path="/" element={Home} />
<Route path="/about" element={QuienesSomos} />
<Route path="/productos" element={ProductosServicios} />
<Route path="/contacto" element={Contacto} />
```

## Estilo y diseño:

Personaliza el estilo de tus componentes utilizando CSS o alguna biblioteca de estilos como Material-UI o Styled Components.

## Desafío adicional (opcional):

Agrega una cuarta ruta y componente para una sección adicional de tu elección.

Recuerda que el objetivo principal de este ejercicio es aprender a utilizar React Router para crear una aplicación con múltiples rutas y enlaces de navegación. Deberas demostrar tu comprensión de cómo configurar y utilizar React Router y cómo crear una estructura de componentes básica para una aplicación web.

# Te deseo mucho éxito!!! 
  