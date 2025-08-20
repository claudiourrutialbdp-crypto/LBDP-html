# Sitio Web del Liceo - HTML Estático

Este es el sitio web institucional del Liceo, implementado como archivos HTML estáticos.

## Estructura del Proyecto

```
/
├── index.html                     # Página principal
├── nosotros-*.html               # Páginas de información institucional
├── oferta.html                   # Oferta educativa
├── calendario-*.html             # Calendarios de actividades y evaluaciones
├── talleres.html                 # Talleres extraescolares
├── uniforme.html                 # Información sobre uniforme escolar
├── noticias.html                 # Noticias y comunicados
├── documentos.html               # Documentos institucionales
├── contacto.html                 # Información de contacto
├── admision.html                 # Proceso de admisión
├── assets/                       # Recursos estáticos
│   ├── css/
│   │   └── liceo.css            # Estilos del sitio
│   └── img/
│       ├── favicon.svg          # Ícono del sitio
│       └── safari-pinned-tab.svg
├── robots.txt                    # Directivas para robots de búsqueda
└── sitemap.xml                  # Mapa del sitio
```

## Características

- **HTML Estático**: Sitio completamente estático, no requiere servidor de aplicaciones
- **Responsive**: Diseño adaptable usando Bootstrap 5.3.3
- **SEO Optimizado**: Meta tags, robots.txt y sitemap.xml incluidos
- **Accesible**: Estructura semántica y ARIA labels
- **Rápido**: Carga rápida al ser archivos estáticos

## Navegación

El sitio incluye las siguientes secciones:

### Institucional
- Historia del Liceo
- Misión y Visión
- Comunidad Educativa
- Plan de Mejoramiento Educativo (PME)

### Académico
- Oferta Educativa
- Calendario de Actividades
- Calendario de Evaluaciones
- Talleres Extraescolares

### Servicios
- Proceso de Admisión
- Uniforme Escolar
- Documentos
- Noticias y Comunicados
- Contacto

## Tecnologías Utilizadas

- HTML5 semántico
- CSS3 personalizado
- Bootstrap 5.3.3 para el diseño responsive
- Bootstrap Icons para iconografía

## Despliegue

Para servir el sitio:

1. **Servidor web simple**: Cualquier servidor HTTP puede servir estos archivos
2. **Servidor local de desarrollo**:
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js (si tienes serve instalado)
   npx serve .
   
   # Con PHP
   php -S localhost:8000
   ```
3. **Hosting estático**: GitHub Pages, Netlify, Vercel, etc.

## Contacto

- **Email**: contacto@liceo.edu.cl
- **Teléfono**: +56 2 2345 6789
- **Redes Sociales**: Facebook, Instagram (enlaces en la barra superior)