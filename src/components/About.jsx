import { motion } from 'framer-motion'
import { cn } from '../utils.js'
import { Sparkles, Coffee, Utensils, Clock } from 'lucide-react'

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Как мы работаем
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Простой процесс, который делает ваш визит к нам особенным
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-amber-50 rounded-2xl p-8 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              1. Выбираете
            </h3>
            <p className="text-slate-600">
              Изучите наше меню с кофе, чаем, десертами и закусками. Все блюда готовятся из свежих продуктов.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-amber-50 rounded-2xl p-8 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
              <Coffee className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              2. Заказываете
            </h3>
            <p className="text-slate-600">
              Сделайте заказ онлайн или через официанта. Мы гарантируем быстрое и качественное обслуживание.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-amber-50 rounded-2xl p-8 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              3. Наслаждаетесь
            </h3>
            <p className="text-slate-600">
              Расслабьтесь в уютной атмосфере, наслаждайтесь вкусом и ароматом. Мы создаем пространство для отдыха.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}