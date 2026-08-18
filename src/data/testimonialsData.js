export const testimonialsData = [
  {
    id: 1,
    author: "Amine Khellaf",
    name: "Amine Khellaf",
    role: "Smile Makeover Patient",
    rating: 5,
    date: "2 weeks ago",
    treatment: "E-Max Porcelain Veneers",
    quote:
      "Dr. LABABOU is a true artist. I was insecure about my anterior teeth for years, and after just two visits at Aura Clinic, my smile looks better than I ever imagined. The clinic is spotless and modern!",
  },
  {
    id: 2,
    author: "Sarah Benali",
    name: "Sarah Benali",
    role: "Dental Implant Patient",
    rating: 5,
    date: "1 month ago",
    treatment: "Titanium Implant & Zirconia Crown",
    quote:
      "I was terrified of getting a dental implant, but Dr. Lababou explained every step with total transparency. The surgery was completely painless, and the new tooth feels and looks 100% natural.",
  },
  {
    id: 3,
    author: "Yassine Mansouri",
    name: "Yassine Mansouri",
    role: "Scaling & Laser Whitening",
    rating: 5,
    date: "3 weeks ago",
    treatment: "Laser Teeth Whitening",
    quote:
      "The best dental experience in Kolea. The staff is welcoming, the waiting lounge is luxurious, and my teeth became remarkably white in one session without any pain or sensitivity.",
  },
  {
    id: 4,
    author: "Meriem Ziani",
    name: "Meriem Ziani",
    role: "Full Arch Rehabilitation",
    rating: 5,
    date: "2 months ago",
    treatment: "Zirconia Fixed Bridge",
    quote:
      "Words cannot describe how grateful I am to Aura Clinic. They fixed my broken teeth and gave me my confidence back. Professionalism and cleanliness are 10/10.",
  },
];

export const testimonials = testimonialsData;

export const faqList = [
  {
    id: 1,
    question: "How long does a dental veneer smile makeover take?",
    answer:
      "A complete E-Max veneer smile makeover typically takes 2 to 3 appointments over 1 to 2 weeks. During the first visit, we take digital scans and prepare the teeth with minimal prep. In the second visit, your custom handcrafted porcelain veneers are bonded permanently.",
  },
  {
    id: 2,
    question: "Is dental implant surgery painful?",
    answer:
      "No. The procedure is performed under gentle computer-guided local anesthesia so you feel zero pain during surgery. Post-procedure discomfort is minimal and easily managed with standard mild analgesics for 24-48 hours.",
  },
  {
    id: 3,
    question: "How do I book an appointment with Dr. LABABOU.N?",
    answer:
      "You can book directly using our online appointment form, via direct phone call at 0553.64.78.91, or by sending a message to our official WhatsApp (+213553647891).",
  },
  {
    id: 4,
    question: "What are the clinic's opening hours?",
    answer:
      "We are open from Saturday through Thursday from 8:30 AM to 7:00 PM. Emergency appointments are available upon direct phone inquiry.",
  },
  {
    id: 5,
    question: "Do you offer warranties on dental crowns and implants?",
    answer:
      "Yes, we use certified premium European titanium implants and Ivoclar/Zirkonzahn ceramics that come with extensive clinical warranties and material certification passports.",
  },
];

export const faqData = faqList;

