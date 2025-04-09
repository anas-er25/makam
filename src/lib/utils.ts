import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Home,
  Landmark,
  Flag,
  Info,
  Heart,
  Book,
  BookOpen,
  UserPlus,
  ExternalLink,
  Share2,
  Code2,
  Paintbrush,
  Camera,
  User2,
  MessageSquare,
  Pen,
  OctagonMinus,
} from "lucide-react";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const topNavItems = [
  { icon: Home, label: "الرئيسية", path: "/" },
  { icon: BookOpen, label: "القرءان الكريم", path: "/quran" },
  { icon: Book, label: "كتبي", path: "/books" },
  { icon: Flag, label: "قضيتي ", path: "/palestine" },
  { icon: Landmark, label: "مقدساتي", path: "/holy-places" },
  { icon: OctagonMinus, label: "أقاطع", path: "/boycott" },
  { icon: Heart, label: "كن صديقاً", path: "/be-friend" },
  { icon: MessageSquare, label: "تقديم ملاحظات", path: "/feedback" },
  // { icon: UserPlus, label: "تسجيل الدخول", path: "/login" },
];

export const mainNavItems = [
  { path: "/", icon: Home, label: "الرئيسية" },
  { path: "/quran", icon: BookOpen, label: "القرءان الكريم" },
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
        "هناك العديد من الطرق للمساهمة في دعم القضية الفلسطينية، من خلال التبرع للمؤسسات الإنسانية، نشر الوعي، المشاركة في الفعاليات الداعمة، و مقاطعة المنتوجات الداعمة للاحتلال.",
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

// Boycott Alternatives Data
type Alternative = {
  category: string;
  original: string;
  originCountry: string;
  alternatives: {
    name: string;
    country: string;
  }[];
};
export const alternativesData: Alternative[] = [
  {
    category: "Design Software",
    original: "Adobe Illustrator",
    originCountry: "United States",
    alternatives: [
      { name: "Inkscape", country: "Global" },
      { name: "Affinity Designer", country: "United Kingdom" },
    ],
  },
  {
    category: "Productivity",
    original: "Google Workspace",
    originCountry: "United States",
    alternatives: [
      { name: "LARK Suite", country: "China" },
      { name: "Zoho", country: "India" },
    ],
  },
  {
    category: "Photo Editing",
    original: "Adobe Photoshop",
    originCountry: "United States",
    alternatives: [
      { name: "GIMP", country: "Global" },
      { name: "Affinity Photo", country: "United Kingdom" },
    ],
  },
  {
    category: "Project Management",
    original: "Monday.com",
    originCountry: "Israel",
    alternatives: [
      { name: "Jira", country: "Australia" },
      { name: "Plane", country: "India" },
    ],
  },
  {
    category: "Office Suite",
    original: "Microsoft Office",
    originCountry: "United States",
    alternatives: [
      { name: "LibreOffice", country: "Germany" },
      { name: "WPS Office", country: "China" },
    ],
  },
  {
    category: "Version Control",
    original: "GitHub",
    originCountry: "United States",
    alternatives: [
      { name: "GitLab", country: "Ukraine" },
      { name: "Bitbucket", country: "Australia" },
    ],
  },
];