'use client'
import Script from 'next/script'
import { useEffect } from 'react'

export default function TurnstileWidget({ onVerified }: { onVerified: (token: string)=>void }){
  useEffect(()=>{
    (window as any).onTurnstileSuccess = (token: string) => onVerified(token)
  },[onVerified])

  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
      <div className="cf-turnstile" data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} data-callback="onTurnstileSuccess"></div>
    </>
  )
}