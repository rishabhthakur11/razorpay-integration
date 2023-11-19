"use client"
import Image from 'next/image'
import logo from '../../public/phplgbGKN.svg'
import axios from 'axios'

export default function Home() {
  const checkoutHandler = async (amount) => {
    const {data} = await axios.get("http://localhost:4000/api/getkey")
    const {data:{order}} = await axios.post("http://localhost:4000/api/checkout", {
      amount
    })

    const options = {
      key:data.data,
      amount: order.amount,
      currency: "INR",
      name: "Razorpay Integration",
      description: "A simple integration of Razorpay payment gateway with Next.js",
      order_id: order.id,
      callback_url: "http://localhost:4000/api/paymentverification",
      theme: {
        color: "#3399cc",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black text-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">Razorpay Integration</h1>
        <p className="text-lg text-center">A simple integration of Razorpay payment gateway with Next.js</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src={logo} width={200} height={200} />
        <p className="text-lg text-center">Click the button below to make a payment</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <button onClick={()=>checkoutHandler(100)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Pay ₹100
        </button>
      </div>
    </main>
  )
}
