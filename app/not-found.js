import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold mb-4">ไม่พบหน้านี้ (404) / ไม่พบสูตรนี้</h2>
      <p className="text-gray-600 mb-6">หน้าที่คุณพยายามเข้าถึงไม่มีอยู่ หรืออาจจะถูกลบไปแล้ว</p>
      <Link href="/" className="text-orange-600 hover:underline">
        กลับไปหน้าแรก
      </Link>
    </div>
  );
}
