import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Home,
  Landmark,
  Flag,
  Info,
  Heart,
  Book,
  UserPlus,
  ExternalLink,
  Share2,
  Code2,
  Paintbrush,
  Camera,
  User2,
  MessageSquare,
  Pen,
} from "lucide-react";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const topNavItems = [
  { icon: Home, label: "الرئيسية", path: "/" },
  { icon: Book, label: "كتبي", path: "/books" },
  { icon: Flag, label: "قضيتي ", path: "/palestine" },
  { icon: Landmark, label: "مقدساتي", path: "/holy-places" },
  // { icon: ExternalLink, label: "أدواتي", path: "/my-tools" },
  { icon: Heart, label: "كن صديقاً", path: "/be-friend" },
  { icon: MessageSquare, label: "تقديم ملاحظات", path: "/feedback" },
  // { icon: UserPlus, label: "تسجيل الدخول", path: "/login" },
];

export const mainNavItems = [
  { path: "/", icon: Home, label: "الرئيسية" },
  { path: "/holy-places", icon: Landmark, label: "الأماكن المقدسة" },
  { path: "/palestine", icon: Flag, label: "قضيتي" },
  { path: "/about", icon: Info, label: "عن المنصة" },
];

export const aboutData = {
  title: "عن المنصة",
  description: "تعرف على منصة المساجد وأهدافها",
  vision: {
    title: "رؤيتنا",
    content:
      "منصة المساجد هي منصة إلكترونية شاملة تهدف إلى توفير معلومات دقيقة ومفيدة حول المساجد في المغرب، بالإضافة إلى خدمات أخرى مرتبطة بالحياة الدينية والثقافية للمسلمين.",
  },
  goals: {
    title: "أهدافنا",
    items: [
      "توفير دليل شامل للمساجد في المغرب",
      "نشر الوعي بأهمية المساجد في حياتنا",
      "دعم القضايا الإسلامية وخاصة القضية الفلسطينية",
      "تسهيل الوصول إلى المعلومات الدينية والثقافية",
    ],
  },
};

export const tools = [
  {
    title: "أداة التحليل النصي",
    description: "تحليل النصوص وإستخراج المعلومات المهمة",
    link: "#",
  },
  {
    title: "محول الوحدات",
    description: "تحويل بين مختلف الوحدات القياسية",
    link: "#",
  },
  {
    title: "حاسبة الزكاة",
    description: "حساب الزكاة على الأموال والممتلكات",
    link: "#",
  },
];

