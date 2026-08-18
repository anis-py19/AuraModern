// Clinic Facility Photos
import clinicPhoto1 from "../assets/CliniquePicture/photo_1_2026-08-16_03-52-40.jpg";
import clinicPhoto2 from "../assets/CliniquePicture/photo_2_2026-08-16_03-52-40.jpg";
import clinicPhoto3 from "../assets/CliniquePicture/photo_3_2026-08-16_03-52-40.jpg";
import clinicPhoto4 from "../assets/CliniquePicture/photo_4_2026-08-16_03-52-40.jpg";
import clinicPhoto5 from "../assets/CliniquePicture/photo_5_2026-08-16_03-52-40.jpg";
import clinicPhoto6 from "../assets/CliniquePicture/photo_6_2026-08-16_03-52-40.jpg";

// Clinical Cases Before & After Photos
import case1Before from "../assets/ClientWork/1/photo_1_2026-08-16_03-54-30.jpg";
import case1After from "../assets/ClientWork/1/photo_2_2026-08-16_03-54-30.jpg";

import case2Before from "../assets/ClientWork/2/photo_1_2026-08-16_03-54-52.jpg";
import case2After from "../assets/ClientWork/2/photo_2_2026-08-16_03-54-52.jpg";

import case3Before from "../assets/ClientWork/3/photo_1_2026-08-16_03-55-14.jpg";
import case3After from "../assets/ClientWork/3/photo_2_2026-08-16_03-55-14.jpg";

import case4Before from "../assets/ClientWork/4/photo_1_2026-08-16_03-55-35.jpg";
import case4After from "../assets/ClientWork/4/photo_2_2026-08-16_03-55-35.jpg";

import case5Before from "../assets/ClientWork/5/photo_1_2026-08-16_03-55-55.jpg";
import case5After from "../assets/ClientWork/5/photo_2_2026-08-16_03-55-55.jpg";

import case6Before from "../assets/ClientWork/6/photo_1_2026-08-16_03-56-15.jpg";
import case6After from "../assets/ClientWork/6/photo_2_2026-08-16_03-56-15.jpg";

import case7Before from "../assets/ClientWork/7/photo_1_2026-08-16_03-56-33.jpg";
import case7After from "../assets/ClientWork/7/photo_2_2026-08-16_03-56-33.jpg";

import case8Before from "../assets/ClientWork/8/photo_1_2026-08-16_03-56-39.jpg";
import case8After from "../assets/ClientWork/8/photo_2_2026-08-16_03-56-39.jpg";

import case9AfterFront from "../assets/ClientWork/9/photo_1_2026-08-16_03-56-46.jpg";
import case9BeforeClose from "../assets/ClientWork/9/photo_2_2026-08-16_03-56-46.jpg";
import case9BeforeFull from "../assets/ClientWork/9/photo_3_2026-08-16_03-56-46.jpg";
import case9AfterSide from "../assets/ClientWork/9/photo_4_2026-08-16_03-56-46.jpg";

export const facilityGallery = [
  {
    id: 1,
    title: "Clinic Exterior & Main Entrance",
    category: "Entrance",
    description: "Welcome to Aura Modern Dentistry, Dr. LABABOU.N Dental Implant & Aesthetic Clinic in Kolea.",
    image: clinicPhoto1,
    badge: "Official Clinic Entrance",
  },
  {
    id: 2,
    title: "Surgical & Operating Suite",
    category: "Operatory",
    description: "Equipped with state-of-the-art sterile dental chairs, digital intraoral diagnostics, and surgical lighting.",
    image: clinicPhoto2,
    badge: "Sterile Procedure Room",
  },
  {
    id: 3,
    title: "Doctor's Private Consultation Desk",
    category: "Consultation",
    description: "Comfortable, modern consultation area for one-on-one digital smile design planning and case review.",
    image: clinicPhoto3,
    badge: "Doctor Lababou Suite",
  },
  {
    id: 4,
    title: "Welcome & Reception Desk",
    category: "Reception",
    description: "Modern reception area featuring the golden Aura Smile emblem and seamless check-in.",
    image: clinicPhoto4,
    badge: "Reception & Check-in",
  },
  {
    id: 5,
    title: "Central Clinical Hallway",
    category: "Facility",
    description: "Spacious clinic corridor connecting patient suites, hygiene bays, and diagnostic rooms.",
    image: clinicPhoto5,
    badge: "Clinic Corridor",
  },
  {
    id: 6,
    title: "Patient Relaxation Lounge",
    category: "Lounge",
    description: "Comfortable ergonomic seating, soothing ambient decor, and quiet atmosphere for patient comfort.",
    image: clinicPhoto6,
    badge: "Waiting Lounge",
  },
];

