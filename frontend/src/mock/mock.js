/*
  Mock de datos e i18n para el sitio del liceo
  - NOTA: Esto es un mock en frontend (sin backend). Luego se reemplazará por endpoints reales.
  - Incluye:
    * Imágenes para slider
    * Noticias con categorías
    * Documentos descargables
    * Textos en ES/EN (temporalmente aquí; luego en un JSON dedicado)
*/

export const SLIDER_IMAGES = [
  {
    id: 's1',
    url: 'https://images.unsplash.com/photo-1723958461974-4d15c8b32ec6',
    alt: 'Campus moderno con pasarela',
  },
  {
    id: 's2',
    url: 'https://images.unsplash.com/photo-1702737832079-ed5864397f92',
    alt: 'Edificio institucional clásico con torre de reloj',
  },
  {
    id: 's3',
    url: 'https://images.unsplash.com/photo-1728500704191-af0407c47035',
    alt: 'Edificio institucional blanco',
  },
  {
    id: 's4',
    url: 'https://images.pexels.com/photos/11010063/pexels-photo-11010063.jpeg',
    alt: 'Fachada clásica institucional',
  },
];

export const NEWS_CATEGORIES = ['Comunicados', 'Eventos', 'Académico'];

export const NEWS = [
  {
    id: 'n1',
    title: 'Inicio de Clases 2025',
    date: '2025-03-04',
    category: 'Comunicados',
    excerpt: 'Bienvenida a toda la comunidad educativa al nuevo año escolar 2025.',
    images: [
      'https://images.pexels.com/photos/33415773/pexels-photo-33415773.jpeg',
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f',
    ],
  },
  {
    id: 'n2',
    title: 'Feria de Ciencias Regional',
    date: '2025-05-18',
    category: 'Eventos',
    excerpt: 'Participa de la feria con proyectos innovadores y trabajos colaborativos.',
    images: [
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a',
      'https://images.unsplash.com/photo-1536985576470-b7e4a0363a19',
    ],
  },
  {
    id: 'n3',
    title: 'Taller de Lectura Crítica',
    date: '2025-06-10',
    category: 'Académico',
    excerpt: 'Nuevo taller de habilidades lectoras disponible para 1º a 4º medio.',
    images: [
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f',
      'https://images.pexels.com/photos/7929418/pexels-photo-7929418.jpeg',
    ],
  },
  {
    id: 'n4',
    title: 'Campeonato Deportivo Escolar',
    date: '2025-04-22',
    category: 'Eventos',
    excerpt: 'Inscripciones abiertas para las selecciones de fútbol, básquetbol y vóleibol.',
    images: [
      'https://images.unsplash.com/photo-1702737832079-ed5864397f92',
      'https://images.unsplash.com/photo-1728500704191-af0407c47035',
    ],
  },
  {
    id: 'n5',
    title: 'Entrega de Informes de Notas',
    date: '2025-07-01',
    category: 'Comunicados',
    excerpt: 'Publicación de evaluaciones del primer semestre en plataforma institucional.',
    images: [
      'https://images.unsplash.com/photo-1536985576470-b7e4a0363a19',
      'https://images.pexels.com/photos/33415745/pexels-photo-33415745.jpeg',
    ],
  },
  {
    id: 'n6',
    title: 'Biblioteca: Nuevas Adquisiciones',
    date: '2025-07-10',
    category: 'Académico',
    excerpt: 'Se incorporan nuevos títulos de literatura y ciencias a la colección.',
    images: [
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a',
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f',
    ],
  },
];

export const DOCUMENTS = [
  {
    id: 'd1',
    name: 'Reglamento Interno 2025',
    description: 'Normativa interna del liceo para el año académico 2025.',
    url: '#',
  },
  {
    id: 'd2',
    name: 'Plan de Convivencia Escolar',
    description: 'Lineamientos para una sana convivencia en la comunidad.',
    url: '#',
  },
  {
    id: 'd3',
    name: 'Calendario Académico',
    description: 'Fechas relevantes del año escolar.',
    url: '#',
  },
];

