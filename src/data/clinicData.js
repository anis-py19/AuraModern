export const clinicData = {
  name: "Aura Modern Dentistry",
  arabicName: "عيادة زراعة و تجميل الأسنان",
  tagline: "Advanced Dental Implants & Aesthetic Dentistry",
  leadDoctor: {
    name: "Dr. LABABOU.N",
    title: "Lead Implantologist & Aesthetic Dental Surgeon",
    qualification: "D.D.S., Specialist in Implantology & Oral Rehabilitation",
    experience: "X+ Years Clinical Excellence",
    phone: "0553.64.78.91",
    whatsapp: "+213553647891",
    email: "aura.modern.dentistry@gmail.com",
    instagram: "@aura.modern.dentistry",
    instagramUrl: "https://instagram.com/aura.modern.dentistry",
    facebook: "aura.modern.dentistry",
    facebookUrl: "https://facebook.com/aura.modern.dentistry",
    bio: "Dr. LABABOU.N specializes in high-precision dental implants, complete aesthetic smile makeovers, and minimally invasive restorative dentistry using world-class protocols and advanced digital workflows.",
  },
  contact: {
    phone: "0553.64.78.91",
    phoneDisplay: "0553 64 78 91",
    whatsapp: "+213553647891",
    email: "aura.modern.dentistry@gmail.com",
    address: "Aura Modern Dentistry Clinic, Kolea, Algeria",
    city: "Kolea",
    country: "Algeria",
    hours: {
      weekdays: "Saturday - Thursday : 8:30 AM - 7:00 PM",
      friday: "Friday : Emergency by Appointment Only",
      summary: "Sat - Thu: 8:30am - 7:00pm",
    },
  },
  stats: [
    { label: "Successful Smile Transformations", value: "X+" },
    { label: "Dental Implants Placed", value: "X+" },
    { label: "Patient Satisfaction", value: "X%" },
    { label: "Years of Trust", value: "X+" },
  ],
  pillars: [
    {
      title: "State-of-the-Art Technology",
      description: "Equipped with digital intraoral imaging, 3D diagnostics, and modern surgical units for painless treatments.",
      icon: "technology",
    },
    {
      title: "Certified Specialists",
      description: "Led by Dr. LABABOU.N with specialized post-graduate credentials in aesthetic surgery and implantology.",
      icon: "doctor",
    },
    {
      title: "Pain-Free Procedures",
      description: "Advanced gentle anesthesia and minimally invasive techniques tailored for total patient relaxation.",
      icon: "shield",
    },
    {
      title: "Transparent & Fair Pricing",
      description: "Clear upfront quotes with flexible payment plans and zero hidden clinical fees.",
      icon: "pricing",
    },
  ],
};

