"use client"
import { useState } from 'react';
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between relative">
          {/* Left: logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-9 rounded-md bg-blue-900 flex items-center justify-center text-white font-bold">PAS</div>
            <span className="font-semibold text-blue-900">PAS ACADEMY</span>
          </div>

          {/* Center: pill nav (desktop) */}
          <div className="hidden md:flex md:flex-1 md:justify-center">
            <div className="inline-flex items-center rounded-full bg-blue-600/10 px-3 py-1.5 shadow-sm">
              <Link href="/" className="px-4 py-1 text-sm text-blue-600  hover:text-white hover:bg-blue-600 rounded-full ml-2">Homepage</Link>
              <Link href="/courses-overview" className="px-4 py-1 text-sm text-blue-600 hover:text-white hover:bg-blue-600 rounded-full ml-2">Courses Overview</Link>
              <Link href="/about" className="px-4 py-1 text-sm text-blue-600 hover:text-white hover:bg-blue-600 rounded-full ml-2">About Us</Link>
              <Link href="/contact" className="px-4 py-1 text-sm text-blue-600 hover:text-white hover:bg-blue-600 rounded-full ml-2">Contact Us</Link>
            </div>
          </div>

          {/* Right: auth + mobile menu button */}
          <div className="flex items-center space-x-3">
            <button
              type="button"
              className="inline-flex items-center p-2 rounded-md md:hidden text-gray-700 hover:bg-gray-100"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={() => setOpen(v => !v)}
            >
              {open ? (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>

            <Link href="#" className="hidden md:inline-flex items-center px-3 py-1.5 border rounded text-sm text-gray-700 hover:bg-gray-100">Login</Link>
            <Link href="#" className="hidden md:inline-flex items-center px-4 py-1.5 bg-blue-900 text-white text-sm rounded hover:bg-blue-900">Register</Link>
          </div>
        </nav>

        {/* Mobile menu: shown when open */}
        {open && (
          <div id="mobile-menu" className="md:hidden mt-2 rounded-lg bg-white shadow-sm border">
            <div className="flex flex-col divide-y">
              <Link href="/" onClick={() => setOpen(false)} className="px-4 py-3 text-sm text-blue-600 hover:bg-blue-50">Homepage</Link>
              <Link href="/courses-overview" onClick={() => setOpen(false)} className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">Courses Overview</Link>
              <Link href="/about" onClick={() => setOpen(false)} className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">About Us</Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">Contact Us</Link>
              <div className="px-4 py-3">
                <Link href="#" onClick={() => setOpen(false)} className="block w-full text-center px-3 py-2 border rounded text-sm text-gray-700 hover:bg-gray-100">Login</Link>
                <Link href="#" onClick={() => setOpen(false)} className="mt-2 block w-full text-center px-3 py-2 bg-blue-900 text-white rounded text-sm hover:bg-blue-900">Register</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
