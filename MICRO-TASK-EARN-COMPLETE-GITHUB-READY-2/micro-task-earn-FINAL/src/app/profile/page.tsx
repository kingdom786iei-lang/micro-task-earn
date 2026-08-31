'use client'
import { useState } from 'react'
export default function Profile(){
  const [address, setAddress] = useState('')
  const [bal] = useState(2.50)
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-6">My Profile & Wallet</h1>
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4">
        <div className="flex justify-between"><span>Balance</span><span className="font-bold text-green-400">${bal}</span></div>
        <div>
          <label className="text-sm text-zinc-400">Binance USDT (TRC20) Address</label>
          <input value={address} onChange={e=>setAddress(e.target.value)} placeholder="T... your TRC20 address" className="w-full mt-2 bg-black border border-zinc-700 rounded-xl p-3 text-sm" />
        </div>
        <button onClick={()=>alert('Address saved!')} className="bg-white text-black w-full py-3 rounded-xl font-bold">Save Wallet</button>
        <hr className="border-zinc-800" />
        <div>
          <label className="text-sm text-zinc-400">Withdraw Amount (Min $5)</label>
          <input type="number" placeholder="5.00" className="w-full mt-2 bg-black border border-zinc-700 rounded-xl p-3" id="amt" />
          <button onClick={()=>{
            const amt = (document.getElementById('amt') as HTMLInputElement).value
            fetch('/api/withdraw', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ user_id:'demo-user', amount:amt, binance_address:address }) }).then(r=>r.json()).then(d=>alert(d.message || d.error))
          }} className="bg-green-500 text-black w-full py-3 rounded-xl font-bold mt-3">Request Withdraw</button>
          <p className="text-xs text-zinc-500 mt-2">Shuru me manual approval, baad me Binance API automate karenge</p>
        </div>
      </div>
    </div>
  )
}