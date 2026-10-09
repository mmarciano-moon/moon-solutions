export const WHATSAPP_URL = 'https://wa.me/5511999999999'

export const navLinks = [
  { href: '#solucoes', label: 'Soluções' },
  { href: '#acabamentos', label: 'Acabamentos' },
  { href: '#obras', label: 'Projetos' },
  { href: '#empresa', label: 'Empresa' },
]

export const metrics = [
  { value: 'Vãos até 6,2m', label: 'Esquadrias sem emenda' },
  { value: 'Atenuação 48dB', label: 'Conforto termoacústico' },
  { value: '15 Anos', label: 'Garantia estrutural integral' },
]

export type Solution = {
  tag: string
  title: string
  description: string
  benefit: string
  features: string[]
  image: string
  imageAlt: string
  caption: string
}

export const solutions: Solution[] = [
  {
    tag: '01 // Coleção Monolith',
    title: 'Portas Pivotantes Monumentais',
    description:
      'Eixos pivotantes ocultos com rolamentos industriais dimensionados para folhas de até 900 kg e 6,20 m de altura. Painéis estruturais usinados com núcleo acústico e vedação hermética invisível. Imponência arquitetônica na entrada.',
    benefit:
      'Integração monolítica total com o painel de fechada sem ferragens aparentes, conferindo imponência e pureza visual ao projeto.',
    features: [
      'Capacidade de carga até 900kg com pivot oculto autolubrificante',
      'Núcleo acústico de alta densidade e manta termoabsorvente',
      'Fechadura oculta digital com biometria e comando via app',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuClAKDrKjTrsAC722DwS9QoI9IJaagLdfSTh7fRAlygIHZg0HwG2K0Nm5JywFSUdnV7ZZSgWMiFFAH6sHQISdVxj8assi6aRgtURhDQmp1kvh1cyf2osZyWDwo6jReWlX6FyWecOTmnI1dcNFhpxWuHDXt1djYaqFFZHVNynQvkMn4AF3pj-FWR8pfOtaCLDRLlHjJF1zGXFF5FQWziCboCH0Ob4Rs3MXfvfLnGjBz0ZzSKXBbq7kp6',
    imageAlt: 'Porta pivotante monumental em entrada residencial de luxo',
    caption: 'Série Monolith 01 // Pivô Embutido',
  },
  {
    tag: '02 // Linha Minimal Slim',
    title: 'Janelas & Esquadrias Termoacústicas',
    description:
      'Perfis minimalistas com montante central de apenas 20 milímetros e trilhos 100% embutidos no contrapiso. Vidros duplos ou triplos insulados com injeção de gás Argônio para máxima eficiência termoacústica.',
    benefit:
      'Continuidade plena entre sala e varanda sem degraus ou obstáculos no piso, mantendo isolamento térmico impecável.',
    features: [
      'Drenagem oculta de alta vazão contra tempestades severas',
      'Deslizamento ultra suave através de rolamentos em polímero',
      'Conexão visual pura sem poluição de perfis pesados',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCNRXpj-pohquLZwZ4kyWcC9Xb6mOc9o_khgbcRDd4b-AJs-Xo3TTC_VANi8ndUdWMjAC_EY__9VciNU5VXJB_dzeTaTWeH_G1-yjobfldwbcX_GmMmeqpJ0lE3BMbhK_bTJgBpIMamXKeRPHF9MIk6l0jp6oh-vGsjRRwk8Pe-8s4U7FzUrttnhQAPvZ6kry5sK9HC6feF_bzQvVrSKYWwM9qnkPidz1nl-QeH9g_yKkHL3otpVUOb',
    imageAlt: 'Janelas e esquadrias de perfil minimalista integrando living e piscina',
    caption: 'Minimal Slim // Trilho Nivelado ao Piso',
  },
  {
    tag: '03 // Sistemas Solares Passivos',
    title: 'Brises Metálicos & Fachadas Vivas',
    description:
      'Lâminas aerodinâmicas em perfis de alumínio extrudado, integradas à automação solar. Protegem os ambientes internos da incidência solar excessiva, proporcionando conforto térmico passivo sem comprometer a ventilação natural.',
    benefit:
      'Dinâmica de fachada transformável de acordo com o clima, gerando volumetria e identidade escultural à edificação.',
    features: [
      'Automação sombreadora com sensores climáticos de vento e radiação',
      'Pintura eletrostática Qualicoat com alta resistência marítima',
      'Orientação mecânica vertical, horizontal ou articulada em camarão',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDqx34Fjgrnr35v2R-QBDpEfxEmZz1nt6EnTjglA4HIu9CRwxo2aXuL43Pgf-uDMDylOx2ZHaHtLgc7dvCRHaVVPaffRmyYKEDUW0VCSF77rjOs1VMiK7IQ-gutAQ-hpwwiCtgBFcvNo3H40vJsEN1-r9_sGZg83yt2F6ZWCayxwWi6i-DhsY3BtSf4mVuPKh95fndC91pyiwl5i-AYxJjQppSxD0OqJ00Y0DoKNpqGKBDbuWZDMJNV',
    imageAlt: 'Fachada moderna com brises verticais e iluminação linear cênica',
    caption: 'Sombreadores Solares // Controle Conforto',
  },
  {
    tag: '04 // Acabamentos Contínuos',
    title: 'Forros Lineares de Alumínio & Texturas 3D',
    description:
      'Réguas contínuas em ligas nobres com acabamento em tecnologia de sublimação de alta resolução reproduzindo fielmente veios de madeiras nobres, imunes a empenamentos, cupins ou umidade.',
    benefit:
      'Longevidade perene sem necessidade de verniz anual, viabilizando continuidade perfeita entre áreas internas e externas.',
    features: [
      'Classificação incombustível Classe A contra propagação de chamas',
      'Encaixe macho-e-fêmea de precisão milimétrica sem parafusos visíveis',
      'Grelhas ventiladas integradas para exaustão e climatização',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDmOSTA6VZm1_xxFEhREVFSqek5qUyhXlceW5NouMaZIzr_vE8f2P8i0gXjoqRW6LHiVQPH8hjhbPtjhahRT4kC2Z2gbv0jFr-wWGwtGi86jNlg2R3xDJY3fKLrCavYJTjdfYeIS-9jvEDe6-njbigJQA9YJ4mXMIl1Mfnoo21dr7VjEoWYM4CDoR_81XOglJNWoUkJ4HvyMMfWtlHkPnoyGewDv1x7v5Kve57t2bf6Cbrf8DhdH0Uv',
    imageAlt: 'Forro linear ripado de alumínio com acabamento amadeirado em living de luxo',
    caption: 'Forro Ripado 3D // Acabamento Amadeirado Nobre',
  },
  {
    tag: '05 // Transparência Pura',
    title: 'Sacadas & Guarda-Corpos Embutidos',
    description:
      'Sistemas com perfis de fixação em perfil maciço embutido no contrapiso e vidros laminados temperados com película estrutural SentryGlas®, eliminando montantes verticais para visão desimpedida.',
    benefit:
      'Visão 100% panorâmica contínua sem postes ou presilhas visíveis, atendendo com folga os testes de carga horizontal da norma NBR 14718.',
    features: [
      'Vidros Extra-Clear com descoloração total de bordas verdes',
      'Resistência a rajadas de ventos superiores a 220 km/h',
      'Opção combinada com iluminação linear embutida no canal',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDkWjEOo3SM4oHTWyM-gXl6RMp3cQZobnwiX7FbrqXxGlOjiAnoy7SJgUA9a9r9KmgLF_jxkIAK7I3bkfJU41ui4ikccnWdhAuYyWnjoJJPVZLJslSYImzlSKAltoPnV7DPxtml1BmgXUasH2N-guJtS15q2iVhwauRIWGicc3HP5N3HmlYZYUVByiIWcuLZ3V3nNlcffs2KLkD9ir6y3aIEFDuG9Ji0-fNafOJwNECssNjSIAWhDB0',
    imageAlt:
      'Guarda-corpo de vidro embutido em terraço de cobertura com vista para o skyline urbano',
    caption: 'SentryGlas® 10+10mm // Transparência Sem Colunas',
  },
  {
    tag: '06 // Cristais Nobres',
    title: 'Espelhos Bisotados & Iluminação Cênica',
    description:
      'Produzidos com cristal belga de primeira linha livre de cobre e chumbo, garantindo reflexão límpida sem distorções óticas. Acabamento bisotado preciso com iluminação indireta em fitas de LED 2700K (IRC > 95) e desembaçador térmico integrado.',
    benefit:
      'Fidelidade de tonalidade de pele incomparável com iluminação difusa que elimina sombras na bancada ou closet.',
    features: [
      'Camada protetora anticorrosiva contra oxidação por umidade',
      'Estrutura interna em perfil oculto para fixação nivelada e segura',
      'Controle dimerizável via automação residencial DALI ou Zigbee',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBuH25VjuSVqearYMT5o-hKw98vaeRWMAsKMwAuQkP6J7BzqmmDJkcRPW2A_gHFaQTRaUJzNSOrE_k3YcE9LOBZR-zasovNZSrF2sA1A1U5uZBw3DZ3mNJrnqJxLqRv8o4nN1R8C-WRoh-raajlIfiMNmuobZfGQ1S3np3w7CeJ6KUBt_XO4gK7PDMxZapsYyXoWIVPp0NhYN-j3yflylFnANCsRXv5zSmy4SwBgiQPZz3qG9_gL8iX',
    imageAlt:
      'Espelho com bisotê e iluminação cênica integrada em lavabo nobre com mármore escuro',
    caption: 'Cristal Float Belga // Desembaçador Embutido',
  },
]

export const finishes = [
  {
    name: 'Ouro Champagne Moon',
    badge: 'Anodizado Puro',
    swatch: 'bg-linear-to-tr from-[#987a38] via-[#cbb075] to-[#dec897] border-[#3b3424]',
    description:
      'Brilho acetinado com anodização eletroquímica de 25 micras. Sofisticação sutil para residências contemporâneas.',
    code: 'T-CHAMP-25',
  },
  {
    name: 'Preto Ônix Microtexturizado',
    badge: 'Pó Eletrostático',
    swatch: 'bg-[#1a1a1a] border-[#2b2b2b]',
    description:
      'Pintura a pó superdurável em resina poliéster. Textura tátil aveludada que minimiza marcas de manuseio e reflexos de luz.',
    code: 'TX-ONYX-BLK',
  },
  {
    name: 'Imbuia Imperial Sublimada',
    badge: 'Sublimação Wood',
    swatch: 'bg-linear-to-r from-[#3e2415] via-[#5c371d] to-[#2e1b10] border-[#3b2b1a]',
    description:
      'Padrão orgânico fiel de veios amadeirados sobre o alumínio. Zero manutenção com cupins, vernizes ou apodrecimento.',
    code: 'WD-IMB-SUB',
  },
  {
    name: 'Corten Metálico Vulcânico',
    badge: 'Efeito Ferrugem',
    swatch: 'bg-linear-to-br from-[#8d3e21] via-[#aa502e] to-[#5a2412] border-[#48281a]',
    description:
      'Estética marcante com nuances avermelhadas e marrons do aço corten sem escorrimento de ferrugem sobre pisos.',
    code: 'CTN-MET-XL',
  },
]

export const projects = [
  {
    title: 'Residência Horizon Light',
    location: 'Fazenda Boa Vista',
    category: 'Casa de Campo // Residencial',
    description:
      'Integração total do living com jardim e piscina com vãos de até 14 metros sem pilares intermediários. Portas de correr embutidas na alvenaria que desaparecem completamente.',
    tags: ['Minimal Slim 20mm', 'Vidro Térmico Duplo'],
    year: 2024,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBhF3KRdsly1QrPipvwrK0lrzjPm_WaboaQbjqjMv1CiArP2rChRuGhuq0yH_sbjKBFyTr0krYbWqC9Dp_IO815MKTlCkT_-W7OWfsE0n0XY-XE0hdnsmXn2O_xHdUyjiaWCmBL-jAN4PQIocTEM3UUbwIwSs1Z7LzAW2c3OUDoPezRAHry8x5XCCMNUnr_ZGxscc2-nFZbtV1hFRobxtXJonyT6vv2JPk-eDfIngYugwYg1ZMElrht',
    imageAlt: 'Fachada iluminada da Residência Horizon Light',
  },
  {
    title: 'Cobertura Triplex Lumina',
    location: 'Jardins, São Paulo',
    category: 'Apartamento // Rooftop',
    description:
      'Guarda-corpos embutidos de alta resistência a rajadas em altura elevada e esquadrias termoacústicas de 48dB que silenciam o pulsar metropolitano da capital.',
    tags: ['Guarda-corpo SentryGlas', 'Acústica 48dB'],
    year: 2023,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA3jdnuVJIkJLZOdJ92TVGWD9M-Rj-vblRPuklwhIfMnIV0bAyu47_7pljP8ylJkRDn0KdEtPxbztbHCupgcdXp1jGOYjQH77060a5mqLgNVujmGLP-cke0iwyWAxvpGrQLPjtDmTOe3McdrknGlEwe5t0CYFFSyS23uQGXHnd6hrdc7khuak7o5rmT5PN-wbGqt57vmx4LRDO8cYA4SgXRvubNDUv4-5hRDLmoHpgXG1doDIfqQQJy',
    imageAlt: 'Terraço gourmet da Cobertura Triplex Lumina',
  },
  {
    title: 'Villa Maré & Granito',
    location: 'Litoral Norte / Ilhabela',
    category: 'Residencial // Encosta',
    description:
      'Projeto cravado na rocha marinha com tratamento especial para agressividade salina extrema. Brises motorizados com lâminas orientáveis em liga anticorrosiva.',
    tags: ['Ligas Qualicoat', 'Brises Motorizados'],
    year: 2024,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAE_a8Sloa0IikUjfwZ3uoFcN88zWE4XK6aExRzXYZ5VrlD6es-cbRYpliZIioKAzep0WAoiKiz123xsDAEoA_KEB037x5XtcG5q0oV7GOlhOBPCa0-oA5AtyJIKKXoiN7ajNcHerSD3kBjsPqswYgKeNZzDTtG1lfkyzdQU-Rpx-ghHbEN_K80GmpTueVBVW5THaxgSGSNiXNJS3esTLEHuM9QaOvAmnCFIK_WQ8tR4w-x_83pE6F3',
    imageAlt: 'Vista aérea da Villa Maré & Granito debruçada sobre o mar',
  },
]

export const projectTypes = [
  'Residencial de Alto Padrão (Condomínio Fechado)',
  'Apartamento Cobertura / Triplex',
  'Residência Litoral / Campo',
  'Comercial Boutique / Hotelaria Premium',
]

export const systemOptions = [
  'Portas Pivotantes',
  'Janelas Minimalistas',
  'Brises Motorizados',
  'Forro Ripado de Alumínio',
  'Guarda-corpos Embutidos',
  'Espelhos & Cristais',
]

export const defaultSystems = ['Portas Pivotantes', 'Janelas Minimalistas', 'Guarda-corpos Embutidos']

export const projectStages = ['Estudo Preliminar', 'Projeto Executivo', 'Obra em Andamento']

export const footerSystems = [
  'Portas Pivotantes Monumentais',
  'Janelas & Esquadrias Slim',
  'Brises Metálicos & Fachadas Vivas',
  'Forros Lineares de Alumínio 3D',
  'Guarda-corpos Embutidos',
  'Espelhos de Alta Definição',
]

export const footerFinishes = [
  'Ouro Champagne Anodizado',
  'Preto Ônix Microtexturizado',
  'Amadeirados em Sublimação',
  'Corten Metálico Vulcânico',
]