export const clinicalCases = [
  {
    id: 1,
    title: "Anterior Smile Alignment & Gap Closure",
    category: "Veneers & Aesthetics",
    categoryId: "veneers",
    treatment: "E-Max Porcelain Veneers & Incisal Alignment",
    doctor: "Dr. LABABOU.N",
    timeframe: "2 Visits",
    description: "Closed anterior gaps, corrected bite symmetry, and brightened tooth shade with ultra-thin ceramic veneers.",
    beforeImage: case1Before,
    afterImage: case1After,
  },
  {
    id: 2,
    title: "Full Upper Arch Smile Restoration",
    category: "Prosthodontics",
    categoryId: "prostho",
    treatment: "Zirconia Crowns & Gingival Recovery",
    doctor: "Dr. LABABOU.N",
    timeframe: "3 Visits",
    description: "Rehabilitated severe anterior decay, restored fractured incisors, and established healthy gingival contours.",
    beforeImage: case2Before,
    afterImage: case2After,
  },
  {
    id: 3,
    title: "Ultrasonic Deep Scaling & Teeth Whitening",
    category: "Hygiene & Whitening",
    categoryId: "whitening",
    treatment: "Ultrasonic Periodontal Debridement & LED Bleaching",
    doctor: "Dr. LABABOU.N",
    timeframe: "1 Session (60 mins)",
    description: "Eliminated dense calculus, staining, and plaque buildup followed by in-office laser whitening.",
    beforeImage: case3Before,
    afterImage: case3After,
  },
  {
    id: 4,
    title: "Lateral Fixed Bridge & Occlusal Rehabilitation",
    category: "Fixed Bridges",
    categoryId: "bridges",
    treatment: "High-Strength Zirconia Dental Bridge",
    doctor: "Dr. LABABOU.N",
    timeframe: "2 Visits",
    description: "Restored missing lateral dentition over prepared abutment teeth, restoring balanced masticatory function.",
    beforeImage: case4Before,
    afterImage: case4After,
  },
  {
    id: 5,
    title: "Multi-Unit Anterior Ceramic Bridge",
    category: "Crowns & Bridges",
    categoryId: "bridges",
    treatment: "Layered Zirconia Ceramic Framework",
    doctor: "Dr. LABABOU.N",
    timeframe: "2 Visits",
    description: "Precision-milled monolithic bridge placed over prepared tooth abutments with natural light translucency.",
    beforeImage: case5Before,
    afterImage: case5After,
  },
  {
    id: 6,
    title: "Aesthetic Porcelain Veneer Transformation",
    category: "Veneers & Aesthetics",
    categoryId: "veneers",
    treatment: "Minimal-Prep E-Max Veneers",
    doctor: "Dr. LABABOU.N",
    timeframe: "2 Visits",
    description: "Corrected worn enamel, uneven incisal edges, and discoloration into a symmetrical, bright smile.",
    beforeImage: case6Before,
    afterImage: case6After,
  },
  {
    id: 7,
    title: "Fractured Incisor Crown Reconstruction",
    category: "Oral Surgery & Restorative",
    categoryId: "restorative",
    treatment: "Single Monolithic Ceramic Crown",
    doctor: "Dr. LABABOU.N",
    timeframe: "2 Visits",
    description: "Repaired fractured anterior crown with seamless shade matching indistinguishable from natural teeth.",
    beforeImage: case7Before,
    afterImage: case7After,
  },
  {
    id: 8,
    title: "Anterior Missing Teeth Reconstruction",
    category: "Implants & Bridges",
    categoryId: "implants",
    treatment: "Implant-Supported Aesthetic Dental Bridge",
    doctor: "Dr. LABABOU.N",
    timeframe: "Complete Rehabilitation",
    description: "Replaced missing central/lateral incisors, restoring natural facial balance and confident smile.",
    beforeImage: case8Before,
    afterImage: case8After,
  },
  {
    id: 9,
    title: "Full Hollywood Smile Makeover",
    category: "Full Rehabilitation",
    categoryId: "veneers",
    treatment: "Complete Anterior Ceramic Rehabilitation",
    doctor: "Dr. LABABOU.N",
    timeframe: "Full Treatment Plan",
    description: "Transformed severe carious decay of upper incisors into a flawless, healthy, and radiant celebrity smile.",
    beforeImage: case9BeforeFull,
    beforeImageClose: case9BeforeClose,
    afterImage: case9AfterFront,
    afterImageSide: case9AfterSide,
  },
];

