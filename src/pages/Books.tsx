import { useEffect, useState, useRef, useCallback } from "react";
import { Download } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Books = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  const fetchBooks = useCallback(async () => {
    try {
      const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;
      const query = "islamic+books";
      const startIndex = page * 10;
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&langRestrict=ar&key=${apiKey}&maxResults=10&startIndex=${startIndex}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }

      const data = await response.json();
      setBooks((prevBooks) => [...prevBooks, ...(data.items || [])]);
      setHasMore(data.items && data.items.length > 0);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const lastBookRef = useCallback(
    (node: HTMLElement | null) => {
      if (loading) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPage((prevPage) => prevPage + 1);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 1.0,
        }
      );

      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore]
  );

  if (loading && books.length === 0) {
    return <div className="text-center py-12">جاري التحميل...</div>;
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">
          المكتبة الإلكترونية
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          اكتشف مجموعة من الكتب القيمة وحملها مجانًا.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <Card
              key={book.id}
              ref={index === books.length - 1 ? lastBookRef : null}
              className="hover:shadow-lg transition-shadow"
            >
              {/* Book Image */}
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={
                    book.volumeInfo.imageLinks?.thumbnail ||
                    "https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_1280.jpg"
                  }
                  alt={book.volumeInfo.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  {book.volumeInfo.title}
                </h2>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">المؤلف:</span>{" "}
                  {book.volumeInfo.authors?.join(", ") || "غير معروف"}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">عدد الصفحات:</span>{" "}
                  {book.volumeInfo.pageCount || "غير معروف"}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">سنة النشر:</span>{" "}
                  {book.volumeInfo.publishedDate || "غير معروف"}
                </p>
                <p className="text-gray-600">
                  {book.volumeInfo.description?.substring(0, 150) + "..." ||
                    "لا يوجد وصف متوفر."}
                </p>
              </CardContent>
              <CardFooter className="flex justify-end p-6">
                <a
                  href={book.volumeInfo.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary-dark"
                >
                  <Download className="h-5 w-5" />
                  <span>تحميل</span>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {loading && books.length > 0 && (
          <div className="text-center py-8">جاري تحميل المزيد من الكتب...</div>
        )}

        {!hasMore && (
          <div className="text-center py-8 text-gray-600">
            لا توجد المزيد من الكتب.
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
