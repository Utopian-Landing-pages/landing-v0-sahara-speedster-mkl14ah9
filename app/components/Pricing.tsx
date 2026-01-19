'use client'

import { motion } from 'framer-motion'
import { Download, Gamepad2, Trophy, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const steps = [
  {
    icon: Download,
    title: 'Get Early Access',
    description: 'Sign up for early access to be among the first to experience Sahara Speedster when it launches.',
  },
  {
    icon: Gamepad2,
    title: 'Master the Controls',
    description: 'Learn the magical abilities and movement mechanics to navigate through challenging desert landscapes.',
  },
  {
    icon: Trophy,
    title: 'Complete Levels',
    description: 'Progress through intricately designed levels, each featuring unique challenges and Arabian mythology themes.',
  },
  {
    icon: Users,
    title: 'Join the Community',
    description: 'Connect with other players, share speedruns, and compete for the fastest completion times.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export function Pricing() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            {'How It Works'}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {'Your journey from sign-up to mastery in four simple steps'}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="mb-6 border-2 hover:border-accent transition-all duration-300 group">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
                      <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <span className="text-2xl md:text-3xl font-bold text-accent">
                          {index + 1}
                        </span>
                      </div>
                      <div className="p-3 md:p-4 bg-accent rounded-xl group-hover:scale-110 transition-transform">
                        <step.icon className="w-6 h-6 md:w-8 md:h-8 text-accent-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
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
