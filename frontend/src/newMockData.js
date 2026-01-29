// Nova struktura usluga prema sitemap-u

export const serviceCategories = [
  {
    id: 'web-sajtovi',
    name: 'Web Sajtovi',
    slug: 'web-sajtovi',
    icon: 'Globe',
    description: 'Profesionalna izrada i održavanje web sajtova',
    services: [
      {
        id: 'izrada-web-sajta',
        title: 'Izrada Web Sajta',
        slug: 'izrada-web-sajta',
        shortDesc: 'Moderna izrada web sajtova prilagođenih vašim potrebama',
        fullPath: '/web-sajtovi/izrada-web-sajta',
        icon: 'Globe',
        color: '#28A745',
        featured: true
      },
      {
        id: 'redizajn-sajta',
        title: 'Redizajn Sajta',
        slug: 'redizajn-sajta',
        shortDesc: 'Osvežite izgled i funkcionalnost postojećeg sajta',
        fullPath: '/web-sajtovi/redizajn-sajta',
        icon: 'RefreshCw',
        color: '#1E7E34',
        featured: false
      },
      {
        id: 'odrzavanje-sajta',
        title: 'Održavanje Sajta',
        slug: 'odrzavanje-sajta',
        shortDesc: 'Redovno održavanje, backup i tehničke izmene',
        fullPath: '/web-sajtovi/odrzavanje-sajta',
        icon: 'Settings',
        color: '#28A745',
        featured: false
      },
      {
        id: 'izrada-wordpress-sajta',
        title: 'Izrada WordPress Sajta',
        slug: 'izrada-wordpress-sajta',
        shortDesc: 'WordPress sajtovi sa custom dizajnom i funkcijama',
        fullPath: '/web-sajtovi/izrada-wordpress-sajta',
        icon: 'Layout',
        color: '#1E7E34',
        featured: true
      },
      {
        id: 'wordpress-development',
        title: 'WordPress Development',
        slug: 'wordpress-development',
        shortDesc: 'Napredni WordPress development, teme i plugini',
        fullPath: '/web-sajtovi/wordpress-development',
        icon: 'Code',
        color: '#28A745',
        featured: false
      },
      {
        id: 'wordpress-odrzavanje',
        title: 'WordPress Održavanje',
        slug: 'wordpress-odrzavanje',
        shortDesc: 'Stručno održavanje WordPress sajtova',
        fullPath: '/web-sajtovi/wordpress-odrzavanje',
        icon: 'Shield',
        color: '#1E7E34',
        featured: false
      }
    ]
  },
  {
    id: 'e-commerce',
    name: 'E-commerce',
    slug: 'e-commerce',
    icon: 'ShoppingCart',
    description: 'Kompletan razvoj i održavanje online prodavnica',
    services: [
      {
        id: 'izrada-prestashop-prodavnice',
        title: 'Izrada PrestaShop Prodavnice',
        slug: 'izrada-prestashop-prodavnice',
        shortDesc: 'Profesionalne PrestaShop online prodavnice',
        fullPath: '/e-commerce/izrada-prestashop-prodavnice',
        icon: 'ShoppingCart',
        color: '#FFC107',
        featured: true
      },
      {
        id: 'izrada-woocommerce-prodavnice',
        title: 'Izrada WooCommerce Prodavnice',
        slug: 'izrada-woocommerce-prodavnice',
        shortDesc: 'WooCommerce rešenja za WordPress',
        fullPath: '/e-commerce/izrada-woocommerce-prodavnice',
        icon: 'ShoppingBag',
        color: '#28A745',
        featured: true
      },
      {
        id: 'izrada-custom-prodavnice',
        title: 'Izrada Custom Prodavnice',
        slug: 'izrada-custom-prodavnice',
        shortDesc: 'Custom e-commerce platforme po meri',
        fullPath: '/e-commerce/izrada-custom-prodavnice',
        icon: 'Package',
        color: '#1E7E34',
        featured: false
      },
      {
        id: 'prestashop-development',
        title: 'PrestaShop Development',
        slug: 'prestashop-development',
        shortDesc: 'Napredni PrestaShop moduli i customizacija',
        fullPath: '/e-commerce/prestashop-development',
        icon: 'Code',
        color: '#FFC107',
        featured: false
      },
      {
        id: 'prestashop-odrzavanje',
        title: 'PrestaShop Održavanje',
        slug: 'prestashop-odrzavanje',
        shortDesc: 'Održavanje i optimizacija PrestaShop prodavnica',
        fullPath: '/e-commerce/prestashop-odrzavanje',
        icon: 'Tool',
        color: '#28A745',
        featured: false
      }
    ]
  },
  {
    id: 'razvoj-softvera',
    name: 'Aplikacije',
    slug: 'razvoj-softvera',
    icon: 'Code',
    description: 'Razvoj naprednih softverskih rešenja',
    services: [
      {
        id: 'web-aplikacije',
        title: 'Web Aplikacije',
        slug: 'web-aplikacije',
        shortDesc: 'Custom web aplikacije za vaš biznis',
        fullPath: '/razvoj-softvera/web-aplikacije',
        icon: 'Monitor',
        color: '#28A745',
        featured: true
      },
      {
        id: 'mobilne-aplikacije',
        title: 'Mobilne Aplikacije',
        slug: 'mobilne-aplikacije',
        shortDesc: 'Android i iOS mobilne aplikacije',
        fullPath: '/razvoj-softvera/mobilne-aplikacije',
        icon: 'Smartphone',
        color: '#1E7E34',
        featured: false
      },
      {
        id: 'saas-resenja',
        title: 'SaaS Rešenja',
        slug: 'saas-resenja',
        shortDesc: 'Software as a Service platforme',
        fullPath: '/razvoj-softvera/saas-resenja',
        icon: 'Cloud',
        color: '#28A745',
        featured: true
      },
      {
        id: 'poslovne-aplikacije',
        title: 'Poslovne Aplikacije',
        slug: 'poslovne-aplikacije',
        shortDesc: 'ERP, CRM i interne aplikacije',
        fullPath: '/razvoj-softvera/poslovne-aplikacije',
        icon: 'Briefcase',
        color: '#FFC107',
        featured: false
      },
      {
        id: 'automatizacija-procesa',
        title: 'Automatizacija Procesa',
        slug: 'automatizacija-procesa',
        shortDesc: 'Automatizacija poslovnih procesa',
        fullPath: '/razvoj-softvera/automatizacija-procesa',
        icon: 'Zap',
        color: '#1E7E34',
        featured: false
      },
      {
        id: 'ai-agenti',
        title: 'AI Agenti',
        slug: 'ai-agenti',
        shortDesc: 'Inteligentni AI agenti i chatbotovi',
        fullPath: '/razvoj-softvera/ai-agenti',
        icon: 'Bot',
        color: '#28A745',
        featured: true
      }
    ]
  },
  {
    id: 'seo',
    name: 'SEO Optimizacija',
    slug: 'seo',
    icon: 'TrendingUp',
    description: 'Profesionalna SEO optimizacija i pozicioniranje',
    services: [
      {
        id: 'optimizacija',
        title: 'SEO Optimizacija',
        slug: 'optimizacija',
        shortDesc: 'Kompletan SEO za bolje rangiranje',
        fullPath: '/seo/optimizacija',
        icon: 'TrendingUp',
        color: '#28A745',
        featured: true
      },
      {
        id: 'lokalni-seo',
        title: 'Lokalni SEO',
        slug: 'lokalni-seo',
        shortDesc: 'SEO za lokalne biznise u Srbiji',
        fullPath: '/seo/lokalni-seo',
        icon: 'MapPin',
        color: '#1E7E34',
        featured: false
      },
      {
        id: 'tehnicki-seo',
        title: 'Tehnički SEO',
        slug: 'tehnicki-seo',
        shortDesc: 'Tehnička optimizacija sajta',
        fullPath: '/seo/tehnicki-seo',
        icon: 'Settings',
        color: '#28A745',
        featured: false
      },
      {
        id: 'seo-analiza',
        title: 'SEO Analiza',
        slug: 'analiza',
        shortDesc: 'Detaljna analiza sajta i prilike za optimizaciju',
        fullPath: '/seo/analiza',
        icon: 'FileSearch',
        color: '#FFC107',
        featured: false
      }
    ]
  },
  {
    id: 'marketing',
    name: 'Digitalni Marketing',
    slug: 'marketing',
    icon: 'Megaphone',
    description: 'Sveobuhvatni digitalni marketing servisi',
    services: [
      {
        id: 'digitalni',
        title: 'Digitalni Marketing',
        slug: 'digitalni',
        shortDesc: 'Kompletan digitalni marketing',
        fullPath: '/marketing/digitalni',
        icon: 'Megaphone',
        color: '#FFC107',
        featured: true
      },
      {
        id: 'google-ads',
        title: 'Google Ads',
        slug: 'google-ads',
        shortDesc: 'PPC kampanje na Google-u',
        fullPath: '/marketing/google-ads',
        icon: 'Target',
        color: '#28A745',
        featured: true
      },
      {
        id: 'ppc',
        title: 'PPC Kampanje',
        slug: 'ppc',
        shortDesc: 'Pay-per-click oglašavanje',
        fullPath: '/marketing/ppc',
        icon: 'MousePointer',
        color: '#1E7E34',
        featured: false
      },
      {
        id: 'social-media',
        title: 'Social Media Marketing',
        slug: 'social-media',
        shortDesc: 'Marketing na društvenim mrežama',
        fullPath: '/marketing/social-media',
        icon: 'Share2',
        color: '#FFC107',
        featured: false
      },
      {
        id: 'content',
        title: 'Content Marketing',
        slug: 'content',
        shortDesc: 'Kreiranje i distribucija sadržaja',
        fullPath: '/marketing/content',
        icon: 'FileText',
        color: '#28A745',
        featured: false
      }
    ]
  },
  {
    id: 'dizajn',
    name: 'Grafički Dizajn',
    slug: 'dizajn',
    icon: 'Palette',
    description: 'Kreativni grafički dizajn i brendiranje',
    services: [
      {
        id: 'graficki',
        title: 'Grafički Dizajn',
        slug: 'graficki',
        shortDesc: 'Profesionalni grafički dizajn',
        fullPath: '/dizajn/graficki',
        icon: 'Palette',
        color: '#28A745',
        featured: true
      },
      {
        id: 'logo',
        title: 'Dizajn Logotipa',
        slug: 'logo',
        shortDesc: 'Kreiranje jedinstvenih logotipa',
        fullPath: '/dizajn/logo',
        icon: 'Award',
        color: '#FFC107',
        featured: false
      },
      {
        id: 'brend',
        title: 'Brendiranje',
        slug: 'brend',
        shortDesc: 'Kompletan vizuelni identitet',
        fullPath: '/dizajn/brend',
        icon: 'Star',
        color: '#1E7E34',
        featured: false
      }
    ]
  }
];

