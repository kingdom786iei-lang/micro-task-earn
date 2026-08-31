// Updated submit route with Turnstile check - copy content to route.ts
import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/server'

async function verifyTurnstile(token: string){
  const secret = process.env.TURNSTILE_SECRET_KEY
  const fd = new FormData()
  fd.append('secret', secret!)
  fd.append('response', token)
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method:'POST', body: fd })
  const data = await res.json()
  return data.success
}

export async function POST(req: Request){
  const formData = await req.formData()
  const token = formData.get('cf-turnstile-response') as string
  if(!token || !(await verifyTurnstile(token))){
    return NextResponse.json({ error: 'Captcha failed, bot detected' }, { status: 403 })
  }
  // ... rest of original submit logic (file upload + db insert)
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
  const { error } = await supabaseAdmin.from('submissions').insert({ task_id, user_id, proof_text, proof_url, status: 'pending' })
  if(error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true })
}