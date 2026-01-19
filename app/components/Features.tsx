'use client'

import { motion } from 'framer-motion'
import { Wand2, Zap, Sparkles, Eye, Flag } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const features = [
  {
    icon: Wand2,
    title: 'Magical Abilities',
    description: 'Harness the power of ancient spells and abilities.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: Zap,
    title: 'Fast-Paced Gameplay',
    description: 'Experience the thrill of high-speed platforming action.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: Sparkles,
    title: 'Arabian Mythology',
    description: 'Immerse yourself in a rich world inspired by Arabian folklore.',
    image: 'https://images.unsplash.com/photo-1591604021695-0c69b7c05981?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: Eye,
    title: 'Stunning Visuals',
    description: 'Enjoy beautiful environments and detailed character designs.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: Flag,
    title: 'Challenging Levels',
    description: 'Test your skills with intricate and rewarding level designs.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            {'Unleash Your Inner Hero'}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {'Experience gaming like never before with features designed to push your limits'}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group h-full overflow-hidden border-2 hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 p-3 bg-accent/90 rounded-full">
                      <feature.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
