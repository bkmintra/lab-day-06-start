export const metadata = {
  title: 'About | Recipe Browser',
}

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow text-center">
      <h1 className="text-2xl font-bold mb-4">เกี่ยวกับ</h1>
      <p className="text-gray-600">
        Lab วันที่ 6 — แปลง React SPA ให้กลายเป็น Next.js App Router 
        <br/><br/>
        ใช้ข้อมูลจาก API TheMealDB ฟรี
      </p>
    </div>
  );
}