export function getClinicalCases(lang = "en") {
  if (lang === "fr") {
    return [
      {
        id: 1,
        title: "Alignement Antérieur & Fermeture de Diastème",
        category: "Facettes & Esthétique",
        categoryId: "veneers",
        treatment: "Facettes Céramiques E-Max & Alignement Incisif",
        doctor: "Dr LABABOU.N",
        timeframe: "2 Séances",
        description: "Fermeture des espaces antérieurs, harmonisation de la symétrie du sourire et éclaircissement durable de la teinte.",
        beforeImage: case1Before,
        afterImage: case1After,
      },
      {
        id: 2,
        title: "Restauration Complète de l'Arcade Supérieure",
        category: "Prothèse & Reconstruction",
        categoryId: "prostho",
        treatment: "Couronnes Zircone & Cicatrisation Gingivale",
        doctor: "Dr LABABOU.N",
        timeframe: "3 Séances",
        description: "Prise en charge de dégradations antérieures sévères, reconstruction des incisives fracturées et rétablissement du profil parodontal.",
        beforeImage: case2Before,
        afterImage: case2After,
      },
      {
        id: 3,
        title: "Détartrage Ultrasonique & Blanchiment Laser",
        category: "Hygiène & Blanchiment",
        categoryId: "whitening",
        treatment: "Débridement Parodontal Ultrasonique & Éclaircissement LED",
        doctor: "Dr LABABOU.N",
        timeframe: "1 Séance (60 min)",
        description: "Élimination complète du tartre sous-gingival et des colorations exogènes suivie d'un blanchiment médical au fauteuil.",
        beforeImage: case3Before,
        afterImage: case3After,
      },
      {
        id: 4,
        title: "Bridge Fixe Latéral & Réhabilitation Occlusale",
        category: "Bridges Fixes",
        categoryId: "bridges",
        treatment: "Bridge Dentaire en Zircone Haute Résistance",
        doctor: "Dr LABABOU.N",
        timeframe: "2 Séances",
        description: "Remplacement fixe des dents absentes sur piliers préparés, restaurant un calage occlusal et une mastication équilibrée.",
        beforeImage: case4Before,
        afterImage: case4After,
      },
      {
        id: 5,
        title: "Bridge Antérieur Plural en Céramique",
        category: "Couronnes & Bridges",
        categoryId: "bridges",
        treatment: "Armature Céramique Stratifiée en Zircone",
        doctor: "Dr LABABOU.N",
        timeframe: "2 Séances",
        description: "Bridge monolithique usiné au micron scellé sur dents préparées avec réfraction naturelle de la lumière.",
        beforeImage: case5Before,
        afterImage: case5After,
      },
      {
        id: 6,
        title: "Métamorphose Esthétique par Facettes Porcelaine",
        category: "Facettes & Esthétique",
        categoryId: "veneers",
        treatment: "Facettes E-Max à Préparation Minimale",
        doctor: "Dr LABABOU.N",
        timeframe: "2 Séances",
        description: "Correction de l'usure de l'émail, des irrégularités incisives et des dyschromies pour un sourire harmonieux.",
        beforeImage: case6Before,
        afterImage: case6After,
      },
      {
        id: 7,
        title: "Reconstruction d'une Incisive Fracturée",
        category: "Chirurgie & Restauration",
        categoryId: "restorative",
        treatment: "Couronne Céramique Monolithique Unitaire",
        doctor: "Dr LABABOU.N",
        timeframe: "2 Séances",
        description: "Réparation d'une incisive centrale fracturée avec mimicry parfait et teinte indiscernable des dents naturelles.",
        beforeImage: case7Before,
        afterImage: case7After,
      },
      {
        id: 8,
        title: "Remplacement d'Incisives Antérieures Absentes",
        category: "Implants & Bridges",
        categoryId: "implants",
        treatment: "Bridge Esthétique Fixé sur Implants",
        doctor: "Dr LABABOU.N",
        timeframe: "Plan Complet",
        description: "Remplacement des incisives manquantes, restaurant l'harmonie du tiers inférieur du visage et la confiance en soi.",
        beforeImage: case8Before,
        afterImage: case8After,
      },
      {
        id: 9,
        title: "Transformation Complète Sourire Hollywoodien",
        category: "Réhabilitation Complète",
        categoryId: "veneers",
        treatment: "Réhabilitation Céramique Antérieure Globale",
        doctor: "Dr LABABOU.N",
        timeframe: "Plan Global",
        description: "Transformation spectaculaire d'incisives supérieures très cariées en un sourire rayonnant, éclatant et naturel.",
        beforeImage: case9BeforeFull,
        beforeImageClose: case9BeforeClose,
        afterImage: case9AfterFront,
        afterImageSide: case9AfterSide,
      },
    ];
  }

  if (lang === "ar") {
    return [
      {
        id: 1,
        title: "تعديل محاذاة الأسنان وغلق الفراغات الأمامية",
        category: "الفينيرز والتجميل",
        categoryId: "veneers",
        treatment: "عدسات البورسلين E-Max ومحاذاة الحواف القاطعة",
        doctor: "الدكتور لبابو.ن",
        timeframe: "جلستان",
        description: "غلق الفراغات بين الأسنان الأمامية وتصحيح تناسق العضة وتفتيح لون الأسنان بعدسات سيراميك رقيقة ودقيقة.",
        beforeImage: case1Before,
        afterImage: case1After,
      },
      {
        id: 2,
        title: "ترميم كامل لأسنان الفك العلوي",
        category: "التركيبات وإعادة التأهيل",
        categoryId: "prostho",
        treatment: "تيجان الزيركون واستعادة صحة اللثة",
        doctor: "الدكتور لبابو.ن",
        timeframe: "3 جلسات",
        description: "علاج التسوسات الأمامية الشديدة، وإعادة بناء القواطع المكسورة وتنسيق خط اللثة بمظهر صحي.",
        beforeImage: case2Before,
        afterImage: case2After,
      },
      {
        id: 3,
        title: "تنظيف عميق للجير وتبييض الأسنان بالليزر",
        category: "التنظيف والتبييض",
        categoryId: "whitening",
        treatment: "تقليح لثوي بالموجات فوق الصوتية وتبييض LED",
        doctor: "الدكتور لبابو.ن",
        timeframe: "جلسة واحدة (60 دقيقة)",
        description: "إزالة الترسبات الجيرية والتصبغات العميقة يتبعها تبييض ليزري بالضوء البارد لابتسامة ناصعة.",
        beforeImage: case3Before,
        afterImage: case3After,
      },
      {
        id: 4,
        title: "جسر زيركوني ثابت وتأهيل الإطباق",
        category: "الجسور الثابتة",
        categoryId: "bridges",
        treatment: "جسر أسنان زيركوني فائق المتانة",
        doctor: "الدكتور لبابو.ن",
        timeframe: "جلستان",
        description: "تعويض ثابت للأسنان الجانبية المفقودة، واستعادة وظيفة المضغ المتوازنة وثبات الفك.",
        beforeImage: case4Before,
        afterImage: case4After,
      },
      {
        id: 5,
        title: "جسر سيراميك أمامي متعدد الوحدات",
        category: "التيجان والجسور",
        categoryId: "bridges",
        treatment: "هيكل زيركوني سيراميكي متعدد الطبقات",
        doctor: "الدكتور لبابو.ن",
        timeframe: "جلستان",
        description: "جسر زيركوني مصقول بدقة مثبت على دعامات محضرة ليعكس الضوء بشفافية مماثلة للأسنان الطبيعية.",
        beforeImage: case5Before,
        afterImage: case5After,
      },
      {
        id: 6,
        title: "تحول تجميلي متكامل بعدسات الفينيرز",
        category: "الفينيرز والتجميل",
        categoryId: "veneers",
        treatment: "عدسات E-Max بتحضير مجهري بسيط",
        doctor: "الدكتور لبابو.ن",
        timeframe: "جلستان",
        description: "معالجة تآكل المينا وتفاوت حواف الأسنان والتصبغات للحصول على ابتسامة متناسقة ومشرقة.",
        beforeImage: case6Before,
        afterImage: case6After,
      },
      {
        id: 7,
        title: "إعادة بناء تاج لقاطع أمامي مكسور",
        category: "الجراحة والترميم",
        categoryId: "restorative",
        treatment: "تاج سيراميك أحادي الكتلة",
        doctor: "الدكتور لبابو.ن",
        timeframe: "جلستان",
        description: "ترميم سن أمامي مكسور بدرجة لون وشفافية مطابقة تماماً للأسنان الطبيعية المجاورة.",
        beforeImage: case7Before,
        afterImage: case7After,
      },
      {
        id: 8,
        title: "تعويض القواطع الأمامية المفقودة",
        category: "الزراعة والجسور",
        categoryId: "implants",
        treatment: "جسر تجميلي مثبت على زراعات الأسنان",
        doctor: "الدكتور لبابو.ن",
        timeframe: "خطة علاجية كاملة",
        description: "تعويض القواطع المفقودة مما أعاد التناسق لملامح الوجه والثقة والراحة للمريض.",
        beforeImage: case8Before,
        afterImage: case8After,
      },
      {
        id: 9,
        title: "ابتسامة هوليوود المتكاملة",
        category: "إعادة التأهيل الشامل",
        categoryId: "veneers",
        treatment: "إعادة تأهيل سيراميكية شاملة للأسنان الأمامية",
        doctor: "الدكتور لبابو.ن",
        timeframe: "خطة علاجية متكاملة",
        description: "تحويل شامل لحالة تسوس وتآكل شديد بالقواطع العلوية إلى ابتسامة براقة وصحية وطبيعية المظهر.",
        beforeImage: case9BeforeFull,
        beforeImageClose: case9BeforeClose,
        afterImage: case9AfterFront,
        afterImageSide: case9AfterSide,
      },
    ];
  }

  return clinicalCases;
}

