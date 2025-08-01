
import { TranslationKeys } from '../types';

export const translations: { [key: string]: TranslationKeys } = {
  es: {
    nav: {
      services: 'Servicios',
      benefits: 'Nuestros Beneficios',
      quote: 'Cotiza tu Póliza',
      testimonials: 'Testimonios',
      callNow: 'Llámanos Ahora',
    },
    hero: {
      title: 'Tu Seguro de Auto en California, Simple y Confiable.',
      subtitle: 'Protección a tu medida con el respaldo que mereces. Obtén una cotización gratis en minutos y descubre por qué miles confían en nosotros.',
      offer: 'Descuento del 15% al cotizar en línea',
      cta: 'Cotizar Ahora Gratis',
    },
    trustBadges: {
      secure: '100% Seguro y Protegido',
      google: '4.9/5 Estrellas en Google',
      bbb: 'Calificación A+ en BBB',
    },
    benefits: {
      badge: 'Beneficios Exclusivos',
      title: 'Protección que se adapta a tu estilo de vida',
      subtitle: 'Diseñamos cada póliza con el equilibrio perfecto entre cobertura y asequibilidad.',
      card1: {
        title: 'Cobertura Total',
        description: 'Protección completa para tu vehículo con las mejores coberturas del mercado a precios inigualables.',
        features: [
          'Cobertura contra daños por colisión',
          'Protección contra robo y vandalismo',
          'Responsabilidad civil ampliada',
          'Asistencia vial las 24/7',
          'Daños a terceros'
        ]
      },
      card2: {
        title: 'Respuesta Rápida',
        description: 'Soluciones inmediatas cuando más las necesitas, con nuestro servicio de atención continua.',
        features: [
          'Cotización en solo 2 minutos',
          'Atención de emergencias 24/7',
          'Proceso de reclamación ágil',
          'Respuesta inmediata a consultas',
          'Soporte multicanales'
        ]
      },
      card3: {
        title: 'Atención Personalizada',
        description: 'Un servicio pensado en ti y en tus necesidades específicas de cobertura.',
        features: [
          'Agentes bilingües',
          'Asesoría personalizada',
          'Ajustes de cobertura flexibles',
          'Atención humanizada',
          'Seguimiento continuo'
        ]
      },
      note: '*Aplican términos y condiciones. Los beneficios pueden variar según el estado y tipo de póliza.',
    },
    trustSection: {
      title: 'La Confianza que Necesitas en el Camino',
      subtitle: 'Con licencia oficial del estado y miles de clientes satisfechos, somos tu mejor aliado para seguros de auto en California.',
      license: 'Licencia de CA',
      clients: '+10,000 Clientes',
      clientsSub: 'Satisfechos',
      experience: 'Años de Experiencia',
      experienceSub: 'Sirviendo a la comunidad',
    },
    policies: {
      title: 'Tipos de Pólizas que Ofrecemos',
      subtitle: 'Protección integral diseñada para darte tranquilidad en cada kilómetro y en cada hogar',
      subtitleBadge: 'Cobertura Completa',
      auto: {
        title: 'Seguro de Auto',
        description: 'Protección completa para tu vehículo con cobertura contra daños, robo y responsabilidad civil. Cotiza en minutos y conduce con tranquilidad.'
      },
      home: {
        title: 'Seguro de Hogar',
        description: 'Tu hogar es tu mayor inversión. Protégelo contra incendios, robos y desastres naturales con nuestra cobertura integral.'
      },
      motorcycle: {
        title: 'Seguro de Moto',
        description: 'Libertad sobre dos ruedas con la protección que mereces. Cobertura para daños, robo y asistencia en carretera.'
      },
      boat: {
        title: 'Seguro de Botes',
        description: 'Navega con confianza sabiendo que tu embarcación está protegida contra daños, responsabilidad civil y más.'
      }
    },
    quoteForm: {
      title: 'Obtén tu Cotización Personalizada',
      subtitle: 'Solo necesitas el VIN de tu vehículo.',
      steps: [
        'Completa el formulario',
        'Compara opciones',
        'Obtén tu póliza'
      ],
      vinLabel: 'Número de Identificación Vehicular (VIN)',
      vinPlaceholder: 'Ingresa los 17 caracteres',
      zipLabel: 'Código Postal (California)',
      zipPlaceholder: 'ej. 90210',
      vehicleInfo: 'Datos de tu vehículo:',
      vehicleExample: 'ej. 2022 Toyota Camry SE',
      cta: 'Ver Mi Precio',
      disclaimer: '*Aviso legal: El precio estimado es una referencia y puede variar. No es una oferta final de seguro. La tarifa final dependerá de la información completa del conductor, historial y vehículo.',
      alertMessage: '¡Gracias! En breve, uno de nuestros agentes te contactará con tu cotización personalizada.',
      benefits: {
        fastAndEasy: {
          title: 'Rápido y Fácil',
          description: 'Cotiza en menos de 2 minutos y obtén tu póliza al instante.'
        },
        mobileApp: {
          title: 'App Móvil',
          description: 'Gestiona tu póliza y reporta siniestros desde tu teléfono.'
        },
        familyProtection: {
          title: 'Protección Familiar',
          description: 'Cobertura extendida para todos los conductores de tu hogar.'
        }
      }
    },
    testimonials: {
      title: 'Lo que Dicen Nuestros Clientes',
      subtitle: 'Historias reales de clientes felices.',
      review1: '"¡El mejor servicio al cliente! Me ayudaron a encontrar la cobertura perfecta para mi presupuesto. El proceso fue rápido y súper fácil. ¡Totalmente recomendados!"',
      client1: 'Maria G. - Los Angeles, CA',
      review2: '"Pude ahorrar cientos de dólares en mi seguro de auto gracias a Intercoast. Su equipo es muy profesional y siempre están dispuestos a ayudar."',
      client2: 'Juan C. - San Diego, CA',
    },
    whyChooseUs: {
      title: '¿Por qué elegirnos?',
      points: [
        'Más de 10,000 clientes satisfechos',
        'Atención personalizada en español',
        'Proceso de reclamación sencillo'
      ]
    },
    assistanceCard: {
      title: 'Asistencia 24/7',
      description: 'Servicio de emergencia disponible las 24 horas del día.'
    },
    contact: {
      title: '¿Listo para Hablar?',
      subtitle: 'Nuestro equipo está disponible para ayudarte. ¡Contáctanos hoy!',
      callTitle: 'Llámanos',
      callText: 'Habla directamente con un agente.',
      whatsappTitle: 'WhatsApp',
      whatsappText: 'Envíanos un mensaje rápido.',
      whatsappCta: 'Cotiza en WhatsApp',
    },
    footer: {
      tagline: 'Protegiendo a la comunidad latina de California con seguros accesibles, confiables y un servicio que habla tu idioma.',
      navTitle: 'Navegación',
      navBenefits: 'Beneficios',
      navQuote: 'Cotizar',
      benefitCards: {
        totalCoverage: {
          title: 'Cobertura Total',
          description: 'Protección completa para tu vehículo en cualquier situación.'
        },
        saveUpTo: {
          title: 'Ahorra hasta un 25%',
          description: 'Descuentos especiales para nuevos clientes y conductores seguros.'
        },
        fastAndEasy: {
          title: 'Rápido y Fácil',
          description: 'Cotiza en menos de 2 minutos y obtén tu póliza al instante.'
        },
        mobileApp: {
          title: 'App Móvil',
          description: 'Gestiona tu póliza y reporta siniestros desde tu teléfono.'
        },
        familyProtection: {
          title: 'Protección Familiar',
          description: 'Cobertura extendida para todos los conductores de tu hogar.'
        }
      },
      navContact: 'Contacto',
      navPrivacy: 'Política de Privacidad',
      paymentTitle: 'Métodos de Pago Aceptados',
      leaveReview: 'Déjanos tu reseña en Google',
      contact: 'Contacto',
      address: '5863 Imperial Hwy, South Gate, CA 90280',
      phone1: '+1 (562) 381-2012',
      phone2: '+1 (424) 417-1700',
      whatsapp: 'WhatsApp: +1 (775) 675-4559',
      followUs: 'Síguenos',
      creditCards: 'Tarjetas',
      cash: 'Efectivo',
      zelle: 'Zelle',
      license: 'Licensed by California DOI #0K94627',
      bbbRating: 'Rating in Better Business Bureau',
      copyright: '© 2024 Intercoast Insurance Services. Todos los derechos reservados.',
      allRightsReserved: 'Todos los derechos reservados.',
      termsOfService: 'Términos de Servicio',
      privacyPolicy: 'Política de Privacidad',
    },
    common: {
      close: 'Cerrar',
      viewDetails: 'Ver Detalles',
    },
    carousel: {
      previous: 'Imagen anterior',
      next: 'Siguiente imagen',
    },
    policyModal: {
      includedCoverages: 'Coberturas Incluidas',
      keyBenefits: 'Beneficios Clave',
      autoDescription: 'Protección completa para tu vehículo con las mejores coberturas del mercado a precios inigualables.',
      homeDescription: 'Protege tu hogar con nuestra amplia gama de coberturas diseñadas para tu tranquilidad.',
      motorcycleDescription: 'Cobertura especializada para motocicletas que se adapta a tu estilo de vida.',
      boatDescription: 'Navega con tranquilidad con nuestra cobertura para embarcaciones.',
      auto: {
        alt1: 'Auto asegurado',
        alt2: 'Asistencia vial',
        alt3: 'Seguro en acción',
        coverages: [
          '✅ Responsabilidad civil por daños a terceros (obligatoria en California)',
          '🚘 Daños al vehículo propio por accidente',
          '🔧 Asistencia en carretera (grúa, cambio de llanta, batería)',
          '🛡️ Protección contra robo, vandalismo y desastres naturales',
          '👨‍⚕️ Gastos médicos para conductor y pasajeros',
          '🔄 Cobertura de autos alquilados y reemplazo'
        ],
        benefits: [
          'Cotización rápida',
          'Personalizable según tu presupuesto',
          'Ideal para autos nuevos o usados'
        ]
      },
      home: {
        alt1: 'Hogar protegido',
        alt2: 'Cobertura contra incendios',
        alt3: 'Seguro para tu hogar',
        coverages: [
          '🔥 Incendios, explosiones, humo',
          '🌪️ Daños por tormentas, granizo o sismos (según la región)',
          '🧯 Robo o vandalismo',
          '💧 Fugas de agua o daños por plomería',
          '📦 Bienes personales (electrodomésticos, joyas, computadoras)',
          '👷 Responsabilidad civil si alguien se lesiona en tu propiedad'
        ],
        benefits: [
          'Tranquilidad para tu inversión más importante',
          'Protección del hogar y todo lo que contiene',
          'Opciones con y sin deducible'
        ]
      },
      motorcycle: {
        alt1: 'Moto asegurada',
        alt2: 'Protección en carretera',
        alt3: 'Seguridad en dos ruedas',
        coverages: [
          '🛵 Daños a tu moto en caso de accidente o caída',
          '🚧 Daños a terceros y sus bienes',
          '🚑 Cobertura médica al conductor',
          '🛠 Asistencia en ruta y reparación',
          '🔐 Robo total o parcial'
        ],
        benefits: [
          'Protege tus recorridos diarios y de fin de semana',
          'Ahorro en reparaciones y responsabilidad legal',
          'Ideal para motos deportivas o de uso personal'
        ]
      },
      boat: {
        alt1: 'Embarcación asegurada',
        alt2: 'Navegación segura',
        alt3: 'Protección náutica',
        coverages: [
          '⚓ Daños físicos al bote (colisión, varada, incendio)',
          '💼 Responsabilidad civil por lesiones a terceros',
          '🧭 Robo, vandalismo o hundimiento',
          '🛠 Remolque de emergencia',
          '⚠ Daños en muelles, rampas o durante transporte'
        ],
        benefits: [
          'Navega con seguridad y confianza',
          'Cobertura tanto en el agua como fuera de ella',
          'Ideal para embarcaciones recreativas, jetskis, y lanchas'
        ]
      },
    },
  },
  en: {
    nav: {
      services: 'Services',
      benefits: 'Our Benefits',
      quote: 'Get a Quote',
      testimonials: 'Testimonials',
      callNow: 'Call Us Now',
    },
    hero: {
      title: 'Your California Auto Insurance, Simple and Reliable.',
      subtitle: 'Protection tailored to you with the support you deserve. Get a free quote in minutes and discover why thousands trust us.',
      offer: '15% discount when you quote online',
      cta: 'Get Free Quote Now',
    },
    trustBadges: {
      secure: '100% Safe & Secure',
      google: '4.9/5 Stars on Google',
      bbb: 'A+ Rating on BBB',
    },
    benefits: {
      badge: 'Exclusive Benefits',
      title: 'Protection Tailored to Your Lifestyle',
      subtitle: 'We design each policy with the perfect balance of coverage and affordability.',
      card1: {
        title: 'Complete Coverage',
        description: 'Full protection for your vehicle with the best coverage options at unbeatable prices.',
        features: [
          'Collision damage coverage',
          'Theft and vandalism protection',
          'Extended liability coverage',
          '24/7 roadside assistance',
          'Third-party damage protection'
        ]
      },
      card2: {
        title: 'Fast Response',
        description: 'Immediate solutions when you need them most, with our continuous service.',
        features: [
          '2-minute quote process',
          '24/7 emergency assistance',
          'Streamlined claims process',
          'Immediate response to inquiries',
          'Multi-channel support'
        ]
      },
      card3: {
        title: 'Personalized Service',
        description: 'Service designed around you and your specific coverage needs.',
        features: [
          'Bilingual agents',
          'Personalized advice',
          'Flexible coverage adjustments',
          'Humanized attention',
          'Continuous follow-up'
        ]
      },
      note: '*Terms and conditions apply. Benefits may vary by state and policy type.',
    },
    trustSection: {
      title: 'The Trust You Need on the Road',
      subtitle: 'State-licensed and with thousands of satisfied customers, we are your best ally for car insurance in California.',
      license: 'CA License',
      clients: '+10,000 Clients',
      clientsSub: 'Satisfied',
      experience: 'Years of Experience',
      experienceSub: 'Serving the community',
    },
    policies: {
      title: 'Insurance Policies We Offer',
      subtitle: 'Comprehensive protection designed to give you peace of mind on every mile and in every home',
      subtitleBadge: 'Full Coverage',
      auto: {
        title: 'Auto Insurance',
        description: 'Complete protection for your vehicle with coverage for damages, theft, and liability. Get a quote in minutes and drive with peace of mind.'
      },
      home: {
        title: 'Home Insurance',
        description: 'Your home is your biggest investment. Protect it against fires, theft, and natural disasters with our comprehensive coverage.'
      },
      motorcycle: {
        title: 'Motorcycle Insurance',
        description: 'Freedom on two wheels with the protection you deserve. Coverage for damages, theft, and roadside assistance.'
      },
      boat: {
        title: 'Boat Insurance',
        description: 'Sail with confidence knowing your vessel is protected against damages, liability, and more.'
      }
    },
    quoteForm: {
      title: 'Get Your Personalized Quote',
      subtitle: "You just need your vehicle's VIN.",
      steps: [
        'Complete the form',
        'Compare options',
        'Get your policy'
      ],
      vinLabel: 'Vehicle Identification Number (VIN)',
      vinPlaceholder: 'Enter the 17 characters',
      zipLabel: 'Zip Code (California)',
      zipPlaceholder: 'e.g. 90210',
      vehicleInfo: "Your vehicle's data:",
      vehicleExample: 'e.g. 2022 Toyota Camry SE',
      cta: 'See My Price',
      disclaimer: '*Disclaimer: The estimated price is a reference and may vary. It is not a final insurance offer. The final rate will depend on the complete driver, history, and vehicle information.',
      alertMessage: 'Thank you! One of our agents will contact you shortly with your personalized quote.',
      benefits: {
        fastAndEasy: {
          title: 'Fast and Easy',
          description: 'Get a quote in less than 2 minutes and receive your policy instantly.'
        },
        mobileApp: {
          title: 'Mobile App',
          description: 'Manage your policy and file claims right from your phone.'
        },
        familyProtection: {
          title: 'Family Protection',
          description: 'Extended coverage for all drivers in your household.'
        }
      }
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Real stories from happy clients.',
      review1: '"The best customer service! They helped me find the perfect coverage for my budget. The process was fast and super easy. Totally recommended!"',
      client1: 'Maria G. - Los Angeles, CA',
      review2: '"I was able to save hundreds of dollars on my car insurance thanks to Intercoast. Their team is very professional and always willing to help."',
      client2: 'Juan C. - San Diego, CA',
    },
    whyChooseUs: {
      title: 'Why Choose Us?',
      points: [
        'Over 10,000 satisfied customers',
        'Personalized service in Spanish',
        'Simple claims process'
      ]
    },
    assistanceCard: {
      title: '24/7 Assistance',
      description: 'Emergency service available 24 hours a day.'
    },
    contact: {
      title: 'Ready to Talk?',
      subtitle: 'Our team is available to help you. Contact us today!',
      callTitle: 'Call Us',
      callText: 'Speak directly with an agent.',
      whatsappTitle: 'WhatsApp',
      whatsappText: 'Send us a quick message.',
      whatsappCta: 'Quote on WhatsApp',
    },
    footer: {
      tagline: 'Protecting the Latino community in California with accessible, reliable insurance and service that speaks your language.',
      navTitle: 'Navigation',
      navBenefits: 'Benefits',
      navQuote: 'Get a Quote',
      benefitCards: {
        totalCoverage: {
          title: 'Total Coverage',
          description: 'Complete protection for your vehicle in any situation.'
        },
        saveUpTo: {
          title: 'Save up to 25%',
          description: 'Special discounts for new customers and safe drivers.'
        },
        fastAndEasy: {
          title: 'Fast and Easy',
          description: 'Get a quote in less than 2 minutes and receive your policy instantly.'
        },
        mobileApp: {
          title: 'Mobile App',
          description: 'Manage your policy and file claims right from your phone.'
        },
        familyProtection: {
          title: 'Family Protection',
          description: 'Extended coverage for all drivers in your household.'
        }
      },
      navContact: 'Contact',
      navPrivacy: 'Privacy Policy',
      paymentTitle: 'Accepted Payment Methods',
      leaveReview: 'Leave us a review on Google',
      contact: 'Contact',
      address: '5863 Imperial Hwy, South Gate, CA 90280',
      phone1: '+1 (562) 381-2012',
      phone2: '+1 (424) 417-1700',
      whatsapp: 'WhatsApp: +1 (775) 675-4559',
      followUs: 'Follow Us',
      creditCards: 'Credit Cards',
      cash: 'Cash',
      zelle: 'Zelle',
      license: 'Licensed by California DOI #0K94627',
      bbbRating: 'Rating in Better Business Bureau',
      copyright: ' 2024 Intercoast Insurance Services. All rights reserved.',
      allRightsReserved: 'All rights reserved.',
      termsOfService: 'Terms of Service',
      privacyPolicy: 'Privacy Policy',
    },
    common: {
      close: 'Close',
      viewDetails: 'View Details',
    },
    carousel: {
      previous: 'Previous image',
      next: 'Next image',
    },
    policyModal: {
      includedCoverages: 'Included Coverages',
      keyBenefits: 'Key Benefits',
      autoDescription: 'Complete protection for your vehicle with the best coverage at unbeatable prices.',
      homeDescription: 'Protect your home with our wide range of coverages designed for your peace of mind.',
      motorcycleDescription: 'Specialized coverage for motorcycles that adapts to your lifestyle.',
      boatDescription: 'Sail with peace of mind with our boat coverage.',
      auto: {
        alt1: 'Insured car',
        alt2: 'Roadside assistance',
        alt3: 'Insurance in action',
        coverages: [
          '✅ Civil liability for third-party damages (mandatory in California)',
          '🚘 Damage to your own vehicle in an accident',
          '🔧 Roadside assistance (towing, tire change, battery)',
          '🛡️ Protection against theft, vandalism, and natural disasters',
          '👨‍⚕️ Medical expenses for driver and passengers',
          '🔄 Rental car and replacement coverage'
        ],
        benefits: [
          'Quick quote',
          'Customizable to your budget',
          'Ideal for new or used cars'
        ]
      },
      home: {
        alt1: 'Protected home',
        alt2: 'Fire coverage',
        alt3: 'Insurance for your home',
        coverages: [
          '🔥 Fires, explosions, smoke',
          '🌪️ Storm, hail, or earthquake damage (depending on region)',
          '🧯 Theft or vandalism',
          '💧 Water leaks or plumbing damage',
          '📦 Personal property (appliances, jewelry, computers)',
          '👷 Liability if someone is injured on your property'
        ],
        benefits: [
          'Peace of mind for your most important investment',
          'Protection for your home and everything in it',
          'Options with and without deductibles'
        ]
      },
      motorcycle: {
        alt1: 'Insured motorcycle',
        alt2: 'Road protection',
        alt3: 'Safety on two wheels',
        coverages: [
          '🛵 Damage to your motorcycle in case of accident or fall',
          '🚧 Third-party liability and property damage',
          '🚑 Medical coverage for the rider',
          '🛠 Roadside assistance and repairs',
          '🔐 Total or partial theft coverage'
        ],
        benefits: [
          'Protection for your daily commutes and weekend rides',
          'Savings on repairs and legal liability',
          'Ideal for sport bikes and personal use motorcycles'
        ]
      },
      boat: {
        alt1: 'Insured boat',
        alt2: 'Safe navigation',
        alt3: 'Nautical protection',
        coverages: [
          '⚓ Physical damage to the boat (collision, stranding, fire)',
          '💼 Liability for injuries to third parties',
          '🧭 Theft, vandalism, or sinking',
          '🛠 Emergency towing',
          '⚠ Damage to docks, ramps, or during transport'
        ],
        benefits: [
          'Navigate with safety and confidence',
          'Coverage both on and off the water',
          'Ideal for recreational boats, jetskis, and small craft'
        ]
      },
    },
  },
};