// Blog posts ostaju isti kao u prethodnom fajlu
export const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Web Development Trendova za 2026. Godinu',
    slug: 'top-10-web-development-trendova-2026',
    excerpt: 'AI, WebAssembly, Edge Computing - otkrijte najvažnije tehnologije koje će dominirati web developmentom u 2026. godini.',
    category: 'Web Development',
    author: 'Marko Simić',
    date: '2026-01-15',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    readTime: '12 min',
    featured: true
  },
  {
    id: 2,
    title: 'Najboljih 5 SEO Strategija za 2026: Google Core Update',
    slug: 'najboljih-5-seo-strategija-2026',
    excerpt: 'Google je promenio sve! Saznajte koje SEO strategije zaista funkcionišu u 2026. i kako optimizovati sajt za AI pretragu.',
    category: 'SEO',
    author: 'Ana Jovanović',
    date: '2026-01-12',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800',
    readTime: '10 min',
    featured: true
  },
  {
    id: 3,
    title: 'Top 7 Marketing Ideja za Mala Preduzeća u 2026',
    slug: 'top-7-marketing-ideja-2026',
    excerpt: 'Budžet nije problem! Evo najboljih marketing strategija koje male firme mogu primeniti sa minimalnim ulaganjima u 2026.',
    category: 'Digitalni Marketing',
    author: 'Nikola Petrović',
    date: '2026-01-10',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800',
    readTime: '9 min',
    featured: true
  },
  {
    id: 4,
    title: '10 Najvažnijih Web Dizajn Principa za 2026',
    slug: '10-web-dizajn-principa-2026',
    excerpt: 'Minimalizam je out! Evo top 10 dizajn principa koji će definisati moderne web sajtove u 2026: neumorfizam, glassmorphism i više.',
    category: 'Web Development',
    author: 'Marko Simić',
    date: '2026-01-08',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800',
    readTime: '11 min',
    featured: false
  },
  {
    id: 5,
    title: 'WordPress u 2026: Top 5 Plugina Koje MORATE Imati',
    slug: 'wordpress-top-5-plugina-2026',
    excerpt: 'WordPress evolucija nastavlja! Saznajte koje plugine koriste najuspešniji sajtovi u 2026. za brzinu, sigurnost i SEO.',
    category: 'Web Development',
    author: 'Ana Jovanović',
    date: '2026-01-06',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800',
    readTime: '8 min',
    featured: false
  },
  {
    id: 6,
    title: '5 AI Alata za Digitalni Marketing Koji Menjaju Igru 2026',
    slug: '5-ai-alata-digitalni-marketing-2026',
    excerpt: 'ChatGPT je samo početak! Otkrijte 5 AI alata koji automatizuju kampanje, kreiraju sadržaj i povećavaju konverzije u 2026.',
    category: 'Digitalni Marketing',
    author: 'Nikola Petrović',
    date: '2026-01-04',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    readTime: '10 min',
    featured: true
  },
  {
    id: 7,
    title: 'Top 10 E-commerce Trendova za Online Prodavnice 2026',
    slug: 'top-10-ecommerce-trendova-2026',
    excerpt: 'AR shopping, voice commerce, sustainable e-commerce - sve što morate znati o online prodaji u 2026. godini.',
    category: 'E-commerce',
    author: 'Marko Simić',
    date: '2026-01-02',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    readTime: '13 min',
    featured: false
  },
  {
    id: 8,
    title: 'Najbolje Social Media Platforme za Biznis u 2026',
    slug: 'najbolje-social-media-platforme-2026',
    excerpt: 'TikTok, LinkedIn, novi igrači - koje društvene mreže donose najbolji ROI za srpske kompanije u 2026?',
    category: 'Digitalni Marketing',
    author: 'Ana Jovanović',
    date: '2025-12-30',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800',
    readTime: '9 min',
    featured: false
  },
  {
    id: 9,
    title: '7 Načina Kako AI Transformiše Web Development u 2026',
    slug: '7-nacina-ai-transformise-web-development-2026',
    excerpt: 'AI coding asistenti, automatsko testiranje, dizajn generatori - kako AI menja način razvoja web aplikacija.',
    category: 'Web Development',
    author: 'Nikola Petrović',
    date: '2025-12-28',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800',
    readTime: '11 min',
    featured: false
  },
  {
    id: 10,
    title: 'Top 5 SaaS Business Model Strategija za Startupove 2026',
    slug: 'top-5-saas-strategija-2026',
    excerpt: 'Freemium, usage-based pricing, hybrid modeli - koje SaaS strategije donose najveći profit u 2026?',
    category: 'Web Development',
    author: 'Marko Simić',
    date: '2025-12-26',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    readTime: '10 min',
    featured: false
  }
];

