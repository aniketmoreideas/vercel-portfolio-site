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
      title: "MI Hub WorkSpace",
      category: "laravel",
      description:
        "A robust coworking platform to manage unit allocations, tenant records, rental contracts, payments, admins, staff, and shared amenities streamlining operations with flexibility and scalability. It features agreement workflows, automated reminders, and role-based access, making day-to-day management smooth and efficient.",
      techStack: [
        "Laravel",
        "Inertia.js",
        "React",
        "Tailwind CSS",
        "MySQL",
        "GitHub Actions",
        "Azure SSO",
        "RBAC",
      ],
      image: "/projects/laravel/workspace_app.jpg",
      link: "https://github.com/aniketsharma4u/react_workspace_app", // Demo available upon request
    },
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
        "Courier APIs",
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
        "Developed a refund management system for the Customer Happiness team, enabling managers to assign requests, track status, manage approval workflows, and maintain records of customer interactions with supporting files and recordings.",
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
        "Developed a training and assessment platform for new sales professionals, enabling trainers to create product knowledge, FAQ, and sales scenario quizzes with automated result generation and sharing for manager evaluation.",
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
        "Developed both the frontend and backend, creating responsive UIs for directory, shop, jobs, and property listings, managing featured posts, implementing forms with payment gateway integration, and building backend features for listing requests, payments, staff management, and report generation.",
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
        "Developed the complete frontend and backend with an attractive, responsive design for Pranic Healing workshops and spiritual practices, including sessions management, registrations form with Zoom and Razorpay integration, a bulk email module, payment and reports, and the ability to create multiple sessions from the backend.",
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
        "More Ideas General Trading serves as the Middle East representative office for BYJU’S, Updated the existing WordPress site by creating new responsive pages with attractive layouts and customizing the theme and plugins. Additionally, integrated contact and inquiry forms with the LeadSquared CRM.",
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
        "Customized the WordPress theme, developed a responsive webinar landing page using CodeIgniter with GoToWebinar integration, and implemented multi-CRM form integrations (Salesforce, Pardot, Infusionsoft) alongside creating an Automation ROI Calculator.",
      techStack: [
        "WordPress",
        "CodeIgniter",
        "PHP",
        "MySQL",
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
        "Contributed to the Clients on Demand WordPress website by customizing the theme, developing responsive new pages with attractive layouts, tailoring plugins to specific needs, and implementing targeted modifications within WordPress core files.",
      techStack: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
      image: "/projects/wordpress/clientsondemand-min.jpg",
      link: "https://www.clientsondemand.com/",
    },
    {
      title: "Catch Foundation",
      category: "codeigniter",
      description:
        "Developed the backend dashboard for tree tracking, created diverse registration forms with payment gateway integration, built a volunteer management system featuring bulk ID card generation and tree adoption invoices, all secured with multi-level login permissions.",
      techStack: [
        "CodeIgniter",
        "PHP",
        "Bootstrap",
        "jQuery",
        "Razorpay",
        "MySQL",
        "RBAC",
        "GitLab",
      ],
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
      description:
        "TSS Smart is a Shopify app designed to streamline shipping operations for e-commerce businesses. It automates the creation of shipping labels, enables batch processing of orders, and provides real-time tracking updates, enhancing both merchant efficiency and customer satisfaction.",
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
      description:
        "E Bazar is an AI-driven e-commerce platform offering a diverse range of products, including electronics, home decor, and lifestyle accessories. Designed to cater to a broad audience, the platform emphasizes user-friendly navigation, personalized recommendations, and seamless shopping experiences.",
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
