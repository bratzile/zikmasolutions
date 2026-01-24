// Mock data za ZS Digital Agency

export const services = [
  {
    id: 'web-development',
    title: 'Izrada Web Sajtova',
    slug: 'izrada-web-sajtova',
    shortDesc: 'Profesionalna izrada modernih, responzivnih web sajtova prilagođenih vašim potrebama.',
    icon: 'Globe',
    color: '#28A745',
    featured: true,
    metaTitle: 'Izrada Web Sajtova Srbija | Profesionalni Web Development',
    metaDescription: 'Stručna izrada web sajtova u Srbiji. Moderni, responzivni i SEO optimizovani sajtovi. Besplatna konsultacija. ☎️ Kontaktirajte nas danas!',
    keywords: ['izrada web sajtova', 'web development srbija', 'pravljenje web sajta', 'web dizajn beograd', 'responzivni web sajt']
  },
  {
    id: 'wordpress-dev',
    title: 'WordPress Development',
    slug: 'wordpress-development',
    shortDesc: 'Profesionalni WordPress sajtovi sa prilagođenim temama i funkcionalnostima.',
    icon: 'Layout',
    color: '#1E7E34',
    featured: true,
    metaTitle: 'WordPress Development Srbija | Izrada WordPress Sajtova',
    metaDescription: 'Profesionalna izrada WordPress sajtova. Custom teme, plugin development, optimizacija brzine. ⚡ Iskusni WordPress developeri.',
    keywords: ['wordpress development', 'wordpress sajt', 'wordpress tema', 'wordpress srbija', 'wordpress beograd']
  },
  {
    id: 'ecommerce',
    title: 'WooCommerce / PrestaShop',
    slug: 'woocommerce-prestashop',
    shortDesc: 'Kompletan e-commerce razvoj sa sigurnim plaćanjem i upravljanjem proizvodima.',
    icon: 'ShoppingCart',
    color: '#FFC107',
    featured: true,
    metaTitle: 'WooCommerce & PrestaShop Development | Online Prodavnica',
    metaDescription: 'Izrada online prodavnice WooCommerce i PrestaShop. Kompletna e-commerce rešenja sa integracijama plaćanja. 🛒 Počnite prodaju online!',
    keywords: ['woocommerce srbija', 'prestashop development', 'online prodavnica', 'e-commerce sajt', 'web shop izrada']
  },
  {
    id: 'web-apps',
    title: 'Web Aplikacije Po Meri',
    slug: 'web-aplikacije-po-meri',
    shortDesc: 'Razvoj kompleksnih web aplikacija prilagođenih specifičnim poslovnim potrebama.',
    icon: 'Code',
    color: '#28A745',
    featured: true,
    metaTitle: 'Web Aplikacije Po Meri | Custom Web Development',
    metaDescription: 'Razvoj web aplikacija po meri za vaš biznis. React, Node.js, Python. Skalabilna i sigurna rešenja. 💻 Konsultacije besplatne!',
    keywords: ['web aplikacije', 'custom web development', 'aplikacije po meri', 'saas development', 'web app srbija']
  },
  {
    id: 'seo',
    title: 'SEO Optimizacija',
    slug: 'seo-optimizacija',
    shortDesc: 'Poboljšajte vidljivost vašeg sajta na Google-u sa stručnom SEO optimizacijom.',
    icon: 'TrendingUp',
    color: '#1E7E34',
    featured: true,
    metaTitle: 'SEO Optimizacija Srbija | Google SEO Usluge',
    metaDescription: 'Profesionalna SEO optimizacija za bolje pozicioniranje na Google-u. Tehnički SEO, content optimizacija, link building. 📈 Rezultati garantovani!',
    keywords: ['seo optimizacija', 'google seo', 'seo srbija', 'optimizacija sajta', 'seo usluge beograd']
  },
  {
    id: 'digital-marketing',
    title: 'Digitalni Marketing',
    slug: 'digitalni-marketing',
    shortDesc: 'Google Ads, Facebook Ads i kompletan digitalni marketing za rast vašeg biznisa.',
    icon: 'Megaphone',
    color: '#FFC107',
    featured: false,
    metaTitle: 'Digitalni Marketing Srbija | Google Ads & Social Media',
    metaDescription: 'Profesionalne usluge digitalnog marketinga. Google Ads kampanje, društvene mreže, email marketing. 🎯 Povećajte prodaju!',
    keywords: ['digitalni marketing', 'google ads', 'facebook ads', 'online marketing', 'ppc kampanje']
  },
  {
    id: 'graphic-design',
    title: 'Grafički Dizajn',
    slug: 'graficki-dizajn',
    shortDesc: 'Kreativni grafički dizajn za vaš brend - logotipi, brendiranje, marketing materijali.',
    icon: 'Palette',
    color: '#28A745',
    featured: false,
    metaTitle: 'Grafički Dizajn Srbija | Logo Dizajn & Brendiranje',
    metaDescription: 'Profesionalni grafički dizajn. Kreiranje logotipa, vizuelnog identiteta, marketing materijala. 🎨 Kreativna rešenja za vaš brend!',
    keywords: ['grafički dizajn', 'logo dizajn', 'brendiranje', 'dizajn logotipa', 'vizuelni identitet']
  },
  {
    id: 'hosting',
    title: 'Hosting i Održavanje',
    slug: 'hosting-odrzavanje',
    shortDesc: 'Pouzdani hosting servisi i tehničko održavanje vašeg web sajta.',
    icon: 'Server',
    color: '#1E7E34',
    featured: false,
    metaTitle: 'Web Hosting Srbija | Održavanje Web Sajtova',
    metaDescription: 'Profesionalni web hosting i održavanje. Backup, sigurnost, brze performanse. ⚡ 99.9% uptime garantovano!',
    keywords: ['web hosting srbija', 'održavanje sajta', 'wordpress hosting', 'vps hosting', 'cloud hosting']
  }
];

