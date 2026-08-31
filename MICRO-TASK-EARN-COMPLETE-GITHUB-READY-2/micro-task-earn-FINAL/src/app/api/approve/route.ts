import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/server'

export async function POST(req: Request){
  const { submission_id, action } = await req.json() // action = approved / rejected
  // 1. Get submission + task reward
  const { data: sub } = await supabaseAdmin.from('submissions').select('*, micro_tasks(reward)').eq('id', submission_id).single()
  if(!sub) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  if(action === 'approved'){
    // 2. Update submission status
    await supabaseAdmin.from('submissions').update({ status: 'approved' }).eq('id', submission_id)
    // 3. Add balance to user
    const reward = (sub.micro_tasks as any).reward || 0
    const { data: user } = await supabaseAdmin.from('users').select('balance').eq('id', sub.user_id).single()
    const newBalance = Number(user?.balance || 0) + Number(reward)
    await supabaseAdmin.from('users').update({ balance: newBalance }).eq('id', sub.user_id)
    return NextResponse.json({ success: true, newBalance })
  } else {
    await supabaseAdmin.from('submissions').update({ status: 'rejected' }).eq('id', submission_id)
    return NextResponse.json({ success: true })
  }
}