export const QUICK_LINKS = [
  { id: 'q1', title: 'Calendario de Actividades', href: '/#calendario-actividades' },
  { id: 'q2', title: 'Noticias y Comunicados', href: '/noticias' },
  { id: 'q3', title: 'Documentos', href: '/#documentos' },
];

export const SITE_INFO = {
  email: 'contacto@liceo.edu.cl',
  phone: '+56 2 2345 6789',
  address: 'Av. Educativa 1234, Santiago, Chile',
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
};

export const TRANSLATIONS = {
  es: {
    lang: 'ES',
    topbar: {
      email: 'Correo',
      phone: 'Teléfono',
    },
    nav: {
      inicio: 'Inicio',
      nosotros: 'Nosotros',
      historia: 'Historia',
      mision: 'Misión',
      vision: 'Visión',
      comunidad: 'Comunidad Educativa',
      pme: 'PME',
      oferta: 'Oferta Educativa',
      noticias: 'Noticias y Comunicados',
      calendarioActividades: 'Calendario de Actividades',
      calendarioEvaluaciones: 'Calendario de Evaluaciones',
      uniforme: 'Uniforme Escolar',
      talleres: 'Talleres Extraescolares',
      documentos: 'Documentos',
      contacto: 'Contacto',
      idioma: 'Idioma',
    },
    home: {
      destacados: 'Accesos Rápidos',
      ultimasNoticias: 'Últimas Noticias',
    },
    noticias: {
      titulo: 'Noticias y Comunicados',
      categoria: 'Categoría',
      todas: 'Todas',
      verMas: 'Ver detalle',
      cerrar: 'Cerrar',
      anteriores: 'Anteriores',
      siguientes: 'Siguientes',
    },
    documentos: {
      titulo: 'Documentos',
      nombre: 'Nombre',
      descripcion: 'Descripción',
      descargar: 'Descargar',
    },
    contacto: {
      titulo: 'Contacto',
      nombre: 'Nombre',
      email: 'Correo',
      mensaje: 'Mensaje',
      enviar: 'Enviar',
      enviado: 'Mensaje enviado correctamente',
    },
    footer: {
      mapaSitio: 'Mapa del Sitio',
      datosContacto: 'Datos de Contacto',
      irArriba: 'Ir arriba',
    },
  },
  en: {
    lang: 'EN',
    topbar: {
      email: 'Email',
      phone: 'Phone',
    },
    nav: {
      inicio: 'Home',
      nosotros: 'About',
      historia: 'History',
      mision: 'Mission',
      vision: 'Vision',
      comunidad: 'Educational Community',
      pme: 'PME',
      oferta: 'Programs',
      noticias: 'News & Announcements',
      calendarioActividades: 'Activities Calendar',
      calendarioEvaluaciones: 'Assessments Calendar',
      uniforme: 'School Uniform',
      talleres: 'Extracurricular Workshops',
      documentos: 'Documents',
      contacto: 'Contact',
      idioma: 'Language',
    },
    home: {
      destacados: 'Quick Links',
      ultimasNoticias: 'Latest News',
    },
    noticias: {
      titulo: 'News & Announcements',
      categoria: 'Category',
      todas: 'All',
      verMas: 'View details',
      cerrar: 'Close',
      anteriores: 'Previous',
      siguientes: 'Next',
    },
    documentos: {
      titulo: 'Documents',
      nombre: 'Name',
      descripcion: 'Description',
      descargar: 'Download',
    },
    contacto: {
      titulo: 'Contact',
      nombre: 'Name',
      email: 'Email',
      mensaje: 'Message',
      enviar: 'Send',
      enviado: 'Message sent successfully',
    },
    footer: {
      mapaSitio: 'Sitemap',
      datosContacto: 'Contact Info',
      irArriba: 'Go to top',
    },
  },
};

export const fakeFetch = (data, delay = 400) =>
  new Promise((resolve) => setTimeout(() => resolve(structuredClone(data)), delay));

export const saveContactSubmission = (payload) => {
  const prev = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
  prev.push({ ...payload, id: crypto.randomUUID(), createdAt: new Date().toISOString() });
  localStorage.setItem('contact_submissions', JSON.stringify(prev));
  return { ok: true };
};