export function getFacilityGallery(lang = "en") {
  if (lang === "fr") {
    return [
      {
        id: 1,
        title: "Extérieur & Entrée Principale",
        category: "Entrée",
        description: "Bienvenue à la Clinique Aura Dentisterie Moderne, dirigée par le Dr LABABOU.N à Koléa.",
        image: clinicPhoto1,
        badge: "Entrée Officielle de la Clinique",
      },
      {
        id: 2,
        title: "Bloc Chirurgical & Soins",
        category: "Plateau Technique",
        description: "Fauteuils chirurgicaux stériles haut de gamme, imagerie numérique et scialytiques de précision.",
        image: clinicPhoto2,
        badge: "Salle de Soins Stérile",
      },
      {
        id: 3,
        title: "Bureau de Consultation Privée",
        category: "Consultation",
        description: "Espace moderne pour l'analyse personnalisée des plans de traitement et la simulation de sourire 3D.",
        image: clinicPhoto3,
        badge: "Suite Dr LABABOU.N",
      },
      {
        id: 4,
        title: "Accueil & Secrétariat",
        category: "Réception",
        description: "Espace d'accueil contemporain orné de l'emblème Aura pour un enregistrement fluide.",
        image: clinicPhoto4,
        badge: "Accueil & Enregistrement",
      },
      {
        id: 5,
        title: "Couloir Clinique Central",
        category: "Installations",
        description: "Large couloir desservant les différents blocs opératoires, la salle de stérilisation et la radiologie.",
        image: clinicPhoto5,
        badge: "Galerie Clinique",
      },
      {
        id: 6,
        title: "Espace Détente & Salon d'Attente",
        category: "Salon",
        description: "Assises ergonomiques confortables, ambiance feutrée et sérénité pour le bien-être de nos patients.",
        image: clinicPhoto6,
        badge: "Salon d'Attente",
      },
    ];
  }

  if (lang === "ar") {
    return [
      {
        id: 1,
        title: "الواجهة الخارجية والمدخل الرئيسي",
        category: "المدخل",
        description: "مرحباً بكم في عيادة أورا لطب وزراعة وتجميل الأسنان بإشراف د. لبابو.ن بالقليعة.",
        image: clinicPhoto1,
        badge: "المدخل الرسمي للعيادة",
      },
      {
        id: 2,
        title: "الجناح الجراحي وغرفة العمليات",
        category: "غرفة العمليات",
        description: "مجهزة بكراسي طبية معقمة حديثة، وتشخيص رقمي ثلاثي الأبعاد وإضاءة جراحية دقيقة.",
        image: clinicPhoto2,
        badge: "جناح جراحي معقم",
      },
      {
        id: 3,
        title: "مكتب الاستشارة الطبية الخاصة",
        category: "الاستشارة",
        description: "مساحة مريحة وحديثة لمناقشة خطط العلاج وتصميم الابتسامة الرقمي بصورة فردية.",
        image: clinicPhoto3,
        badge: "جناح الدكتور لبابو.ن",
      },
      {
        id: 4,
        title: "قسم الاستقبال والتسجيل",
        category: "الاستقبال",
        description: "منطقة استقبال عصرية بشعار أورا الذهبي لتقديم خدمة استقبال سلسة وراقية.",
        image: clinicPhoto4,
        badge: "الاستقبال والتسجيل",
      },
      {
        id: 5,
        title: "الممر السريري المركزي",
        category: "المرافق",
        description: "ممر واسع يربط بين غرف الكشف والجراحة وأجنحة التعقيم والتشخيص الإشعاعي.",
        image: clinicPhoto5,
        badge: "ممر العيادة المركزي",
      },
      {
        id: 6,
        title: "صالة انتظار واستراحة المرضى",
        category: "الاستراحة",
        description: "مقاعد مريحة وديكور هادئ وأجواء مريحة تضمن أعلى درجات الطمأنينة لمرضانا.",
        image: clinicPhoto6,
        badge: "صالة الانتظار",
      },
    ];
  }

  return facilityGallery;
}
