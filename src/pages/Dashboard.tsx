
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { createClient } from "@supabase/supabase-js";
import MosqueManager from "@/components/dashboard/MosqueManager";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import MosqueDropZone from "@/components/MosqueDropZone";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) {
      navigate("/login");
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "تم تسجيل الخروج بنجاح",
      description: "نراك قريباً!",
    });
    navigate("/login");
  };

  const handleDrop = () => {
    window.location.reload();
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">لوحة التحكم</h1>
          <Button onClick={handleSignOut} variant="outline">
            تسجيل الخروج
          </Button>
        </div>

        <Tabs defaultValue="mosques" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="mosques">المساجد</TabsTrigger>
            <TabsTrigger value="holy-places">الأماكن المقدسة</TabsTrigger>
          </TabsList>
          <TabsContent value="mosques">
            <MosqueDropZone is_holy_place={false} onDrop={handleDrop}>
              <MosqueManager />
            </MosqueDropZone>
          </TabsContent>
          <TabsContent value="holy-places">
            <MosqueDropZone is_holy_place={true} onDrop={handleDrop}>
              <MosqueManager isHolyPlace />
            </MosqueDropZone>
          </TabsContent>
        </Tabs>
      </div>
    </DndProvider>
  );
};

export default Dashboard;
