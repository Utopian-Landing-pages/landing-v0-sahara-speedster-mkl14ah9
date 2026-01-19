'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What platforms will Sahara Speedster be available on?',
    answer: 'Initially, Sahara Speedster will be available on PC (Windows) via Steam. We are exploring options for console releases in the future.',
  },
  {
    question: 'Will there be controller support?',
    answer: 'Yes, Sahara Speedster will have full controller support for a better gaming experience.',
  },
  {
    question: 'Is there a planned release date?',
    answer: 'We are aiming for a release in Q4 2024. Stay tuned for more specific announcements.',
  },
  {
    question: 'Will there be a multiplayer mode?',
    answer: 'Currently, Sahara Speedster is designed as a single-player experience. We may consider multiplayer features in the future based on player feedback.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            {'Frequently Asked Questions'}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {'Everything you need to know about Sahara Speedster'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-border rounded-lg px-6 data-[state=open]:border-accent transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
