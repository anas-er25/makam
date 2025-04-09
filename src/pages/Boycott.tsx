
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

type Alternative = {
  category: string;
  original: string;
  originCountry: string;
  alternatives: {
    name: string;
    country: string;
  }[];
};

const alternativesData: Alternative[] = [
  {
    category: "Design Software",
    original: "Adobe Illustrator",
    originCountry: "United States",
    alternatives: [
      { name: "Inkscape", country: "Global" },
      { name: "Affinity Designer", country: "United Kingdom" }
    ]
  },
  {
    category: "Productivity",
    original: "Google Workspace",
    originCountry: "United States",
    alternatives: [
      { name: "LARK Suite", country: "China" },
      { name: "Zoho", country: "India" }
    ]
  },
  {
    category: "Photo Editing",
    original: "Adobe Photoshop",
    originCountry: "United States",
    alternatives: [
      { name: "GIMP", country: "Global" },
      { name: "Affinity Photo", country: "United Kingdom" }
    ]
  },
  {
    category: "Project Management",
    original: "Monday.com",
    originCountry: "Israel",
    alternatives: [
      { name: "Jira", country: "Australia" },
      { name: "Plane", country: "India" }
    ]
  },
  {
    category: "Office Suite",
    original: "Microsoft Office",
    originCountry: "United States",
    alternatives: [
      { name: "LibreOffice", country: "Germany" },
      { name: "WPS Office", country: "China" }
    ]
  },
  {
    category: "Version Control",
    original: "GitHub",
    originCountry: "United States",
    alternatives: [
      { name: "GitLab", country: "Ukraine" },
      { name: "Bitbucket", country: "Australia" }
    ]
  }
];

const countryFlags: Record<string, string> = {
  "United States": "🇺🇸",
  "Global": "🌐",
  "United Kingdom": "🇬🇧",
  "China": "🇨🇳",
  "India": "🇮🇳",
  "Israel": "🇮🇱",
  "Australia": "🇦🇺",
  "Germany": "🇩🇪",
  "Ukraine": "🇺🇦"
};

const Boycott = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredAlternatives = searchTerm 
    ? alternativesData.filter(item => 
        item.original.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.alternatives.some(alt => alt.name.toLowerCase().includes(searchTerm.toLowerCase())))
    : alternativesData;
    
  return (
    <div className="container py-8 bg-background" dir="rtl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 text-primary">يقين للمقاطعة</h1>
        <p className="text-lg text-gray-600">
          منصة تساعدك على اكتشاف بدائل أخلاقية للمنتجات التقنية الأمريكية والإسرائيلية
        </p>
      </div>
      
      <div className="relative max-w-xl mx-auto mb-12">
        <div className="relative">
          <Input
            type="text"
            placeholder="ابحث عن منتج"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-14 pl-12 pr-4 rounded-full border-2 border-primary/20 focus-visible:border-primary/50"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredAlternatives.map((item, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="bg-primary/5 p-3 flex items-center">
              <span className="mr-2 text-lg">{countryFlags[item.originCountry]}</span>
              <span className="text-sm text-gray-600">{item.originCountry}</span>
              <span className="mr-auto font-semibold">{item.original}</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-right mb-4">البدائل:</h3>
              
              {item.alternatives.map((alt, altIndex) => (
                <div key={altIndex} className="flex items-center justify-between mb-3 last:mb-0">
                  <span className="font-semibold">{alt.name}</span>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600">{alt.country}</span>
                    <span className="mr-2 text-lg">{countryFlags[alt.country]}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Boycott;
