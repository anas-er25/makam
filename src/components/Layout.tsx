import { Link, Outlet, useLocation } from "react-router-dom";
import { Home, Landmark, Flag, Info, Heart, MessageSquare, UserPlus, ExternalLink } from "lucide-react";

const Layout = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const topNavItems = [
    { icon: UserPlus, label: "تسجيل الدخول", path: "/login" },
    { icon: MessageSquare, label: "تقديم ملاحظات", path: "/feedback" },
    { icon: Heart, label: "كن صديقاً", path: "/be-friend" },
    { icon: ExternalLink, label: "أدواتي", path: "/my-tools" },
    { icon: Landmark, label: "مفضلاتي", path: "/favorites" },
    { icon: Home, label: "مقصدي", path: "/my-destination" },
  ];

  const mainNavItems = [
    { path: "/", icon: Home, label: "الرئيسية" },
    { path: "/holy-places", icon: Landmark, label: "الأماكن المقدسة" },
    { path: "/palestine", icon: Flag, label: "قضيتي" },
    { path: "/about", icon: Info, label: "عن المنصة" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="header-nav">
        <div className="bg-primary-dark text-white py-1">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <span>فتح باب التسجيل في البناء المنهجي</span>
              <ExternalLink className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-1">
              <button className="p-1 hover:bg-primary/20 rounded">
                <span className="sr-only">Previous</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="p-1 hover:bg-primary/20 rounded">
                <span className="sr-only">Next</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <nav className="bg-primary py-3">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <Link to="/">
                <img src="/lovable-uploads/fc35cba4-e0e2-4de0-842d-eefd944407c0.png" alt="Logo" className="h-12" />
              </Link>
              <div className="nav-links">
                {topNavItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`nav-link ${isActive(item.path) ? "text-secondary" : ""}`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="pt-32 pb-20 md:pb-0">
        <Outlet />
      </div>
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 md:hidden">
        <div className="container">
          <ul className="flex items-center justify-around">
            {mainNavItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex flex-col items-center gap-1 text-sm ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Layout;