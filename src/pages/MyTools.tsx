import { ExternalLink } from "lucide-react";

const MyTools = () => {
  const tools = [
    {
      title: "أداة التحليل النصي",
      description: "تحليل النصوص وإستخراج المعلومات المهمة",
      link: "#",
    },
    {
      title: "محول الوحدات",
      description: "تحويل بين مختلف الوحدات القياسية",
      link: "#",
    },
    {
      title: "حاسبة الزكاة",
      description: "حساب الزكاة على الأموال والممتلكات",
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">أدواتي</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
            <p className="text-gray-600 mb-4">{tool.description}</p>
            <a
              href={tool.link}
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              استخدم الأداة
              <ExternalLink className="mr-2 h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTools;