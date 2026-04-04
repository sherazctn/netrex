export type Language = 'en' | 'ar' | 'zh' | 'fr' | 'es' | 'de' | 'ru' | 'pt' | 'ja';

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.testimonials': 'Testimonials',
    'nav.industries': 'Industries',
    
    // Hero
    'hero.badge': 'Global IT & Digital Agency',
    'hero.title.where': 'Where',
    'hero.title.innovation': 'Innovation',
    'hero.title.meets': 'Meets The Real World',
    'hero.description': 'We empower businesses to innovate, optimize, and scale with cutting-edge digital solutions across 9 countries.',
    'hero.feature1': 'Custom app development with advanced AI capabilities',
    'hero.feature2': 'End-to-end digital marketing solutions',
    'hero.feature3': 'Scalable enterprise solutions worldwide',
    'hero.cta.start': 'Start Your Project',
    'hero.cta.work': 'View Our Work',
    'hero.scroll': 'Scroll to explore',
    
    // Services
    'services.badge': 'Our Services',
    'services.title': 'Everything You Need to',
    'services.title.highlight': 'Dominate Digital',
    'services.description': 'Our team of designers, developers, and marketing professionals deliver creative, results-driven solutions leveraging the latest trends and technologies.',
    'services.learn': 'Learn More',
    
    // Industries
    'industries.badge': 'Industries We Serve',
    'industries.title': 'Solutions Tailored for',
    'industries.title.highlight': 'Every Industry',
    'industries.explore': 'Explore All Industries',
    
    // Portfolio
    'portfolio.badge': 'Our Portfolio',
    'portfolio.title': 'Projects That Speak',
    'portfolio.title.highlight': 'Results',
    'portfolio.description': 'Explore our latest work and see how we\'ve helped businesses transform their digital presence.',
    'portfolio.viewAll': 'View All Projects',
    
    // Contact
    'contact.badge': 'Get in Touch',
    'contact.title': 'Connect With Our',
    'contact.title.highlight': 'Global Team',
    'contact.description': 'With offices across 9 countries, we\'re always nearby. Select your region to get local contact information.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.hours': 'Working Hours',
    'contact.hours.value': 'Mon - Fri: 9AM - 6PM',
    'contact.form.title': 'Send a Message',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.phone': 'Phone Number',
    'contact.form.company': 'Company Name',
    'contact.form.message': 'Tell us about your project...',
    'contact.form.submit': 'Send Message',
    
    // Footer
    'footer.description': 'Empowering businesses worldwide with innovative digital solutions. Your trusted partner for web, mobile, and marketing excellence.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved.',
    
    // Common
    'common.trusted': 'Trusted by Industry Leaders',
    'common.learnMore': 'Learn More',
    'common.viewAll': 'View All',
    'common.startProject': 'Start Your Project',
    'common.getConsultation': 'Get Free Consultation',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.services': 'خدماتنا',
    'nav.portfolio': 'أعمالنا',
    'nav.about': 'من نحن',
    'nav.blog': 'المدونة',
    'nav.contact': 'اتصل بنا',
    'nav.testimonials': 'آراء العملاء',
    'nav.industries': 'القطاعات',
    
    // Hero
    'hero.badge': 'وكالة تقنية معلومات ورقمية عالمية',
    'hero.title.where': 'حيث',
    'hero.title.innovation': 'الابتكار',
    'hero.title.meets': 'يلتقي بالعالم الحقيقي',
    'hero.description': 'نمكّن الشركات من الابتكار والتحسين والتوسع من خلال حلول رقمية متطورة في 9 دول.',
    'hero.feature1': 'تطوير تطبيقات مخصصة بقدرات ذكاء اصطناعي متقدمة',
    'hero.feature2': 'حلول تسويق رقمي شاملة',
    'hero.feature3': 'حلول مؤسسية قابلة للتوسع عالمياً',
    'hero.cta.start': 'ابدأ مشروعك',
    'hero.cta.work': 'شاهد أعمالنا',
    'hero.scroll': 'مرر للاستكشاف',
    
    // Services
    'services.badge': 'خدماتنا',
    'services.title': 'كل ما تحتاجه',
    'services.title.highlight': 'للسيطرة الرقمية',
    'services.description': 'فريقنا من المصممين والمطورين ومحترفي التسويق يقدم حلولاً إبداعية تحقق النتائج.',
    'services.learn': 'اعرف المزيد',
    
    // Industries
    'industries.badge': 'القطاعات التي نخدمها',
    'industries.title': 'حلول مصممة',
    'industries.title.highlight': 'لكل صناعة',
    'industries.explore': 'استكشف جميع القطاعات',
    
    // Portfolio
    'portfolio.badge': 'معرض أعمالنا',
    'portfolio.title': 'مشاريع تتحدث عن',
    'portfolio.title.highlight': 'النتائج',
    'portfolio.description': 'استكشف أحدث أعمالنا وشاهد كيف ساعدنا الشركات في تحويل حضورها الرقمي.',
    'portfolio.viewAll': 'عرض جميع المشاريع',
    
    // Contact
    'contact.badge': 'تواصل معنا',
    'contact.title': 'تواصل مع',
    'contact.title.highlight': 'فريقنا العالمي',
    'contact.description': 'مع مكاتب في 9 دول، نحن دائماً بالقرب منك. اختر منطقتك للحصول على معلومات الاتصال المحلية.',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.address': 'العنوان',
    'contact.hours': 'ساعات العمل',
    'contact.hours.value': 'الاثنين - الجمعة: 9 صباحاً - 6 مساءً',
    'contact.form.title': 'أرسل رسالة',
    'contact.form.name': 'اسمك',
    'contact.form.email': 'بريدك الإلكتروني',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.company': 'اسم الشركة',
    'contact.form.message': 'أخبرنا عن مشروعك...',
    'contact.form.submit': 'إرسال الرسالة',
    
    // Footer
    'footer.description': 'تمكين الشركات في جميع أنحاء العالم بحلول رقمية مبتكرة. شريكك الموثوق للويب والجوال والتسويق.',
    'footer.services': 'الخدمات',
    'footer.company': 'الشركة',
    'footer.legal': 'قانوني',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.rights': 'جميع الحقوق محفوظة.',
    
    // Common
    'common.trusted': 'موثوق به من قادة الصناعة',
    'common.learnMore': 'اعرف المزيد',
    'common.viewAll': 'عرض الكل',
    'common.startProject': 'ابدأ مشروعك',
    'common.getConsultation': 'احصل على استشارة مجانية',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.services': '服务',
    'nav.portfolio': '作品集',
    'nav.about': '关于我们',
    'nav.blog': '博客',
    'nav.contact': '联系我们',
    'nav.testimonials': '客户评价',
    'nav.industries': '行业',
    
    // Hero
    'hero.badge': '全球IT与数字代理',
    'hero.title.where': '在这里',
    'hero.title.innovation': '创新',
    'hero.title.meets': '与现实世界相遇',
    'hero.description': '我们帮助企业通过尖端数字解决方案进行创新、优化和扩展，业务覆盖9个国家。',
    'hero.feature1': '具有先进AI功能的定制应用开发',
    'hero.feature2': '端到端数字营销解决方案',
    'hero.feature3': '可扩展的全球企业解决方案',
    'hero.cta.start': '开始您的项目',
    'hero.cta.work': '查看我们的作品',
    'hero.scroll': '滚动探索',
    
    // Services
    'services.badge': '我们的服务',
    'services.title': '您需要的一切',
    'services.title.highlight': '主导数字化',
    'services.description': '我们的设计师、开发人员和营销专业人员团队利用最新趋势和技术提供创意、结果驱动的解决方案。',
    'services.learn': '了解更多',
    
    // Industries
    'industries.badge': '我们服务的行业',
    'industries.title': '为每个行业',
    'industries.title.highlight': '量身定制',
    'industries.explore': '探索所有行业',
    
    // Portfolio
    'portfolio.badge': '我们的作品集',
    'portfolio.title': '成果',
    'portfolio.title.highlight': '说明一切',
    'portfolio.description': '探索我们的最新作品，看看我们如何帮助企业转型其数字形象。',
    'portfolio.viewAll': '查看所有项目',
    
    // Contact
    'contact.badge': '联系我们',
    'contact.title': '与我们的',
    'contact.title.highlight': '全球团队联系',
    'contact.description': '我们在9个国家设有办事处，随时为您服务。选择您的地区获取当地联系信息。',
    'contact.phone': '电话',
    'contact.email': '电子邮件',
    'contact.address': '地址',
    'contact.hours': '工作时间',
    'contact.hours.value': '周一至周五：上午9点 - 下午6点',
    'contact.form.title': '发送消息',
    'contact.form.name': '您的姓名',
    'contact.form.email': '您的邮箱',
    'contact.form.phone': '电话号码',
    'contact.form.company': '公司名称',
    'contact.form.message': '告诉我们您的项目...',
    'contact.form.submit': '发送消息',
    
    // Footer
    'footer.description': '通过创新的数字解决方案赋能全球企业。您值得信赖的网络、移动和营销卓越合作伙伴。',
    'footer.services': '服务',
    'footer.company': '公司',
    'footer.legal': '法律',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
    'footer.rights': '保留所有权利。',
    
    // Common
    'common.trusted': '受到行业领导者的信赖',
    'common.learnMore': '了解更多',
    'common.viewAll': '查看全部',
    'common.startProject': '开始您的项目',
    'common.getConsultation': '获取免费咨询',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'À propos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.testimonials': 'Témoignages',
    'nav.industries': 'Industries',
    
    // Hero
    'hero.badge': 'Agence Digitale & IT Mondiale',
    'hero.title.where': 'Là où',
    'hero.title.innovation': "L'Innovation",
    'hero.title.meets': 'Rencontre le Monde Réel',
    'hero.description': 'Nous permettons aux entreprises d\'innover, d\'optimiser et de se développer grâce à des solutions numériques de pointe dans 9 pays.',
    'hero.feature1': 'Développement d\'applications personnalisées avec IA avancée',
    'hero.feature2': 'Solutions de marketing digital de bout en bout',
    'hero.feature3': 'Solutions entreprise évolutives à l\'échelle mondiale',
    'hero.cta.start': 'Démarrer Votre Projet',
    'hero.cta.work': 'Voir Nos Réalisations',
    'hero.scroll': 'Défiler pour explorer',
    
    // Services
    'services.badge': 'Nos Services',
    'services.title': 'Tout ce dont vous avez besoin pour',
    'services.title.highlight': 'Dominer le Digital',
    'services.description': 'Notre équipe de designers, développeurs et professionnels du marketing livre des solutions créatives axées sur les résultats.',
    'services.learn': 'En savoir plus',
    
    // Industries
    'industries.badge': 'Industries que nous servons',
    'industries.title': 'Solutions sur mesure pour',
    'industries.title.highlight': 'Chaque Industrie',
    'industries.explore': 'Explorer toutes les industries',
    
    // Portfolio
    'portfolio.badge': 'Notre Portfolio',
    'portfolio.title': 'Des projets qui parlent',
    'portfolio.title.highlight': 'Résultats',
    'portfolio.description': 'Explorez nos dernières réalisations et voyez comment nous avons aidé les entreprises à transformer leur présence digitale.',
    'portfolio.viewAll': 'Voir tous les projets',
    
    // Contact
    'contact.badge': 'Contactez-nous',
    'contact.title': 'Connectez-vous avec notre',
    'contact.title.highlight': 'Équipe Mondiale',
    'contact.description': 'Avec des bureaux dans 9 pays, nous sommes toujours proches. Sélectionnez votre région pour les informations de contact locales.',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.address': 'Adresse',
    'contact.hours': 'Heures d\'ouverture',
    'contact.hours.value': 'Lun - Ven : 9h - 18h',
    'contact.form.title': 'Envoyer un message',
    'contact.form.name': 'Votre nom',
    'contact.form.email': 'Votre email',
    'contact.form.phone': 'Numéro de téléphone',
    'contact.form.company': 'Nom de l\'entreprise',
    'contact.form.message': 'Parlez-nous de votre projet...',
    'contact.form.submit': 'Envoyer le message',
    
    // Footer
    'footer.description': 'Donner aux entreprises du monde entier les moyens de solutions digitales innovantes. Votre partenaire de confiance pour l\'excellence web, mobile et marketing.',
    'footer.services': 'Services',
    'footer.company': 'Entreprise',
    'footer.legal': 'Légal',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions d\'utilisation',
    'footer.rights': 'Tous droits réservés.',
    
    // Common
    'common.trusted': 'Fait confiance par les leaders de l\'industrie',
    'common.learnMore': 'En savoir plus',
    'common.viewAll': 'Voir tout',
    'common.startProject': 'Démarrer votre projet',
    'common.getConsultation': 'Consultation gratuite',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.portfolio': 'Portafolio',
    'nav.about': 'Nosotros',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.testimonials': 'Testimonios',
    'nav.industries': 'Industrias',
    
    // Hero
    'hero.badge': 'Agencia Digital & TI Global',
    'hero.title.where': 'Donde',
    'hero.title.innovation': 'La Innovación',
    'hero.title.meets': 'Se Encuentra con el Mundo Real',
    'hero.description': 'Empoderamos a las empresas para innovar, optimizar y escalar con soluciones digitales de vanguardia en 9 países.',
    'hero.feature1': 'Desarrollo de aplicaciones personalizadas con IA avanzada',
    'hero.feature2': 'Soluciones de marketing digital de principio a fin',
    'hero.feature3': 'Soluciones empresariales escalables a nivel mundial',
    'hero.cta.start': 'Iniciar Tu Proyecto',
    'hero.cta.work': 'Ver Nuestro Trabajo',
    'hero.scroll': 'Desplaza para explorar',
    
    // Services
    'services.badge': 'Nuestros Servicios',
    'services.title': 'Todo lo que necesitas para',
    'services.title.highlight': 'Dominar lo Digital',
    'services.description': 'Nuestro equipo de diseñadores, desarrolladores y profesionales de marketing entrega soluciones creativas orientadas a resultados.',
    'services.learn': 'Saber más',
    
    // Industries
    'industries.badge': 'Industrias que Servimos',
    'industries.title': 'Soluciones adaptadas para',
    'industries.title.highlight': 'Cada Industria',
    'industries.explore': 'Explorar todas las industrias',
    
    // Portfolio
    'portfolio.badge': 'Nuestro Portafolio',
    'portfolio.title': 'Proyectos que hablan de',
    'portfolio.title.highlight': 'Resultados',
    'portfolio.description': 'Explora nuestro trabajo más reciente y ve cómo hemos ayudado a las empresas a transformar su presencia digital.',
    'portfolio.viewAll': 'Ver todos los proyectos',
    
    // Contact
    'contact.badge': 'Contáctanos',
    'contact.title': 'Conecta con nuestro',
    'contact.title.highlight': 'Equipo Global',
    'contact.description': 'Con oficinas en 9 países, siempre estamos cerca. Selecciona tu región para información de contacto local.',
    'contact.phone': 'Teléfono',
    'contact.email': 'Correo',
    'contact.address': 'Dirección',
    'contact.hours': 'Horario de atención',
    'contact.hours.value': 'Lun - Vie: 9AM - 6PM',
    'contact.form.title': 'Enviar un mensaje',
    'contact.form.name': 'Tu nombre',
    'contact.form.email': 'Tu correo',
    'contact.form.phone': 'Número de teléfono',
    'contact.form.company': 'Nombre de la empresa',
    'contact.form.message': 'Cuéntanos sobre tu proyecto...',
    'contact.form.submit': 'Enviar mensaje',
    
    // Footer
    'footer.description': 'Empoderando empresas en todo el mundo con soluciones digitales innovadoras. Tu socio de confianza para excelencia web, móvil y marketing.',
    'footer.services': 'Servicios',
    'footer.company': 'Empresa',
    'footer.legal': 'Legal',
    'footer.privacy': 'Política de privacidad',
    'footer.terms': 'Términos de servicio',
    'footer.rights': 'Todos los derechos reservados.',
    
    // Common
    'common.trusted': 'Confiado por líderes de la industria',
    'common.learnMore': 'Saber más',
    'common.viewAll': 'Ver todo',
    'common.startProject': 'Iniciar tu proyecto',
    'common.getConsultation': 'Consulta gratuita',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.services': 'Dienstleistungen',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'Über uns',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontakt',
    'nav.testimonials': 'Referenzen',
    'nav.industries': 'Branchen',
    
    // Hero
    'hero.badge': 'Globale IT & Digital Agentur',
    'hero.title.where': 'Wo',
    'hero.title.innovation': 'Innovation',
    'hero.title.meets': 'Die Realität Trifft',
    'hero.description': 'Wir befähigen Unternehmen, mit modernsten digitalen Lösungen in 9 Ländern zu innovieren, zu optimieren und zu skalieren.',
    'hero.feature1': 'Maßgeschneiderte App-Entwicklung mit fortschrittlicher KI',
    'hero.feature2': 'End-to-End Digital Marketing Lösungen',
    'hero.feature3': 'Skalierbare Unternehmenslösungen weltweit',
    'hero.cta.start': 'Projekt Starten',
    'hero.cta.work': 'Unsere Arbeit Ansehen',
    'hero.scroll': 'Scrollen zum Erkunden',
    
    // Services
    'services.badge': 'Unsere Dienstleistungen',
    'services.title': 'Alles was Sie brauchen um',
    'services.title.highlight': 'Digital zu Dominieren',
    'services.description': 'Unser Team aus Designern, Entwicklern und Marketing-Profis liefert kreative, ergebnisorientierte Lösungen.',
    'services.learn': 'Mehr erfahren',
    
    // Industries
    'industries.badge': 'Branchen die wir bedienen',
    'industries.title': 'Lösungen maßgeschneidert für',
    'industries.title.highlight': 'Jede Branche',
    'industries.explore': 'Alle Branchen erkunden',
    
    // Portfolio
    'portfolio.badge': 'Unser Portfolio',
    'portfolio.title': 'Projekte die',
    'portfolio.title.highlight': 'Ergebnisse sprechen',
    'portfolio.description': 'Entdecken Sie unsere neuesten Arbeiten und sehen Sie, wie wir Unternehmen bei der digitalen Transformation geholfen haben.',
    'portfolio.viewAll': 'Alle Projekte ansehen',
    
    // Contact
    'contact.badge': 'Kontaktieren Sie uns',
    'contact.title': 'Verbinden Sie sich mit unserem',
    'contact.title.highlight': 'Globalen Team',
    'contact.description': 'Mit Büros in 9 Ländern sind wir immer in Ihrer Nähe. Wählen Sie Ihre Region für lokale Kontaktinformationen.',
    'contact.phone': 'Telefon',
    'contact.email': 'E-Mail',
    'contact.address': 'Adresse',
    'contact.hours': 'Öffnungszeiten',
    'contact.hours.value': 'Mo - Fr: 9 - 18 Uhr',
    'contact.form.title': 'Nachricht senden',
    'contact.form.name': 'Ihr Name',
    'contact.form.email': 'Ihre E-Mail',
    'contact.form.phone': 'Telefonnummer',
    'contact.form.company': 'Firmenname',
    'contact.form.message': 'Erzählen Sie uns von Ihrem Projekt...',
    'contact.form.submit': 'Nachricht senden',
    
    // Footer
    'footer.description': 'Unternehmen weltweit mit innovativen digitalen Lösungen befähigen. Ihr vertrauenswürdiger Partner für Web-, Mobile- und Marketing-Exzellenz.',
    'footer.services': 'Dienstleistungen',
    'footer.company': 'Unternehmen',
    'footer.legal': 'Rechtliches',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'Nutzungsbedingungen',
    'footer.rights': 'Alle Rechte vorbehalten.',
    
    // Common
    'common.trusted': 'Vertraut von Branchenführern',
    'common.learnMore': 'Mehr erfahren',
    'common.viewAll': 'Alle anzeigen',
    'common.startProject': 'Projekt starten',
    'common.getConsultation': 'Kostenlose Beratung',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.portfolio': 'Портфолио',
    'nav.about': 'О нас',
    'nav.blog': 'Блог',
    'nav.contact': 'Контакты',
    'nav.testimonials': 'Отзывы',
    'nav.industries': 'Отрасли',
    
    // Hero
    'hero.badge': 'Глобальное IT и Цифровое Агентство',
    'hero.title.where': 'Где',
    'hero.title.innovation': 'Инновации',
    'hero.title.meets': 'Встречаются с Реальностью',
    'hero.description': 'Мы помогаем бизнесу внедрять инновации, оптимизировать и масштабировать с помощью передовых цифровых решений в 9 странах.',
    'hero.feature1': 'Разработка приложений с продвинутым ИИ',
    'hero.feature2': 'Комплексные решения цифрового маркетинга',
    'hero.feature3': 'Масштабируемые корпоративные решения по всему миру',
    'hero.cta.start': 'Начать Проект',
    'hero.cta.work': 'Посмотреть Работы',
    'hero.scroll': 'Прокрутите для изучения',
    
    // Services
    'services.badge': 'Наши Услуги',
    'services.title': 'Всё что нужно для',
    'services.title.highlight': 'Цифрового Доминирования',
    'services.description': 'Наша команда дизайнеров, разработчиков и маркетологов предоставляет креативные решения, ориентированные на результат.',
    'services.learn': 'Узнать больше',
    
    // Industries
    'industries.badge': 'Отрасли которые мы обслуживаем',
    'industries.title': 'Решения адаптированные для',
    'industries.title.highlight': 'Каждой Отрасли',
    'industries.explore': 'Все отрасли',
    
    // Portfolio
    'portfolio.badge': 'Наше Портфолио',
    'portfolio.title': 'Проекты которые говорят о',
    'portfolio.title.highlight': 'Результатах',
    'portfolio.description': 'Изучите наши последние работы и посмотрите, как мы помогли бизнесу трансформировать их цифровое присутствие.',
    'portfolio.viewAll': 'Все проекты',
    
    // Contact
    'contact.badge': 'Связаться с нами',
    'contact.title': 'Свяжитесь с нашей',
    'contact.title.highlight': 'Глобальной Командой',
    'contact.description': 'С офисами в 9 странах мы всегда рядом. Выберите регион для местной контактной информации.',
    'contact.phone': 'Телефон',
    'contact.email': 'Эл. почта',
    'contact.address': 'Адрес',
    'contact.hours': 'Часы работы',
    'contact.hours.value': 'Пн - Пт: 9:00 - 18:00',
    'contact.form.title': 'Отправить сообщение',
    'contact.form.name': 'Ваше имя',
    'contact.form.email': 'Ваш email',
    'contact.form.phone': 'Номер телефона',
    'contact.form.company': 'Название компании',
    'contact.form.message': 'Расскажите о вашем проекте...',
    'contact.form.submit': 'Отправить',
    
    // Footer
    'footer.description': 'Расширяем возможности бизнеса по всему миру с помощью инновационных цифровых решений. Ваш надежный партнер для веб, мобильных и маркетинговых решений.',
    'footer.services': 'Услуги',
    'footer.company': 'Компания',
    'footer.legal': 'Правовая информация',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
    'footer.rights': 'Все права защищены.',
    
    // Common
    'common.trusted': 'Нам доверяют лидеры отрасли',
    'common.learnMore': 'Узнать больше',
    'common.viewAll': 'Смотреть все',
    'common.startProject': 'Начать проект',
    'common.getConsultation': 'Бесплатная консультация',
  },
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.portfolio': 'Portfólio',
    'nav.about': 'Sobre',
    'nav.blog': 'Blog',
    'nav.contact': 'Contato',
    'nav.testimonials': 'Depoimentos',
    'nav.industries': 'Indústrias',
    
    // Hero
    'hero.badge': 'Agência Digital & TI Global',
    'hero.title.where': 'Onde',
    'hero.title.innovation': 'A Inovação',
    'hero.title.meets': 'Encontra o Mundo Real',
    'hero.description': 'Capacitamos empresas a inovar, otimizar e escalar com soluções digitais de ponta em 9 países.',
    'hero.feature1': 'Desenvolvimento de apps personalizados com IA avançada',
    'hero.feature2': 'Soluções de marketing digital de ponta a ponta',
    'hero.feature3': 'Soluções empresariais escaláveis mundialmente',
    'hero.cta.start': 'Iniciar Seu Projeto',
    'hero.cta.work': 'Ver Nosso Trabalho',
    'hero.scroll': 'Role para explorar',
    
    // Services
    'services.badge': 'Nossos Serviços',
    'services.title': 'Tudo que você precisa para',
    'services.title.highlight': 'Dominar o Digital',
    'services.description': 'Nossa equipe de designers, desenvolvedores e profissionais de marketing entrega soluções criativas orientadas a resultados.',
    'services.learn': 'Saiba mais',
    
    // Industries
    'industries.badge': 'Indústrias que Atendemos',
    'industries.title': 'Soluções sob medida para',
    'industries.title.highlight': 'Cada Indústria',
    'industries.explore': 'Explorar todas as indústrias',
    
    // Portfolio
    'portfolio.badge': 'Nosso Portfólio',
    'portfolio.title': 'Projetos que falam de',
    'portfolio.title.highlight': 'Resultados',
    'portfolio.description': 'Explore nossos trabalhos mais recentes e veja como ajudamos empresas a transformar sua presença digital.',
    'portfolio.viewAll': 'Ver todos os projetos',
    
    // Contact
    'contact.badge': 'Entre em Contato',
    'contact.title': 'Conecte-se com nossa',
    'contact.title.highlight': 'Equipe Global',
    'contact.description': 'Com escritórios em 9 países, estamos sempre por perto. Selecione sua região para informações de contato locais.',
    'contact.phone': 'Telefone',
    'contact.email': 'E-mail',
    'contact.address': 'Endereço',
    'contact.hours': 'Horário de funcionamento',
    'contact.hours.value': 'Seg - Sex: 9h - 18h',
    'contact.form.title': 'Enviar mensagem',
    'contact.form.name': 'Seu nome',
    'contact.form.email': 'Seu e-mail',
    'contact.form.phone': 'Número de telefone',
    'contact.form.company': 'Nome da empresa',
    'contact.form.message': 'Conte-nos sobre seu projeto...',
    'contact.form.submit': 'Enviar mensagem',
    
    // Footer
    'footer.description': 'Capacitando empresas em todo o mundo com soluções digitais inovadoras. Seu parceiro confiável para excelência em web, mobile e marketing.',
    'footer.services': 'Serviços',
    'footer.company': 'Empresa',
    'footer.legal': 'Legal',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Serviço',
    'footer.rights': 'Todos os direitos reservados.',
    
    // Common
    'common.trusted': 'Confiado por líderes da indústria',
    'common.learnMore': 'Saiba mais',
    'common.viewAll': 'Ver tudo',
    'common.startProject': 'Iniciar seu projeto',
    'common.getConsultation': 'Consultoria gratuita',
  },
  ja: {
    // Navigation
    'nav.home': 'ホーム',
    'nav.services': 'サービス',
    'nav.portfolio': 'ポートフォリオ',
    'nav.about': '会社概要',
    'nav.blog': 'ブログ',
    'nav.contact': 'お問い合わせ',
    'nav.testimonials': 'お客様の声',
    'nav.industries': '業界',
    
    // Hero
    'hero.badge': 'グローバルIT＆デジタルエージェンシー',
    'hero.title.where': 'ここで',
    'hero.title.innovation': 'イノベーション',
    'hero.title.meets': 'が現実と出会う',
    'hero.description': '9か国にわたる最先端のデジタルソリューションで、ビジネスの革新、最適化、スケーリングを支援します。',
    'hero.feature1': '高度なAI機能を備えたカスタムアプリ開発',
    'hero.feature2': 'エンドツーエンドのデジタルマーケティングソリューション',
    'hero.feature3': 'グローバルにスケーラブルなエンタープライズソリューション',
    'hero.cta.start': 'プロジェクトを開始',
    'hero.cta.work': '実績を見る',
    'hero.scroll': 'スクロールして探索',
    
    // Services
    'services.badge': 'サービス',
    'services.title': 'デジタルを',
    'services.title.highlight': '制覇するために必要なすべて',
    'services.description': 'デザイナー、開発者、マーケティング専門家のチームが、最新のトレンドとテクノロジーを活用した創造的で結果重視のソリューションを提供します。',
    'services.learn': '詳しく見る',
    
    // Industries
    'industries.badge': '対応業界',
    'industries.title': 'すべての業界に',
    'industries.title.highlight': '最適なソリューション',
    'industries.explore': 'すべての業界を見る',
    
    // Portfolio
    'portfolio.badge': 'ポートフォリオ',
    'portfolio.title': '結果が',
    'portfolio.title.highlight': '物語るプロジェクト',
    'portfolio.description': '最新の実績をご覧いただき、企業のデジタルプレゼンス変革をどのように支援してきたかをご確認ください。',
    'portfolio.viewAll': 'すべてのプロジェクトを見る',
    
    // Contact
    'contact.badge': 'お問い合わせ',
    'contact.title': 'グローバルチームと',
    'contact.title.highlight': 'つながる',
    'contact.description': '9か国にオフィスを構え、常にお近くにいます。地域を選択してローカルの連絡先情報を取得してください。',
    'contact.phone': '電話',
    'contact.email': 'メール',
    'contact.address': '住所',
    'contact.hours': '営業時間',
    'contact.hours.value': '月〜金：9:00〜18:00',
    'contact.form.title': 'メッセージを送信',
    'contact.form.name': 'お名前',
    'contact.form.email': 'メールアドレス',
    'contact.form.phone': '電話番号',
    'contact.form.company': '会社名',
    'contact.form.message': 'プロジェクトについてお聞かせください...',
    'contact.form.submit': '送信',
    
    // Footer
    'footer.description': '革新的なデジタルソリューションで世界中の企業を支援。ウェブ、モバイル、マーケティングの卓越性における信頼できるパートナー。',
    'footer.services': 'サービス',
    'footer.company': '会社',
    'footer.legal': '法的情報',
    'footer.privacy': 'プライバシーポリシー',
    'footer.terms': '利用規約',
    'footer.rights': 'All rights reserved.',
    
    // Common
    'common.trusted': '業界リーダーからの信頼',
    'common.learnMore': '詳しく見る',
    'common.viewAll': 'すべて見る',
    'common.startProject': 'プロジェクトを開始',
    'common.getConsultation': '無料相談',
  },
};

export function getTranslation(lang: Language, key: string): string {
  return translations[lang]?.[key] || translations.en[key] || key;
}