export const portfolioProjects = [
  {
    id: 1,
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
    id: 2,
    title: 'Web aplikacija za upravljanje projektima',
    client: 'Tech Startup',
    slug: 'web-app-projekti',
    category: 'Web Aplikacija',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    description: 'Custom SaaS aplikacija za time collaboration i project management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'REST API'],
    results: '500+ aktivnih korisnika',
    year: '2024'
  },
  {
    id: 3,
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
    id: 4,
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

export const blogPosts = [
  {
    id: 1,
    title: 'Kako odabrati pravu platformu za web sajt u 2025?',
    slug: 'odabir-platforme-web-sajt-2025',
    excerpt: 'WordPress, custom development ili website builderi? Detaljno poređenje svih opcija sa prednostima i manama za vaš biznis.',
    category: 'Web Development',
    author: 'Marko Simić',
    date: '2025-01-15',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    readTime: '8 min',
    featured: true
  },
  {
    id: 2,
    title: 'SEO Checklist za 2025: Kompletna optimizacija',
    slug: 'seo-checklist-2025',
    excerpt: 'Sve što treba da uradite da vaš sajt rangira na prvoj strani Google-a. Proveren SEO vodič sa konkretnim koracima.',
    category: 'SEO',
    author: 'Ana Jovanović',
    date: '2025-01-10',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800',
    readTime: '12 min',
    featured: true
  },
  {
    id: 3,
    title: 'WordPress vs Custom Development: Šta je bolje?',
    slug: 'wordpress-vs-custom-development',
    excerpt: 'Kada koristiti WordPress, a kada custom rešenje? Analiziramo troškove, performanse i fleksibilnost oba pristupa.',
    category: 'Web Development',
    author: 'Nikola Petrović',
    date: '2025-01-05',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800',
    readTime: '10 min',
    featured: false
  },
  {
    id: 4,
    title: 'Kako pokrenuti uspešnu online prodavnicu?',
    slug: 'uspesna-online-prodavnica',
    excerpt: 'Vodič kroz proces pokretanja e-commerce sajta: od izbora platforme do prvih prodaja.',
    category: 'E-commerce',
    author: 'Marko Simić',
    date: '2024-12-28',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    readTime: '15 min',
    featured: true
  },
  {
    id: 5,
    title: 'Google Ads za početnike: Sve što treba da znate',
    slug: 'google-ads-za-pocetnike',
    excerpt: 'Kompletni vodič kroz Google Ads kampanje. Kako kreirati, optimizovati i meriti uspeh vaših oglasa.',
    category: 'Digitalni Marketing',
    author: 'Ana Jovanović',
    date: '2024-12-20',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800',
    readTime: '11 min',
    featured: false
  },
  {
    id: 6,
    title: 'Web performanse: Kako ubrzati vaš sajt?',
    slug: 'ubrzanje-web-sajta',
    excerpt: 'Tehnike optimizacije koje će vaš sajt učiniti bržim i poboljšati korisničko iskustvo i SEO.',
    category: 'Web Development',
    author: 'Nikola Petrović',
    date: '2024-12-15',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    readTime: '9 min',
    featured: false
  }
];

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
