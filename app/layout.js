// TODO Lab A: root layout — ต้องเป็น Server Component (ห้ามใส่ "use client" ที่ไฟล์นี้)
//   - <html>/<body> อยู่ที่นี่ เพราะ Next.js ไม่มี index.html ให้แก้แล้ว
//   - วาง <Nav /> จาก components/Nav.js (Client Component) ไว้บนสุด
//   - <main> ครอบ {children} (ทำหน้าที่แทน <Outlet /> ของวันที่ 4) + <footer> ด้านล่าง
import './globals.css'
import Nav from '../components/Nav'

export const metadata = {
  title: 'Recipe Browser',
}

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>
        <Nav />
        <main className="max-w-4xl mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
}
