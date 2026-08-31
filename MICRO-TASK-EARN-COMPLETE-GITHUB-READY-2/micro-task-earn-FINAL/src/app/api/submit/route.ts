import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/server'

export async function POST(req: Request){
  const formData = await req.formData()
  const task_id = formData.get('task_id') as string
  const user_id = formData.get('user_id') as string
  const proof_text = formData.get('proof_text') as string
  const file = formData.get('file') as File | null

  let proof_url = null
  if(file){
    const buffer = Buffer.from(await file.arrayBuffer())
    const fileName = `${user_id}/${Date.now()}-${file.name}`
    const { data, error } = await supabaseAdmin.storage.from('proofs').upload(fileName, buffer, { contentType: file.type })
    if(error) return NextResponse.json({ error: error.message }, { status: 500 })
    const { data: publicUrl } = supabaseAdmin.storage.from('proofs').getPublicUrl(fileName)
    proof_url = publicUrl.publicUrl
  }

  const { error } = await supabaseAdmin.from('submissions').insert({
    task_id, user_id, proof_text, proof_url, status: 'pending'
  })
  if(error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true, message: 'Proof submitted, pending approval' })
}