export function getTestimonialsData(lang = "en") {
  if (lang === "fr") {
    return [
      {
        id: 1,
        author: "Amine Khellaf",
        name: "Amine Khellaf",
        role: "Patient Facettes Esthétiques",
        rating: 5,
        date: "Il y a 2 semaines",
        treatment: "Facettes en Porcelaine E-Max",
        quote:
          "Le Dr LABABOU est un véritable artiste. J'avais un complexe avec mes dents antérieures depuis des années, et en seulement deux séances à la clinique Aura, mon sourire est métamorphosé. La clinique est d'une propreté irréprochable !",
      },
      {
        id: 2,
        author: "Sarah Benali",
        name: "Sarah Benali",
        role: "Patiente Implantologie",
        rating: 5,
        date: "Il y a 1 mois",
        treatment: "Implant Titane & Couronne Zircone",
        quote:
          "J'avais une grande appréhension pour la pose d'un implant, mais le Dr Lababou a tout expliqué avec clarté. L'intervention s'est déroulée sans aucune douleur et ma nouvelle dent est absolument naturelle.",
      },
      {
        id: 3,
        author: "Yassine Mansouri",
        name: "Yassine Mansouri",
        role: "Patient Détartrage & Blanchiment",
        rating: 5,
        date: "Il y a 3 semaines",
        treatment: "Blanchiment Dentaire au Laser",
        quote:
          "La meilleure expérience dentaire à Koléa. L'accueil est chaleureux, la clinique moderne et mes dents sont devenues nettement plus blanches en une seule séance sans aucune sensibilité.",
      },
      {
        id: 4,
        author: "Meriem Ziani",
        name: "Meriem Ziani",
        role: "Patiente Réhabilitation Globale",
        rating: 5,
        date: "Il y a 2 mois",
        treatment: "Bridge Fixe en Zircone",
        quote:
          "Je ne remercierai jamais assez toute l'équipe de la clinique Aura. Ils ont restauré mes dents abîmées et m'ont redonné confiance en moi. Professionnalisme et hygiène irréprochables.",
      },
    ];
  }

  if (lang === "ar") {
    return [
      {
        id: 1,
        author: "أمين خلاف",
        name: "أمين خلاف",
        role: "مريض تجميل الابتسامة",
        rating: 5,
        date: "منذ أسبوعين",
        treatment: "عدسات البورسلين E-Max",
        quote:
          "الدكتور لبابو فنان حقيقي في مجاله. كنت أعاني من عدم الرضا عن أسناني الأمامية لسنوات، وفي جلستين فقط في عيادة أورا، أصبحت ابتسامتي أجمل مما كنت أتخيل. العيادة غاية في النظافة والعصرية!",
      },
      {
        id: 2,
        author: "سارة بن علي",
        name: "سارة بن علي",
        role: "مريضة زراعة أسنان",
        rating: 5,
        date: "منذ شهر",
        treatment: "زراعة تيتانيوم وتاج زيركون",
        quote:
          "كنت خائفة جداً من إجراء زراعة الأسنان، لكن د. لبابو شرح لي كل خطوة بشفافية تامة. كانت الجراحة بدون ألم على الإطلاق، والسن الجديد يبدو طبيعياً بنسبة 100%.",
      },
      {
        id: 3,
        author: "ياسين منصوري",
        name: "ياسين منصوري",
        role: "مريض تنظيف وتبييض ليزري",
        rating: 5,
        date: "منذ 3 أسابيع",
        treatment: "تبييض الأسنان بالليزر",
        quote:
          "أفضل تجربة علاج أسنان في القليعة. الاستقبال ودود للغاية، والعيادة مريحة وراقية، وأسناني أصبحت ناصعة البياض في جلسة واحدة فقط بدون أي ألم أو حساسية.",
      },
      {
        id: 4,
        author: "مريم زياني",
        name: "مريم زياني",
        role: "مريضة إعادة تأهيل كامل الفم",
        rating: 5,
        date: "منذ شهرين",
        treatment: "جسر زيركون ثابت",
        quote:
          "كلمات الشكر لا تفي عيادة أورا حقها. أعادوا ترميم أسناني المكسورة وأعادوا لي ثقتي بنفسي. الاحترافية والنظافة تستحقان 10 على 10 بكل جدارة.",
      },
    ];
  }

  return testimonialsData;
}