export const mosqueData = [
  {
    id: 1,
    name: "المسجد الأقصى",
    images: [
      "https://raw.githubusercontent.com/yaqiin/assets/refs/heads/main/photos/holy-places/al-aqsa-mosque/1.jpg",
      "https://imgs.search.brave.com/-GD0D5UnwA0MpryvjrrUqLT8KNVmOmWrsBGVVdYcZkM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWxqYXplZXJhLm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAx/NC8xMC9mM2ExN2I5/MC05ZmQ5LTRmMjMt/YmRhNy1kNTBiYjNm/NDdlYWMuanBlZz9y/ZXNpemU9Njg2LDQx/MCZxdWFsaXR5PTgw",
    ],
    location: "القدس، فلسطين",
    description:
      "المسجد الأقصى هو أحد أكبر المساجد في العالم وأحد المساجد الثلاثة التي يشد المسلمون الرحال إليها، بالإضافة إلى المسجد الحرام في مكة والمسجد النبوي في المدينة المنورة. يقع المسجد الأقصى في البلدة القديمة في القدس، وهو من أقدس المواقع في الإسلام. يعتبر المسجد الأقصى أولى القبلتين في الإسلام، حيث كان المسلمون يتوجهون إليه في الصلاة قبل أن تتحول القبلة إلى الكعبة المشرفة. يضم المسجد الأقصى قبة الصخرة، وهي واحدة من أبرز المعالم الإسلامية في العالم. للمسجد تاريخ طويل وحافل بالأحداث، حيث شهد العديد من الأحداث التاريخية المهمة، بما في ذلك الإسراء والمعراج الذي تم فيه نقل النبي محمد (صلى الله عليه وسلم) من مكة إلى القدس في ليلة واحدة.",
    openingTimes: {
      daily: "24 ساعة",
      friday: "مفتوح طوال اليوم",
      special: "قد تتغير أوقات الصلاة حسب المواسم",
    },
    prayerTimes: {
      fajr: "05:14",
      dhuhr: "13:30",
      asr: "17:00",
      maghrib: "20:00",
      isha: "21:30",
    },
    activities: [
      "الصلوات الخمس",
      "صلاة الجمعة",
      "دروس دينية",
      "حلقات تحفيظ القرآن",
      "برامج رمضانية خاصة",
    ],
    contact: {
      phone: "+970 2-628-3264",
      email: "info@alaqsa.ps",
      social: {
        facebook: "https://facebook.com/alaqsa",
        twitter: "https://twitter.com/alaqsa",
        instagram: "https://instagram.com/alaqsa",
      },
    },
  },
  {
    id: 2,
    name: "المسجد النبوي",
    images: [
      "https://raw.githubusercontent.com/yaqiin/assets/refs/heads/main/photos/holy-places/prophet-mosque/1.jpg",
    ],
    location: "المدينة المنورة، السعودية",
    description:
      "يقع المسجد النبوي الشريف في المدينة المنورة في المملكة العربية السعودية، وهو ثاني أقدس المساجد في الإسلام بعد المسجد الحرام في مكة. بني المسجد النبوي في عهد النبي محمد (صلى الله عليه وسلم) بعد هجرته من مكة إلى المدينة المنورة. يضم المسجد قبر النبي محمد (صلى الله عليه وسلم) وقبري صاحبيه أبي بكر الصديق وعمر بن الخطاب. يتميز المسجد النبوي بتصميمه المعماري الفريد، حيث يحتوي على العديد من الأروقة والقباب، بما في ذلك القبة الخضراء التي تغطي قبر النبي. يعتبر المسجد النبوي مركزًا للعبادة والتعليم، حيث يقصده الملايين من المسلمين كل عام لأداء الصلاة وزيارة قبر النبي.",
    openingTimes: {
      daily: "24 ساعة",
      friday: "مفتوح طوال اليوم",
      special: "قد تتغير أوقات الصلاة حسب المواسم",
    },
    prayerTimes: {
      fajr: "05:14",
      dhuhr: "13:30",
      asr: "17:00",
      maghrib: "20:00",
      isha: "21:30",
    },
    activities: [
      "الصلوات الخمس",
      "صلاة الجمعة",
      "دروس دينية",
      "حلقات تحفيظ القرآن",
      "برامج رمضانية خاصة",
    ],
    contact: {
      phone: "+966 4-820-0000",
      email: "info@prophetmosque.sa",
      social: {
        facebook: "https://facebook.com/prophetmosque",
        twitter: "https://twitter.com/prophetmosque",
        instagram: "https://instagram.com/prophetmosque",
      },
    },
  },
  {
    id: 3,
    name: "المسجد الحرام",
    images: [
      "https://raw.githubusercontent.com/yaqiin/assets/refs/heads/main/photos/holy-places/macca-grand-mosque/1.jpg",
    ],
    location: "مكة المكرمة، السعودية",
    description:
      "المسجد الحرام هو أعظم مسجد في الإسلام ويقع في قلب مكة المكرمة في المملكة العربية السعودية. يضم المسجد الحرام الكعبة المشرفة، وهي قبلة المسلمين في الصلاة. يعتبر المسجد الحرام أقدس مكان في الإسلام، حيث يؤدي المسلمون فريضة الحج والعمرة فيه. يتميز المسجد الحرام بتصميمه المعماري الضخم، حيث يمكن أن يستوعب ملايين المصلين في وقت واحد. يحتوي المسجد على العديد من المعالم البارزة، بما في ذلك الحجر الأسود ومقام إبراهيم وبئر زمزم. يعتبر المسجد الحرام مركزًا للعبادة والروحانية، حيث يقصده المسلمون من جميع أنحاء العالم لأداء الصلاة والطواف حول الكعبة.",
    openingTimes: {
      daily: "24 ساعة",
      friday: "مفتوح طوال اليوم",
      special: "قد تتغير أوقات الصلاة حسب المواسم",
    },
    prayerTimes: {
      fajr: "05:14",
      dhuhr: "13:30",
      asr: "17:00",
      maghrib: "20:00",
      isha: "21:30",
    },
    activities: [
      "الصلوات الخمس",
      "صلاة الجمعة",
      "دروس دينية",
      "حلقات تحفيظ القرآن",
      "برامج رمضانية خاصة",
    ],
    contact: {
      phone: "+966 2-571-7777",
      email: "info@haram.sa",
      social: {
        facebook: "https://facebook.com/haram",
        twitter: "https://twitter.com/haram",
        instagram: "https://instagram.com/haram",
      },
    },
  },
  {
    id: 4,
    name: "مسجد قباء",
    images: [
      "https://imgs.search.brave.com/504_mTjNknRTIw5zg-vKqPrGDSWRdQLDjNtL-wHbnk8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy81/LzU1LyVEOCVCNSVE/OSU4OCVEOCVCMSVE/OCVBOV8lRDklODUl/RDglQjMlRDglQUMl/RDglQUZfJUQ5JTgy/JUQ4JUE4JUQ4JUE3/JUQ4JUExXyVEOSU4/MSVEOSU4QV8lRDgl/QTclRDklODQlRDkl/ODUlRDglQUYlRDkl/OEElRDklODYlRDgl/QTlfJUQ4JUE3JUQ5/JTg0JUQ5JTg1JUQ5/JTg2JUQ5JTg4JUQ4/JUIxJUQ4JUE5Lmpw/Zw",
    ],
    location: "المدينة المنورة، السعودية",
    description:
      "مسجد قباء هو أول مسجد بني في الإسلام، ويقع في المدينة المنورة. بني المسجد بعد هجرة النبي محمد (صلى الله عليه وسلم) من مكة إلى المدينة المنورة، وكان النبي يزوره ويصلي فيه. يعتبر مسجد قباء من المساجد المهمة في الإسلام، حيث وردت أحاديث نبوية تشير إلى فضل الصلاة فيه. يتميز المسجد بتصميمه البسيط والجميل، حيث يحتوي على فناء واسع ومئذنة عالية. يقصد المسلمون مسجد قباء لأداء الصلاة وزيارته كجزء من زيارتهم للمدينة المنورة. يعتبر المسجد رمزًا للتاريخ الإسلامي والإرث النبوي.",
    openingTimes: {
      daily: "24 ساعة",
      friday: "مفتوح طوال اليوم",
      special: "قد تتغير أوقات الصلاة حسب المواسم",
    },
    prayerTimes: {
      fajr: "05:14",
      dhuhr: "13:30",
      asr: "17:00",
      maghrib: "20:00",
      isha: "21:30",
    },
    activities: [
      "الصلوات الخمس",
      "صلاة الجمعة",
      "دروس دينية",
      "حلقات تحفيظ القرآن",
      "زيارات تاريخية",
    ],
    contact: {
      phone: "+966 4-820-0000",
      email: "info@qubamosque.sa",
      social: {
        facebook: "https://facebook.com/qubamosque",
        twitter: "https://twitter.com/qubamosque",
        instagram: "https://instagram.com/qubamosque",
      },
    },
  },
  {
    id: 5,
    name: "مسجد القبلتين",
    images: [
      "https://imgs.search.brave.com/JePASsv1CvHElvWWJ9FIxw_gUMS30ZXZnot3qT5Z06k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzFhL0FsLVFpYmxh/dGluX01vc3F1ZS5q/cGc",
    ],
    location: "المدينة المنورة، السعودية",
    description:
      "مسجد القبلتين هو المسجد الذي غيرت فيه القبلة من بيت المقدس إلى الكعبة المشرفة أثناء الصلاة. يعتبر المسجد من المعالم التاريخية المهمة في الإسلام، حيث شهد حدثًا تاريخيًا مهمًا في حياة المسلمين. يتميز المسجد بتصميمه الفريد، حيث يحتوي على محرابين، أحدهما يتجه نحو القدس والآخر نحو مكة. يقصد المسلمون مسجد القبلتين لأداء الصلاة وزيارته كجزء من زيارتهم للمدينة المنورة. يعتبر المسجد رمزًا لتاريخ الإسلام وتطور العبادات فيه.",
    openingTimes: {
      daily: "24 ساعة",
      friday: "مفتوح طوال اليوم",
      special: "قد تتغير أوقات الصلاة حسب المواسم",
    },
    prayerTimes: {
      fajr: "05:14",
      dhuhr: "13:30",
      asr: "17:00",
      maghrib: "20:00",
      isha: "21:30",
    },
    activities: [
      "الصلوات الخمس",
      "صلاة الجمعة",
      "دروس دينية",
      "زيارات تاريخية",
    ],
    contact: {
      phone: "+966 4-820-0000",
      email: "info@qiblatainmosque.sa",
      social: {
        facebook: "https://facebook.com/qiblatainmosque",
        twitter: "https://twitter.com/qiblatainmosque",
        instagram: "https://instagram.com/qiblatainmosque",
      },
    },
  },
  {
    id: 6,
    name: "مسجد السلطان أحمد (المسجد الأزرق)",
    images: [
      "https://imgs.search.brave.com/qxTC2beEN-NHqMAavvDZ9JOOwRyUbyDoe7PMbzvcE8s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly95YWxs/YWJvb2suY29tL2Js/b2cvdXBsb2FkZS9m/aWxlcy8xNjA0MTlf/MGU1YzExMzljMS5q/cGc",
    ],
    location: "إسطنبول، تركيا",
    description:
      "مسجد السلطان أحمد، المعروف أيضًا بالمسجد الأزرق، هو أحد أشهر المساجد في تركيا والعالم الإسلامي. بني المسجد في عهد السلطان أحمد الأول في القرن السابع عشر، ويتميز بتصميمه المعماري الفريد وأعمال البلاط الأزرق التي تغطي جدرانه الداخلية. يعتبر المسجد الأزرق من أهم المعالم السياحية في إسطنبول، حيث يقصده الزوار من جميع أنحاء العالم للإعجاب بجماله وأداء الصلاة فيه. يحتوي المسجد على ست مآذن وقبة ضخمة، مما يجعله تحفة معمارية فريدة.",
    openingTimes: {
      daily: "24 ساعة",
      friday: "مفتوح طوال اليوم",
      special: "قد تتغير أوقات الصلاة حسب المواسم",
    },
    prayerTimes: {
      fajr: "05:14",
      dhuhr: "13:30",
      asr: "17:00",
      maghrib: "20:00",
      isha: "21:30",
    },
    activities: ["الصلوات الخمس", "صلاة الجمعة", "جولات سياحية", "دروس دينية"],
    contact: {
      phone: "+90 212-458-0000",
      email: "info@sultanahmetmosque.com",
      social: {
        facebook: "https://facebook.com/sultanahmetmosque",
        twitter: "https://twitter.com/sultanahmetmosque",
        instagram: "https://instagram.com/sultanahmetmosque",
      },
    },
  },
  {
    id: 7,
    name: "مسجد الشيخ زايد",
    images: [
      "https://imgs.search.brave.com/OU_4Sdv4cPniFp2V34DBPtXX5oTJM4advcxKaGgKJuU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbm4t/YXJhYmljLWltYWdl/cy5jbm4uaW8vY2xv/dWRpbmFyeS9pbWFn/ZS91cGxvYWQvd183/ODAsaF80MzksY19m/aWxsLHFfYXV0by9j/bm5hcmFiaWMvMjAx/Ny8wNS8yOC9pbWFn/ZXMvNTE3MDcuanBn",
    ],
    location: "أبوظبي، الإمارات العربية المتحدة",
    description:
      "مسجد الشيخ زايد هو أحد أكبر المساجد في العالم ويشتهر بتصميمه المعماري الفريد وفخامته. تم بناؤه تخليدًا لذكرى الشيخ زايد بن سلطان آل نهيان، مؤسس دولة الإمارات العربية المتحدة. يتميز المسجد بقبابه البيضاء الرائعة وأعمدته المزخرفة، بالإضافة إلى سجاده الفاخر الذي يعتبر أكبر سجادة في العالم. يعتبر المسجد مركزًا للعبادة والثقافة، حيث يقصده الزوار من جميع أنحاء العالم للإعجاب بجماله وأداء الصلاة فيه.",
    openingTimes: {
      daily: "24 ساعة",
      friday: "مفتوح طوال اليوم",
      special: "قد تتغير أوقات الصلاة حسب المواسم",
    },
    prayerTimes: {
      fajr: "05:14",
      dhuhr: "13:30",
      asr: "17:00",
      maghrib: "20:00",
      isha: "21:30",
    },
    activities: ["الصلوات الخمس", "صلاة الجمعة", "جولات سياحية", "دروس دينية"],
    contact: {
      phone: "+971 2-419-1919",
      email: "info@szgmc.ae",
      social: {
        facebook: "https://facebook.com/sheikhzayedmosque",
        twitter: "https://twitter.com/sheikhzayedmosque",
        instagram: "https://instagram.com/sheikhzayedmosque",
      },
    },
  },
  {
    id: 8,
    name: "مسجد الحسن الثاني",
    images: [
      "https://imgs.search.brave.com/3-OwtlFfqw958tC_VXHqMCQaSrIcUDHF6tziCAHCdVc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YWwtYWluLmNvbS9h/cmNoaXZlL25ld3Mt/aW1hZ2UvbF90a3Rt/bF96eXJfbWR5bl9s/ZHJfbGJ5ZF9sbWdy/YnlfbG10bHdfbF9s/bWh5dF9sdGxzeV9q/bndiX2xzbV9scmJ0/X2xfYnp5cl9tc2pk/X2xoc25fbHRobnlf/MzExMjQxLmpwZw",
    ],
    location: "الدار البيضاء، المغرب",
    description:
      "مسجد الحسن الثاني هو أحد أكبر المساجد في العالم وأشهرها في المغرب. يتميز بمنارته الشاهقة التي تُعد الأعلى في العالم، ويطل على المحيط الأطلسي. بني المسجد في عهد الملك الحسن الثاني، ويعتبر تحفة معمارية فريدة تجمع بين الفن الإسلامي التقليدي والتصميم الحديث. يحتوي المسجد على قاعة صلاة ضخمة يمكن أن تستوعب آلاف المصلين، بالإضافة إلى مدرسة قرآنية ومتحف إسلامي. يعتبر المسجد رمزًا للثقافة الإسلامية في المغرب.",
    openingTimes: {
      daily: "24 ساعة",
      friday: "مفتوح طوال اليوم",
      special: "قد تتغير أوقات الصلاة حسب المواسم",
    },
    prayerTimes: {
      fajr: "05:14",
      dhuhr: "13:30",
      asr: "17:00",
      maghrib: "20:00",
      isha: "21:30",
    },
    activities: ["الصلوات الخمس", "صلاة الجمعة", "جولات سياحية", "دروس دينية"],
    contact: {
      phone: "+212 522-482-000",
      email: "info@hassan2mosque.ma",
      social: {
        facebook: "https://facebook.com/hassan2mosque",
        twitter: "https://twitter.com/hassan2mosque",
        instagram: "https://instagram.com/hassan2mosque",
      },
    },
  },
  {
    id: 9,
    name: "مسجد الكتبية",
    images: [
      "https://imgs.search.brave.com/d32zmoXcvJppeWs-NExfXvrr5m9SX0eT0KQOuBOpBFY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcmNo/aXFvby5jb20vaW1h/Z2VzL2dhbGxlcnkv/a291dG91YmlhX21v/c3F1ZS5qcGc",
    ],
    location: "مراكش، المغرب",
    description:
      "مسجد الكتبية هو أحد أشهر المساجد في المغرب ويقع في قلب مدينة مراكش. يتميز بمنارته التي تُعد رمزًا للمدينة وتُعتبر واحدة من أروع الأمثلة على العمارة المغربية. بني المسجد في القرن الثاني عشر، ويعتبر من أقدم المساجد في المغرب. يتميز المسجد بتصميمه البسيط والجميل، حيث يحتوي على فناء واسع ومئذنة عالية. يقصد المسلمون مسجد الكتبية لأداء الصلاة وزيارته كجزء من زيارتهم لمراكش. يعتبر المسجد رمزًا للتاريخ الإسلامي والإرث الثقافي للمغرب.",
    openingTimes: {
      daily: "24 ساعة",
      friday: "مفتوح طوال اليوم",
      special: "قد تتغير أوقات الصلاة حسب المواسم",
    },
    prayerTimes: {
      fajr: "05:14",
      dhuhr: "13:30",
      asr: "17:00",
      maghrib: "20:00",
      isha: "21:30",
    },
    activities: ["الصلوات الخمس", "صلاة الجمعة", "جولات سياحية", "دروس دينية"],
    contact: {
      phone: "+212 524-441-000",
      email: "info@koutoubiamosque.ma",
      social: {
        facebook: "https://facebook.com/koutoubiamosque",
        twitter: "https://twitter.com/koutoubiamosque",
        instagram: "https://instagram.com/koutoubiamosque",
      },
    },
  },
  {
    id: 10,
    name: "مسجد القرويين",
    images: [
      "https://imgs.search.brave.com/b7nj_ltDkWkD1KDIjY82v0j7rtxO6qABjohx9CYa69A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWxqYXplZXJhLm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAx/NS8xMS9mNGVmMDI0/ZC0wNzQ0LTQzMjQt/YTgzNS1hZmMzODhi/Nzk4ZDguanBlZz9y/ZXNpemU9Njg2LDUx/MyZxdWFsaXR5PTgw",
    ],
    location: "فاس، المغرب",
    description:
      "مسجد القرويين هو أحد أقدم المساجد في العالم وأشهرها في المغرب. تأسس في القرن التاسع الميلادي ويُعتبر مركزًا للعلم والثقافة الإسلامية. بني المسجد على يد فاطمة الفهرية، وهي امرأة مسلمة من عائلة ثرية، ويعتبر المسجد من أقدم الجامعات في العالم. يتميز المسجد بتصميمه المعماري الفريد، حيث يحتوي على فناء واسع ومكتبة ضخمة تضم آلاف المخطوطات الإسلامية. يقصد المسلمون مسجد القرويين لأداء الصلاة وزيارته كجزء من زيارتهم لفاس. يعتبر المسجد رمزًا للتاريخ الإسلامي والإرث الثقافي للمغرب.",
    openingTimes: {
      daily: "24 ساعة",
      friday: "مفتوح طوال اليوم",
      special: "قد تتغير أوقات الصلاة حسب المواسم",
    },
    prayerTimes: {
      fajr: "05:14",
      dhuhr: "13:30",
      asr: "17:00",
      maghrib: "20:00",
      isha: "21:30",
    },
    activities: [
      "الصلوات الخمس",
      "صلاة الجمعة",
      "دروس دينية",
      "زيارات تاريخية",
    ],
    contact: {
      phone: "+212 535-634-000",
      email: "info@karaouine.ma",
      social: {
        facebook: "https://facebook.com/karaouine",
        twitter: "https://twitter.com/karaouine",
        instagram: "https://instagram.com/karaouine",
      },
    },
  },
];
export const palestineData = {
  intro: {
    title: "قضيتي",
    description: "موارد لتعزيز الوعي بالقضية الفلسطينية",
  },
  sections: [
    {
      title: "تعرف على القضية",
      description:
        "القضية الفلسطينية هي قضية عادلة تتعلق بحق الشعب الفلسطيني في العودة إلى أرضه وتقرير مصيره. تعرف على تاريخ القضية وأهم محطاتها.",
    },
    {
      title: "كيف يمكنني المساعدة؟",
      description:
        "هناك العديد من الطرق للمساهمة في دعم القضية الفلسطينية، من خلال التبرع للمؤسسات الإنسانية، نشر الوعي، والمشاركة في الفعاليات الداعمة.",
    },
  ],
  resources: [
    {
      title: "ملفات | بنو إسرائيل",
      description:
        "أحد حلقات قناة السبيل، تناقش الحلقة هذه الأسئلة: ما قصة هذا القوم؟ وكيف نشأت لديهم الديانة اليهودية؟ وما هي عقدتهم في الألوهية والنيوة واليوم الآخر؟ ومم تتكون كتبهم المقدسة: التوراة والتلمود؟ ومن هو المسيح المنتظر في اعتقادهم؟ وكيف ولماذا نشأت الصهيونية في العصر الحديث؟ وتؤكد بضرورة فهم معتقدات الطرف الآخر قبل خوض النقاشات معه أثناء الدفاع عن القضية الفلسطينية والأقصى.",
      link: "https://www.youtube.com/watch?v=iNs33UyBNZM&pp=ygUi2YXZhNmB2KfYqiB8INio2YbZiCDYpdiz2LHYp9im2YrZhA%3D%3D",
    },
    {
      title: "لماذا لم تُحل القضية الفلسطينية؟ | د.مصطفى البرغوثي",
      description:
        "أحد حلقات بودكاست بدون ورق تناقش أسئلة مهمة حول القضية الفلسطينية.",
      link: "https://www.youtube.com/watch?v=F6_cheSL29I&pp=ygVd2YTZhdin2LDYpyDZhNmFINiq2Y_YrdmEINin2YTZgti22YrYqSDYp9mE2YHZhNiz2LfZitmG2YrYqdifIHwg2K8u2YXYtdi32YHZiSDYp9mE2KjYsdi62YjYq9mK",
    },
    {
      title: "نهاية إسرائيل!؟ بودكاست بلا حدود مع أحمد منصور",
      description:
        "تتناول الحلقة الثانية من بودكاست بلا حدود موضوعًا قديمًا متجددًا: نهاية إسرائيل. حركة تقييمية مكثفة استعرضت تناول القضية من وجهات نظر متعددة، مفكرين عرب وصهاينة ومسؤولين بالكيان الصهيوني، متجاوزة التناول العاطفي للقضية.",
      link: "https://www.youtube.com/watch?v=X2znGZarQm4&pp=ygVU2YbZh9in2YrYqSDYpdiz2LHYp9im2YrZhCHYnyDYqNmI2K_Zg9in2LPYqiDYqNmE2Kcg2K3Yr9mI2K8g2YXYuSDYo9it2YXYryDZhdmG2LXZiNix",
    },
    {
      title: "التاريخ المجهول لليهود وإسرائيل | بودكاست فنجان",
      description:
        "من هم اليهود؟ وماذا يؤمنون؟ وما علاقتهم بالمسلمين؟ وما وجه الاختلاف؟ فالخلاف بين اليهود والمسلمين مختلف كليًا عن الخلاف مع المسيحيين. هذه الحلقة عن اليهود وفهمهم، من نشأتهم حتى احتلالهم فلسطين، ولماذا اختاروا فلسطين؟ وكيف نشأت الصهيونية؟",
      link: "https://www.youtube.com/watch?v=9gEPoVlHX6w&pp=ygVX2KfZhNiq2KfYsdmK2K4g2KfZhNmF2KzZh9mI2YQg2YTZhNmK2YfZiNivINmI2KXYs9ix2KfYptmK2YQgfCDYqNmI2K_Zg9in2LPYqiDZgdmG2KzYp9mG",
    },
  ],
};

