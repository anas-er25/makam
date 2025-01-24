import { Building2 } from "lucide-react";

const About = () => {
  return (
    <div className="container py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold">عن المنصة</h1>
        <p className="text-gray-600">تعرف على منصة المساجد وأهدافها</p>
      </div>

      <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold">رؤيتنا</h2>
        <p className="mb-6 text-gray-600">
          منصة المساجد هي منصة إلكترونية شاملة تهدف إلى توفير معلومات دقيقة ومفيدة
          حول المساجد في المغرب، بالإضافة إلى خدمات أخرى مرتبطة بالحياة الدينية
          والثقافية للمسلمين.
        </p>

        <h2 className="mb-4 text-xl font-bold">أهدافنا</h2>
        <ul className="list-inside list-disc space-y-2 text-gray-600">
          <li>توفير دليل شامل للمساجد في المغرب</li>
          <li>نشر الوعي بأهمية المساجد في حياتنا</li>
          <li>دعم القضايا الإسلامية وخاصة القضية الفلسطينية</li>
          <li>تسهيل الوصول إلى المعلومات الدينية والثقافية</li>
        </ul>
      </div>
    </div>
  );
};

export default About;