export function getFaqData(lang = "en") {
  if (lang === "fr") {
    return [
      {
        id: 1,
        question: "Combien de temps nécessite une transformation du sourire par facettes ?",
        answer:
          "La pose complète de facettes E-Max s'effectue généralement en 2 à 3 rendez-vous répartis sur 1 à 2 semaines. Lors de la première séance, nous réalisons les empreintes numériques 3D et la micro-préparation. Lors de la seconde séance, vos facettes céramiques personnalisées sont collées définitivement.",
      },
      {
        id: 2,
        question: "La pose d'un implant dentaire est-elle douloureuse ?",
        answer:
          "Non. L'intervention est réalisée sous anesthésie locale douce et ciblée, ce qui garantit une absence totale de douleur pendant la pose. L'inconfort post-opératoire est minime et parfaitement contrôlé par des antalgiques classiques durant 24 à 48 heures.",
      },
      {
        id: 3,
        question: "Comment prendre rendez-vous avec le Dr LABABOU.N ?",
        answer:
          "Vous pouvez réserver directement via notre formulaire en ligne, par téléphone au 0553.64.78.91, ou en nous écrivant sur notre numéro WhatsApp officiel (+213 553 64 78 91).",
      },
      {
        id: 4,
        question: "Quels sont les horaires d'ouverture de la clinique ?",
        answer:
          "La clinique vous accueille du samedi au jeudi de 08h30 à 19h00. Les urgences dentaires sont prises en charge sur appel préalable au secrétariat.",
      },
      {
        id: 5,
        question: "Proposez-vous des garanties et certificats sur les implants et couronnes ?",
        answer:
          "Oui, nous utilisons exclusivement des implants en titane européens certifiés et des céramiques Ivoclar / Zirkonzahn accompagnés de passeports de traçabilité et de garanties cliniques.",
      },
    ];
  }

  if (lang === "ar") {
    return [
      {
        id: 1,
        question: "كم يستغرق تجميل الابتسامة بعدسات الفينيرز الخزفية؟",
        answer:
          "يستغرق تجميل الابتسامة بعدسات E-Max عادة من جلستين إلى 3 جلسات على مدار أسبوع إلى أسبوعين. في الزيارة الأولى نأخذ المقاسات الرقمية ونقوم بالتحضير المجهري الخفيف، وفي الزيارة الثانية يتم تثبيت العدسات الخزفية المخصصة بشكل دائم.",
      },
      {
        id: 2,
        question: "هل عملية زراعة الأسنان مؤلمة؟",
        answer:
          "لا. يتم الإجراء تحت تخدير موضعي لطيف ودقيق بحيث لا يشعر المريض بأي ألم أثناء العملية. أما الانزعاج الطفيف بعد الجراحة فيتم السيطرة عليه بسهولة بالمسكنات الخفيفة المعتادة لمدة 24-48 ساعة.",
      },
      {
        id: 3,
        question: "كيف يمكنني حجز موعد مع الدكتور لبابو.ن؟",
        answer:
          "يمكنكم الحجز مباشرة عبر نموذج المواعيد الإلكتروني بموقعنا، أو بالاتصال هاتفياً على الرقم 0553.64.78.91، أو عبر مراسلتنا على رقم الواتساب الرسمي (+213 553 64 78 91).",
      },
      {
        id: 4,
        question: "ما هي أوقات وساعات العمل بالعيادة؟",
        answer:
          "نستقبلكم من يوم السبت إلى يوم الخميس من الساعة 08:30 صباحاً وحتى 07:00 مساءً. وتتوفر مواعيد الحالات الطارئة بالتنسيق المسبق مع الاستقبال.",
      },
      {
        id: 5,
        question: "هل تقدمون ضمانات وشهادات منشأ للزراعات والتيجان؟",
        answer:
          "نعم، نستخدم حصرياً غرسات تيتانيوم أوروبية معتمدة وسيراميك إيفوكلار وزركونزان ألماني وسويسري مرفقة ببطاقة تتبع وضمان سريري رسمي لجودة المواد.",
      },
    ];
  }

  return faqList;
}
