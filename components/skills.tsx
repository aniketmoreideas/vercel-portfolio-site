"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "WordPress", "Tailwind CSS", "Bootstrap", "jQuery", "AJAX"],
    },
    {
      title: "Backend",
      skills: ["PHP", "Laravel", "Laravel Inertia", "CodeIgniter", "MySQL", "MongoDB", "REST APIs", "GraphQL APIs"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub Actions", "CI/CD", "WHM", "cPanel", "AWS (EC2, S3)"],
    },
    {
      title: "CRM Platforms",
      skills: ["Salesforce", "Freshdesk", "Pardot", "Infusionsoft", "LeadSquared"],
    },
    {
      title: "Payment Gateways",
      skills: ["PayPal", "Stripe", "Razorpay", "Tabby", "Tamara", "Amazon Payfort", "PayTabs"],
    },
    {
      title: "E-commerce Platforms",
      skills: ["Shopify", "WooCommerce", "Shopify API", "Shopify App Development"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription>{category.skills.length} skills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

