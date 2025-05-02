"use client"

import { motion } from "framer-motion"

export function WaveAnimation() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
      <motion.div
        className="absolute bottom-[-10px] left-0 right-0 h-24 bg-purple-500/10"
        style={{
          maskImage:
            "url(\"data:image/svg+xml,%3Csvg width='1600' height='198' viewBox='0 0 1600 198' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 141.5L53.3 156.2C106.7 170.8 213.3 200.2 320 192.2C426.7 184.2 533.3 138.8 640 113.8C746.7 88.8 853.3 84.2 960 99.2C1066.7 114.2 1173.3 148.8 1280 159.8C1386.7 170.8 1493.3 158.2 1546.7 151.8L1600 145.5V0H1546.7C1493.3 0 1386.7 0 1280 0C1173.3 0 1066.7 0 960 0C853.3 0 746.7 0 640 0C533.3 0 426.7 0 320 0C213.3 0 106.7 0 53.3 0H0V141.5Z' fill='%23D1D5DB'/%3E%3C/svg%3E%0A\")",
          maskSize: "cover",
          maskRepeat: "no-repeat",
        }}
        animate={{
          x: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-[-30px] left-0 right-0 h-24 bg-purple-500/5"
        style={{
          maskImage:
            "url(\"data:image/svg+xml,%3Csvg width='1600' height='198' viewBox='0 0 1600 198' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1600 56.5L1546.7 41.8C1493.3 27.2 1386.7 -2.2 1280 0.8C1173.3 3.8 1066.7 39.2 960 64.2C853.3 89.2 746.7 103.8 640 88.8C533.3 73.8 426.7 29.2 320 18.2C213.3 7.2 106.7 29.8 53.3 41.2L0 52.5V198H53.3C106.7 198 213.3 198 320 198C426.7 198 533.3 198 640 198C746.7 198 853.3 198 960 198C1066.7 198 1173.3 198 1280 198C1386.7 198 1493.3 198 1546.7 198H1600V56.5Z' fill='%23D1D5DB'/%3E%3C/svg%3E%0A\")",
          maskSize: "cover",
          maskRepeat: "no-repeat",
        }}
        animate={{
          x: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}
