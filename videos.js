// =============================================
// ARCHIVO DE DATOS — ElevAlma Videos
// Claude actualiza este archivo cada semana
// con el nuevo video de la parashá.
// =============================================

const SITE_DATA = {
  // Video destacado en el Hero
  featured: {
    id: "bereshit-2026",
    title: "Parashat Bereshit — El poder del inicio",
    subtitle: "Parashat Bereshit",
    description: "¿Qué significa realmente 'En el principio'? Descubre cómo cada día es una oportunidad de crear tu mundo desde cero.",
    date: "2026-04-20",
    duration: "26 min",
    views: "1.2K",
    youtubeId: "YOUTUBE_ID_AQUI",
    thumbnail: "https://img.youtube.com/vi/YOUTUBE_ID_AQUI/maxresdefault.jpg",
    tags: ["Bereshit", "Génesis", "Creación"]
  },

  // Todos los videos (más reciente primero)
  videos: [
    {
      id: "bereshit-2026",
      title: "El poder del inicio",
      series: "Parashat Bereshit",
      description: "¿Qué significa realmente 'En el principio'? Descubre cómo cada día es una oportunidad de crear tu mundo desde cero.",
      date: "2026-04-20",
      duration: "26 min",
      youtubeId: "YOUTUBE_ID_AQUI",
      thumbnail: "https://img.youtube.com/vi/YOUTUBE_ID_AQUI/maxresdefault.jpg",
      category: "parasha"
    },
    {
      id: "noaj-2026",
      title: "Navegando la tormenta interior",
      series: "Parashat Noaj",
      description: "El arca no es solo un barco — es el refugio que construyes dentro de ti para sobrevivir los diluvios de la vida.",
      date: "2026-04-13",
      duration: "28 min",
      youtubeId: "YOUTUBE_ID_AQUI",
      thumbnail: "https://img.youtube.com/vi/YOUTUBE_ID_AQUI/maxresdefault.jpg",
      category: "parasha"
    },
    {
      id: "lej-leja-2026",
      title: "El viaje hacia ti mismo",
      series: "Parashat Lej Lejá",
      description: "Lej Lejá — 've hacia ti'. El viaje más importante no es geográfico, es el camino de regreso a tu esencia.",
      date: "2026-04-06",
      duration: "25 min",
      youtubeId: "YOUTUBE_ID_AQUI",
      thumbnail: "https://img.youtube.com/vi/YOUTUBE_ID_AQUI/maxresdefault.jpg",
      category: "parasha"
    },
    {
      id: "omer-49",
      title: "Maljut de Maljut — La plenitud del ser",
      series: "Omer — Día 49",
      description: "El último nivel del Omer. Cuando todos los atributos se unifican, estás listo para recibir la Torá.",
      date: "2026-03-30",
      duration: "15 min",
      youtubeId: "YOUTUBE_ID_AQUI",
      thumbnail: "https://img.youtube.com/vi/YOUTUBE_ID_AQUI/maxresdefault.jpg",
      category: "omer"
    },
    {
      id: "omer-48",
      title: "Yesod de Maljut — Los cimientos del reinado",
      series: "Omer — Día 48",
      description: "Sin cimientos sólidos, ningún reinado perdura. Yesod nos enseña a construir desde la verdad.",
      date: "2026-03-29",
      duration: "14 min",
      youtubeId: "YOUTUBE_ID_AQUI",
      thumbnail: "https://img.youtube.com/vi/YOUTUBE_ID_AQUI/maxresdefault.jpg",
      category: "omer"
    },
    {
      id: "vayera-2026",
      title: "Ver más allá de lo visible",
      series: "Parashat Vayerá",
      description: "Abraham ve ángeles donde otros ven extraños. La hospitalidad como puerta a lo divino.",
      date: "2026-03-23",
      duration: "27 min",
      youtubeId: "YOUTUBE_ID_AQUI",
      thumbnail: "https://img.youtube.com/vi/YOUTUBE_ID_AQUI/maxresdefault.jpg",
      category: "parasha"
    }
  ],

  // Categorías para filtro
  categories: [
    { id: "all", label: "Todos" },
    { id: "parasha", label: "Parashá semanal" },
    { id: "omer", label: "Omer" },
    { id: "festividades", label: "Festividades" }
  ]
};
