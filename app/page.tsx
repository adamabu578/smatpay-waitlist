"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Toast } from "../components/ui/toast"
import { joinWaitlist } from "./action"
import { AnimatedCharacter } from "@/components/Animated-character"
import { FloatingElements } from "@/components/Floating-element"
import { WaveAnimation } from "@/components/Wave-animation"

export default function WaitlistPage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const toast = (options: any) => console.log(options)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      await joinWaitlist(email)
      setIsSubmitted(true)
      toast({
        title: "Success!",
        description: "You've been added to our waitlist",
        variant: "default",
      })
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <FloatingElements />
        <div className="container px-4 py-16 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-4 py-1.5 rounded-full text-sm font-medium text-slate-800 dark:text-slate-200 mb-6"
            >
              <Sparkles className="h-4 w-4 text-purple-500" />
              <span>Coming Soon</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-6"
            >
              Join our exclusive waitlist
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
            >
              Be the first to experience our revolutionary product when it launches. Sign up now to secure your spot and
              receive early access.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-12"
          >
            <AnimatedCharacter />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="max-w-md mx-auto"
          >
            {!isSubmitted ? (
              <motion.form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Enter your email</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      We'll notify you when we're ready to launch.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Joining...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Join Waitlist
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </div>
                </div>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">You're on the list!</h2>
                  <p className="text-slate-600 dark:text-slate-300">
                    Thank you for joining our waitlist. We'll notify you when we launch.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setEmail("")
                      setIsSubmitted(false)
                    }}
                    className="mt-4"
                  >
                    Join with another email
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Join <span className="font-medium text-purple-600 dark:text-purple-400">2,500+</span> others already on
              the waitlist
            </p>

            <div className="mt-6 flex justify-center">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white dark:border-slate-800"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative h-24 mt-16">
          <WaveAnimation />
        </div>
      </div>
    </div>
  )
}
