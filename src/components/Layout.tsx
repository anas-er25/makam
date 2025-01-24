import { Link, Outlet, useLocation } from "react-router-dom";
import { Home, Landmark, Flag, Info } from "lucide-react";

const Layout = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", icon: Home, label: "الرئيسية" },
    { path: "/holy-places", icon: Landmark, label: "الأماكن المقدسة" },
    { path: "/palestine", icon: Flag, label: "قضيتي" },
    { path: "/about", icon: Info, label: "عن المنصة" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 md:top-0 md:bottom-auto md:border-t-0 md:border-b">
        <div className="container">
          <ul className="flex items-center justify-around md:justify-center md:gap-8">
            {navItems.map((item) => (
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
      <div className="pb-20 md:pb-0 md:pt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;