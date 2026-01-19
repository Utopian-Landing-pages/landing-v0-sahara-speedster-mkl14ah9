'use client'

import { motion } from 'framer-motion'
import { Sparkles, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PROJECT_URL } from '@/lib/constants'

const badges = [
  'Early Access Available',
  'Full Controller Support',
  'Stunning Arabian Visuals',
  'Challenging Speedrun Modes',
]

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary/95 to-accent/80 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
          >
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-white font-semibold">{'Limited Early Access Spots'}</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-balance">
            {'Ready to Experience the Magic?'}
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
            {'Join thousands of players embarking on an epic journey through Arabian mythology. Your adventure awaits!'}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xl px-12 py-8 h-auto shadow-2xl hover:shadow-accent/50 transition-all hover:scale-105"
            >
              <a href={PROJECT_URL}>
                <Sparkles className="w-6 h-6 mr-2" />
                {'Get Early Access Now'}
              </a>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
              >
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span className="text-white text-sm font-medium">{badge}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
