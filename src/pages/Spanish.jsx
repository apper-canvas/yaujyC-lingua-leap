import { BookOpen, MessageCircle, GraduationCap, Bookmark } from 'lucide-react';
import CurriculumLayout from '../components/CurriculumLayout';

export const spanishCurriculum = [
  {
    title: "Beginner Level (A1)",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    description: "Start your Spanish journey with fundamental vocabulary, basic grammar, and simple conversation skills. Build a strong foundation for further learning.",
    lessons: [
      {
        title: "Introduction and Greetings",
        description: "Learn essential greetings and introductions in Spanish. Master basic pronunciation and build confidence in your first conversations.",
        topics: [
          "Formal and informal greetings",
          "Introducing yourself and others",
          "Basic question words",
          "Numbers 1-100",
          "Days of the week and months"
        ],
        examples: [
          { original: "¡Hola! ¿Cómo estás?", translation: "Hello! How are you?" },
          { original: "Me llamo Carlos. ¿Y tú?", translation: "My name is Carlos. And you?" },
          { original: "Mucho gusto en conocerte.", translation: "Nice to meet you." }
        ]
      },
      {
        title: "Basic Grammar: Articles and Nouns",
        description: "Understand grammatical gender in Spanish and learn how to use definite and indefinite articles with nouns correctly.",
        topics: [
          "Masculine and feminine nouns",
          "Definite articles (el, la, los, las)",
          "Indefinite articles (un, una, unos, unas)",
          "Forming plurals",
          "Common everyday nouns"
        ],
        examples: [
          { original: "El libro está en la mesa.", translation: "The book is on the table." },
          { original: "Tengo unos lápices y unas plumas.", translation: "I have some pencils and some pens." },
          { original: "Las mujeres hablan con los hombres.", translation: "The women are talking with the men." }
        ]
      },
      {
        title: "Present Tense: Regular Verbs",
        description: "Learn to conjugate regular -ar, -er, and -ir verbs in the present tense, which is essential for describing habits and current actions.",
        topics: [
          "Regular -ar verb conjugation (hablar, trabajar)",
          "Regular -er verb conjugation (comer, beber)",
          "Regular -ir verb conjugation (vivir, escribir)",
          "Forming questions and negations",
          "Common expressions with present tense"
        ],
        examples: [
          { original: "Yo hablo español.", translation: "I speak Spanish." },
          { original: "Ellos comen en el restaurante.", translation: "They eat at the restaurant." },
          { original: "¿Tú no vives aquí?", translation: "Don't you live here?" }
        ]
      },
      {
        title: "Everyday Vocabulary",
        description: "Build your vocabulary with essential words and phrases for daily situations like shopping, ordering food, and describing your routine.",
        topics: [
          "Food and dining",
          "Shopping and money",
          "Time expressions",
          "Family members",
          "Descriptive adjectives"
        ],
        examples: [
          { original: "Quisiera un café con leche, por favor.", translation: "I would like a coffee with milk, please." },
          { original: "¿Cuánto cuesta esta camisa?", translation: "How much does this shirt cost?" },
          { original: "Mi hermana es alta y delgada.", translation: "My sister is tall and thin." }
        ]
      }
    ]
  },
  {
    title: "Intermediate Level (A2-B1)",
    icon: <MessageCircle className="h-6 w-6 text-primary" />,
    description: "Expand your Spanish skills with more complex grammar, broader vocabulary, and the ability to discuss various topics with increased fluency and confidence.",
    lessons: [
      {
        title: "Past Tenses: Preterite and Imperfect",
        description: "Learn to talk about past events using the two main past tenses in Spanish. Understand when to use each tense and how they work together in narration.",
        topics: [
          "Formation of the preterite tense",
          "Regular and irregular preterite forms",
          "Formation and uses of the imperfect",
          "Distinguishing between preterite and imperfect",
          "Time expressions for past events"
        ],
        examples: [
          { original: "Visité Madrid el año pasado.", translation: "I visited Madrid last year." },
          { original: "Cuando era niño, jugaba al fútbol todos los días.", translation: "When I was a child, I used to play soccer every day." },
          { original: "Estaba leyendo cuando ella llamó.", translation: "I was reading when she called." }
        ]
      },
      {
        title: "Object Pronouns and Commands",
        description: "Master the use of direct and indirect object pronouns and learn to give formal and informal commands in Spanish.",
        topics: [
          "Direct object pronouns (me, te, lo, la, nos, os, los, las)",
          "Indirect object pronouns (me, te, le, nos, os, les)",
          "Using multiple pronouns together",
          "Affirmative and negative commands",
          "Pronoun placement with commands"
        ],
        examples: [
          { original: "Te lo doy mañana.", translation: "I'll give it to you tomorrow." },
          { original: "¡Dímelo ahora!", translation: "Tell it to me now!" },
          { original: "No le compres ese regalo.", translation: "Don't buy him/her that gift." }
        ]
      },
      {
        title: "Future and Conditional Tenses",
        description: "Express future plans and hypothetical situations using the future simple and conditional tenses in Spanish.",
        topics: [
          "Formation of the simple future tense",
          "Irregular future stems",
          "The immediate future with ir a + infinitive",
          "Formation of the conditional tense",
          "Using si clauses (if statements)"
        ],
        examples: [
          { original: "Llegaremos a las ocho de la noche.", translation: "We will arrive at eight in the evening." },
          { original: "Voy a estudiar medicina.", translation: "I'm going to study medicine." },
          { original: "Si tuviera más dinero, viajaría por todo el mundo.", translation: "If I had more money, I would travel all over the world." }
        ]
      },
      {
        title: "Hispanic Culture and Traditions",
        description: "Explore aspects of Hispanic cultures, traditions, and social customs while learning related vocabulary and expressions.",
        topics: [
          "Hispanic world geography",
          "Traditional celebrations and holidays",
          "Food and culinary traditions",
          "Music and dance",
          "Art and literature"
        ],
        examples: [
          { original: "El Día de los Muertos se celebra el 1 y 2 de noviembre.", translation: "The Day of the Dead is celebrated on November 1st and 2nd." },
          { original: "La paella es un plato típico de Valencia, España.", translation: "Paella is a typical dish from Valencia, Spain." },
          { original: "El flamenco es un estilo de música y danza originario de Andalucía.", translation: "Flamenco is a style of music and dance originating from Andalusia." }
        ]
      }
    ]
  },
  {
    title: "Advanced Level (B2-C1)",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    description: "Refine your Spanish to near-native proficiency with advanced grammar, nuanced vocabulary, and sophisticated expressions for academic and professional contexts.",
    lessons: [
      {
        title: "Subjunctive Mood",
        description: "Master the subjunctive mood in Spanish to express doubt, desire, emotion, and uncertainty in complex sentences.",
        topics: [
          "Present subjunctive formation and uses",
          "Past subjunctive forms",
          "Subjunctive vs. indicative usage",
          "Subjunctive in adverbial clauses",
          "Common phrases requiring subjunctive"
        ],
        examples: [
          { original: "Espero que vengas a la fiesta.", translation: "I hope you come to the party." },
          { original: "Dudaba que él supiera la respuesta.", translation: "I doubted that he knew the answer." },
          { original: "Te lo diré cuando llegues.", translation: "I'll tell you when you arrive." }
        ]
      },
      {
        title: "Perfect Tenses and Advanced Verb Forms",
        description: "Learn to use compound tenses to express completed actions and master the nuances between different past and conditional forms.",
        topics: [
          "Present perfect and past perfect",
          "Future perfect and conditional perfect",
          "Perfect subjunctive forms",
          "Sequence of tenses in complex sentences",
          "Passive voice and impersonal expressions"
        ],
        examples: [
          { original: "Ya he terminado mi trabajo.", translation: "I have already finished my work." },
          { original: "Para mañana, habré leído todo el libro.", translation: "By tomorrow, I will have read the whole book." },
          { original: "Si hubiera estudiado más, habría aprobado el examen.", translation: "If I had studied more, I would have passed the exam." }
        ]
      },
      {
        title: "Advanced Communication Skills",
        description: "Develop sophisticated communication strategies for academic, professional, and social contexts with emphasis on register and style.",
        topics: [
          "Formal vs. informal registers",
          "Expressing opinions and argumentation",
          "Academic and professional vocabulary",
          "Public speaking techniques",
          "Debate and discussion strategies"
        ],
        examples: [
          { original: "Cabe destacar la importancia de este asunto.", translation: "It's worth highlighting the importance of this matter." },
          { original: "Desde mi punto de vista, la propuesta carece de viabilidad.", translation: "From my point of view, the proposal lacks viability." },
          { original: "A modo de conclusión, quisiera enfatizar los siguientes puntos.", translation: "By way of conclusion, I would like to emphasize the following points." }
        ]
      },
      {
        title: "Literature and Media Analysis",
        description: "Explore Hispanic literature, film, and media to deepen your cultural understanding and enhance your analytical language skills.",
        topics: [
          "Literary movements in the Hispanic world",
          "Analysis of literary texts",
          "Film and television criticism",
          "News media and current events",
          "Idiomatic expressions and regional variations"
        ],
        examples: [
          { original: "El realismo mágico es característico de la obra de Gabriel García Márquez.", translation: "Magical realism is characteristic of Gabriel García Márquez's work." },
          { original: "La película aborda el tema de la inmigración desde una perspectiva íntima.", translation: "The film addresses the issue of immigration from an intimate perspective." },
          { original: "Ese político está haciendo la vista gorda ante la corrupción.", translation: "That politician is turning a blind eye to corruption." }
        ]
      }
    ]
  },
  {
    title: "Specialized Spanish (C1-C2)",
    icon: <Bookmark className="h-6 w-6 text-primary" />,
    description: "Focus on specialized areas of Spanish for specific purposes, from business to healthcare, with sophisticated vocabulary and cultural nuances.",
    lessons: [
      {
        title: "Business Spanish",
        description: "Master the vocabulary and communication skills needed for the Spanish-speaking business world, from negotiations to formal correspondence.",
        topics: [
          "Business negotiation techniques",
          "Corporate structure terminology",
          "Marketing and sales vocabulary",
          "Business correspondence formats",
          "Economic and financial terminology"
        ],
        examples: [
          { original: "Propongo que reconsideremos los términos del contrato.", translation: "I propose that we reconsider the terms of the contract." },
          { original: "La tasa de rentabilidad ha aumentado considerablemente.", translation: "The rate of return has increased considerably." },
          { original: "Adjunto encontrará nuestro informe trimestral.", translation: "Attached you will find our quarterly report." }
        ]
      },
      {
        title: "Medical and Healthcare Spanish",
        description: "Learn specialized vocabulary and communication strategies for healthcare contexts, essential for medical professionals working with Spanish-speaking patients.",
        topics: [
          "Anatomy and body systems",
          "Common illnesses and symptoms",
          "Medical procedures and treatments",
          "Patient-provider communication",
          "Healthcare documentation"
        ],
        examples: [
          { original: "El paciente presenta dolor abdominal agudo.", translation: "The patient presents with acute abdominal pain." },
          { original: "Le voy a recetar un antibiótico para la infección.", translation: "I'm going to prescribe an antibiotic for the infection." },
          { original: "Es importante que siga el tratamiento según las indicaciones.", translation: "It's important that you follow the treatment according to instructions." }
        ]
      },
      {
        title: "Legal Spanish",
        description: "Develop understanding of legal terminology and concepts in Spanish, crucial for legal professionals working in Spanish-speaking contexts.",
        topics: [
          "Legal system structures",
          "Contract and commercial law",
          "Criminal and civil procedure",
          "Legal document formats",
          "Court and litigation vocabulary"
        ],
        examples: [
          { original: "El acusado fue absuelto por falta de pruebas.", translation: "The defendant was acquitted due to lack of evidence." },
          { original: "Las partes firmantes se comprometen a cumplir lo estipulado.", translation: "The signing parties commit to comply with what is stipulated." },
          { original: "La sentencia puede ser recurrida en un plazo de diez días hábiles.", translation: "The ruling may be appealed within a period of ten business days." }
        ]
      },
      {
        title: "Spanish for Academic Research",
        description: "Master the academic register of Spanish for conducting research, writing papers, and participating in scholarly discussions.",
        topics: [
          "Research methodology vocabulary",
          "Academic writing conventions",
          "Citation and reference formats",
          "Conference presentation skills",
          "Scholarly debate and discussion"
        ],
        examples: [
          { original: "El presente estudio pretende analizar la correlación entre ambas variables.", translation: "The present study aims to analyze the correlation between both variables." },
          { original: "Los resultados obtenidos corroboran nuestra hipótesis inicial.", translation: "The results obtained corroborate our initial hypothesis." },
          { original: "Cabe señalar las limitaciones metodológicas de esta investigación.", translation: "It's worth noting the methodological limitations of this research." }
        ]
      }
    ]
  }
];

export default function Spanish() {
  return (
    <CurriculumLayout 
      language="Spanish" 
      flag="🇪🇸" 
      color="from-yellow-500 to-red-600" 
      curriculum={spanishCurriculum} 
    />
  );
}