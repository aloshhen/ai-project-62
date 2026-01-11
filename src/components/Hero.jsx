import { motion } from 'framer-motion'
import { cn } from '../utils.js'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-50 via-amber-50 to-slate-100"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://source.unsplash.com/1600x900/?coffee,cafe)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1
            className="text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent"
          >
            ☕ Кофейня Amber
          </h1>
          <p className="mt-6 text-xl text-slate-700 max-w-3xl mx-auto">
            Свежий кофе, ароматные десерты и уютная атмосфера. Приходите наслаждаться каждым глотком!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="px-8 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors transform hover:scale-105"
            >
              Посмотреть меню
            </a>
            <a
              href="#reservation"
              className="px-8 py-3 border-2 border-amber-600 text-amber-600 rounded-lg font-medium hover:bg-amber-50 transition-colors"
            >
              Забронировать стол
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}