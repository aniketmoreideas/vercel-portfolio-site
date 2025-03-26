"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"

export function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      title: "More Ideas COMS",
      category: "laravel",
      description:
        "A comprehensive logistics management system that enables the operations team to manage orders, track delivery schedules, update customer profiles, and generate AWB numbers directly through integrations with courier APIs such as Buraq, SkyEx, and First Flight.",
      techStack: [
        "Laravel",
        "CodeIgniter",
        "PHP",
        "jQuery",
        "Bootstrap",
        "MySQL",
        "Azure SSO",
        "GitHub Actions",
        "Courier API",
        "RBAC",
      ],
      image: "/placeholder.svg?height=200&width=400",
      link: null, // Demo available upon request
      demoText: "Demo available upon request",
    },
    {
      title: "More Ideas Quiz Dashboard",
      category: "codeigniter",
      description:
        "A marketing engagement platform that allows teams to import customer data from LeadSquared CRM, create quiz campaigns, conduct interactive events, and send bulk notifications via email, WhatsApp, and SMS. The system also generates and distributes certificates for participants and winners.",
      techStack: [
        "CodeIgniter",
        "PHP",
        "jQuery",
        "Bootstrap",
        "MySQL",
        "Azure SSO",
        "LeadSquared",
        "WhatsApp API",
        "SMS API",
        "RBAC",
      ],
      image: "/placeholder.svg?height=200&width=400",
      link: null, // Demo available upon request
      demoText: "Demo available upon request",
    },
    {
      title: "More Ideas Refund Flow",
      category: "laravel",
      description:
        "A refund management system for the Customer Happiness team. This application enables managers to assign refund requests, track status updates, ensure approval workflows, and maintain records of customer interactions, including uploaded supporting files and recordings.",
      techStack: ["Laravel", "jQuery", "Bootstrap", "Tailwind CSS", "MySQL", "Azure SSO", "GitHub Actions", "RBAC"],
      image: "/placeholder.svg?height=200&width=400",
      link: null, // Demo available upon request
      demoText: "Demo available upon request",
    },
    {
      title: "More Ideas Talent Check",
      category: "laravel",
      description:
        "A training and assessment platform for onboarding new sales professionals. The system allows trainers to create quizzes focused on product knowledge, customer FAQs, and sales scenarios. The results are automatically generated and shared with managers for evaluation.",
      techStack: ["Laravel", "React", "Tailwind CSS", "MySQL", "Azure SSO", "GitHub Actions", "RBAC"],
      image: "/placeholder.svg?height=200&width=400",
      link: null, // Demo available upon request
      demoText: "Demo available upon request",
    },
    {
      title: "Mind Alcove",
      category: "laravel",
      description:
        "Developed APIs for mobile applications and employee well-being platform focused on mental health services for businesses.",
      techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "jQuery", "GitHub", "WHM"],
      image: "/images/projects/mind-alcove.png",
      link: "https://mindalcove.com/",
    },
    {
      title: "Wetinuneed",
      category: "codeigniter",
      description: "E-commerce website with custom features.",
      techStack: ["CodeIgniter", "PHP", "MySQL", "Bootstrap", "jQuery", "GitHub", "WHM"],
      image: "/placeholder.svg?height=200&width=400",
      link: "https://wetinuneed.com/",
    },
    {
      title: "The Triangles",
      category: "codeigniter",
      description: "Custom web application with payment integration.",
      techStack: ["CodeIgniter", "PHP", "MySQL", "Bootstrap", "jQuery", "GitHub", "WHM", "Razorpay"],
      image: "/placeholder.svg?height=200&width=400",
      link: "https://the-triangles.com/",
    },
    {
      title: "More Ideas General Trading LLC",
      category: "wordpress",
      description: "Corporate website with LeadSquared integration and WooCommerce.",
      techStack: ["WordPress", "PHP", "CSS", "jQuery", "LeadSquared", "WooCommerce"],
      image: "/placeholder.svg?height=200&width=400",
      link: "https://moreideas.ae/",
    },
    {
      title: "Nividous Software Solutions",
      category: "wordpress",
      description: "Corporate website with multiple CRM integrations.",
      techStack: ["WordPress", "PHP", "CSS", "jQuery", "Pardot", "Salesforce", "Infusionsoft"],
      image: "/placeholder.svg?height=200&width=400",
      link: "https://nividous.com/",
    },
    {
      title: "Lupin Limited",
      category: "wordpress",
      description: "Corporate website for pharmaceutical company.",
      techStack: ["WordPress", "PHP", "CSS", "JavaScript"],
      image: "/placeholder.svg?height=200&width=400",
      link: "https://www.lupin.com/",
    },
    {
      title: "Catch Foundation",
      category: "wordpress",
      description: "Non-profit organization website.",
      techStack: ["WordPress", "PHP", "CSS", "JavaScript"],
      image: "/placeholder.svg?height=200&width=400",
      link: "https://catchfoundation.in/",
    },
    {
      title: "More Ideas Shopify Store",
      category: "shopify",
      description:
        "E-commerce store with multiple payment gateway integrations including Tabby, Tamara, and Amazon Payfort.",
      techStack: ["Shopify", "Tabby", "Tamara", "Amazon Payfort", "Shopify APIs"],
      image: "/placeholder.svg?height=200&width=400",
      link: "https://shop.moreideas.ae/",
    },
    {
      title: "TSS Smart Shopify App",
      category: "shopify",
      description: "Custom Shopify app available on the Shopify App Store.",
      techStack: ["Laravel", "React", "MySQL", "PHP", "Shopify API", "WHM", "cPanel"],
      image: "/placeholder.svg?height=200&width=400",
      link: "https://apps.shopify.com/tss-smart-dev",
    },
    {
      title: "E Bazar",
      category: "shopify",
      description: "E-commerce store with custom theme.",
      techStack: ["Shopify", "Theme Customization"],
      image: "/placeholder.svg?height=200&width=400",
      link: "https://www.ebazar.ai/",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="laravel">Laravel</TabsTrigger>
                <TabsTrigger value="codeigniter">CodeIgniter</TabsTrigger>
                <TabsTrigger value="wordpress">WordPress</TabsTrigger>
                <TabsTrigger value="shopify">Shopify</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.slice(0, 4).map((tech, i) => (
                            <Badge key={i} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                          {project.techStack.length > 4 && (
                            <Badge variant="outline">+{project.techStack.length - 4} more</Badge>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          {project.link ? (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center"
                            >
                              <span>View Project</span>
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          ) : (
                            <span className="flex items-center justify-center">
                              {project.demoText || "View Details"}
                            </span>
                          )}
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

