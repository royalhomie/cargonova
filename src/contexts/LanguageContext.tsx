import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<string, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.tracking': 'Tracking',
    'nav.booking': 'Booking',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.careers': 'Careers',
    'nav.press': 'Press',
    'nav.faq': 'FAQ',
    'nav.tools': 'Tools',
    'nav.terms': 'Terms',
    
    // Common
    'common.bookShipment': 'Book Shipment',
    'common.trackPackage': 'Track Your Package',
    'common.contactUs': 'Contact Us',
    'common.learnMore': 'Learn More',
    'common.getQuote': 'Get a Quote',
    
    // Hero Section
    'hero.title': 'Professional Logistics Solutions for Your Business',
    'hero.subtitle': 'Fast, reliable, and secure shipping services worldwide. Track your packages in real-time and experience excellence in every delivery.',
    
    // Services
    'services.title': 'Our Logistics Services',
    'services.subtitle': 'Comprehensive solutions tailored to meet all your shipping and logistics needs',
    
    // Tracking
    'tracking.title': 'Track Your Package',
    'tracking.subtitle': 'Real-time updates on your shipment status',
    'tracking.placeholder': 'Enter tracking number (e.g., ABC123456789)',
    'tracking.button': 'Track',
    
    // Booking
    'booking.title': 'Book a Shipment',
    'booking.subtitle': 'Easy online booking in minutes',
    
    // About
    'about.title': 'About CargoNova',
    'about.subtitle': 'Delivering excellence in logistics for over a decade',
    'about.mission': 'Our Mission',
    'about.missionDescription': 'To provide innovative logistics solutions that empower businesses to reach their full potential through reliable, efficient, and sustainable delivery services.',
    'about.vision': 'Our Vision',
    'about.visionDescription': 'To be the global leader in logistics excellence, setting industry standards for innovation, sustainability, and customer satisfaction.',
    'about.values': 'Our Values',
    'about.valuesDescription': 'Integrity, innovation, and customer-centricity guide everything we do. We believe in building lasting relationships through trust and exceptional service.',
    'about.commitment': 'Our Commitment',
    'about.commitmentDescription': 'Committed to excellence in every delivery, we continuously invest in technology and our people to exceed customer expectations.',
    'about.team': 'Meet Our Team',
    'about.teamDescription': 'Passionate professionals dedicated to delivering excellence',
    'about.years': '10+',
    'about.yearsLabel': 'Years of Excellence',
    'about.clients': '50K+',
    'about.clientsLabel': 'Happy Clients',
    'about.countries': '200+',
    'about.countriesLabel': 'Countries Served',
    'about.deliveries': '500K+',
    'about.deliveriesLabel': 'Deliveries Made',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Have questions? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
    'contact.emailTitle': 'Email Us',
    'contact.emailContent': 'info@cargonova.com',
    'contact.phoneTitle': 'Call Us',
    'contact.phoneContent': '+1(681) 5286780',
    'contact.addressTitle': 'Visit Us',
    'contact.addressContent': '123 Logistics Ave, New York, NY 10001',
    'contact.formTitle': 'Send us a Message',
    'contact.successMessage': 'Thank you! Your message has been sent successfully.',
    'contact.nameLabel': 'Full Name',
    'contact.namePlaceholder': 'John Doe',
    'contact.emailLabel': 'Email Address',
    'contact.emailPlaceholder': 'john@example.com',
    'contact.subjectLabel': 'Subject',
    'contact.subjectPlaceholder': 'How can we help?',
    'contact.messageLabel': 'Message',
    'contact.messagePlaceholder': 'Tell us more about your inquiry...',
    'contact.sending': 'Sending...',
    'contact.sendMessage': 'Send Message',
    
    // Footer
    'footer.copyright': '© 2025 CargoNova Logistics. All rights reserved.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.resources': 'Resources',
    'footer.company': 'Company',
    'footer.followUs': 'Follow Us',
    
    // Careers
    'careers.title': 'Join the CargoNova Team',
    'careers.subtitle': 'Build your career with the leading innovators in global logistics',
    'careers.benefitsTitle': 'Why Work With Us',
    'careers.benefitsSubtitle': 'We invest in our people because they\'re our greatest asset',
    'careers.healthTitle': 'Health & Wellness',
    'careers.healthDescription': 'Comprehensive medical, dental, and vision coverage for you and your family',
    'careers.growthTitle': 'Career Growth',
    'careers.growthDescription': 'Professional development programs and clear advancement opportunities',
    'careers.payTitle': 'Competitive Pay',
    'careers.payDescription': 'Market-leading salaries with performance bonuses and equity options',
    'careers.balanceTitle': 'Work-Life Balance',
    'careers.balanceDescription': 'Flexible schedules, remote work options, and generous PTO policy',
    'careers.positionsTitle': 'Open Positions',
    'careers.positionsSubtitle': 'Find your next opportunity and grow with us',
    'careers.applyButton': 'Apply Now',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.tracking': 'Seguimiento',
    'nav.booking': 'Reserva',
    'nav.about': 'Sobre Nosotros',
    'nav.contact': 'Contacto',
    'nav.careers': 'Carreras',
    'nav.press': 'Prensa',
    'nav.faq': 'Preguntas Frecuentes',
    'nav.tools': 'Herramientas',
    'nav.terms': 'Términos',
    
    // Common
    'common.bookShipment': 'Reservar Envío',
    'common.trackPackage': 'Rastrear Paquete',
    'common.contactUs': 'Contáctenos',
    'common.learnMore': 'Más Información',
    'common.getQuote': 'Obtener Cotización',
    
    // Hero Section
    'hero.title': 'Soluciones Logísticas Profesionales para Su Negocio',
    'hero.subtitle': 'Servicios de envío rápidos, confiables y seguros en todo el mundo. Rastree sus paquetes en tiempo real y experimente la excelencia en cada entrega.',
    
    // Services
    'services.title': 'Nuestros Servicios Logísticos',
    'services.subtitle': 'Soluciones integrales adaptadas a todas sus necesidades de envío y logística',
    
    // Tracking
    'tracking.title': 'Rastrear Su Paquete',
    'tracking.subtitle': 'Actualizaciones en tiempo real del estado de su envío',
    'tracking.placeholder': 'Ingrese el número de seguimiento (ej., ABC123456789)',
    'tracking.button': 'Rastrear',
    
    // Booking
    'booking.title': 'Reservar un Envío',
    'booking.subtitle': 'Reserva en línea fácil en minutos',
    
    // About
    'about.title': 'Sobre CargoNova',
    'about.subtitle': 'Brindando excelencia en logística durante más de una década',
    'about.mission': 'Nuestra Misión',
    'about.missionDescription': 'Proporcionar soluciones logísticas innovadoras que permitan a las empresas alcanzar su máximo potencial a través de servicios de entrega confiables, eficientes y sostenibles.',
    'about.vision': 'Nuestra Visión',
    'about.visionDescription': 'Ser el líder global en excelencia logística, estableciendo estándares de la industria para la innovación, la sostenibilidad y la satisfacción del cliente.',
    'about.values': 'Nuestros Valores',
    'about.valuesDescription': 'La integridad, la innovación y la orientación al cliente guían todo lo que hacemos. Creemos en construir relaciones duraderas a través de la confianza y el servicio excepcional.',
    'about.commitment': 'Nuestro Compromiso',
    'about.commitmentDescription': 'Comprometidos con la excelencia en cada entrega, invertimos continuamente en tecnología y en nuestro personal para superar las expectativas del cliente.',
    'about.team': 'Conozca a Nuestro Equipo',
    'about.teamDescription': 'Profesionales apasionados dedicados a brindar excelencia',
    'about.years': '10+',
    'about.yearsLabel': 'Años de Excelencia',
    'about.clients': '50K+',
    'about.clientsLabel': 'Clientes Satisfechos',
    'about.countries': '200+',
    'about.countriesLabel': 'Países Atendidos',
    'about.deliveries': '500K+',
    'about.deliveriesLabel': 'Entregas Realizadas',
    
    // Contact
    'contact.title': 'Póngase en Contacto',
    'contact.subtitle': '¿Tiene preguntas? Nos encantaría saber de usted. Envíenos un mensaje y responderemos lo antes posible.',
    'contact.emailTitle': 'Envíenos un Correo',
    'contact.emailContent': 'info@cargonova.com',
    'contact.phoneTitle': 'Llámenos',
    'contact.phoneContent': '+1(681) 5286780',
    'contact.addressTitle': 'Visítenos',
    'contact.addressContent': '123 Avenida Logística, Nueva York, NY 10001',
    'contact.formTitle': 'Envíenos un Mensaje',
    'contact.successMessage': '¡Gracias! Su mensaje ha sido enviado exitosamente.',
    'contact.nameLabel': 'Nombre Completo',
    'contact.namePlaceholder': 'Juan Pérez',
    'contact.emailLabel': 'Dirección de Correo',
    'contact.emailPlaceholder': 'juan@ejemplo.com',
    'contact.subjectLabel': 'Asunto',
    'contact.subjectPlaceholder': '¿En qué podemos ayudarle?',
    'contact.messageLabel': 'Mensaje',
    'contact.messagePlaceholder': 'Cuéntenos más sobre su consulta...',
    'contact.sending': 'Enviando...',
    'contact.sendMessage': 'Enviar Mensaje',
    
    // Footer
    'footer.copyright': '© 2025 CargoNova Logística. Todos los derechos reservados.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.services': 'Servicios',
    'footer.resources': 'Recursos',
    'footer.company': 'Empresa',
    'footer.followUs': 'Síganos',
    
    // Careers
    'careers.title': 'Únete al Equipo de CargoNova',
    'careers.subtitle': 'Construye tu carrera con los líderes innovadores en logística global',
    'careers.benefitsTitle': '¿Por Qué Trabajar Con Nosotros?',
    'careers.benefitsSubtitle': 'Invertimos en nuestra gente porque son nuestro mayor activo',
    'careers.healthTitle': 'Salud y Bienestar',
    'careers.healthDescription': 'Cobertura médica, dental y visual completa para ti y tu familia',
    'careers.growthTitle': 'Crecimiento Profesional',
    'careers.growthDescription': 'Programas de desarrollo profesional y oportunidades claras de avance',
    'careers.payTitle': 'Pago Competitivo',
    'careers.payDescription': 'Salarios líderes en el mercado con bonificaciones por desempeño y opciones de acciones',
    'careers.balanceTitle': 'Equilibrio Vida-Trabajo',
    'careers.balanceDescription': 'Horarios flexibles, opciones de trabajo remoto y una política generosa de tiempo libre',
    'careers.positionsTitle': 'Posiciones Abiertas',
    'careers.positionsSubtitle': 'Encuentra tu próxima oportunidad y crece con nosotros',
    'careers.applyButton': 'Aplicar Ahora',
    
    // Booking
    'booking.seoTitle': 'Reservar un Envío - Reserva Online Fácil | CargoNova',
    'booking.seoDescription': 'Reserva tu envío en línea en minutos. Obtén cotizaciones instantáneas, elige el nivel de servicio y programa la recogida. Envío rápido, seguro y confiable con CargoNova.',
    'booking.express': 'Exprés',
    'booking.expressTime': '1-2 días',
    'booking.standard': 'Estándar',
    'booking.standardTime': '3-5 días',
    'booking.economy': 'Económico',
    'booking.economyTime': '7-14 días',
    'booking.document': 'Documento',
    'booking.package': 'Paquete',
    'booking.pallet': 'Palet',
    'booking.serviceType': 'Tipo de Servicio',
    'booking.route': 'Ruta',
    'booking.packageDetails': 'Detalles del Paquete',
    'booking.contactInfo': 'Información de Contacto',
    'booking.reviewBook': 'Revisar y Reservar',
    'booking.confirmedTitle': '¡Reserva Confirmada!',
    'booking.confirmedMessage': 'Tu envío ha sido reservado exitosamente. Te enviaremos un correo de confirmación en breve.',
    'booking.bookingNumber': 'Número de Reserva',
    'booking.trackShipment': 'Rastrear Envío',
    'booking.newBooking': 'Nueva Reserva',
    'booking.chooseService': 'Elige Tu Servicio',
    'booking.serviceLevel': 'Nivel de Servicio',
    'booking.shipmentType': 'Tipo de Envío',
    'booking.shippingRoute': 'Ruta de Envío',
    'booking.origin': 'Origen',
    'booking.country': 'País',
    'booking.countryPlaceholder': 'ej., Estados Unidos',
    'booking.city': 'Ciudad',
    'booking.cityPlaceholder': 'ej., Nueva York',
    'booking.zipCode': 'Código Postal',
    'booking.zipPlaceholder': 'ej., 10001',
    'booking.destination': 'Destino',
    'booking.weight': 'Peso',
    'booking.weightPlaceholder': 'Ingresa el peso',
    'booking.kilograms': 'Kilogramos (kg)',
    'booking.pounds': 'Libras (lbs)',
    'booking.dimensions': 'Dimensiones',
    'booking.length': 'Largo',
    'booking.width': 'Ancho',
    'booking.height': 'Alto',
    'booking.inches': 'pulgadas',
    'booking.packageDescription': 'Descripción del Paquete',
    'booking.descriptionPlaceholder': 'Describe el contenido de tu paquete',
    'booking.declaredValue': 'Valor Declarado (USD)',
    'booking.valuePlaceholder': 'Ingresa el valor del paquete',
    'booking.addInsurance': 'Agregar seguro (2% del valor declarado)',
    'booking.contactInformation': 'Información de Contacto',
    'booking.senderDetails': 'Detalles del Remitente',
    'booking.fullName': 'Nombre Completo',
    'booking.namePlaceholder': 'Juan Pérez',
    'booking.email': 'Correo Electrónico',
    'booking.emailPlaceholder': 'juan@ejemplo.com',
    'booking.phone': 'Teléfono',
    'booking.phonePlaceholder': '+1 234 567 890',
    'booking.address': 'Dirección',
    'booking.addressPlaceholder': '123 Calle Principal',
    'booking.receiverDetails': 'Detalles del Destinatario',
    'booking.reviewYourBooking': 'Revisa Tu Reserva',
    'booking.bookingSummary': 'Resumen de la Reserva',
    'booking.packageValue': 'Valor del Paquete',
    'booking.insurance': 'Seguro',
    'booking.totalCost': 'Costo Total',
    'booking.preferredPickupDate': 'Fecha Preferida de Recogida',
    'booking.specialInstructions': 'Instrucciones Especiales (Opcional)',
    'booking.instructionsPlaceholder': 'Cualquier requisito especial de manejo o instrucciones de entrega',
    'booking.agreeToTerms': 'Acepto los',
    'booking.termsOfService': 'Términos de Servicio',
    'booking.and': 'y reconozco que he leído la',
    'booking.privacyPolicy': 'Política de Privacidad',
    'booking.previous': 'Anterior',
    'booking.next': 'Siguiente',
    'booking.confirmBooking': 'Confirmar Reserva',
  },
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.tracking': 'Rastreamento',
    'nav.booking': 'Reserva',
    'nav.about': 'Sobre Nós',
    'nav.contact': 'Contato',
    'nav.careers': 'Carreiras',
    'nav.press': 'Imprensa',
    'nav.faq': 'Perguntas Frequentes',
    'nav.tools': 'Ferramentas',
    'nav.terms': 'Termos',
    
    // Common
    'common.bookShipment': 'Reservar Envio',
    'common.trackPackage': 'Rastrear Pacote',
    'common.contactUs': 'Contate-Nos',
    'common.learnMore': 'Saiba Mais',
    'common.getQuote': 'Obter Cotação',
    
    // Hero Section
    'hero.title': 'Soluções Logísticas Profissionais para o Seu Negócio',
    'hero.subtitle': 'Serviços de envio rápidos, confiáveis e seguros em todo o mundo. Rastreie seus pacotes em tempo real e experimente a excelência em cada entrega.',
    
    // Services
    'services.title': 'Nossos Serviços Logísticos',
    'services.subtitle': 'Soluções abrangentes adaptadas para atender todas as suas necessidades de envio e logística',
    
    // Tracking
    'tracking.title': 'Rastrear Seu Pacote',
    'tracking.subtitle': 'Atualizações em tempo real sobre o status da sua remessa',
    'tracking.placeholder': 'Digite o número de rastreamento (ex., ABC123456789)',
    'tracking.button': 'Rastrear',
    
    // Booking
    'booking.title': 'Reservar um Envio',
    'booking.subtitle': 'Reserva online fácil em minutos',
    
    // About
    'about.title': 'Sobre a CargoNova',
    'about.subtitle': 'Entregando excelência em logística por mais de uma década',
    'about.mission': 'Nossa Missão',
    'about.missionDescription': 'Fornecer soluções logísticas inovadoras que capacitem as empresas a alcançar seu pleno potencial por meio de serviços de entrega confiáveis, eficientes e sustentáveis.',
    'about.vision': 'Nossa Visão',
    'about.visionDescription': 'Ser o líder global em excelência logística, estabelecendo padrões da indústria para inovação, sustentabilidade e satisfação do cliente.',
    'about.values': 'Nossos Valores',
    'about.valuesDescription': 'Integridade, inovação e foco no cliente orientam tudo o que fazemos. Acreditamos em construir relacionamentos duradouros através da confiança e do serviço excepcional.',
    'about.commitment': 'Nosso Compromisso',
    'about.commitmentDescription': 'Comprometidos com a excelência em cada entrega, investimos continuamente em tecnologia e em nossas pessoas para superar as expectativas dos clientes.',
    'about.team': 'Conheça Nossa Equipe',
    'about.teamDescription': 'Profissionais apaixonados dedicados a entregar excelência',
    'about.years': '10+',
    'about.yearsLabel': 'Anos de Excelência',
    'about.clients': '50K+',
    'about.clientsLabel': 'Clientes Satisfeitos',
    'about.countries': '200+',
    'about.countriesLabel': 'Países Atendidos',
    'about.deliveries': '500K+',
    'about.deliveriesLabel': 'Entregas Realizadas',
    
    // Contact
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Tem perguntas? Adoraríamos ouvir de você. Envie-nos uma mensagem e responderemos o mais breve possível.',
    'contact.emailTitle': 'Envie-nos um E-mail',
    'contact.emailContent': 'info@cargonova.com',
    'contact.phoneTitle': 'Ligue para Nós',
    'contact.phoneContent': '+1(681) 5286780',
    'contact.addressTitle': 'Visite-nos',
    'contact.addressContent': '123 Avenida Logística, Nova York, NY 10001',
    'contact.formTitle': 'Envie-nos uma Mensagem',
    'contact.successMessage': 'Obrigado! Sua mensagem foi enviada com sucesso.',
    'contact.nameLabel': 'Nome Completo',
    'contact.namePlaceholder': 'João Silva',
    'contact.emailLabel': 'Endereço de E-mail',
    'contact.emailPlaceholder': 'joao@exemplo.com',
    'contact.subjectLabel': 'Assunto',
    'contact.subjectPlaceholder': 'Como podemos ajudar?',
    'contact.messageLabel': 'Mensagem',
    'contact.messagePlaceholder': 'Conte-nos mais sobre sua consulta...',
    'contact.sending': 'Enviando...',
    'contact.sendMessage': 'Enviar Mensagem',
    
    // Footer
    'footer.copyright': '© 2025 CargoNova Logística. Todos os direitos reservados.',
    'footer.quickLinks': 'Links Rápidos',
    'footer.services': 'Serviços',
    'footer.resources': 'Recursos',
    'footer.company': 'Empresa',
    'footer.followUs': 'Siga-Nos',
    
    // Careers
    'careers.title': 'Junte-se à Equipe da CargoNova',
    'careers.subtitle': 'Construa sua carreira com os líderes inovadores em logística global',
    'careers.benefitsTitle': 'Por Que Trabalhar Conosco',
    'careers.benefitsSubtitle': 'Investimos em nossas pessoas porque elas são nosso maior ativo',
    'careers.healthTitle': 'Saúde e Bem-Estar',
    'careers.healthDescription': 'Cobertura médica, dental e visual abrangente para você e sua família',
    'careers.growthTitle': 'Crescimento Profissional',
    'careers.growthDescription': 'Programas de desenvolvimento profissional e oportunidades claras de progressão',
    'careers.payTitle': 'Remuneração Competitiva',
    'careers.payDescription': 'Salários líderes no mercado com bônus de desempenho e opções de ações',
    'careers.balanceTitle': 'Equilíbrio Vida-Trabalho',
    'careers.balanceDescription': 'Horários flexíveis, opções de trabalho remoto e política generosa de férias',
    'careers.positionsTitle': 'Vagas Abertas',
    'careers.positionsSubtitle': 'Encontre sua próxima oportunidade e cresça conosco',
    'careers.applyButton': 'Candidatar-se Agora',
    
    // Booking
    'booking.seoTitle': 'Reservar um Envio - Reserva Online Fácil | CargoNova',
    'booking.seoDescription': 'Reserve seu envio online em minutos. Obtenha cotações instantâneas, escolha o nível de serviço e agende a coleta. Envio rápido, seguro e confiável com a CargoNova.',
    'booking.express': 'Expresso',
    'booking.expressTime': '1-2 dias',
    'booking.standard': 'Padrão',
    'booking.standardTime': '3-5 dias',
    'booking.economy': 'Econômico',
    'booking.economyTime': '7-14 dias',
    'booking.document': 'Documento',
    'booking.package': 'Pacote',
    'booking.pallet': 'Palete',
    'booking.serviceType': 'Tipo de Serviço',
    'booking.route': 'Rota',
    'booking.packageDetails': 'Detalhes do Pacote',
    'booking.contactInfo': 'Informações de Contato',
    'booking.reviewBook': 'Revisar e Reservar',
    'booking.confirmedTitle': 'Reserva Confirmada!',
    'booking.confirmedMessage': 'Seu envio foi reservado com sucesso. Enviaremos um e-mail de confirmação em breve.',
    'booking.bookingNumber': 'Número da Reserva',
    'booking.trackShipment': 'Rastrear Envio',
    'booking.newBooking': 'Nova Reserva',
    'booking.chooseService': 'Escolha Seu Serviço',
    'booking.serviceLevel': 'Nível de Serviço',
    'booking.shipmentType': 'Tipo de Envio',
    'booking.shippingRoute': 'Rota de Envio',
    'booking.origin': 'Origem',
    'booking.country': 'País',
    'booking.countryPlaceholder': 'ex., Estados Unidos',
    'booking.city': 'Cidade',
    'booking.cityPlaceholder': 'ex., Nova York',
    'booking.zipCode': 'CEP',
    'booking.zipPlaceholder': 'ex., 10001',
    'booking.destination': 'Destino',
    'booking.weight': 'Peso',
    'booking.weightPlaceholder': 'Digite o peso',
    'booking.kilograms': 'Quilogramas (kg)',
    'booking.pounds': 'Libras (lbs)',
    'booking.dimensions': 'Dimensões',
    'booking.length': 'Comprimento',
    'booking.width': 'Largura',
    'booking.height': 'Altura',
    'booking.inches': 'polegadas',
    'booking.packageDescription': 'Descrição do Pacote',
    'booking.descriptionPlaceholder': 'Descreva o conteúdo do seu pacote',
    'booking.declaredValue': 'Valor Declarado (USD)',
    'booking.valuePlaceholder': 'Digite o valor do pacote',
    'booking.addInsurance': 'Adicionar seguro (2% do valor declarado)',
    'booking.contactInformation': 'Informações de Contato',
    'booking.senderDetails': 'Detalhes do Remetente',
    'booking.fullName': 'Nome Completo',
    'booking.namePlaceholder': 'João Silva',
    'booking.email': 'E-mail',
    'booking.emailPlaceholder': 'joao@exemplo.com',
    'booking.phone': 'Telefone',
    'booking.phonePlaceholder': '+1 234 567 890',
    'booking.address': 'Endereço',
    'booking.addressPlaceholder': '123 Rua Principal',
    'booking.receiverDetails': 'Detalhes do Destinatário',
    'booking.reviewYourBooking': 'Revise Sua Reserva',
    'booking.bookingSummary': 'Resumo da Reserva',
    'booking.packageValue': 'Valor do Pacote',
    'booking.insurance': 'Seguro',
    'booking.totalCost': 'Custo Total',
    'booking.preferredPickupDate': 'Data Preferida para Coleta',
    'booking.specialInstructions': 'Instruções Especiais (Opcional)',
    'booking.instructionsPlaceholder': 'Quaisquer requisitos especiais de manuseio ou instruções de entrega',
    'booking.agreeToTerms': 'Concordo com os',
    'booking.termsOfService': 'Termos de Serviço',
    'booking.and': 'e reconheço que li a',
    'booking.privacyPolicy': 'Política de Privacidade',
    'booking.previous': 'Anterior',
    'booking.next': 'Próximo',
    'booking.confirmBooking': 'Confirmar Reserva'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>('en');

  useEffect(() => {
    // Check for saved language preference
    const savedLang = localStorage.getItem('language');
    if (savedLang && (savedLang === 'en' || savedLang === 'es' || savedLang === 'pt')) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    // Save language preference
    localStorage.setItem('language', language);
    
    // Update document direction and language
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};