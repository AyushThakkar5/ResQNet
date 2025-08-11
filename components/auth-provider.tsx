"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  name: string
  email: string
  role: "user" | "volunteer" | "admin"
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored auth token
    const token = localStorage.getItem("auth-token")
    if (token) {
      // Mock user data
      setUser({
        id: "1",
        name: "Mr. Thakkar",
        email: "thakkar@gmail.com",
        role: "volunteer",
      })
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // Mock login
    const mockUser = {
      id: "1",
      name: "Mr. Thakkar",
      email: email,
      role: "volunteer" as const,
    }

    setUser(mockUser)
    localStorage.setItem("auth-token", "mock-token")
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("auth-token")
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
