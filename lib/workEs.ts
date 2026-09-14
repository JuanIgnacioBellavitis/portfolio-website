import type { CaseStudy } from "./work";

export const caseStudiesEs: readonly CaseStudy[] = [
  {
    slug: "intramed",
    company: "Intramed",
    title:
      "Modernización de una Plataforma de Salud con Frontend Modular y Servicios Orientados a Eventos",
    subtitle: "Sistemas distribuidos · React · NestJS · Kafka · AWS",
    cardTags: ["React", "NestJS", "Apache Kafka", "Redis", "AWS"],
    cardDescription:
      "Contribución a la evolución de una de las principales plataformas de salud de América Latina mediante arquitectura de frontend modular y servicios backend desplegables de forma independiente.",
    overview:
      "Intramed opera una gran plataforma digital para profesionales de la salud en toda América Latina. El trabajo implicó modernizar partes de la plataforma — reduciendo el acoplamiento entre módulos de frontend y entre servicios de backend — manteniendo el sistema operativo para una gran audiencia profesional y múltiples equipos contribuyentes.",
    businessProblem:
      "La plataforma necesitaba evolucionar de forma continua sin requerir grandes cambios transversales cada vez que se introducía una nueva capacidad de producto. Diferentes áreas del producto debían ser mantenibles de forma independiente, y los servicios de backend debían soportar nuevos flujos de trabajo sin acoplarse estrechamente entre sí. También había un fuerte foco en el rendimiento y la visibilidad, dado que la plataforma sirve contenido a una gran audiencia profesional.",
    constraints: [
      "Un ecosistema de múltiples equipos: los cambios debían introducirse de forma incremental sin interrumpir la funcionalidad en producción.",
      "Se requerían límites de dominio claros entre los módulos de frontend para evitar el acoplamiento entre equipos.",
      "Los servicios de backend necesitaban evolucionar de forma independiente, con contratos de API predecibles.",
      "Algunos flujos de trabajo requerían procesamiento asíncrono; otros necesitaban respuestas síncronas.",
      "Los flujos de datos frecuentemente accedidos necesitaban optimización para mantener la capacidad de respuesta a escala.",
      "Despliegue en la nube en AWS con entrega continua por parte de diferentes equipos.",
    ],
    architecture:
      "El frontend utiliza una arquitectura de microfrontend construida con React, manteniendo cada dominio de producto desplegable de forma independiente. En el backend, los microservicios NestJS se sitúan detrás de un gateway y se comunican mediante REST para flujos síncronos y Apache Kafka para flujos de trabajo asíncronos. Redis se utiliza para cachear datos frecuentemente accedidos. PostgreSQL con TypeORM gestiona la persistencia.",
    contribution:
      "Trabajé en todo el stack: contribuí a la estructura de microfrontend en el frontend, participé en el diseño e implementación de microservicios NestJS y la arquitectura orientada a gateway, ayudé a definir qué flujos de comunicación debían ser síncronos versus asíncronos, y trabajé en el cacheo con Redis y la optimización de consultas en PostgreSQL. También lideré mejoras de SEO técnico — estrategia de indexación, metadatos y datos estructurados — para el contenido público de la plataforma.",
    tradeoffs:
      "Los microfrontends introdujeron complejidad adicional de integración y coordinación en comparación con un monolito frontend tradicional, pero proporcionaron límites de dominio más claros y permitieron que diferentes partes de la plataforma evolucionaran con menos acoplamiento. Para la comunicación entre servicios, las llamadas REST síncronas eran apropiadas cuando se requería una respuesta inmediata, mientras que Kafka era más adecuado para flujos de trabajo que podían procesarse de forma asíncrona y necesitaban un acoplamiento más flexible. Redis añadió otra dependencia de infraestructura, pero fue útil para evitar trabajo repetido y mejorar la capacidad de respuesta en flujos frecuentemente accedidos.",
    outcome:
      "El trabajo mejoró la modularidad y la capacidad de evolucionar diferentes áreas del producto de forma independiente. También redujo el acoplamiento entre servicios y soportó patrones de comunicación más escalables mediante procesamiento asíncrono y cacheo. El trabajo de SEO técnico mejoró la indexación, la calidad de los metadatos y la visibilidad en búsquedas del contenido profesional de la plataforma.",
    techStack: ["React", "NestJS", "Apache Kafka", "Redis", "PostgreSQL", "TypeORM", "AWS", "TypeScript"],
  },
  {
    slug: "mercado-libre",
    company: "Mercado Libre",
    title: "Escalando el Pricing Logístico en Múltiples Mercados de LATAM",
    subtitle: "Sistemas distribuidos · React · Java",
    cardTags: ["React", "Java", "Distributed Systems"],
    cardDescription:
      "Contribución a la migración de las capacidades de pricing logístico al ecosistema de Mercado Libre y al desarrollo de una fuente única de verdad para la configuración comercial y operativa en múltiples mercados de América Latina.",
    overview:
      "Mercado Libre opera logística en múltiples países de América Latina, cada uno con diferentes carriers, acuerdos comerciales y reglas de pricing. El trabajo se centró en dos desafíos relacionados: migrar las capacidades de pricing logístico de Kangu a la arquitectura de Mercado Libre, y construir una plataforma centralizada que mantuviera consistentes los acuerdos comerciales y las configuraciones de pricing operativo.",
    businessProblem:
      "La configuración de pricing logístico estaba fragmentada: diferentes configuraciones operativas necesitaban reflejar los acuerdos comerciales negociados con los carriers, pero la relación entre esas dos capas no siempre era clara o consistente. La migración de Kangu añadió otra dimensión — las capacidades existentes de pricing y logística debían integrarse en el ecosistema interno de Mercado Libre adaptándose a su arquitectura, estándares de ingeniería y escala en múltiples mercados.",
    constraints: [
      "Aplicaciones que sirven flujos de trabajo logísticos en múltiples países de América Latina, con diferentes monedas y configuraciones de carriers.",
      "Sistemas distribuidos de alto volumen con integraciones de servicios internos existentes.",
      "La configuración de pricing afecta directamente las operaciones logísticas, requiriendo validación cuidadosa antes de producción.",
      "Compatibilidad hacia atrás: los usuarios operativos dependían de las herramientas existentes durante la migración.",
      "La integración incremental era necesaria para limitar el riesgo operativo.",
    ],
    architecture:
      "El frontend fue construido con React utilizando las librerías de componentes internas de Mercado Libre, con foco en hacer que los flujos de trabajo complejos de pricing y configuración de carriers fueran utilizables para los equipos operativos. En el backend, los servicios Java operaban en un entorno distribuido. Se desarrolló una plataforma centralizada de contratos logísticos para actuar como fuente única de verdad entre los acuerdos comerciales y las configuraciones de pricing operativo utilizadas en diferentes mercados.",
    contribution:
      "Trabajé en componentes de frontend y backend: desarrollé interfaces React para flujos de trabajo de pricing y configuración, contribuí a los servicios backend Java integrando las capacidades migradas de Kangu con los sistemas existentes de Mercado Libre, y participé en el desarrollo de la plataforma centralizada de contratos diseñada para sincronizar datos comerciales y operativos.",
    tradeoffs:
      "Migrar las capacidades logísticas existentes al ecosistema de Mercado Libre requirió equilibrar modernización con compatibilidad. Reemplazar todo a la vez habría aumentado el riesgo operativo, por lo que el trabajo favoreció la integración incremental adaptando la funcionalidad migrada a los estándares y servicios de la plataforma existente. Centralizar la información de contratos creó una fuente de verdad más clara, pero también implicó definir límites claros entre los datos comerciales y la configuración operativa — el objetivo era mejorar la consistencia sin crear un acoplamiento excesivo entre sistemas con diferentes responsabilidades y ciclos de release.",
    outcome:
      "El proyecto ayudó a centralizar la información de contratos logísticos y simplificó la relación entre los acuerdos comerciales y las configuraciones de pricing operativo. La migración permitió que las capacidades relacionadas con Kangu operaran dentro de la arquitectura y los estándares de ingeniería de Mercado Libre. Las mejoras en los flujos de configuración y validación de pricing redujeron la fricción operativa para los equipos que gestionan tarifas de carriers en diferentes mercados.",
    techStack: ["React", "Java", "Distributed Systems", "TypeScript"],
  },
  {
    slug: "siloreal",
    company: "SiloReal",
    title: "Convirtiendo Datos de Sensores IoT en Monitoreo Agrícola Accionable",
    subtitle: "Full-stack · React · React Native · Node.js · AWS",
    cardTags: ["React", "React Native", "Node.js", "AWS"],
    cardDescription:
      "Desarrollo de una plataforma full-stack que combina monitoreo satelital, sensores ambientales y alertas automatizadas para dar a los productores agrícolas visibilidad remota sobre silobolsas distribuidas en grandes áreas rurales.",
    overview:
      "SiloReal ayuda a los productores agrícolas a monitorear el grano almacenado en silobolsas distribuidas en grandes áreas rurales. La plataforma combina información satelital, datos de sensores en tiempo real y alertas automatizadas para dar a los agricultores visibilidad que de otro modo requeriría inspección manual — a menudo impráctica a escala.",
    businessProblem:
      "Los productores agrícolas que almacenan grano en silobolsas no tenían una forma confiable de monitorear las condiciones de almacenamiento de forma remota. La información estaba fragmentada, la inspección manual era costosa en tiempo, y la detección temprana de problemas ambientales o de almacenamiento era difícil. El objetivo era centralizar el monitoreo, hacer que los datos de sensores fueran accionables y entregar alertas de una manera que funcionara para usuarios operando en entornos rurales.",
    constraints: [
      "Conectividad intermitente en entornos agrícolas: el sistema debía manejar datos que llegaban de forma asíncrona e impredecible.",
      "Los datos de sensores provienen de dispositivos físicos externos no completamente bajo el control de la aplicación.",
      "La información geoespacial y satelital requería integración con fuentes de datos externas.",
      "Los usuarios en el campo necesitaban acceso móvil, mientras que los usuarios de oficina necesitaban una interfaz web.",
      "Las mediciones crudas de los sensores debían traducirse en información que usuarios agrícolas no técnicos pudieran entender y actuar sobre ella.",
    ],
    architecture:
      "El frontend web fue construido con React; React Native proporcionó acceso móvil para usuarios en el campo. Node.js y Express expusieron APIs y procesaron datos de la aplicación, con MySQL como base de datos principal. El sistema separó la ingesta de datos de la lógica de negocio y las aplicaciones orientadas al usuario, permitiendo que cada capa evolucionara de forma independiente. Los flujos de alertas automatizadas notificaban a los propietarios de silobolsas cuando se detectaban condiciones relevantes. La infraestructura corrió en AWS.",
    contribution:
      "Trabajé en todo el stack: construí la interfaz web en React y la aplicación móvil en React Native, integré información de sensores en tiempo real en la plataforma y desarrollé el sistema de alertas automatizadas. También trabajé en la arquitectura que separó la recolección de datos de la capa orientada al usuario, y contribuí al despliegue en AWS y la infraestructura.",
    tradeoffs:
      "Los sistemas impulsados por sensores deben tener en cuenta que los datos llegan en diferentes momentos y desde fuentes que no siempre están bajo el control de la aplicación. El diseño mantuvo la recolección de datos y los flujos de trabajo orientados al usuario suficientemente separados para que los retrasos temporales en los datos entrantes no afectaran innecesariamente al resto de la aplicación. Otro trade-off fue entre exponer información detallada de los sensores y mantener el producto usable para usuarios agrícolas: en lugar de tratar las mediciones crudas como el producto final, la plataforma se enfocó en convertirlas en vistas de monitoreo y alertas sobre las que los usuarios pudieran actuar.",
    outcome:
      "La plataforma les dio a los usuarios agrícolas una forma centralizada de monitorear silobolsas de forma remota y recibir alertas automatizadas basadas en datos de sensores en lugar de depender de la inspección manual. Mejoró la visibilidad sobre activos distribuidos en diferentes ubicaciones e hizo que los datos de sensores y satélites fueran directamente accionables a través de dashboards y notificaciones.",
    techStack: ["React", "React Native", "Node.js", "Express", "MySQL", "AWS", "JavaScript"],
  },
] as const;

export function getCaseStudyEs(slug: string): CaseStudy | undefined {
  return caseStudiesEs.find((cs) => cs.slug === slug);
}
