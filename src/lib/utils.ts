import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Home,
  BookOpen,
  Landmark,
  Info,
  CircleUser,
  Heart,
  Hand,
  PanelLeft,
  Loader2,
  BookOpenText,
  Mosque,
  Save,
  LucideIcon,
  Pin,
  Trash2,
  Flag,
  FileBadge,
  Wrench,
} from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const navigationItems = ["Home", "Quran", "MyTools", "Profile"];

export const mainNavItems = [
  {
    path: "/",
    label: "الرئيسية",
    icon: Home,
  },
  {
    path: "/quran",
    label: "القرآن",
    icon: BookOpen,
  },
  {
    path: "/holy-places",
    label: "الأماكن المقدسة",
    icon: Landmark,
  },
  {
    path: "/palestine",
    label: "فلسطين",
    icon: Flag,
  },
  {
    path: "/boycott",
    label: "المقاطعة",
    icon: Hand,
  },
];

export const topNavItems = [
  {
    path: "/about",
    label: "عن مقام",
    icon: Info,
  },
  {
    path: "/my-tools",
    label: "أدواتي",
    icon: Wrench,
  },
  {
    path: "/be-friend",
    label: "تواصل",
    icon: Heart,
  },
  {
    path: "/login",
    label: "حسابي",
    icon: CircleUser,
  },
];

export const palestineData = {
  intro: {
    title: "فلسطين في القلب",
    description:
      "نستعرض هنا أهم المحطات التاريخية والتحديات التي تواجه فلسطين وشعبها.",
  },
  sections: [
    {
      title: "نبذة تاريخية",
      description:
        "نلقي نظرة على تاريخ فلسطين العريق وأهم الأحداث التي شكلت هويتها.",
    },
    {
      title: "التحديات الراهنة",
      description:
        "نسلط الضوء على أبرز التحديات التي تواجه الشعب الفلسطيني في الوقت الحالي.",
    },
  ],
  resources: [
    {
      title: "فيديو تعريفي عن فلسطين",
      description: "شاهد فيديو قصيرًا يقدم معلومات أساسية عن فلسطين.",
      link: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
    },
    {
      title: "مقالات عن القضية الفلسطينية",
      description: "اقرأ مقالات مفصلة حول جوانب مختلفة من القضية الفلسطينية.",
      link: "https://example.com/palestine-articles",
    },
  ],
};
