"use client"

import "@testing-library/jest-dom"
import { jest } from "@jest/globals"
import { beforeEach } from "@jest/types"

// Mock Next.js router
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }
  },
  useSearchParams() {
    return new URLSearchParams()
  },
  usePathname() {
    return ""
  },
}))

// Mock fetch
global.fetch = jest.fn()

// Setup fetch mock reset
beforeEach(() => {
  fetch.mockClear()
})
