"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      title: "More Ideas COMS",
      category: "laravel",
      description:
        "A comprehensive logistics management system that enables the operations team to manage orders, track delivery schedules, update customer profiles, and generate AWB numbers directly through integrations with courier APIs such as Buraq, SkyEx, and First Flight.",
      techStack: [
        "Laravel",
        "Bootstrap",
        "jQuery",
        "MySQL",
        "Azure SSO",
        "GitHub Actions",
        "Courier API",
        "RBAC",
      ],
      image: "/projects/codeigniter/coms-min.jpg",
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
        "jQuery",
        "Bootstrap",
        "MySQL",
        "Azure SSO",
        "WhatsApp & SMS API",
        "LeadSquared",
        "RBAC",
        "GitHub Actions",
      ],
      image: "/projects/codeigniter/quiz-dashboard-min.jpg",
      link: null, // Demo available upon request
      demoText: "Demo available upon request",
    },
    {
      title: "More Ideas Refund Flow",
      category: "laravel",
      description:
        "A refund management system for the Customer Happiness team. This application enables managers to assign refund requests, track status updates, ensure approval workflows, and maintain records of customer interactions, including uploaded supporting files and recordings.",
      techStack: [
        "Laravel",
        "jQuery",
        "Bootstrap",
        "Tailwind CSS",
        "MySQL",
        "Azure SSO",
        "GitHub Actions",
        "RBAC",
      ],
      image: "/projects/laravel/refund-flow-min.jpg",
      link: null, // Demo available upon request
      demoText: "Demo available upon request",
    },
    {
      title: "More Ideas Talent Check",
      category: "laravel",
      description:
        "A training and assessment platform for onboarding new sales professionals. The system allows trainers to create quizzes focused on product knowledge, customer FAQs, and sales scenarios. The results are automatically generated and shared with managers for evaluation.",
      techStack: [
        "Laravel",
        "React",
        "Tailwind CSS",
        "MySQL",
        "Azure SSO",
        "GitHub Actions",
        "RBAC",
      ],
      image: "/projects/laravel/skillt-tracket-min.jpg",
      link: null, // Demo available upon request
      demoText: "Demo available upon request",
    },
    {
      title: "Mind Alcove",
      category: "laravel",
      description:
        "Developed APIs for mobile applications and employee well-being platform focused on mental health services for businesses.",
      techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "jQuery", "GitLab"],
      image: "/projects/laravel/mind-alcove-min.jpg",
      link: "https://mindalcove.com/",
    },
    {
      title: "Wetinuneed",
      category: "codeigniter",
      description:
        "Wetinuneed is a multi-functional advertising and business directory platform built to boost visibility for Nigerian businesses. It supports classified listings, job postings, property ads, and events.",
      techStack: [
        "CodeIgniter",
        "MySQL",
        "Bootstrap",
        "jQuery",
        "GitLab",
        "Backend Dashboard",
        "WHM & cPanel",
      ],
      image: "/projects/codeigniter/wetinuneed-min.jpg",
      link: "https://wetinuneed.com/",
    },
    {
      title: "The Triangles",
      category: "codeigniter",
      description:
        "The Triangles is a wellness platform offering online Pranic Healing workshops, guided meditations, yoga sessions, and spiritual practices. It aims to make holistic healing accessible globally, rooted in the teachings of Grand Master Choa Kok Sui.",
      techStack: [
        "CodeIgniter",
        "MySQL",
        "Bootstrap",
        "jQuery",
        "GitHub",
        "WHM",
        "Zoom API",
      ],
      image: "/projects/codeigniter/the-triangles-min.jpg",
      link: "https://the-triangles.com/",
    },
    {
      title: "More Ideas General Trading",
      category: "wordpress",
      description:
        "More Ideas General Trading serves as the Middle East representative office for BYJU’S, the world's largest ed-tech company. The website functions as a comprehensive corporate platform, offering information about educational programs, facilitating lead generation, and providing e-commerce capabilities for course purchases.",
      techStack: [
        "WordPress",
        "PHP",
        "CSS",
        "jQuery",
        "LeadSquared",
        "WooCommerce",
      ],
      image: "/projects/wordpress/moreideas-min.jpg",
      link: "https://moreideas.ae/",
    },
    {
      title: "Nividous Software Solutions",
      category: "wordpress",
      description:
        "Nividous is a leading intelligent automation company specializing in Robotic Process Automation (RPA), Artificial Intelligence (AI), and Low-Code Process Automation. The corporate website serves as a comprehensive platform, showcasing Nividous's solutions, services, and thought leadership in the automation space.",
      techStack: [
        "WordPress",
        "CodeIgniter",
        "Bootstrap & jQuery",
        "GoToWebinar",
        "Pardot",
        "Salesforce",
        "Infusionsoft",
      ],
      image: "/projects/wordpress/nividous-min.jpg",
      link: "https://nividous.com/",
    },
    {
      title: "Clients on Demand",
      category: "wordpress",
      description:
        "Clients on Demand is a sales and marketing education company that assists coaches, consultants, and service professionals in attracting high-value clients. The corporate website serves as a central hub for their training programs, resources, and client testimonials.",
      techStack: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
      image: "/projects/wordpress/clientsondemand-min.jpg",
      link: "https://www.clientsondemand.com/",
    },
    {
      title: "Catch Foundation",
      category: "codeigniter",
      description:
        "Catch Foundation is an environmental NGO based in Ahmedabad, India, dedicated to restoring urban ecosystems by creating dense native forests using the Miyawaki technique. The website serves as an interactive platform to showcase their projects, engage volunteers, and promote environmental awareness.",
      techStack: ["CodeIgniter", "PHP", "Bootstrap", "JavaScript", "Razorpay", "MySQL", "GitLab"],
      image: "/projects/wordpress/catch-foundation-min.jpg",
      link: "https://catchfoundation.in/",
    },
    {
      title: "More Ideas Shopify Store",
      category: "shopify",
      description:
        "The BYJU’S Middle East online store is a Shopify-based e-commerce platform built to streamline the sale and distribution of BYJU’S educational products across the GCC region. It supports physical and digital product sales, lead capture, and localized checkout flows.",
      techStack: [
        "Shopify",
        "Tabby",
        "Tamara",
        "Amazon Payfort",
        "Shopify APIs",
      ],
      image: "/projects/shopify/shop-moreideas-min.jpg",
      link: "https://shop.moreideas.ae/",
    },
    {
      title: "TSS Smart Shopify App",
      category: "shopify",
      description: "TSS Smart is a Shopify app designed to streamline shipping operations for e-commerce businesses. It automates the creation of shipping labels, enables batch processing of orders, and provides real-time tracking updates, enhancing both merchant efficiency and customer satisfaction.",
      techStack: [
        "Laravel",
        "React",
        "MySQL",
        "PHP",
        "Shopify API",
        "WHM",
        "cPanel",
      ],
      image: "/projects/shopify/tss-smart-min.jpg",
      link: "https://apps.shopify.com/tss-smart-dev",
    },
    {
      title: "E Bazar",
      category: "shopify",
      description: "E Bazar is an AI-driven e-commerce platform offering a diverse range of products, including electronics, home decor, and lifestyle accessories. Designed to cater to a broad audience, the platform emphasizes user-friendly navigation, personalized recommendations, and seamless shopping experiences.",
      techStack: ["Shopify", "Theme Customization"],
      image: "/projects/shopify/e-bazar-min.jpg",
      link: "https://www.ebazar.ai/",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

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

          <Tabs
            defaultValue="all"
            value={activeTab}
            onValueChange={setActiveTab}
            className="mb-8"
          >
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
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="w-full h-full rounded-t-lg"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.slice(0, 8).map((tech, i) => (
                            <Badge key={i} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                          {project.techStack.length > 8 && (
                            <Badge variant="outline">
                              +{project.techStack.length - 8} more
                            </Badge>
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
  );
}