export const visionPoints = [
  "أن نكون المنصة الرقمية الأولى التي تربط المسلم بكل ما يعزز حياته الدينية والاجتماعية بشكل مبتكر.",
  "إعادة تعريف دور المساجد كمراكز إشعاع ثقافي واجتماعي، وليس فقط كأماكن للعبادة.",
  "تمكين المجتمع من الوصول إلى الأنشطة المسجدية بسهولة من خلال حلول رقمية متطورة.",
  "بناء جسور التواصل بين الأفراد والمجتمعات لتعزيز التلاحم الاجتماعي والروح الجماعية.",
  "استخدام التكنولوجيا لتقديم تجربة تفاعلية تجمع بين الأصالة الدينية والابتكار العصر.",
];

export const helpCards = [
  {
    icon: Heart,
    title: "تبرع للمشروع",
    description: "ساهم في تغطية تكاليف المنصة ماديا",
  },
  {
    icon: Share2,
    title: "شارك مشروعنا",
    description: "ساعدنا في نشر المنصة في مجتمعك المحلي",
  },
  {
    icon: Code2,
    title: "تطوير المنصة",
    description: "ساهم في برمجة وتطوير المنصة",
  },
  {
    icon: Paintbrush,
    title: "التصميم",
    description: "ساعدنا في تحسين تجربة المستخدم والواجهة",
  },
  {
    icon: Camera,
    title: "التصوير الفوتوغرافي",
    description: "ساعدنا في تصوير المساجد بجودة جيدة",
  },
  {
    icon: User2,
    title: "الميداني",
    description: "ساعدنا في التواصل مع المساجد لإدارة أنشطتهم",
  },
  {
    icon: Pen,
    title: "كتابة المحتوى",
    description: "ساهم في كتابة محتوى متميز يتماشى مع رسالتنا",
  },
  {
    icon: MessageSquare,
    title: "إدارة وسائل التواصل",
    description: "ساعدنا في إدارة حساباتنا على وسائل التواصل",
  },
];
