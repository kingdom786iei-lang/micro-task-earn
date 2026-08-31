'use client'
import { useState } from 'react'
export default function ProofUploader({ taskId, userId }: { taskId: string, userId: string }){
  const [file, setFile] = useState<File | null>(null)
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')

  async function submit(){
    setLoading(true)
    const fd = new FormData()
    fd.append('task_id', taskId)
    fd.append('user_id', userId)
    fd.append('proof_text', text)
    if(file) fd.append('file', file)
    const res = await fetch('/api/submit', { method: 'POST', body: fd })
    const data = await res.json()
    setMsg(data.message || data.error)
    setLoading(false)
  }
  return (
    <div className="space-y-2 bg-zinc-900 p-3 rounded-xl">
      <input type="file" onChange={e=>setFile(e.target.files?.[0]||null)} className="text-sm" />
      <input value={text} onChange={e=>setText(e.target.value)} placeholder="Username / proof text" className="w-full bg-black border border-zinc-700 rounded-lg p-2 text-sm" />
      <button onClick={submit} disabled={loading} className="bg-green-500 text-black w-full py-2 rounded-lg font-bold text-sm">{loading?'Sending...':'Submit Proof'}</button>
      {msg && <p className="text-xs text-gray-400">{msg}</p>}
    </div>
  )
}