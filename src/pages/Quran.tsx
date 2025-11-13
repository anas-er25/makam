
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Search, Book, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

interface Ayah {
  number: number;
  text: string;
  numberInSurah: number;
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  hizbQuarter: number;
  sajda: boolean;
}

interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: string;
  ayahs: Ayah[];
}

interface QuranData {
  surahs: Surah[];
}

interface ApiResponse {
  code: number;
  status: string;
  data: QuranData;
}

const Quran = () => {
  const [selectedSurah, setSelectedSurah] = useState<Surah | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("surah"); // Can be "surah" or "ayah"
  const [viewMode, setViewMode] = useState<"surah" | "hizb" | "thumn">("surah");
  const [selectedHizb, setSelectedHizb] = useState<number>(1);
  const [selectedThumn, setSelectedThumn] = useState<number>(1);
  const { toast } = useToast();

  const { data, isLoading, error } = useQuery({
    queryKey: ["quran"],
    queryFn: async () => {
      const response = await axios.get<ApiResponse>(import.meta.env.VITE_QURAN_API_KEY);
      return response.data;
    },
  });

  useEffect(() => {
    if (data && data.data.surahs.length > 0 && !selectedSurah) {
      setSelectedSurah(data.data.surahs[0]);
    }
  }, [data, selectedSurah]);

  const handleSurahSelect = (surahNumber: string) => {
    if (data) {
      const surah = data.data.surahs.find(
        (s) => s.number === parseInt(surahNumber)
      );
      if (surah) {
        setSelectedSurah(surah);
        setSearchQuery("");
      }
    }
  };

  const getAyahsByHizb = (hizbNumber: number) => {
    if (!data) return [];
    const allAyahs: Ayah[] = [];
    data.data.surahs.forEach(surah => {
      surah.ayahs.forEach(ayah => {
        const ayahHizb = Math.ceil(ayah.hizbQuarter / 4);
        if (ayahHizb === hizbNumber) {
          allAyahs.push(ayah);
        }
      });
    });
    return allAyahs;
  };

  const getAyahsByThumn = (thumnNumber: number) => {
    if (!data) return [];
    const allAyahs: Ayah[] = [];
    data.data.surahs.forEach(surah => {
      surah.ayahs.forEach(ayah => {
        if (ayah.hizbQuarter === thumnNumber) {
          allAyahs.push(ayah);
        }
      });
    });
    return allAyahs;
  };

  const handleSearch = () => {
    if (!searchQuery.trim() || !data) return;

    if (searchType === "surah") {
      const query = searchQuery.toLowerCase();
      const foundSurah = data.data.surahs.find(
        (surah) =>
          surah.name.toLowerCase().includes(query) ||
          surah.englishName.toLowerCase().includes(query) ||
          surah.englishNameTranslation.toLowerCase().includes(query) ||
          surah.number.toString() === query
      );

      if (foundSurah) {
        setSelectedSurah(foundSurah);
        setViewMode("surah");
      } else {
        toast({
          title: "سورة غير موجودة",
          description: "لم يتم العثور على السورة المطلوبة",
          variant: "destructive",
        });
      }
    } else if (searchType === "ayah") {
      let foundAyah = false;
      
      for (const surah of data.data.surahs) {
        const ayah = surah.ayahs.find(
          (a) => 
            a.text.includes(searchQuery) || 
            a.number.toString() === searchQuery ||
            a.numberInSurah.toString() === searchQuery
        );
        
        if (ayah) {
          setSelectedSurah(surah);
          setViewMode("surah");
          foundAyah = true;
          
          setTimeout(() => {
            const ayahElement = document.getElementById(`ayah-${ayah.number}`);
            if (ayahElement) {
              ayahElement.scrollIntoView({ behavior: 'smooth' });
              ayahElement.classList.add('bg-primary/10');
              setTimeout(() => {
                ayahElement.classList.remove('bg-primary/10');
              }, 2000);
            }
          }, 100);
          
          break;
        }
      }
      
      if (!foundAyah) {
        toast({
          title: "آية غير موجودة",
          description: "لم يتم العثور على الآية المطلوبة",
          variant: "destructive",
        });
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="mr-2 text-xl">جاري تحميل القرآن الكريم...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-2xl font-bold text-destructive">حدث خطأ</h1>
        <p className="mt-4">لم نتمكن من تحميل القرآن الكريم. الرجاء المحاولة مرة أخرى.</p>
        <Button 
          className="mt-4" 
          onClick={() => window.location.reload()}
        >
          إعادة المحاولة
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold text-primary">القرآن الكريم</h1>
        <p className="text-muted-foreground">اقرأ وابحث في القرآن الكريم</p>
      </div>

      <div className="mb-8 space-y-4">
        <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as "surah" | "hizb" | "thumn")}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="surah">السور</TabsTrigger>
            <TabsTrigger value="hizb">الأحزاب</TabsTrigger>
            <TabsTrigger value="thumn">الأثمان</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-1 gap-2">
            <Select 
              value={searchType} 
              onValueChange={setSearchType}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="نوع البحث" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="surah">سورة</SelectItem>
                <SelectItem value="ayah">آية</SelectItem>
              </SelectContent>
            </Select>
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder={searchType === "surah" ? "ابحث عن سورة..." : "ابحث عن آية..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10"
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            </div>
            <Button onClick={handleSearch}>بحث</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[300px_1fr]">
        <div className="h-[70vh] overflow-y-auto rounded-lg border border-border p-4">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <Book className="h-5 w-5" />
            <span>
              {viewMode === "surah" && "فهرس السور"}
              {viewMode === "hizb" && "فهرس الأحزاب"}
              {viewMode === "thumn" && "فهرس الأثمان"}
            </span>
          </h2>
          <div className="space-y-1">
            {viewMode === "surah" && data?.data.surahs.map((surah) => (
              <Button
                key={surah.number}
                variant={selectedSurah?.number === surah.number ? "default" : "ghost"}
                className="w-full justify-start text-right"
                onClick={() => {
                  handleSurahSelect(surah.number.toString());
                  setViewMode("surah");
                }}
              >
                <span className="ml-2 inline-block w-8 text-center">{surah.number}.</span>
                <span>{surah.name}</span>
              </Button>
            ))}
            
            {viewMode === "hizb" && Array.from({ length: 60 }, (_, i) => i + 1).map((hizbNum) => (
              <Button
                key={hizbNum}
                variant={selectedHizb === hizbNum && viewMode === "hizb" ? "default" : "ghost"}
                className="w-full justify-start text-right"
                onClick={() => setSelectedHizb(hizbNum)}
              >
                <span className="ml-2 inline-block w-8 text-center">{hizbNum}.</span>
                <span>الحزب {hizbNum}</span>
              </Button>
            ))}
            
            {viewMode === "thumn" && Array.from({ length: 240 }, (_, i) => i + 1).map((thumnNum) => (
              <Button
                key={thumnNum}
                variant={selectedThumn === thumnNum && viewMode === "thumn" ? "default" : "ghost"}
                className="w-full justify-start text-right"
                onClick={() => setSelectedThumn(thumnNum)}
              >
                <span className="ml-2 inline-block w-8 text-center">{thumnNum}.</span>
                <span>الثمن {thumnNum}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-border p-6">
          {viewMode === "surah" && selectedSurah && (
            <div>
              <div className="mb-6 text-center">
                <h2 className="mb-2 text-2xl font-bold">{selectedSurah.name}</h2>
                <p className="text-muted-foreground">
                  {selectedSurah.englishName} ({selectedSurah.englishNameTranslation})
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {selectedSurah.revelationType === "Meccan" ? "مكية" : "مدنية"} - {selectedSurah.ayahs.length} آيات
                </p>
              </div>

              <Tabs defaultValue="arabic">
                <TabsList className="mb-4 grid w-[400px] grid-cols-2">
                  <TabsTrigger value="arabic">عربي</TabsTrigger>
                  <TabsTrigger value="info">معلومات</TabsTrigger>
                </TabsList>
                
                <TabsContent value="arabic" className="space-y-4">
                  <div className="rounded-lg bg-muted/50 p-6 text-right leading-loose">
                    {selectedSurah.number !== 1 && (
                      <p className="mb-6 text-center text-xl">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
                    )}
                    
                    {selectedSurah.ayahs.map((ayah) => (
                      <span 
                        key={ayah.number}
                        id={`ayah-${ayah.number}`}
                        className="inline transition-colors duration-500"
                      >
                        {ayah.text}
                        <span className="mx-1 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-sm">
                          {ayah.numberInSurah}
                        </span>
                      </span>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="info">
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <h3 className="mb-2 text-lg font-medium">معلومات السورة</h3>
                      <ul className="space-y-2">
                        <li><strong>رقم السورة:</strong> {selectedSurah.number}</li>
                        <li><strong>عدد الآيات:</strong> {selectedSurah.ayahs.length}</li>
                        <li><strong>نوع السورة:</strong> {selectedSurah.revelationType === "Meccan" ? "مكية" : "مدنية"}</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
          
          {viewMode === "hizb" && (
            <div>
              <div className="mb-6 text-center">
                <h2 className="mb-2 text-2xl font-bold">الحزب {selectedHizb}</h2>
                <p className="text-muted-foreground">
                  الحزب رقم {selectedHizb} من القرآن الكريم
                </p>
              </div>
              
              <div className="rounded-lg bg-muted/50 p-6 text-right leading-loose">
                {getAyahsByHizb(selectedHizb).map((ayah) => (
                  <span 
                    key={ayah.number}
                    id={`ayah-${ayah.number}`}
                    className="inline transition-colors duration-500"
                  >
                    {ayah.text}
                    <span className="mx-1 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-sm">
                      {ayah.numberInSurah}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {viewMode === "thumn" && (
            <div>
              <div className="mb-6 text-center">
                <h2 className="mb-2 text-2xl font-bold">الثمن {selectedThumn}</h2>
                <p className="text-muted-foreground">
                  الثمن رقم {selectedThumn} من القرآن الكريم
                </p>
              </div>
              
              <div className="rounded-lg bg-muted/50 p-6 text-right leading-loose">
                {getAyahsByThumn(selectedThumn).map((ayah) => (
                  <span 
                    key={ayah.number}
                    id={`ayah-${ayah.number}`}
                    className="inline transition-colors duration-500"
                  >
                    {ayah.text}
                    <span className="mx-1 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-sm">
                      {ayah.numberInSurah}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quran;
