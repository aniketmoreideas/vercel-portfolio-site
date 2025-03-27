"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-full"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-primary/10 h-full">
                <CardContent className="p-8 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-semibold mb-8">Contact Information</h3>
                    <div className="space-y-8">
                      <div className="flex items-start space-x-4 group">
                        <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Location</h3>
                          <p className="text-muted-foreground">Oud Metha, Dubai, UAE</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 group">
                        <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Phone</h3>
                          <a 
                            href="tel:+971528384100"
                            className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group-hover:text-primary"
                          >
                            +971 528384100
                            <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 group">
                        <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Email</h3>
                          <a 
                            href="mailto:ank8525@gmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group-hover:text-primary"
                          >
                            ank8525@gmail.com
                            <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-green-500 dark:bg-green-400" />
                      <p className="text-sm text-muted-foreground">
                        Available for full-time positions and freelance projects
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur-3xl opacity-30" />
              <Card className="bg-card/50 backdrop-blur-sm border-primary/10 h-full relative">
                <CardContent className="p-8 flex flex-col h-full">
                  <div>
                    <h3 className="text-xl font-semibold mb-8">Let's Connect!</h3>
                    <p className="text-muted-foreground mb-8">
                      Feel free to reach out through any of these platforms:
                    </p>
                    <div className="space-y-4">
                      <Button
                        variant="outline"
                        className="w-full justify-start gap-2 hover:bg-primary/10 h-[52px]"
                        asChild
                      >
                        <a href="https://www.linkedin.com/in/aniketsharma4u" target="_blank" rel="noopener noreferrer">
                          <svg className="h-5 w-5 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          Connect on LinkedIn
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start gap-2 hover:bg-primary/10 h-[52px]"
                        asChild
                      >
                        <a href="mailto:ank8525@gmail.com">
                          <Mail className="h-5 w-5 text-primary" />
                          Send an Email
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start gap-2 hover:bg-primary/10 h-[52px]"
                        asChild
                      >
                        <a href="tel:+971528384100">
                          <Phone className="h-5 w-5 text-primary" />
                          Call Me
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Response time: Usually within 12 hours
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
