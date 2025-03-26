
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Home, Grid, Map, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
}

const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "تم تسجيل الخروج بنجاح",
      description: "نراك قريباً!",
    });
    navigate("/login");
  };

  return (
    <>
      <div className="p-4 mt-auto">
        <Button
          variant="outline"
          onClick={handleSignOut}
          className="justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
        >
          <LogOut className="ml-2 h-5 w-5" />
          تسجيل الخروج
        </Button>
      </div>
      <div className="flex h-screen bg-gray-50">
        {/* Main content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
