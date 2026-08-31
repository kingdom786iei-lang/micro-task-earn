'use client'
import { useState, useEffect } from 'react'

export default function AdminPage(){
  const [subs, setSubs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{ fetchSubs() },[])
  async function fetchSubs(){
    // Mock data for now - real me supabase se fetch hoga
    setSubs([
      { id:'1', user_id:'user1@example.com', task_title:'Instagram Follow', proof_url:'https://via.placeholder.com/300', proof_text:'@myinsta', status:'pending', reward:0.2 },
      { id:'2', user_id:'user2@example.com', task_title:'YouTube Sub', proof_url:'', proof_text:'Done', status:'pending', reward:0.3 }
    ])
    setLoading(false)
  }

  async function handleAction(id:string, action:'approved'|'rejected'){
    await fetch('/api/approve', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ submission_id:id, action }) })
    setSubs(s=>s.filter(x=>x.id!==id))
    alert(`${action} done! Balance updated`)
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Admin Panel 👑</h1>
      <p className="text-sm text-zinc-500 mb-6">Phase 3 - Proof Approval Screen - DONE ✅</p>
      
      <div className="grid gap-4">
        {loading ? <p>Loading...</p> : subs.length===0 ? <p className="text-zinc-500">No pending proofs 🎉</p> : subs.map(s=>(
          <div key={s.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex gap-4">
            <div className="flex-1">
              <p className="font-bold">{s.task_title} - ${s.reward}</p>
              <p className="text-xs text-zinc-400">User: {s.user_id}</p>
              <p className="text-sm mt-2">Proof: {s.proof_text}</p>
              {s.proof_url && <img src={s.proof_url} className="mt-2 w-32 h-32 object-cover rounded-lg" />}
            </div>
            <div className="flex flex-col gap-2">
              <button onClick={()=>handleAction(s.id,'approved')} className="bg-green-500 text-black px-6 py-2 rounded-xl font-bold">Approve</button>
              <button onClick={()=>handleAction(s.id,'rejected')} className="bg-red-500/20 text-red-400 px-6 py-2 rounded-xl">Reject</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
        <h2 className="font-bold mb-4">Campaign Creator</h2>
        <form className="space-y-3" onSubmit={e=>{e.preventDefault(); alert('Campaign Created (mock)')}}>
          <input placeholder="Campaign Title" className="w-full bg-black border border-zinc-800 rounded-xl p-3" required />
          <textarea placeholder="Task Instructions" className="w-full bg-black border border-zinc-800 rounded-xl p-3 h-20" required />
          <div className="grid grid-cols-2 gap-3">
            <input type="number" step="0.01" placeholder="Reward $0.20" className="bg-black border border-zinc-800 rounded-xl p-3" required />
            <input type="number" placeholder="Budget $50" className="bg-black border border-zinc-800 rounded-xl p-3" required />
          </div>
          <button className="bg-white text-black w-full py-3 rounded-xl font-bold">Create Campaign</button>
        </form>
      </div>
    </div>
  )
}