# Sitio Institucional del Liceo (HTML + Bootstrap 5)

Este paquete entrega una versión estática, responsiva y accesible del sitio institucional. Incluye animaciones suaves, i18n básico ES/EN y componentes listos para integrar con backend más adelante.

Rutas principales (desde /public):
- /liceo/index.html (Inicio)
- /liceo/noticias.html (Noticias con filtro, paginación y galería en modal)
- /liceo/documentos.html (Tabla de documentos)
- /liceo/contacto.html (Formulario con validación y guardado local)

Estilos:
- /assets/css/liceo.css
  - Paleta: #1418c4, #17e2c9, #b3b3cc, #05dc79, #ecf1f5, #ed1614, #f0aa0f, #168c47
  - Fuente: Poppins
  - Efectos: hover lift en cards, reveal on scroll, navbar elevated, parallax leve en hero, botón “Ir arriba”.

Imágenes:
- Stock educativas desde Unsplash/Pexels. Sustituye URLs en los HTML.

Accesibilidad:
- Alt en imágenes, foco visible, contraste alto, ARIA y labels descriptivos.

I18N (traducción básica):
- Selector en navbar guarda preferencia en localStorage.
- Textos de navegación, títulos de secciones y labels clave cambian entre ES/EN.
- Extiende diccionarios en scripts inline (I18N) en cada página.

Personalización rápida:
1) Logo/Nombrado: cambia <strong>Liceo</strong> y el span cuadrado de color en la navbar.
2) Colores: edita variables CSS en /assets/css/liceo.css.
3) Menú: edita listas <ul> de la navbar.
4) Secciones de inicio: modifica tarjetas en “Accesos Rápidos”.
5) Noticias/Documentos: reemplaza arrays mock en los scripts inline por datos reales o conecta a backend.

Movimiento y fluidez:
- IntersectionObserver para reveal con stagger.
- Parallax leve en imágenes del hero.
- Sombra de navbar al hacer scroll.
- Transiciones: hover tarjetas, apertura de colapso móvil suavizada.

Preparado para backend:
- Reemplaza mocks por fetch a endpoints (ej.: GET /api/noticias, GET /api/documentos, POST /api/contacto) en los scripts inline o migra a tu framework preferido.

Licencia de imágenes: respeta términos de Unsplash/Pexels al publicar.
