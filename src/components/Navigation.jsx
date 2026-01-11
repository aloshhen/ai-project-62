import { cn } from '../utils.js'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-amber-700">☕ Amber</span>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-amber-600 border-b-2 border-amber-500">
              Главная
            </a>
            <a href="#menu" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-700 hover:text-amber-600 hover:border-amber-500 border-b-2 border-transparent">
              Меню
            </a>
            <a href="#reservation" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-700 hover:text-amber-600 hover:border-amber-500 border-b-2 border-transparent">
              Бронирование
            </a>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-amber-700 bg-amber-50"
            >
              Главная
            </a>
            <a
              href="#menu"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-amber-600 hover:bg-amber-50"
            >
              Меню
            </a>
            <a
              href="#reservation"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-amber-600 hover:bg-amber-50"
            >
              Бронирование
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}