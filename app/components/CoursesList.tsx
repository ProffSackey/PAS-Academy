"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"

type Course = {
  id: number
  title: string
}

export default function CoursesList() {
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase.from("Course").select("*") as { data: Course[] | null; error: any }
      if (error) {
        console.error(error)
        return
      }
      setCourses(data || [])
    }
    load()
  }, [])

  return (
    <ul>
      {courses.map((c) => (
        <li key={c.id}>{c.title}</li>
      ))}
    </ul>
  )
}