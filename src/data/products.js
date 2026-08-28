export const products = [
  {
    id: "1",
    name: "VIBE",
    slug: "vibe-boa-menina",
    subtitle: "Boa Menina",
    tagline: "Oriental Floral · por Marina Gabriela",
    price: 79.90,
    originalPrice: 99.90,
    description:
      "Uma fragrância Oriental Floral sofisticada e envolvente. Desenvolvida por Marina Gabriela para a mulher que marca presença com elegância e mistério.",
    longDescription:
      "VIBE · Boa Menina é uma criação exclusiva que une o encanto misterioso das notas orientais à feminilidade delicada dos florais nobres. Com partículas brilhantes que iluminam a pele e fixação duradoura.",
    notes: {
      top: ["Bergamota", "Amêndoa suave", "Café delicado"],
      heart: ["Jasmim Sambac", "Tuberosa", "Flor de Laranjeira"],
      base: ["Fava Tonka", "Cacau", "Sândalo", "Baunilha"],
    },
    volume: "200ml",
    stock: 50,
    badge: "DESTAQUE",
    featured: true,
    collection: "Boa Menina",
    images: ["/products/vibe-boa-menina.jpg"],
    thumbnail: "/products/vibe-boa-menina.jpg",
  },
  {
    id: "2",
    name: "VIBE",
    slug: "vibe-rosa-da-manha",
    subtitle: "Rosa da Manhã",
    tagline: "Floral Fresco · por Marina Gabriela",
    price: 79.90,
    originalPrice: 99.90,
    description:
      "Uma fragrância Floral Fresca radiante e delicada. O frescor elegante das pétalas de rosas orvalhadas combinado a partículas brilhantes rosadas que realçam a luminosidade da pele.",
    longDescription:
      "VIBE · Rosa da Manhã foi criada por Marina Gabriela para despertar a suavidade e a elegância pura de um amanhecer florido. Uma composição arejada, feminina e cintilante que envolve com charme ao longo do dia.",
    notes: {
      top: ["Pétalas de Rosa", "Mandarina suave", "Orvalho fresco"],
      heart: ["Rosa Damascena", "Peônia", "Magnólia"],
      base: ["Almíscar branco", "Âmbar suave", "Madeira de Cashmere"],
    },
    volume: "200ml",
    stock: 50,
    badge: "NOVO",
    featured: false,
    collection: "Rosa da Manhã",
    images: ["/products/vibe-rosa-da-manha.jpg"],
    thumbnail: "/products/vibe-rosa-da-manha.jpg",
  },
  {
    id: "3",
    name: "VIBE",
    slug: "vibe-invencivel",
    subtitle: "Invencível",
    tagline: "Amadeirado Aquático · por Marina Gabriela",
    price: 79.90,
    originalPrice: 99.90,
    description:
      "Uma fragrância Amadeirada Aquática imponente e magnética. A força revigorante das notas marinhas unida à nobreza amadeirada, com partículas brilhantes prateadas que iluminam a pele com sofisticação.",
    longDescription:
      "VIBE · Invencível foi desenhada por Marina Gabriela para personalidades marcantes que não passam despercebidas. O frescor gelado de abertura dá lugar a um corpo amadeirado potente e sofisticado que fixa por horas.",
    notes: {
      top: ["Brisa Marinha", "Toranja refrescante", "Folhas de Louro"],
      heart: ["Madeira de Guaiaco", "Jasmim aromático", "Âmbar cinzento"],
      base: ["Musgo de Carvalho", "Patchouli nobre", "Madeiras nobres"],
    },
    volume: "200ml",
    stock: 50,
    badge: "NOVO",
    featured: false,
    collection: "Invencível",
    images: ["/products/vibe-invencivel.jpg"],
    thumbnail: "/products/vibe-invencivel.jpg",
  },
  {
    id: "4",
    name: "VIBE",
    slug: "vibe-combo-colecao-completa",
    subtitle: "Combo Coleção Completa",
    tagline: "Trio Exclusivo · Boa Menina + Rosa da Manhã + Invencível",
    price: 200.00,
    originalPrice: 239.70,
    description:
      "A experiência completa da alta perfumaria VIBE em um combo exclusivo. Contém os 3 Body Splashes oficiais de 200ml: Boa Menina (Oriental Floral), Rosa da Manhã (Floral Fresco) e Invencível (Amadeirado Aquático).",
    longDescription:
      "Leve a coleção completa de body splashes criados por Marina Gabriela com condição especial de lançamento. Três fragrâncias com partículas brilhantes que iluminam a pele e garantem sofisticação para todos os momentos do seu dia e da sua noite.",
    notes: {
      top: ["3 Fragrâncias Únicas", "Partículas Iluminadoras", "Fixação Nobre"],
      heart: ["Boa Menina: Oriental Floral", "Rosa da Manhã: Floral Fresco", "Invencível: Amadeirado Aquático"],
      base: ["3 Frascos de 200ml", "Edição Especial", "Economize R$ 39,70"],
    },
    volume: "3x 200ml (600ml)",
    stock: 40,
    badge: "LANÇAMENTO",
    featured: false,
    collection: "Combos",
    images: ["/products/vibe-combo-trio.jpg"],
    thumbnail: "/products/vibe-combo-trio.jpg",
  },
];

export const getFeaturedProduct = () => products.find((p) => p.featured) || products[0];
export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);
export const getProductById = (id) => products.find((p) => p.id === id);