// Portfolio - Dodaj Belkom Liftovi
export const portfolioProjects = [
  {
    id: 1,
    title: 'Belkom Liftovi - SaaS za upravljanje održavanjem',
    client: 'Belkom Liftovi',
    slug: 'belkom-liftovi-saas',
    category: 'SaaS',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    description: 'Kompletan SaaS sistem za upravljanje radnim nalozima, praćenje radnika, čuvanje dokumentacije sa terena.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Cloud Storage', 'Mobile Responsive'],
    results: 'Automatizacija 80% administrativnih procesa',
    year: '2024',
    website: 'https://evo.belkomliftovi.com'
  },
  {
    id: 2,
    title: 'E-commerce rešenje za modni brend',
    client: 'Fashion Boutique',
    slug: 'ecommerce-modni-brend',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    description: 'Kompletan WooCommerce sajt sa custom dizajnom i integracijom plaćanja.',
    technologies: ['WordPress', 'WooCommerce', 'Custom Theme', 'Payment Integration'],
    results: '+150% online prodaja u prvom kvartalu',
    year: '2024'
  },
  {
    id: 3,
    title: 'Web aplikacija za upravljanje projektima',
    client: 'Tech Startup',
    slug: 'web-app-projekti',
    category: 'Web Aplikacija',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    description: 'Custom SaaS aplikacija za team collaboration i project management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'REST API'],
    results: '500+ aktivnih korisnika',
    year: '2024'
  },
  {
    id: 4,
    title: 'Korporativni sajt sa multi-jezik podrškom',
    client: 'International Corporation',
    slug: 'korporativni-sajt',
    category: 'Korporativni Sajt',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    description: 'Predstavljanje kompanije na 5 jezika sa full SEO optimizacijom.',
    technologies: ['WordPress', 'WPML', 'Custom Design', 'SEO'],
    results: '200% rast organskog saobraćaja',
    year: '2023'
  },
  {
    id: 5,
    title: 'Restaurant booking sistem',
    client: 'Restaurant Group',
    slug: 'restaurant-booking',
    category: 'Web Aplikacija',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    description: 'Online rezervacioni sistem sa real-time dostupnošću stolova.',
    technologies: ['React', 'Firebase', 'Stripe', 'Notifications'],
    results: '1000+ rezervacija mesečno',
    year: '2024'
  }
];

