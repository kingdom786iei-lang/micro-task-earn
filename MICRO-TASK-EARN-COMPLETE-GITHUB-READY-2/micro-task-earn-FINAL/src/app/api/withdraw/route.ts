import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/server'

export async function POST(req: Request){
  const { user_id, amount, binance_address } = await req.json()
  const { data: user } = await supabaseAdmin.from('users').select('balance').eq('id', user_id).single()
  if(!user || Number(user.balance) < Number(amount)) return NextResponse.json({ error: 'Insufficient balance' }, { status: 400 })
  if(Number(amount) < 5) return NextResponse.json({ error: 'Minimum $5 withdrawal' }, { status: 400 })

  // Deduct and create payout request
  await supabaseAdmin.from('users').update({ balance: Number(user.balance) - Number(amount), binance_address }).eq('id', user_id)
  await supabaseAdmin.from('payouts').insert({ user_id, amount, binance_address, status: 'pending' })
  return NextResponse.json({ success: true, message: 'Payout request registered, manual transfer pending' })
}