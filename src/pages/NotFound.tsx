import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-background text-center">
      <h1 className="text-3xl font-bold text-primary">404</h1>

      <p className="mt-4 text-xl text-gray-600">عذرا، الصفحة غير موجودة</p>

      <Link
        to="/"
        className="mt-8 rounded-lg bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90"
      >
        <Home className="w-6 h-6 inline-block -mt-0.5 mr-2 ml-2" />
        العودة إلى الصفحة الرئيسية
      </Link>
    </div>
  );
};

export default NotFound;
