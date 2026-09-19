export type CaseStudy = {
  readonly slug: string;
  readonly company: string;
  readonly title: string;
  readonly subtitle: string;
  /** Tags shown on the home card */
  readonly cardTags: readonly string[];
  readonly cardDescription: string;
  readonly overview: string;
  readonly businessProblem: string;
  readonly constraints: readonly string[];
  readonly architecture: string;
  readonly contribution: string;
  readonly tradeoffs: string;
  readonly outcome: string;
  readonly techStack: readonly string[];
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "intramed",
    company: "Intramed",
    title: "Modernizing a Healthcare Platform with Modular Frontend and Event-Driven Services",
    subtitle: "Distributed systems · React · NestJS · Kafka · AWS",
    cardTags: ["React", "Next.js", "NestJS", "Apache Kafka", "AWS"],
    cardDescription:
      "Contributed to evolving one of Latin America's leading healthcare platforms through modular frontend architecture and independently deployable backend services.",
    overview:
      "Intramed operates a large digital platform for healthcare professionals across Latin America. The work involved modernizing parts of the platform — reducing coupling between frontend modules and between backend services — while keeping the system operational for a large professional audience and multiple contributing teams.",
    businessProblem:
      "The platform needed to evolve continuously without requiring large cross-cutting changes every time a new product capability was introduced. Different areas of the product had to be independently maintainable, and backend services had to support new workflows without tightly coupling to one another. There was also a strong focus on performance and discoverability, since the platform serves content to a large professional audience.",
    constraints: [
      "An existing multi-team ecosystem: changes had to be introduced incrementally without disrupting live functionality.",
      "Clear domain boundaries were required between frontend modules to avoid cross-team coupling.",
      "Backend services needed to evolve independently, with predictable API contracts.",
      "Some workflows required asynchronous processing; others needed synchronous responses.",
      "Frequently accessed data flows needed optimization to preserve responsiveness at scale.",
      "Cloud deployment on AWS with continuous delivery by different teams.",
    ],
    architecture:
      "The frontend uses a microfrontend architecture built with React, keeping each product domain independently deployable. On the backend, NestJS microservices sit behind a gateway and communicate through REST for synchronous flows and Apache Kafka for asynchronous workflows. Redis is used for caching frequently accessed data. PostgreSQL with TypeORM handles persistence.",
    contribution:
      "I worked across the full stack: contributed to the microfrontend structure on the frontend, participated in the design and implementation of NestJS microservices and the gateway-oriented architecture, helped define which communication flows should be synchronous versus asynchronous, and worked on Redis caching and PostgreSQL query optimization. I also drove technical SEO improvements — indexing strategy, metadata, and structured data — for the platform's public-facing content.",
    tradeoffs:
      "Microfrontends introduced additional integration and coordination complexity compared with a traditional frontend monolith, but they provided clearer domain boundaries and allowed different parts of the platform to evolve with less coupling. For service communication, synchronous REST calls were appropriate when an immediate response was required, while Kafka was better suited for workflows that could be processed asynchronously and needed looser coupling between services. Redis added another infrastructure dependency, but it was useful for avoiding repeated work and improving responsiveness in frequently accessed flows.",
    outcome:
      "The work improved modularity and the ability to evolve different product areas independently. It also reduced coupling between services and supported more scalable communication patterns through asynchronous processing and caching. The technical SEO work improved indexing, metadata quality, and search visibility for the platform's professional content.",
    techStack: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "NestJS",
      "Apache Kafka",
      "Redis",
      "PostgreSQL",
      "TypeORM",
      "AWS",
      "Jest",
      "Microfrontends",
    ],
  },
  {
    slug: "mercado-libre",
    company: "Mercado Libre",
    title: "Scaling Logistics Pricing Across Multiple LATAM Markets",
    subtitle: "Distributed systems · React · Spring Boot",
    cardTags: ["React", "Spring Boot", "Java", "REST APIs"],
    cardDescription:
      "Contributed to migrating logistics pricing capabilities into Mercado Libre's ecosystem and building a centralized source of truth for commercial and operational configuration across multiple Latin American markets.",
    overview:
      "Mercado Libre operates logistics across multiple Latin American countries, each with different carriers, commercial agreements, and pricing rules. The work focused on two related challenges: migrating Kangu's logistics pricing capabilities into Mercado Libre's architecture, and building a centralized platform that kept commercial agreements and operational pricing configurations consistent.",
    businessProblem:
      "Logistics pricing configuration was fragmented: different operational settings needed to reflect commercial agreements negotiated with carriers, but the relationship between those two layers was not always clear or consistent. The Kangu migration added another dimension — existing pricing and logistics capabilities had to be integrated into Mercado Libre's internal ecosystem while adapting to its architecture, engineering standards, and scale across multiple markets.",
    constraints: [
      "Applications serving logistics workflows across multiple Latin American countries, currencies, and carrier configurations.",
      "High-volume distributed systems with existing internal service integrations.",
      "Pricing configuration directly affects logistics operations, requiring careful validation before production.",
      "Backwards compatibility: operational users depended on existing tools during the migration.",
      "Incremental integration was necessary to limit operational risk.",
    ],
    architecture:
      "The frontend was built with React using Mercado Libre's internal component libraries, focusing on making complex pricing and carrier configuration workflows usable for operational teams. On the backend, Java Spring Boot services operated in a distributed environment, with MySQL and MongoDB for persistence. A centralized logistics contracts platform was developed to act as a single source of truth between commercial agreements and the operational pricing configurations used across different markets.",
    contribution:
      "I worked on both frontend and backend components: developed React interfaces for pricing and configuration workflows (with Jest for frontend testing), contributed to Java Spring Boot services integrating the migrated Kangu capabilities with existing Mercado Libre systems — covered with JUnit, Mockito and MockMvc — and participated in the development of the centralized contracts platform designed to synchronize commercial and operational data.",
    tradeoffs:
      "Migrating existing logistics capabilities into Mercado Libre's ecosystem required balancing modernization with compatibility. Replacing everything at once would have increased operational risk, so the work favored incremental integration while adapting the migrated functionality to existing platform standards and services. Centralizing contract information created a clearer source of truth, but it also meant defining clear boundaries between commercial data and operational configuration — the goal was to improve consistency without creating excessive coupling between systems that had different responsibilities and release cycles.",
    outcome:
      "The project helped centralize logistics contract information and simplified the relationship between commercial agreements and operational pricing configurations. The migration enabled Kangu-related capabilities to operate within Mercado Libre's architecture and engineering standards. Improvements to pricing configuration and validation workflows reduced operational friction for teams managing carrier rates across different markets.",
    techStack: [
      "React",
      "TypeScript",
      "Jest",
      "Java",
      "Spring Boot",
      "JUnit",
      "Mockito",
      "MockMvc",
      "REST APIs",
      "MySQL",
      "MongoDB",
      "DBeaver",
      "Distributed Systems",
    ],
  },
  {
    slug: "siloreal",
    company: "SiloReal",
    title: "Turning IoT Sensor Data into Actionable Agricultural Monitoring",
    subtitle: "Full-stack · React · React Native · Node.js · AWS",
    cardTags: ["React", "React Native", "Node.js", "AWS"],
    cardDescription:
      "Built a full-stack platform combining satellite monitoring, environmental sensors, and automated alerts to give agricultural producers remote visibility over silo bags distributed across large rural areas.",
    overview:
      "SiloReal helps agricultural producers monitor grain stored in silo bags distributed across large rural areas. The platform combines satellite information, real-time sensor data, and automated alerts to give farmers visibility that would otherwise require manual inspection — often impractical at scale.",
    businessProblem:
      "Agricultural producers storing grain in silo bags had no reliable way to monitor storage conditions remotely. Information was fragmented, manual inspection was time-consuming, and early detection of environmental or storage problems was difficult. The goal was to centralize monitoring, make sensor data actionable, and deliver alerts in a way that worked for users operating in rural environments.",
    constraints: [
      "Intermittent connectivity in agricultural environments: the system had to handle data arriving asynchronously and unreliably.",
      "Sensor data comes from external physical devices not fully under the application's control.",
      "Geospatial and satellite information required integration with external data sources.",
      "Users in the field needed mobile access, while office-based users needed a web interface.",
      "Raw sensor measurements had to be translated into information that non-technical agricultural users could understand and act on.",
    ],
    architecture:
      "The web frontend was built with React; React Native provided mobile access for field users. Node.js and Express exposed APIs and processed application data, with MySQL as the primary database. The system separated data ingestion from business logic and user-facing applications, allowing each layer to evolve independently. Automated alert flows notified silo bag owners when relevant conditions were detected. The infrastructure ran on AWS.",
    contribution:
      "I worked across the full stack: built the React web interface and the React Native mobile application, integrated real-time sensor information into the platform, and developed the automated alert system. I also worked on the architecture that separated data collection from the user-facing layer, and contributed to AWS deployment and infrastructure.",
    tradeoffs:
      "Sensor-driven systems have to account for data arriving at different times and from sources that are not always under the application's control. The design therefore kept data collection and user-facing workflows sufficiently separated so that temporary delays in incoming data did not unnecessarily affect the rest of the application. Another trade-off was between exposing detailed sensor information and keeping the product usable for agricultural users: rather than treating raw measurements as the final product, the platform focused on turning them into monitoring views and alerts that users could act on.",
    outcome:
      "The platform gave agricultural users a centralized way to monitor silo bags remotely and receive automated alerts based on sensor data instead of relying on manual inspection. It improved visibility over assets distributed across different locations and made sensor and satellite data directly actionable through dashboards and notifications.",
    techStack: [
      "React",
      "React Native",
      "Node.js",
      "Express",
      "MySQL",
      "AWS",
      "JavaScript",
      "REST APIs",
      "IoT",
    ],
  },
] as const;

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
