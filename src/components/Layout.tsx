import { mainNavItems, topNavItems } from "@/lib/utils";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="header-nav">
        <nav className="bg-background py-3">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              {/* Logo et nom de la plateforme */}
              <Link to="/" className="flex items-center gap-2">
                <img src="./logo.png" alt="Logo" className="h-12" />
                <span className="text-2xl font-bold text-primary">مقام</span>
              </Link>

              {/* Liens de navigation */}
              <div
                className={`hidden md:flex space-x-6 flex-col md:flex-row absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 z-50`}
              >
                {topNavItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 text-primary ${
                      isActive(item.path) ? "text-secondary" : " "
                    }`}
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
