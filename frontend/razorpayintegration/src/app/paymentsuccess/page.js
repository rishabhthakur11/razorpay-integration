"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'



function paymentSuccess() {
    const seachQuery = useSearchParams()
    const referenceNum = seachQuery.get("reference")
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
        <h1>Payment Success</h1>
        <h2>Reference Number: {referenceNum}</h2>

    </div>
  )
}

export default paymentSuccess