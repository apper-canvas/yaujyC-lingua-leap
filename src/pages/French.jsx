import { BookOpen, MessageCircle, GraduationCap, Bookmark } from 'lucide-react';
import CurriculumLayout from '../components/CurriculumLayout';

export default function French() {
  const frenchCurriculum = [
    {
      title: "Beginner Level (A1)",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      description: "Start your French journey with essential vocabulary, basic grammar, and simple conversations. This level will help you establish a solid foundation in French.",
      lessons: [
        {
          title: "Introduction and Greetings",
          description: "Learn how to introduce yourself and greet others in French. Master the basic pronunciation rules and build confidence in your first conversations.",
          topics: [
            "Formal and informal greetings",
            "Introducing yourself and others",
            "Basic question words",
            "Numbers 1-20",
            "Days of the week"
          ],
          examples: [
            { original: "Bonjour, comment allez-vous?", translation: "Hello, how are you? (formal)" },
            { original: "Je m'appelle Marie. Et vous?", translation: "My name is Marie. And you? (formal)" },
            { original: "Enchanté de faire votre connaissance.", translation: "Pleased to meet you." }
          ]
        },
        {
          title: "Basic Grammar: Articles and Nouns",
          description: "Understand the concept of grammatical gender in French and learn how to use definite and indefinite articles correctly with nouns.",
          topics: [
            "Masculine and feminine nouns",
            "Definite articles (le, la, les)",
            "Indefinite articles (un, une, des)",
            "Basic plural forms",
            "Common everyday nouns"
          ],
          examples: [
            { original: "Le livre est sur la table.", translation: "The book is on the table." },
            { original: "J'ai un stylo et une gomme.", translation: "I have a pen and an eraser." },
            { original: "Les enfants jouent dans le parc.", translation: "The children are playing in the park." }
          ]
        },
        {
          title: "Present Tense: Regular Verbs",
          description: "Master the conjugation of regular -er, -ir, and -re verbs in the present tense, which forms the backbone of French communication.",
          topics: [
            "Regular -er verb conjugation (parler, aimer)",
            "Regular -ir verb conjugation (finir, choisir)",
            "Regular -re verb conjugation (vendre, attendre)",
            "Negation with ne...pas",
            "Asking simple questions"
          ],
          examples: [
            { original: "Je parle français.", translation: "I speak French." },
            { original: "Nous finissons nos devoirs.", translation: "We are finishing our homework." },
            { original: "Ils ne vendent pas leurs livres.", translation: "They don't sell their books." }
          ]
        },
        {
          title: "Daily Life Vocabulary",
          description: "Build your vocabulary with essential words and phrases for everyday situations like shopping, ordering food, and describing your daily routine.",
          topics: [
            "Food and drinks",
            "Shopping and money",
            "Time expressions",
            "Daily activities",
            "Basic adjectives"
          ],
          examples: [
            { original: "Je prends un café au lait, s'il vous plaît.", translation: "I'll have a coffee with milk, please." },
            { original: "Combien coûte cette chemise?", translation: "How much does this shirt cost?" },
            { original: "Je me réveille à sept heures tous les jours.", translation: "I wake up at seven o'clock every day." }
          ]
        }
      ]
    },
    {
      title: "Intermediate Level (A2-B1)",
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      description: "Expand your French language skills with more complex grammar, wider vocabulary, and the ability to discuss a variety of topics with increased fluency.",
      lessons: [
        {
          title: "Past Tenses: Passé Composé and Imparfait",
          description: "Learn to talk about past events using the two main past tenses in French. Understand when to use each tense and how they work together in storytelling.",
          topics: [
            "Formation of passé composé with avoir and être",
            "Regular and irregular past participles",
            "Formation and uses of the imparfait",
            "Distinguishing between passé composé and imparfait",
            "Time expressions for past events"
          ],
          examples: [
            { original: "J'ai visité Paris l'année dernière.", translation: "I visited Paris last year." },
            { original: "Quand j'étais enfant, je jouais souvent au football.", translation: "When I was a child, I often played football." },
            { original: "Il pleuvait quand nous sommes arrivés.", translation: "It was raining when we arrived." }
          ]
        },
        {
          title: "Pronouns: Direct and Indirect Objects",
          description: "Master the use of direct and indirect object pronouns to make your speech more fluid and natural while avoiding repetition.",
          topics: [
            "Direct object pronouns (me, te, le, la, nous, vous, les)",
            "Indirect object pronouns (me, te, lui, nous, vous, leur)",
            "Pronoun placement in sentences",
            "Using multiple pronouns together",
            "Y and en as pronouns"
          ],
          examples: [
            { original: "Je le vois tous les jours.", translation: "I see him every day." },
            { original: "Elle leur a donné les livres.", translation: "She gave them the books." },
            { original: "J'en ai acheté trois.", translation: "I bought three of them." }
          ]
        },
        {
          title: "The Future and Conditional Tenses",
          description: "Express future plans and hypothetical situations using the future simple and conditional tenses in French.",
          topics: [
            "Formation of the future simple tense",
            "Irregular future stems",
            "The near future with aller + infinitive",
            "Formation of the conditional tense",
            "Using si clauses (if statements)"
          ],
          examples: [
            { original: "Nous partirons en vacances la semaine prochaine.", translation: "We will leave for vacation next week." },
            { original: "Je vais acheter une nouvelle voiture.", translation: "I'm going to buy a new car." },
            { original: "Si j'avais plus d'argent, j'achèterais une maison.", translation: "If I had more money, I would buy a house." }
          ]
        },
        {
          title: "French Culture and Society",
          description: "Explore aspects of French culture, traditions, and social customs while learning related vocabulary and expressions.",
          topics: [
            "French regions and their specialties",
            "French cuisine and dining etiquette",
            "Holidays and celebrations in France",
            "Arts and entertainment",
            "Everyday life in France"
          ],
          examples: [
            { original: "La Provence est connue pour ses champs de lavande.", translation: "Provence is known for its lavender fields." },
            { original: "En France, on mange souvent du fromage après le plat principal.", translation: "In France, cheese is often eaten after the main course." },
            { original: "Le 14 juillet est la fête nationale française.", translation: "July 14th is the French national holiday." }
          ]
        }
      ]
    },
    {
      title: "Advanced Level (B2-C1)",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      description: "Refine your French to near-native proficiency with advanced grammar, nuanced vocabulary, and sophisticated expressions for academic and professional contexts.",
      lessons: [
        {
          title: "Advanced Verb Tenses and Moods",
          description: "Master complex verbal expressions with the subjunctive, conditional perfect, and literary tenses to express nuanced ideas and hypotheses.",
          topics: [
            "The present subjunctive and its triggers",
            "Past subjunctive forms",
            "Conditional perfect for hypothetical past situations",
            "Literary tenses: passé simple and plus-que-parfait",
            "Advanced verbal expressions"
          ],
          examples: [
            { original: "Je doute qu'il vienne à la réunion.", translation: "I doubt that he will come to the meeting." },
            { original: "Si j'avais su, je ne serais pas venu.", translation: "If I had known, I wouldn't have come." },
            { original: "Dès qu'il entra dans la pièce, tout le monde se tut.", translation: "As soon as he entered the room, everyone fell silent." }
          ]
        },
        {
          title: "Advanced Grammar: Passive Voice and Reported Speech",
          description: "Learn to use more sophisticated grammatical structures to vary your expression and adapt to different registers of language.",
          topics: [
            "Forming and using the passive voice",
            "Converting direct to indirect speech",
            "Sequence of tenses in reported speech",
            "Advanced negation patterns",
            "Complex sentence structures"
          ],
          examples: [
            { original: "Ce roman a été écrit par Victor Hugo.", translation: "This novel was written by Victor Hugo." },
            { original: "Elle m'a dit qu'elle viendrait le lendemain.", translation: "She told me she would come the next day." },
            { original: "Je n'ai plus rien à vous dire.", translation: "I have nothing more to say to you." }
          ]
        },
        {
          title: "Academic and Professional French",
          description: "Develop the language skills needed for academic studies or professional work in French-speaking environments.",
          topics: [
            "Academic writing styles",
            "Formal correspondence",
            "Presentation and debate techniques",
            "Technical and specialized vocabulary",
            "Business French"
          ],
          examples: [
            { original: "Nous vous prions d'agréer, Madame, l'expression de nos salutations distinguées.", translation: "Please accept, Madam, the expression of our distinguished greetings." },
            { original: "Cette étude démontre clairement la corrélation entre ces deux phénomènes.", translation: "This study clearly demonstrates the correlation between these two phenomena." },
            { original: "Le chiffre d'affaires a augmenté de 15% au cours du dernier trimestre.", translation: "Revenue increased by 15% during the last quarter." }
          ]
        },
        {
          title: "French Literature and Media",
          description: "Explore authentic French cultural materials from literature, film, news, and other media to deepen your understanding of the language in context.",
          topics: [
            "Introduction to key French authors",
            "Analysis of literary extracts",
            "Film analysis and vocabulary",
            "News media and current events",
            "Idiomatic expressions and slang"
          ],
          examples: [
            { original: "À la recherche du temps perdu est l'œuvre majeure de Marcel Proust.", translation: "In Search of Lost Time is Marcel Proust's major work." },
            { original: "Ce film a remporté la Palme d'Or au Festival de Cannes.", translation: "This film won the Palme d'Or at the Cannes Film Festival." },
            { original: "Il a du pain sur la planche.", translation: "He has his work cut out for him. (literally: He has bread on the board)" }
          ]
        }
      ]
    },
    {
      title: "Specialized French (C1-C2)",
      icon: <Bookmark className="h-6 w-6 text-primary" />,
      description: "Focus on specialized areas of French for specific purposes, from literary analysis to business negotiations, with sophisticated vocabulary and cultural nuances.",
      lessons: [
        {
          title: "French for Academic Research",
          description: "Master the specific language skills needed for conducting research, writing papers, and participating in academic discussions in French.",
          topics: [
            "Research methodology vocabulary",
            "Academic paper structure",
            "Citation and reference conventions",
            "Critical analysis expressions",
            "Academic presentation skills"
          ],
          examples: [
            { original: "Cette recherche vise à combler une lacune dans la littérature existante.", translation: "This research aims to fill a gap in the existing literature." },
            { original: "Les résultats préliminaires suggèrent une tendance significative.", translation: "Preliminary results suggest a significant trend." },
            { original: "Nous émettons l'hypothèse que ce phénomène s'explique par...", translation: "We hypothesize that this phenomenon can be explained by..." }
          ]
        },
        {
          title: "Business and Professional Communication",
          description: "Develop advanced communication skills for the French-speaking business world, from negotiations to presentations and formal correspondence.",
          topics: [
            "Negotiation techniques and vocabulary",
            "Business meeting protocols",
            "Professional networking",
            "Contract and legal terminology",
            "Corporate structure and roles"
          ],
          examples: [
            { original: "Nous sommes disposés à faire des concessions sur les délais de livraison.", translation: "We are willing to make concessions on delivery deadlines." },
            { original: "Je vous soumets ci-joint notre proposition commerciale détaillée.", translation: "I am submitting herewith our detailed business proposal." },
            { original: "Le conseil d'administration a approuvé la fusion à l'unanimité.", translation: "The board of directors unanimously approved the merger." }
          ]
        },
        {
          title: "Literary Analysis and Creative Writing",
          description: "Explore French literary traditions and develop your own creative writing skills through analysis of stylistic devices and narrative techniques.",
          topics: [
            "Literary movements in French literature",
            "Stylistic analysis techniques",
            "Narrative structures and perspectives",
            "Poetic forms and devices",
            "Creative writing workshops"
          ],
          examples: [
            { original: "L'auteur emploie l'ironie pour critiquer subtilement la société bourgeoise.", translation: "The author uses irony to subtly criticize bourgeois society." },
            { original: "Ce poème utilise l'alexandrin, vers classique de la poésie française.", translation: "This poem uses the alexandrine, a classic verse form in French poetry." },
            { original: "La narration à la première personne crée une intimité avec le lecteur.", translation: "The first-person narration creates intimacy with the reader." }
          ]
        },
        {
          title: "French for Diplomatic and International Relations",
          description: "Learn the specialized language and protocols used in diplomatic contexts, international organizations, and cross-cultural negotiations.",
          topics: [
            "Diplomatic protocol and etiquette",
            "International relations terminology",
            "Negotiation and mediation vocabulary",
            "Official document formats",
            "Intercultural communication strategies"
          ],
          examples: [
            { original: "Nous réaffirmons notre engagement envers les principes fondamentaux énoncés dans la charte.", translation: "We reaffirm our commitment to the fundamental principles set forth in the charter." },
            { original: "La délégation française propose un amendement à l'article 5 de la résolution.", translation: "The French delegation proposes an amendment to Article 5 of the resolution." },
            { original: "Cette initiative vise à renforcer la coopération bilatérale dans les domaines culturel et éducatif.", translation: "This initiative aims to strengthen bilateral cooperation in the cultural and educational fields." }
          ]
        }
      ]
    }
  ];

  return (
    <CurriculumLayout 
      language="French" 
      flag="🇫🇷" 
      color="from-blue-500 to-red-500" 
      curriculum={frenchCurriculum} 
    />
  );
}