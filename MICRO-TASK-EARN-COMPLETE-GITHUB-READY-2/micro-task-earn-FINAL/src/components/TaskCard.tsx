'use client'
type Task = { id:string, title:string, reward:number, instructions:string }
export default function TaskCard({ task }: { task: Task }){
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col gap-3">
      <div className="flex justify-between"><h3 className="font-bold">{task.title}</h3><span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">${task.reward}</span></div>
      <p className="text-sm text-zinc-400">{task.instructions}</p>
      <button className="bg-white text-black rounded-xl py-2 font-bold">Submit Proof</button>
    </div>
  )
}