import { cn } from '../utils.js'
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-400">☕ Amber</h3>
            <p className="text-slate-300">
              Свежий кофе, ароматные десерты и уютная атмосфера. Приходите наслаждаться каждым глотком!
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-amber-400">
                  Главная
                </a>
              </li>
              <li>
                <a href="#menu" className="text-slate-300 hover:text-amber-400">
                  Меню
                </a>
              </li>
              <li>
                <a href="#reservation" className="text-slate-300 hover:text-amber-400">
                  Бронирование
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>ул. Кофейная, 12, г. Город</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+7 (123) 456-78-90</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>info@ambercoffee.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Соцсети</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-amber-400">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-amber-400">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-amber-400">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400">
            © 2024 Amber Coffee. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}