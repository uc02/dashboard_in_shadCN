"use client"

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"


import { z } from "zod"
import { Form } from "./ui/form"

const formSchema = z.object({
  username: z.string().min(2,{ message: "Username must be at least 2 characters!"}).max(50),
  email: z.string().email({ message: "Invalid email address"}),
  phone: z.string().min(10).max(15),
  location: z.string().min(2),
  role: z.enum(["admin","user"]),
})

const EditUser = () => {

  const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues:{
        username: "john.wick",
        email:"john.wick@gmail.com",
        phone:"9999999999",
        location:"Mars",
        role:"admin"
      }
    })
  return (
    
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="mb-4">Edit User</SheetTitle>
        <SheetDescription>
          <Form {...form}>
          </Form>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>

  )
}

export default EditUser
