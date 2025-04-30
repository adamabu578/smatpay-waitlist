import WaitlistForm from "@/components/waitlist-form"
import { Smartphone, Zap, Shield } from "lucide-react"
import Image from "next/image"
import waitlist from "@/components/assets/waitlist.jpg"
import Logo from "@/components/assets/smatpay-logo.png"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <header className="mb-12 text-center">
          <Image src={waitlist} alt="" className="w-50 mx-auto bg-black rounded-md" />
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-purple-950 mb-4">
            Smatpay VTU App
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The easiest way to top up your mobile phone, pay bills, and manage your digital services.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
          <Image src={Logo} alt="" className="w-30 mx-auto bg-black rounded-md" />

            <h2 className="text-3xl font-bold mb-6 text-gray-800">Join our waitlist</h2>
            <p className="text-gray-600 mb-8">
              Be the first to know when we launch. Get early access and exclusive offers.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-full text-purple-600">
                  <Zap size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Fast Transactions</h3>
                  <p className="text-gray-600">Complete top-ups in seconds, not minutes</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-full text-purple-600">
                  <Smartphone size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Multiple Networks</h3>
                  <p className="text-gray-600">Support for all major telecom providers</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-full text-purple-600">
                  <Shield size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Secure Payments</h3>
                  <p className="text-gray-600">Bank-level security for all your transactions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </div>
  )
}