export function getClinicData(lang = "en") {
  if (lang === "fr") {
    return {
      ...clinicData,
      name: "Aura Dentisterie Moderne",
      tagline: "Implantologie Avancée & Dentisterie Esthétique",
      leadDoctor: {
        ...clinicData.leadDoctor,
        name: "Dr LABABOU.N",
        title: "Chirurgien-Dentiste Spécialiste en Implantologie & Esthétique",
        qualification: "D.E.S., Spécialiste en Implantologie & Réhabilitation Orale",
        experience: "X+ Années d'Excellence Clinique",
        bio: "Le Dr LABABOU.N est spécialisé dans l'implantologie de haute précision, la réhabilitation esthétique complète du sourire et la dentisterie conservatrice a minima, appliquant des protocoles européens rigoureux et une chaîne numérique 3D.",
      },
      contact: {
        ...clinicData.contact,
        address: "Clinique Aura Dentisterie Moderne, Koléa, Algérie",
        city: "Koléa",
        country: "Algérie",
        hours: {
          weekdays: "Samedi - Jeudi : 08h30 - 19h00",
          friday: "Vendredi : Urgences sur Rendez-vous",
          summary: "Sam - Jeu : 08h30 - 19h00",
        },
      },
      stats: [
        { label: "Transformations de Sourires Réussies", value: "X+" },
        { label: "Implants Dentaires Posés", value: "X+" },
        { label: "Satisfaction des Patients", value: "X%" },
        { label: "Années d'Excellence & Confiance", value: "X+" },
      ],
      pillars: [
        {
          title: "Plateau Technique de Pointe",
          description: "Équipé d'imagerie intra-orale 3D, de diagnostics numériques et d'unités de chirurgie modernes pour des soins sans douleur.",
          icon: "technology",
        },
        {
          title: "Spécialiste Qualifié",
          description: "Dirigé par le Dr LABABOU.N, titulaire de diplômes de spécialité en implantologie et chirurgie esthétique.",
          icon: "doctor",
        },
        {
          title: "Protocoles Indolores",
          description: "Anesthésie locale douce assistée par ordinateur et micro-chirurgie préservatrice pour un confort optimal.",
          icon: "shield",
        },
        {
          title: "Tarification Transparente",
          description: "Devis détaillés et écrits avant tout traitement, sans coûts cachés, avec facilités de paiement échelonné.",
          icon: "pricing",
        },
      ],
    };
  }

  if (lang === "ar") {
    return {
      ...clinicData,
      name: "عيادة أورا لطب وجراحة الأسنان",
      tagline: "زراعة الأسنان المتقدمة والطب التجميلي",
      leadDoctor: {
        ...clinicData.leadDoctor,
        name: "الدكتور لبابو.ن",
        title: "جراح أسنان أخصائي زراعة وتجميل الأسنان والفكين",
        qualification: "دكتوراه في جراحة الأسنان، تخصص زراعة الأسنان وإعادة تأهيل الفم",
        experience: "أكثر من X عاماً من الخبرة والتميز السريري",
        bio: "يتخصص الدكتور لبابو.ن في زراعة الأسنان الدقيقة، وإعادة التأهيل التجميلي الكامل للابتسامة، وطب الأسنان التحفظي بأحدث البروتوكولات والتقنيات الرقمية ثلاثية الأبعاد.",
      },
      contact: {
        ...clinicData.contact,
        address: "عيادة أورا لطب وتجميل الأسنان، القليعة، الجزائر",
        city: "القليعة",
        country: "الجزائر",
        hours: {
          weekdays: "السبت - الخميس: 08:30 صباحاً - 07:00 مساءً",
          friday: "الجمعة: الحالات الطارئة بموعد مسبق",
          summary: "السبت - الخميس: 08:30 ص - 07:00 م",
        },
      },
      stats: [
        { label: "ابتسامة ناجحة تم تحويلها", value: "+X" },
        { label: "زراعة أسنان ناجحة", value: "+X" },
        { label: "نسبة رضا المرضى", value: "%X" },
        { label: "سنوات من الثقة والخبرة", value: "+X" },
      ],
      pillars: [
        {
          title: "أحدث التقنيات الرقمية",
          description: "مجهزة بالتصوير الفموي الرقمي ثلاثي الأبعاد والتشخيص المتقدم ووحدات جراحية حديثة لعلاجات دقيقة وبدون ألم.",
          icon: "technology",
        },
        {
          title: "طبيب مختص ومعتمد",
          description: "بإشراف مباشر من الدكتور لبابو.ن الحاصل على دراسات عليا تخصصية في زراعة الأسنان وجراحة الفم التجميلية.",
          icon: "doctor",
        },
        {
          title: "علاجات لطيفة وبدون ألم",
          description: "تقنيات تخدير موضعي متطورة وجراحة مجهرية لطيفة تضمن راحة تامة للمريض أثناء وبعد العلاج.",
          icon: "shield",
        },
        {
          title: "تسعير واضح وشفاف",
          description: "عروض أسعار مكتوبة ومفصلة مسبقاً مع خيارات دفع ميسرة وبدون أي رسوم خفية.",
          icon: "pricing",
        },
      ],
    };
  }

  return clinicData;
}