// Testimonials i ostalo ostaje isto
export const testimonials = [
  {
    id: 1,
    name: 'Milan Đorđević',
    position: 'CEO, TechStart d.o.o.',
    company: 'TechStart',
    text: 'Zikma Solutions je pravi partner za digitalizaciju. Naša nova web aplikacija je prevazišla sva očekivanja.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=12'
  },
  {
    id: 2,
    name: 'Jelena Marković',
    position: 'Marketing Manager',
    company: 'Fashion Hub',
    text: 'Online prodaja nam je porasla za 200% nakon što je Zikma uradila redizajn sajta i SEO optimizaciju. Preporučujem!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=45'
  },
  {
    id: 3,
    name: 'Aleksandar Nikolić',
    position: 'Vlasnik restorana',
    company: 'Restoran Panorama',
    text: 'Rezervacioni sistem koji su nam napravili je revolucionizovao naš posao. Sve je automatizovano i jednostavno.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=33'
  }
];

export const faqs = [
  {
    id: 1,
    question: 'Koliko traje izrada web sajta?',
    answer: 'Vreme izrade zavisi od kompleksnosti projekta. Jednostavan sajt može biti gotov za 2-3 nedelje, dok kompleksnije web aplikacije mogu trajati 2-3 meseca. Dajemo preciznu procenu nakon analize zahteva.'
  },
  {
    id: 2,
    question: 'Koja je cena izrade web sajta?',
    answer: 'Cene variraju u zavisnosti od funkcionalnosti, dizajna i kompleksnosti. Jednostavni prezentacioni sajt počinje od 500€, dok custom web aplikacije mogu koštati od 3000€ naviše. Kontaktirajte nas za besplatnu procenu.'
  },
  {
    id: 3,
    question: 'Da li nudite održavanje i podršku?',
    answer: 'Da, nudimo pakete održavanja koji uključuju redovne backup-e, sigurnosne update-e, tehničku podršku i optimizaciju performansi. Garantujemo brzo reagovanje na sve zahteve.'
  },
  {
    id: 4,
    question: 'Da li pravite responzivne sajtove?',
    answer: 'Apsolutno! Svi naši sajtovi su fully responsive i optimizovani za sve uređaje - desktop, tablet i mobilne telefone. Mobile-first pristup je standard u našem radu.'
  },
  {
    id: 5,
    question: 'Šta dobijam sa SEO optimizacijom?',
    answer: 'SEO paket uključuje: tehnički SEO audit, on-page optimizaciju, content strategiju, link building, mesečne izveštaje i kontinuirane optimizacije za bolje pozicioniranje na Google-u.'
  }
];

export const stats = [
  { label: 'Godina iskustva', value: '10+', icon: 'Award' },
  { label: 'Završenih projekata', value: '200+', icon: 'CheckCircle' },
  { label: 'Zadovoljnih klijenata', value: '150+', icon: 'Users' },
  { label: 'Uptime garantija', value: '99.9%', icon: 'Zap' }
];

// Helper funkcija da dobijemo sve usluge u flat array
export const getAllServices = () => {
  return serviceCategories.flatMap(category => 
    category.services.map(service => ({
      ...service,
      categoryName: category.name,
      categorySlug: category.slug
    }))
  );
};
