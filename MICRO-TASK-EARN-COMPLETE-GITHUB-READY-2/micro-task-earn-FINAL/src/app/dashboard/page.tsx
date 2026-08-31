import TaskCard from '@/components/TaskCard'
const mockTasks = [
  { id:'1', title:'Follow on Instagram', reward:0.20, instructions:'Hamare page ko follow karo aur screenshot upload karo' },
  { id:'2', title:'YouTube Subscribe', reward:0.30, instructions:'Channel subscribe karo, like karo, proof bhejo' },
  { id:'3', title:'App Download', reward:0.50, instructions:'App download karke 1 min use karo' },
]
export default function Dashboard(){
  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="flex justify-between items-center py-4"><h1 className="text-xl font-bold">Tasks</h1><div className="bg-zinc-800 px-3 py-1 rounded-full text-sm">Balance: $2.50</div></div>
      <div className="grid gap-3">{mockTasks.map(t=><TaskCard key={t.id} task={t}/>)}</div>
    </div>
  )
}