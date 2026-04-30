// =============================================
// ARCHIVO DE DATOS — ElevAlma Videos
// Actualiza este archivo cada semana
// con el nuevo video de la parashá.
// =============================================

const SITE_DATA = {
  // Video destacado en el Hero
  featured: {
    id: "emor-5786",
    title: "EMOR — La destrucción que nace de la buena intención",
    subtitle: "Perashá Emor 5786",
    description: "¿Por qué la Toráh eleva a quien causó el peor daño espiritual de la historia? La respuesta cambia cómo ves cada error que has cometido.",
    date: "2026-04-30",
    duration: "23 min",
    views: "",
    youtubeId: "eos_HsCnMf8",
    thumbnail: "https://img.youtube.com/vi/eos_HsCnMf8/maxresdefault.jpg",
    tags: ["Emor", "Kedushá", "Vayikrá"]
  },

  // Todos los videos (más reciente primero)
  videos: [
    // ── PARASHÁ SEMANAL ──
    {
      id: "emor-5786",
      title: "EMOR — La destrucción que nace de la buena intención",
      series: "Perashá Emor",
      description: "¿Por qué la Toráh eleva a quien causó el peor daño espiritual? La respuesta cambia cómo ves cada error.",
      date: "2026-04-30",
      duration: "23 min",
      youtubeId: "eos_HsCnMf8",
      thumbnail: "https://img.youtube.com/vi/eos_HsCnMf8/maxresdefault.jpg",
      category: "parasha"
    },
    {
      id: "ajare-mot-kedoshim-5786",
      title: "VACIO - KADOSH — ¿Qué haces con lo que te está permitido?",
      series: "Perashá Ajare Mot - Kedoshim",
      description: "Una reflexión profunda sobre los límites entre lo permitido y lo sagrado.",
      date: "2026-04-25",
      duration: "27 min",
      youtubeId: "xfxI4PNxGBk",
      thumbnail: "https://img.youtube.com/vi/xfxI4PNxGBk/maxresdefault.jpg",
      category: "parasha"
    },
    {
      id: "tzav-5786",
      title: "YA — 24,000 errores | Ni uno más",
      series: "Perashá Tzav",
      description: "Llevas años repitiendo el mismo error. Esta parashá te lo dice en la cara.",
      date: "2026-04-11",
      duration: "26 min",
      youtubeId: "iShlkvnLF1I",
      thumbnail: "https://img.youtube.com/vi/iShlkvnLF1I/maxresdefault.jpg",
      category: "parasha"
    },
    {
      id: "vayikra-5786",
      title: "¿DÓNDE ESTÁS? — La Alef pequeña que resume 3,338 años",
      series: "Perashá Vayikrá",
      description: "¿Cuántos años llevas en el lugar correcto — y sin embargo lejos?",
      date: "2026-04-04",
      duration: "25 min",
      youtubeId: "3mZ_097N0l0",
      thumbnail: "https://img.youtube.com/vi/3mZ_097N0l0/maxresdefault.jpg",
      category: "parasha"
    },
    {
      id: "vayakhel-pekude-5786",
      title: "ROTO — Hashem guardó los pedazos ¿Tú guardas los tuyos?",
      series: "Parashá Vayakhel - Pekudei",
      description: "Hay algo que hiciste hace años. No hace semanas. Años.",
      date: "2026-03-28",
      duration: "28 min",
      youtubeId: "OBkfnSq8u24",
      thumbnail: "https://img.youtube.com/vi/OBkfnSq8u24/maxresdefault.jpg",
      category: "parasha"
    },
    {
      id: "ki-tisa-5786",
      title: "MEDIO — El Becerro que llevas dentro",
      series: "Perashá Ki Tisá",
      description: "Cuando el ídolo no es de oro, sino de miedo.",
      date: "2026-03-21",
      duration: "26 min",
      youtubeId: "Bysd_Nj9kPY",
      thumbnail: "https://img.youtube.com/vi/Bysd_Nj9kPY/maxresdefault.jpg",
      category: "parasha"
    },
    {
      id: "purim-5786",
      title: "The Hidden God — and How Purim Reveals Him",
      series: "Purim",
      description: "There is one book in the Torah where God's name never appears — and yet He is everywhere.",
      date: "2026-03-17",
      duration: "22 min",
      youtubeId: "fPLDwcJc7_E",
      thumbnail: "https://img.youtube.com/vi/fPLDwcJc7_E/maxresdefault.jpg",
      category: "festividades"
    },
    {
      id: "tetzave-5786",
      title: "NADIE — El secreto de desaparecer",
      series: "Perashá Tetzavé",
      description: "Hay una sola parashá en toda la Torá donde el nombre de Moshé no aparece.",
      date: "2026-03-14",
      duration: "25 min",
      youtubeId: "-G0p7x9JEoE",
      thumbnail: "https://img.youtube.com/vi/-G0p7x9JEoE/maxresdefault.jpg",
      category: "parasha"
    },
    {
      id: "teruma-5786",
      title: "EN TI — Dios no está donde tú crees",
      series: "Perashat Terumá",
      description: "¿Alguna vez construiste algo con todo tu esfuerzo… y cuando se cayó descubriste que no era lo que necesitabas construir?",
      date: "2026-03-07",
      duration: "27 min",
      youtubeId: "CsLKbWVXDS0",
      thumbnail: "https://img.youtube.com/vi/CsLKbWVXDS0/maxresdefault.jpg",
      category: "parasha"
    },
    {
      id: "mishpatim-5786",
      title: "15 años mintiendo, hoy se acabó",
      series: "Perashá Mishpatim",
      description: "Hay algo en un cajón que llevas años evitando. Y tu alma lo sabe.",
      date: "2026-02-28",
      duration: "26 min",
      youtubeId: "m6jmItH1_UE",
      thumbnail: "https://img.youtube.com/vi/m6jmItH1_UE/maxresdefault.jpg",
      category: "parasha"
    },
    {
      id: "yitro-5786",
      title: "YO ANOJÍ — Cuando Dios habla, el caos se detiene",
      series: "Perashá Yitró",
      description: "Perashá Yitró no es inspiración. Es confrontación.",
      date: "2026-02-21",
      duration: "28 min",
      youtubeId: "MNOZIM5ZGLQ",
      thumbnail: "https://img.youtube.com/vi/MNOZIM5ZGLQ/maxresdefault.jpg",
      category: "parasha"
    },
    {
      id: "beshalaj-5786",
      title: "AVANZA — Cuando Hashem rechaza tus rezos",
      series: "Perashá BeShalaj",
      description: "Hay momentos en los que rezar ya no es un acto de fe, sino una forma elegante de no moverse.",
      date: "2026-02-14",
      duration: "25 min",
      youtubeId: "rFbZKCv6M1w",
      thumbnail: "https://img.youtube.com/vi/rFbZKCv6M1w/maxresdefault.jpg",
      category: "parasha"
    },
    {
      id: "bo-5786",
      title: "BO — La libertad no empieza cuando sales, empieza cuando entras",
      series: "Perashá Bo",
      description: "Hay una palabra en la Parashá Bo que no explica nada… pero lo cambia todo.",
      date: "2026-02-07",
      duration: "27 min",
      youtubeId: "aWDjMWQb03U",
      thumbnail: "https://img.youtube.com/vi/aWDjMWQb03U/maxresdefault.jpg",
      category: "parasha"
    },
    {
      id: "vaera-5786",
      title: "ANGUSTIA — Kotzer Rúaj | Cuando la Torá dice que ya no puedes escuchar",
      series: "Perashá Vaerá",
      description: "Hay momentos en los que la redención ya está frente a una persona y, aun así, no puede escucharla.",
      date: "2026-01-31",
      duration: "26 min",
      youtubeId: "D6tj7XYRO78",
      thumbnail: "https://img.youtube.com/vi/D6tj7XYRO78/maxresdefault.jpg",
      category: "parasha"
    },
    {
      id: "shemot-5786",
      title: "Hashem no quiere que salgas de Egipto",
      series: "Parashat Shemot",
      description: "Algo no cuadra en esta historia.",
      date: "2026-01-24",
      duration: "25 min",
      youtubeId: "x7Fh0fqS-kk",
      thumbnail: "https://img.youtube.com/vi/x7Fh0fqS-kk/maxresdefault.jpg",
      category: "parasha"
    },
    {
      id: "vayeji-5786",
      title: "Estoy Muerto",
      series: "Perashá Vayejí",
      description: "El último aliento de Yaakov y lo que revela sobre el final de toda vida.",
      date: "2026-01-17",
      duration: "24 min",
      youtubeId: "7jyJ_k79_mo",
      thumbnail: "https://img.youtube.com/vi/7jyJ_k79_mo/maxresdefault.jpg",
      category: "parasha"
    },
    {
      id: "vayigash-5786",
      title: "El primer instinto: lo que revela quién eres realmente",
      series: "Perashat Vayigash",
      description: "Cuando la máscara cae, el primer instinto habla.",
      date: "2026-01-10",
      duration: "26 min",
      youtubeId: "4uAl-q8Y6Hc",
      thumbnail: "https://img.youtube.com/vi/4uAl-q8Y6Hc/maxresdefault.jpg",
      category: "parasha"
    },
    {
      id: "miketz-5786",
      title: "Tu verdad mata… pero es lo correcto",
      series: "Perashá Miketz",
      description: "La verdad duele. A veces mata. Y aun así es el único camino.",
      date: "2026-01-03",
      duration: "27 min",
      youtubeId: "NUWtCVITJgA",
      thumbnail: "https://img.youtube.com/vi/NUWtCVITJgA/maxresdefault.jpg",
      category: "parasha"
    },

    // ── OMER — De la Libertad a la Revelación ──
    {
      id: "omer-12",
      title: "Día 12 — Pilpul Hatalmidim",
      series: "Omer — Día 12",
      description: "La batalla dialéctica como herramienta de crecimiento espiritual.",
      date: "2026-04-26",
      duration: "15 min",
      youtubeId: "cs9ajIcOcjE",
      thumbnail: "https://img.youtube.com/vi/cs9ajIcOcjE/maxresdefault.jpg",
      category: "omer"
    },
    {
      id: "omer-11",
      title: "Día 11 — Dikduk Javerim",
      series: "Omer — Día 11",
      description: "La precisión en la amistad como reflejo del alma.",
      date: "2026-04-25",
      duration: "14 min",
      youtubeId: "6-qrFrzRJW4",
      thumbnail: "https://img.youtube.com/vi/6-qrFrzRJW4/maxresdefault.jpg",
      category: "omer"
    },
    {
      id: "omer-10",
      title: "Día 10 — Aprender por presencia",
      series: "Omer — Día 10",
      description: "A veces lo que enseña no es la palabra, sino la presencia.",
      date: "2026-04-24",
      duration: "14 min",
      youtubeId: "9FkJeY-kUPk",
      thumbnail: "https://img.youtube.com/vi/9FkJeY-kUPk/maxresdefault.jpg",
      category: "omer"
    },
    {
      id: "omer-9",
      title: "Día 9 — Alegría como disciplina",
      series: "Omer — Día 9",
      description: "La alegría no es un sentimiento — es una decisión diaria.",
      date: "2026-04-23",
      duration: "14 min",
      youtubeId: "ZTxyv3ZzQz8",
      thumbnail: "https://img.youtube.com/vi/ZTxyv3ZzQz8/maxresdefault.jpg",
      category: "omer"
    },
    {
      id: "omer-8",
      title: "Día 8 — Disciplina y humildad",
      series: "Omer — Día 8",
      description: "Sin humildad, la disciplina se convierte en rigidez.",
      date: "2026-04-22",
      duration: "14 min",
      youtubeId: "FMwft25MX1Y",
      thumbnail: "https://img.youtube.com/vi/FMwft25MX1Y/maxresdefault.jpg",
      category: "omer"
    },
    {
      id: "omer-7",
      title: "Día 7 — Amor y temor al cielo",
      series: "Omer — Día 7",
      description: "Maljut de Jésed — cuando el amor alcanza su plenitud.",
      date: "2026-04-21",
      duration: "15 min",
      youtubeId: "g36vxyoL-8E",
      thumbnail: "https://img.youtube.com/vi/g36vxyoL-8E/maxresdefault.jpg",
      category: "omer"
    },
    {
      id: "omer-6",
      title: "Día 6 — Amor y temor reverencial",
      series: "Omer — Día 6",
      description: "Yesod de Jésed — los cimientos del amor verdadero.",
      date: "2026-04-20",
      duration: "14 min",
      youtubeId: "sUPWPjjlJ7c",
      thumbnail: "https://img.youtube.com/vi/sUPWPjjlJ7c/maxresdefault.jpg",
      category: "omer"
    },
    {
      id: "omer-5",
      title: "Día 5 — Amor y discernimiento",
      series: "Omer — Día 5",
      description: "Hod de Jésed — la humildad dentro del amor.",
      date: "2026-04-19",
      duration: "14 min",
      youtubeId: "1anr7UjUkuc",
      thumbnail: "https://img.youtube.com/vi/1anr7UjUkuc/maxresdefault.jpg",
      category: "omer"
    },
    {
      id: "omer-4",
      title: "Día 4 — Amor y perseverancia",
      series: "Omer — Día 4",
      description: "Netzaj de Jésed — el amor que persiste a pesar de todo.",
      date: "2026-04-18",
      duration: "14 min",
      youtubeId: "TrMS6jBMXxw",
      thumbnail: "https://img.youtube.com/vi/TrMS6jBMXxw/maxresdefault.jpg",
      category: "omer"
    },
    {
      id: "omer-3",
      title: "Día 3 — Amor y articulación",
      series: "Omer — Día 3",
      description: "Tiféret de Jésed — cuando el amor encuentra su expresión perfecta.",
      date: "2026-04-17",
      duration: "14 min",
      youtubeId: "TniMReaCPpY",
      thumbnail: "https://img.youtube.com/vi/TniMReaCPpY/maxresdefault.jpg",
      category: "omer"
    },
    {
      id: "omer-2",
      title: "Día 2 — Amor y escucha",
      series: "Omer — Día 2",
      description: "Guevurá de Jésed — la disciplina dentro del amor.",
      date: "2026-04-16",
      duration: "14 min",
      youtubeId: "tzmHQXs9iE4",
      thumbnail: "https://img.youtube.com/vi/tzmHQXs9iE4/maxresdefault.jpg",
      category: "omer"
    },
    {
      id: "omer-1",
      title: "Día 1 — Amor y estudio",
      series: "Omer — Día 1",
      description: "Jésed de Jésed — el amor puro, el punto de partida.",
      date: "2026-04-15",
      duration: "15 min",
      youtubeId: "ILuSxTSdG00",
      thumbnail: "https://img.youtube.com/vi/ILuSxTSdG00/maxresdefault.jpg",
      category: "omer"
    },
    {
      id: "omer-0",
      title: "Día 0 — Introducción al Omer",
      series: "Omer — Día 0",
      description: "Curso gratuito de Kabalá · 49 días · Sefirot · Pirké Avot · Crecimiento espiritual.",
      date: "2026-04-14",
      duration: "18 min",
      youtubeId: "aMIrPi00ne4",
      thumbnail: "https://img.youtube.com/vi/aMIrPi00ne4/maxresdefault.jpg",
      category: "omer"
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
