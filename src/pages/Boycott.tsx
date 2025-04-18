import { useState } from "react";
import { Search, ArrowRight, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { alternativesData } from "@/lib/utils";

const countryCodes: Record<string, string> = {
  "United States": "US",
  Global: "GLOBAL",
  "United Kingdom": "GB",
  China: "CN",
  India: "IN",
  Israel: "IL",
  Australia: "AU",
  Germany: "DE",
  Ukraine: "UA",
  Turkey: "TR",
  "South Africa": "ZA",
  Netherlands: "NL",
  Norway: "NO",
  Switzerland: "CH",
  "New Zealand": "NZ",
  Russia: "RU",
  Brazil: "BR",
  Canada: "CA",
  France: "FR",
  Serbia: "RS",
  Poland: "PL",
  Belgium: "BE",
  Latvia: "LV",
  Finland: "FI",
};

const Boycott = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Nombre d'éléments par page

  const filteredAlternatives = searchTerm
    ? alternativesData.filter(
        (item) =>
          item.original.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.alternatives.some((alt) =>
            alt.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
      )
    : alternativesData;

  // Calcul des éléments à afficher pour la page actuelle
  const totalPages = Math.ceil(filteredAlternatives.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredAlternatives.slice(startIndex, endIndex);

  // Fonctions pour gérer la navigation entre les pages
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  // Génération des numéros de page (limité pour éviter une liste trop longue)
  const pageNumbers = [];
  const maxPagesToShow = 5; // Nombre maximum de pages affichées
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container py-8 bg-background" dir="rtl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 text-primary">مقام للمقاطعة</h1>
        <p className="text-lg text-gray-600">
          منصة تساعدك على اكتشاف بدائل أخلاقية للمنتجات التقنية الأمريكية
          والإسرائيلية
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
        {currentItems.map((item, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="bg-primary/5 p-3 flex items-center">
              <span className="mr-2 text-lg">
                {item.originCountry === "Global" ? (
                  <span className="text-lg">🌐</span>
                ) : (
                  <img
                    src={`https://flagsapi.com/${
                      countryCodes[item.originCountry] || "GLOBAL"
                    }/flat/24.png`}
                    alt={`Flag of ${item.originCountry}`}
                    width={24}
                    height={24}
                    className="ml-2 rounded-full"
                  />
                )}
              </span>
              <span className="text-sm text-gray-600">
                {item.originCountry}
              </span>
              <span className="mr-auto font-semibold">{item.original}</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-right mb-4">البدائل:</h3>

              {item.alternatives.map((alt, altIndex) => (
                <div
                  key={altIndex}
                  className="flex items-center justify-between mb-3 last:mb-0"
                >
                  <span className="font-semibold">{alt.name}</span>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600">{alt.country}</span>
                    <span className="mr-2 text-lg">
                      {alt.country === "Global" ? (
                        <span className="text-lg">🌐</span>
                      ) : (
                        <img
                          src={`https://flagsapi.com/${
                            countryCodes[alt.country] || "GLOBAL"
                          }/flat/24.png`}
                          alt={`Flag of ${alt.country}`}
                          width={24}
                          height={24}
                          className="ml-2 rounded-full"
                        />
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {filteredAlternatives.length > itemsPerPage && (
        <div className="flex justify-center items-center mt-8 gap-2">
          {/* Bouton Première Page */}
          <Button
            onClick={handleFirstPage}
            disabled={currentPage === 1}
            className="px-3 py-2"
            variant="outline"
          >
            الأولى
          </Button>

          {/* Bouton Précédent */}
          <Button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-3 py-2"
            variant="outline"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>

          {/* Numéros de page */}
          {pageNumbers.map((page) => (
            <Button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`px-4 py-2 ${
                currentPage === page
                  ? "bg-primary text-white"
                  : "bg-background text-gray-600"
              }`}
              variant={currentPage === page ? "default" : "outline"}
            >
              {page}
            </Button>
          ))}

          {/* Bouton Suivant */}
          <Button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-3 py-2"
            variant="outline"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>

          {/* Bouton Dernière Page */}
          <Button
            onClick={handleLastPage}
            disabled={currentPage === totalPages}
            className="px-3 py-2"
            variant="outline"
          >
            الأخيرة
          </Button>
        </div>
      )}
    </div>
  );
};

export default Boycott;
