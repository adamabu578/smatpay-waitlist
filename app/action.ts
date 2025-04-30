"use server"

import fs from "fs"
import path from "path"

type WaitlistEntry = {
  name: string
  email: string
  phone: string
  network: string
  timestamp: string
}

export async function joinWaitlist(data: Omit<WaitlistEntry, "timestamp">) {
  // Validate the data
  if (!data.name || !data.email || !data.phone) {
    throw new Error("Missing required fields")
  }

  // In a real app, you would store this in a database
  // For this example, we'll store it in a JSON file
  const entry: WaitlistEntry = {
    ...data,
    timestamp: new Date().toISOString(),
  }

  try {
    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), "data")
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    const filePath = path.join(dataDir, "waitlist.json")

    // Read existing data or create empty array
    let waitlist: WaitlistEntry[] = []
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf8")
      waitlist = JSON.parse(fileContent)
    }

    // Add new entry
    waitlist.push(entry)

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(waitlist, null, 2))

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true }
  } catch (error) {
    console.error("Error saving waitlist entry:", error)
    throw new Error("Failed to join waitlist")
  }
}
