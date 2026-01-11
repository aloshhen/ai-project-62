import { motion } from 'framer-motion'
import { cn } from '../utils.js'
import { Coffee, Utensils, Clock, Sparkles } from 'lucide-react'

export default function Features() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Мы предлагаем уникальный опыт, который вы не найдете больше нигде
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-6">
              <Coffee className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Свежий кофе
            </h3>
            <p className="text-slate-600">
              Мы используем только арабику, свежеобжаренную вручную. Каждый напиток готовится с любовью.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-6">
              <Utensils className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Вкусные десерты
            </h3>
            <p className="text-slate-600">
              Наш шеф-пекарь создает невероятные сочетания: от классических тортов до современных десертов.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Быстрая доставка
            </h3>
            <p className="text-slate-600">
              Закажите онлайн или забронируйте столик, и мы обеспечим вам комфортное времяпрепровождение.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}