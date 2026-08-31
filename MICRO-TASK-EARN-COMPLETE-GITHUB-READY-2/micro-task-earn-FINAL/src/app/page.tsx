import Link from 'next/link'
export default function Home(){
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <h1 className="text-4xl font-bold mb-2">Micro Task Earn 💸</h1>
      <p className="text-gray-400 mb-6">Tasks karo, proof do, USDT kamao</p>
      <div className="flex gap-4">
        <Link href="/dashboard" className="bg-green-500 text-black px-6 py-3 rounded-full font-bold">User Dashboard</Link>
        <Link href="/admin" className="bg-white text-black px-6 py-3 rounded-full font-bold">Admin Panel</Link>
      </div>
      <p className="mt-10 text-sm text-gray-500">Phase 1 Setup: DONE ✅</p>
    </main>
  )
}