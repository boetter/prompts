import { z } from "zod";

export type PromptCategory = "skrivning" | "kreativ" | "business" | "teknisk" | "akademisk";

export const promptCategories: PromptCategory[] = [
  "skrivning",
  "kreativ", 
  "business",
  "teknisk",
  "akademisk"
];

export const categoryColors: Record<PromptCategory, { bg: string; text: string }> = {
  skrivning: { bg: "bg-pink-100 dark:bg-pink-900", text: "text-pink-800 dark:text-pink-100" },
  kreativ: { bg: "bg-purple-100 dark:bg-purple-900", text: "text-purple-800 dark:text-purple-100" },
  business: { bg: "bg-blue-100 dark:bg-blue-900", text: "text-blue-800 dark:text-blue-100" },
  teknisk: { bg: "bg-emerald-100 dark:bg-emerald-900", text: "text-emerald-800 dark:text-emerald-100" },
  akademisk: { bg: "bg-amber-100 dark:bg-amber-900", text: "text-amber-800 dark:text-amber-100" }
};

export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  category: PromptCategory;
}

export const prompts: Prompt[] = [
  {
    id: "1",
    title: "Historie Premise Generator",
    description: "Generer unikke historie-idéer med detaljerede præmisser",
    content: "Jeg vil have dig til at agere som en kreativ skriveprompter. Generer en unik historie-præmis der indeholder: 1) En hovedperson med et usædvanligt erhverv 2) En overraskende udløsende begivenhed 3) Et moralsk dilemma karakteren skal håndtere. Gør det originalt og fængende.",
    category: "kreativ"
  },
  {
    id: "2",
    title: "Teknisk Dokumentationsekspert",
    description: "Opret klar og omfattende teknisk dokumentation",
    content: "Agér som teknisk dokumentationsekspert. Hjælp mig med at skabe omfattende dokumentation for [projekt/feature] der inkluderer: 1) Overblik 2) Kom i gang guide 3) API reference 4) Almindelige use cases 5) Fejlfindingstips. Fokuser på klarhed og fuldstændighed.",
    category: "teknisk"
  },
  {
    id: "3",
    title: "Forretningsstrategi Rådgiver",
    description: "Få strategisk forretningsrådgivning og planlægningshjælp",
    content: "Jeg vil have dig til at agere som forretningsstrategi-konsulent. Hjælp mig med at udvikle en omfattende strategi for [forretningsmål] der tager højde for: 1) Markedsanalyse 2) Konkurrencemæssige fordele 3) Ressourcekrav 4) Implementeringstidsplan 5) Succeskriterier. Vær specifik og handlingsorienteret.",
    category: "business"
  },
  {
    id: "4",
    title: "Akademisk Forskningsspørgsmål",
    description: "Generer fokuserede forskningsspørgsmål til akademiske opgaver",
    content: "Agér som akademisk forskningsrådgiver. Hjælp mig med at formulere et forskningsspørgsmål for [emne] der er: 1) Specifikt og fokuseret 2) Forskbart 3) Betydningsfuldt for feltet 4) Klart og utvetydigt 5) Passende for projektets omfang.",
    category: "akademisk"
  },
  {
    id: "5",
    title: "Skrivestils Transformer",
    description: "Transformer tekst til forskellige skrivestile",
    content: "Jeg vil have dig til at agere som skrivestils-ekspert. Transformer følgende tekst til [stil] mens du bevarer dens kernebetydning. Overvej: 1) Ordvalg 2) Sætningsstruktur 3) Tone og stemme 4) Litterære virkemidler 5) Rytme og flow.",
    category: "skrivning"
  },
  {
    id: "6",
    title: "Innovation Idégenerator",
    description: "Skab innovative løsninger til forretningsudfordringer",
    content: "Agér som innovationskonsulent og hjælp med at generere kreative løsninger til [udfordring]. Fokuser på: 1) Disruptive teknologier 2) Nye forretningsmodeller 3) Kundeværdi 4) Implementerbarhed.",
    category: "business"
  },
  {
    id: "7",
    title: "Karakter Udvikling",
    description: "Skab dybdegående karakterprofiler",
    content: "Som karakterudvikler, hjælp mig med at skabe en kompleks karakter med: 1) Baggrund 2) Motivation 3) Konflikter 4) Udviklingsbue 5) Relationer.",
    category: "kreativ"
  },
  {
    id: "8",
    title: "API Design Guide",
    description: "Best practices for API design",
    content: "Som API arkitekt, guide mig gennem design af et RESTful API med fokus på: 1) Endpoint struktur 2) Autentificering 3) Versionering 4) Dokumentation 5) Fejlhåndtering.",
    category: "teknisk"
  },
  {
    id: "9",
    title: "Akademisk Abstract",
    description: "Skriv effektive akademiske abstracts",
    content: "Hjælp mig med at strukturere et akademisk abstract der inkluderer: 1) Problemstilling 2) Metode 3) Resultater 4) Konklusion 5) Implikationer.",
    category: "akademisk"
  },
  {
    id: "10",
    title: "Dialog Skrivning",
    description: "Skriv naturlig og engagerende dialog",
    content: "Vejled mig i at skrive overbevisende dialog med fokus på: 1) Karakterstemme 2) Subtekst 3) Konflikt 4) Rytme 5) Realisme.",
    category: "skrivning"
  },
  {
    id: "11",
    title: "Markedsanalyse Expert",
    description: "Lav dybdegående markedsanalyser",
    content: "Udfør en omfattende markedsanalyse der dækker: 1) Målgruppesegmentering 2) Konkurrentanalyse 3) Markedstendenser 4) Vækstmuligheder.",
    category: "business"
  },
  {
    id: "12",
    title: "Worldbuilding Guide",
    description: "Skab overbevisende fiktive verdener",
    content: "Guide gennem opbygningen af en fiktiv verden med fokus på: 1) Geografi 2) Kultur 3) Historie 4) Politik 5) Teknologi/Magi.",
    category: "kreativ"
  },
  {
    id: "13",
    title: "Code Review Expert",
    description: "Grundig kodegennemgang og optimering",
    content: "Gennemgå kode med fokus på: 1) Sikkerhed 2) Performance 3) Vedligeholdelighed 4) Best practices 5) Edge cases.",
    category: "teknisk"
  },
  {
    id: "14",
    title: "Litteratur Review",
    description: "Strukturér akademiske litteraturgennemgange",
    content: "Hjælp med at organisere en litteraturgennemgang med: 1) Tematisk struktur 2) Kritisk analyse 3) Syntese 4) Forskningsgab.",
    category: "akademisk"
  },
  {
    id: "15",
    title: "Email Kommunikation",
    description: "Professionel email-skrivning",
    content: "Guide til effektiv email-kommunikation med fokus på: 1) Klarhed 2) Tone 3) Struktur 4) Call-to-action 5) Professionalisme.",
    category: "skrivning"
  },
  {
    id: "16",
    title: "Produktlancering Strategi",
    description: "Plan for succesfuld produktlancering",
    content: "Udvikl en lanceringsplan der omfatter: 1) Timing 2) Målgruppe 3) Kommunikation 4) Distribution 5) Success metrics.",
    category: "business"
  },
  {
    id: "17",
    title: "Plot Twist Generator",
    description: "Skab overraskende plot twists",
    content: "Generer uventede men troværdige plot twists ved at overveje: 1) Foreshadowing 2) Karaktermotivation 3) Konsekvenser 4) Timing.",
    category: "kreativ"
  },
  {
    id: "18",
    title: "System Design",
    description: "Design skalerbare systemer",
    content: "Guide gennem system design med fokus på: 1) Arkitektur 2) Skalerbarhed 3) Sikkerhed 4) Performance 5) Vedligeholdelse.",
    category: "teknisk"
  },
  {
    id: "19",
    title: "Metodologi Udvikling",
    description: "Design forskningsmetodologi",
    content: "Udvikl en solid forskningsmetodologi med: 1) Forskningsdesign 2) Dataindsamling 3) Analysemetoder 4) Validitet 5) Etik.",
    category: "akademisk"
  },
  {
    id: "20",
    title: "Blog Optimering",
    description: "Optimer blog indhold",
    content: "Forbedr blog indhold gennem: 1) SEO optimering 2) Læsevenlighed 3) Engagement 4) Call-to-action 5) Formatering.",
    category: "skrivning"
  },
  {
    id: "21",
    title: "Database Optimization",
    description: "Optimer database performance",
    content: "Guide til database optimering med fokus på: 1) Index strategier 2) Query optimering 3) Caching 4) Partitionering 5) Monitoring.",
    category: "teknisk"
  },
  {
    id: "22",
    title: "Container Orchestration",
    description: "Setup og administration af containere",
    content: "Guide til container orchestration med: 1) Kubernetes basics 2) Deployment strategier 3) Service mesh 4) Monitoring 5) Scaling.",
    category: "teknisk"
  },
  {
    id: "23",
    title: "CI/CD Pipeline",
    description: "Opsætning af automatiseret deployment",
    content: "Opret en CI/CD pipeline med: 1) Version control 2) Automated testing 3) Build process 4) Deployment 5) Monitoring.",
    category: "teknisk"
  },
  {
    id: "24",
    title: "Security Audit",
    description: "Sikkerhedsgennemgang af systemer",
    content: "Udfør security audit med fokus på: 1) Vulnerability scanning 2) Penetration testing 3) Code review 4) Access control 5) Compliance.",
    category: "teknisk"
  },
  {
    id: "25",
    title: "Microservice Architecture",
    description: "Design af mikroservice arkitektur",
    content: "Guide til mikroservice design med: 1) Service boundaries 2) Communication patterns 3) Data management 4) Deployment 5) Monitoring.",
    category: "teknisk"
  },
  {
    id: "26",
    title: "Cloud Infrastructure",
    description: "Cloud infrastruktur setup",
    content: "Setup cloud infrastruktur med: 1) Resource planning 2) Network design 3) Security groups 4) Scaling policies 5) Cost optimization.",
    category: "teknisk"
  },
  {
    id: "27",
    title: "Performance Optimization",
    description: "System performance forbedring",
    content: "Optimer system performance gennem: 1) Profiling 2) Caching strategies 3) Load balancing 4) Resource management 5) Monitoring.",
    category: "teknisk"
  },
  {
    id: "28",
    title: "Test Automation",
    description: "Automatiseret test setup",
    content: "Implementer test automation med: 1) Test strategy 2) Framework selection 3) Test data management 4) CI integration 5) Reporting.",
    category: "teknisk"
  },
  {
    id: "29",
    title: "DevOps Practices",
    description: "Implementation af DevOps praksis",
    content: "Indfør DevOps practices med fokus på: 1) Automation 2) Monitoring 3) Incident response 4) Continuous improvement 5) Culture.",
    category: "teknisk"
  },
  {
    id: "30",
    title: "API Security",
    description: "Sikring af API endpoints",
    content: "Implementer API sikkerhed med: 1) Authentication 2) Authorization 3) Rate limiting 4) Input validation 5) Encryption.",
    category: "teknisk"
  }
];