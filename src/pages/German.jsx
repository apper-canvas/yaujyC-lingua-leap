import { BookOpen, MessageCircle, GraduationCap, Bookmark } from 'lucide-react';
import CurriculumLayout from '../components/CurriculumLayout';

export const germanCurriculum = [
  {
    title: "Beginner Level (A1)",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    description: "Start your German journey with fundamental vocabulary, basic grammar structures, and simple conversation skills. Build a strong foundation for further learning.",
    lessons: [
      {
        title: "Introduction and Greetings",
        description: "Learn essential greetings and introductions in German. Master basic pronunciation and build confidence in your first conversations.",
        topics: [
          "Formal and informal greetings",
          "Introducing yourself and others",
          "Basic question words",
          "Numbers 1-100",
          "Days of the week and months"
        ],
        examples: [
          { original: "Guten Tag! Wie geht es Ihnen?", translation: "Hello! How are you? (formal)" },
          { original: "Ich heiße Thomas. Und du?", translation: "My name is Thomas. And you? (informal)" },
          { original: "Freut mich, Sie kennenzulernen.", translation: "Pleased to meet you. (formal)" }
        ]
      },
      {
        title: "German Articles and Nouns",
        description: "Understand the grammatical gender system in German and learn how to use definite and indefinite articles with nouns.",
        topics: [
          "Masculine, feminine, and neuter nouns",
          "Definite articles (der, die, das)",
          "Indefinite articles (ein, eine, ein)",
          "Plural forms",
          "Basic cases: nominative and accusative"
        ],
        examples: [
          { original: "Der Mann liest ein Buch.", translation: "The man is reading a book." },
          { original: "Die Frau kauft eine Tasche.", translation: "The woman is buying a bag." },
          { original: "Das Kind spielt mit dem Ball.", translation: "The child is playing with the ball." }
        ]
      },
      {
        title: "Present Tense Verbs",
        description: "Learn to conjugate regular and irregular verbs in the present tense to describe current actions and habits.",
        topics: [
          "Regular verb conjugation",
          "Stem-changing verbs",
          "Modal verbs (können, müssen, wollen)",
          "Separable prefix verbs",
          "Word order in statements and questions"
        ],
        examples: [
          { original: "Ich lerne Deutsch.", translation: "I am learning German." },
          { original: "Er fährt nach Berlin.", translation: "He is going to Berlin." },
          { original: "Wir können heute nicht kommen.", translation: "We cannot come today." }
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
          "Home and household"
        ],
        examples: [
          { original: "Ich hätte gerne einen Kaffee, bitte.", translation: "I would like a coffee, please." },
          { original: "Wie viel kostet dieser Pullover?", translation: "How much does this sweater cost?" },
          { original: "Meine Familie wohnt in München.", translation: "My family lives in Munich." }
        ]
      }
    ]
  },
  {
    title: "Intermediate Level (A2-B1)",
    icon: <MessageCircle className="h-6 w-6 text-primary" />,
    description: "Expand your German skills with more complex grammar, broader vocabulary, and the ability to discuss various topics with increased fluency and confidence.",
    lessons: [
      {
        title: "Past Tenses: Perfekt and Präteritum",
        description: "Learn to talk about past events using the two main past tenses in German. Understand when to use each tense in spoken and written German.",
        topics: [
          "Formation of the Perfekt with haben and sein",
          "Regular and irregular past participles",
          "Formation and uses of the Präteritum",
          "Auxiliary verbs in past tense",
          "Time expressions for past events"
        ],
        examples: [
          { original: "Ich habe gestern Freunde getroffen.", translation: "I met friends yesterday." },
          { original: "Er war letztes Jahr in Deutschland.", translation: "He was in Germany last year." },
          { original: "Als ich ein Kind war, spielte ich gerne Fußball.", translation: "When I was a child, I liked playing soccer." }
        ]
      },
      {
        title: "Cases and Prepositions",
        description: "Master the German case system (nominative, accusative, dative, genitive) and learn how prepositions affect case selection.",
        topics: [
          "The four German cases and their functions",
          "Accusative prepositions",
          "Dative prepositions",
          "Two-way prepositions",
          "Case endings for articles and adjectives"
        ],
        examples: [
          { original: "Ich gebe dem Mann das Buch.", translation: "I give the man the book." },
          { original: "Wir fahren durch den Tunnel.", translation: "We drive through the tunnel." },
          { original: "Das Geschenk ist von meiner Mutter.", translation: "The gift is from my mother." }
        ]
      },
      {
        title: "Future Tense and Conditional",
        description: "Express future plans and hypothetical situations using the future tense and conditional forms in German.",
        topics: [
          "Formation of the future tense with werden",
          "Alternative ways to express future",
          "Formation of Konjunktiv II (würde + infinitive)",
          "Irregular Konjunktiv II forms",
          "Conditional sentences with wenn"
        ],
        examples: [
          { original: "Ich werde nächstes Jahr nach Deutschland reisen.", translation: "I will travel to Germany next year." },
          { original: "An deiner Stelle würde ich mehr lernen.", translation: "In your place, I would study more." },
          { original: "Wenn ich Zeit hätte, käme ich mit.", translation: "If I had time, I would come along." }
        ]
      },
      {
        title: "German Culture and Society",
        description: "Explore aspects of German culture, traditions, and social customs while learning related vocabulary and expressions.",
        topics: [
          "German-speaking countries and regions",
          "Holidays and celebrations",
          "Food and dining culture",
          "Education and work life",
          "Arts and entertainment"
        ],
        examples: [
          { original: "Das Oktoberfest findet jedes Jahr in München statt.", translation: "The Oktoberfest takes place every year in Munich." },
          { original: "In Deutschland isst man oft Abendbrot mit Brot und Aufschnitt.", translation: "In Germany, people often eat dinner with bread and cold cuts." },
          { original: "Die duale Ausbildung ist ein wichtiger Teil des deutschen Bildungssystems.", translation: "The dual training system is an important part of the German education system." }
        ]
      }
    ]
  },
  {
    title: "Advanced Level (B2-C1)",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    description: "Refine your German to near-native proficiency with advanced grammar, nuanced vocabulary, and sophisticated expressions for academic and professional contexts.",
    lessons: [
      {
        title: "Passive Voice and Subjunctive",
        description: "Master complex grammatical structures including the passive voice and the subjunctive mood for reported speech and unreal conditions.",
        topics: [
          "Formation and use of the passive voice",
          "Alternatives to passive constructions",
          "Konjunktiv I for reported speech",
          "Advanced Konjunktiv II structures",
          "Expressing wishes and hypothetical situations"
        ],
        examples: [
          { original: "Das Haus wurde im letzten Jahrhundert gebaut.", translation: "The house was built in the last century." },
          { original: "Er sagte, er sei krank gewesen.", translation: "He said he had been sick." },
          { original: "Hätte ich das gewusst, wäre ich nicht gekommen.", translation: "Had I known that, I wouldn't have come." }
        ]
      },
      {
        title: "Advanced Sentence Structure",
        description: "Learn to construct complex sentences with multiple clauses and master the German word order rules for sophisticated expression.",
        topics: [
          "Subordinating conjunctions and word order",
          "Relative clauses in all cases",
          "Extended attributes and participle constructions",
          "Infinitive clauses with zu",
          "Connectors and text coherence"
        ],
        examples: [
          { original: "Obwohl es regnete, gingen wir spazieren.", translation: "Although it was raining, we went for a walk." },
          { original: "Der Mann, dessen Auto gestohlen wurde, rief die Polizei.", translation: "The man whose car was stolen called the police." },
          { original: "Die in der Zeitung veröffentlichte Nachricht war falsch.", translation: "The news published in the newspaper was false." }
        ]
      },
      {
        title: "Academic and Professional German",
        description: "Develop the language skills needed for academic studies or professional work in German-speaking environments.",
        topics: [
          "Academic writing style",
          "Research and presentation vocabulary",
          "Professional correspondence",
          "Business terminology",
          "Formal discussion and debate"
        ],
        examples: [
          { original: "Die vorliegende Studie befasst sich mit den Auswirkungen des Klimawandels.", translation: "The present study deals with the effects of climate change." },
          { original: "Hiermit bewerbe ich mich um die ausgeschriebene Stelle als Projektmanager.", translation: "I hereby apply for the advertised position as project manager." },
          { original: "Wir bitten Sie, uns bis zum 15. März eine Rückmeldung zu geben.", translation: "We ask you to give us feedback by March 15." }
        ]
      },
      {
        title: "Literature and Media Analysis",
        description: "Explore German literature, film, and media to deepen your cultural understanding and enhance your analytical language skills.",
        topics: [
          "Literary periods in German literature",
          "Text analysis techniques",
          "Film and theater vocabulary",
          "Media literacy and critical analysis",
          "Idiomatic expressions and cultural references"
        ],
        examples: [
          { original: "Goethes 'Faust' gilt als eines der bedeutendsten Werke der deutschen Literatur.", translation: "Goethe's 'Faust' is considered one of the most significant works of German literature." },
          { original: "Der Film thematisiert die deutsche Wiedervereinigung aus einer persönlichen Perspektive.", translation: "The film addresses German reunification from a personal perspective." },
          { original: "Diese Redewendung stammt aus dem Mittelalter und bezieht sich auf damalige Handwerksbräuche.", translation: "This idiom dates back to the Middle Ages and refers to craft customs of that time." }
        ]
      }
    ]
  },
  {
    title: "Specialized German (C1-C2)",
    icon: <Bookmark className="h-6 w-6 text-primary" />,
    description: "Focus on specialized areas of German for specific purposes, from technical fields to the arts, with sophisticated vocabulary and cultural nuances.",
    lessons: [
      {
        title: "Business and Economics",
        description: "Master the vocabulary and communication skills needed for the German business world, from corporate environments to international trade.",
        topics: [
          "Corporate structures and roles",
          "Finance and accounting terminology",
          "Marketing and sales vocabulary",
          "Business negotiation techniques",
          "Economic policy and analysis"
        ],
        examples: [
          { original: "Der Vorstand hat beschlossen, die Investitionen im nächsten Quartal zu erhöhen.", translation: "The executive board has decided to increase investments in the next quarter." },
          { original: "Die Umsatzentwicklung zeigt einen positiven Trend für das laufende Geschäftsjahr.", translation: "The sales development shows a positive trend for the current fiscal year." },
          { original: "Wir streben eine langfristige Zusammenarbeit mit strategischen Partnern an.", translation: "We aim for long-term cooperation with strategic partners." }
        ]
      },
      {
        title: "Science and Technology",
        description: "Learn specialized vocabulary and communication strategies for scientific and technical fields, from engineering to information technology.",
        topics: [
          "Engineering terminology",
          "IT and computer science vocabulary",
          "Research and development processes",
          "Technical documentation writing",
          "Scientific presentation skills"
        ],
        examples: [
          { original: "Die Implementierung des neuen Algorithmus verbessert die Verarbeitungsgeschwindigkeit um 30%.", translation: "The implementation of the new algorithm improves processing speed by 30%." },
          { original: "Der Versuchsaufbau besteht aus mehreren miteinander verbundenen Komponenten.", translation: "The experimental setup consists of several interconnected components." },
          { original: "Die Daten werden verschlüsselt und in einer Cloud-basierten Datenbank gespeichert.", translation: "The data is encrypted and stored in a cloud-based database." }
        ]
      },
      {
        title: "Law and Politics",
        description: "Develop understanding of legal and political terminology in German, crucial for work in international relations, law, or public administration.",
        topics: [
          "German legal system",
          "Constitutional and EU law",
          "Contract and business law terminology",
          "Political institutions and processes",
          "International relations vocabulary"
        ],
        examples: [
          { original: "Das Bundesverfassungsgericht hat das Gesetz für verfassungswidrig erklärt.", translation: "The Federal Constitutional Court has declared the law unconstitutional." },
          { original: "Die Vertragsparteien verpflichten sich zur Einhaltung der vereinbarten Bedingungen.", translation: "The contracting parties commit to comply with the agreed conditions." },
          { original: "Der Bundestag hat den Gesetzentwurf mit großer Mehrheit verabschiedet.", translation: "The Bundestag passed the bill with a large majority." }
        ]
      },
      {
        title: "Arts and Cultural Studies",
        description: "Explore specialized vocabulary for discussing art, music, philosophy, and cultural studies in academic and professional contexts.",
        topics: [
          "Art history terminology",
          "Music theory and performance",
          "Philosophical concepts",
          "Cultural theory and criticism",
          "Museum and exhibition vocabulary"
        ],
        examples: [
          { original: "Die expressionistischen Werke dieser Periode zeichnen sich durch intensive Farbgebung aus.", translation: "The expressionist works of this period are characterized by intense coloration." },
          { original: "Die Aufführung der Symphonie wurde von einem 80-köpfigen Orchester durchgeführt.", translation: "The performance of the symphony was conducted by an 80-piece orchestra." },
          { original: "Dieser philosophische Ansatz steht im Widerspruch zu den früheren Theorien des Rationalismus.", translation: "This philosophical approach contradicts the earlier theories of rationalism." }
        ]
      }
    ]
  }
];

export default function German() {
  return (
    <CurriculumLayout 
      language="German" 
      flag="🇩🇪" 
      color="from-yellow-500 to-black" 
      curriculum={germanCurriculum} 
    />
  );
}