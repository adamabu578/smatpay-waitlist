// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// // import { joinWaitlist } from "@/app/actions"
// import { CheckCircle2 } from "lucide-react"


// export default function WaitlistForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSuccess, setIsSuccess] = useState(false)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     network: "",
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleNetworkChange = (value: string) => {
//     setFormData((prev) => ({ ...prev, network: value }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     try {
//     //   await joinWaitlist(formData)
//       setIsSuccess(true)
//     } catch (error) {
//       console.error("Error submitting form:", error)
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   if (isSuccess) {
//     return (
//       <div className="text-center py-8">
//         <div className="flex justify-center mb-4">
//           <CheckCircle2 className="h-16 w-16 text-green-500" />
//         </div>
//         <h3 className="text-2xl font-bold text-gray-800 mb-2">You're on the list!</h3>
//         <p className="text-gray-600 mb-6">Thanks for joining our waitlist. We'll notify you when we launch.</p>
//         <Button
//           variant="outline"
//           onClick={() => setIsSuccess(false)}
//           className="border-purple-500 text-purple-600 hover:bg-purple-50"
//         >
//           Join again with different details
//         </Button>
//       </div>
//     )
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div className="space-y-2">
//         <Label htmlFor="name">Full Name</Label>
//         <Input id="name" name="name" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor="email">Email Address</Label>
//         <Input
//           id="email"
//           name="email"
//           type="email"
//           placeholder="john@example.com"
//           required
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor="phone">Phone Number</Label>
//         <Input
//           id="phone"
//           name="phone"
//           placeholder="08012345678"
//           required
//           value={formData.phone}
//           onChange={handleChange}
//         />
//       </div>

//       <div className="space-y-2">
//         <Label htmlFor="network">Preferred Network</Label>
//         <Select onValueChange={handleNetworkChange} value={formData.network}>
//           <SelectTrigger id="network">
//             <SelectValue placeholder="Select your network" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="mtn">MTN</SelectItem>
//             <SelectItem value="airtel">Airtel</SelectItem>
//             <SelectItem value="glo">Glo</SelectItem>
//             <SelectItem value="9mobile">9Mobile</SelectItem>
//             <SelectItem value="other">Other</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>

//       <Button
//         type="submit"
//         className="w-full bg-black hover:bg-purple-600 text-white"
//         disabled={isSubmitting}
//       >
//         {isSubmitting ? "Joining..." : "Join Waitlist"}
//       </Button>

//       <p className="text-xs text-gray-500 text-center">
//         By joining, you agree to receive updates about our launch and services.
//       </p>
//     </form>
//   )
// }



"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    network: "",
  })

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("e9Tht_Br8bnu563wU") // Replace with your EmailJS public key
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNetworkChange = (value: string) => {
    setFormData((prev) => ({ ...prev, network: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        // "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "service_n5ev2m5", // Replace with your EmailJS service ID
        // "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        "template_zw92h1a", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          network: formData.network,
          to_name: "smatpay", // Replace with your name or company name
        },
      )

      if (response.status === 200) {
        setIsSuccess(true)
        // Reset form data
        setFormData({
          name: "",
          email: "",
          phone: "",
          network: "",
        })
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setError("Failed to submit your information. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="h-16 w-16 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">You're on the list!</h3>
        <p className="text-gray-600 mb-6">Thanks for joining our waitlist. We'll notify you when we launch.</p>
        <Button
          variant="outline"
          onClick={() => setIsSuccess(false)}
          className="border-purple-500 text-purple-600 hover:bg-purple-50"
        >
          Join again with different details
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          placeholder="08012345678"
          required
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="network">Preferred Network</Label>
        <Select onValueChange={handleNetworkChange} value={formData.network}>
          <SelectTrigger id="network">
            <SelectValue placeholder="Select your network" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mtn">MTN</SelectItem>
            <SelectItem value="airtel">Airtel</SelectItem>
            <SelectItem value="glo">Glo</SelectItem>
            <SelectItem value="9mobile">9Mobile</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {error && <div className="text-red-500 text-sm">{error}</div>}

      <Button type="submit" className="w-full bg-black hover:bg-purple-600 text-white" disabled={isSubmitting}>
        {isSubmitting ? "Joining..." : "Join Waitlist"}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        By joining, you agree to receive updates about our launch and services.
      </p>
    </form>
  )
}
