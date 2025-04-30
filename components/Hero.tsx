"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, Download, Home, Settings, User } from "lucide-react"

export default function hero() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">shadcn/ui with Lucide React</h1>

      <div className="flex gap-2">
        <Button variant="default">
          <Download className="mr-2 h-4 w-4" /> Download
        </Button>

        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" /> Settings
        </Button>

        <Button variant="ghost">
          <Bell className="mr-2 h-4 w-4" /> Notifications
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Home className="mr-2 h-5 w-5" /> Dashboard
          </CardTitle>
          <CardDescription>Example of shadcn/ui and Lucide React</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is an example of how to use shadcn/ui components with Lucide React icons.</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">
            <User className="mr-2 h-4 w-4" /> View Profile
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
