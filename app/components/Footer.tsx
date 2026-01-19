'use client'

import React from "react"

import { useState } from 'react'
import Link from 'next/link'
import { Sparkles, Twitter, Facebook, Instagram, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PROJECT_NAME, PROJECT_URL } from '@/lib/constants'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  const footerLinks = {
    game: [
      { label: 'Features', href: '#features' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'FAQ', href: '#faq' },
    ],
    company: [
      { label: 'About Us', href: PROJECT_URL },
      { label: 'Blog', href: PROJECT_URL },
      { label: 'Press Kit', href: PROJECT_URL },
      { label: 'Contact', href: PROJECT_URL },
    ],
    legal: [
      { label: 'Privacy Policy', href: PROJECT_URL },
      { label: 'Terms of Service', href: PROJECT_URL },
      { label: 'Cookie Policy', href: PROJECT_URL },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Newsletter Section */}
        <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{'Stay Updated'}</h3>
          <p className="text-primary-foreground/80 mb-6">
            {'Subscribe to our newsletter for the latest updates, exclusive content, and early access opportunities.'}
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent"
              required
            />
            <Button
              type="submit"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Subscribe
            </Button>
          </form>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & About */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Sparkles className="w-6 h-6 text-accent group-hover:rotate-12 transition-transform" />
              <span className="font-bold text-xl">{PROJECT_NAME}</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {'Experience the thrill of speed with a touch of Arabian mythology and magic.'}
            </p>
          </div>

          {/* Game Links */}
          <div>
            <h4 className="font-bold mb-4">{'Game'}</h4>
            <ul className="space-y-2">
              {footerLinks.game.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-4">{'Company'}</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold mb-4">{'Legal'}</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            {'© 2025 Sahara Speedster. All rights reserved.'}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
