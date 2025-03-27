"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Web Developer",
      company: "More Ideas General Trading LLC - BYJU'S",
      location: "Dubai, UAE",
      period: "July 2022 - Present",
      description: [
        "Developed robust and scalable web applications using Laravel, Laravel Inertia, React, and Tailwind CSS.",
        "Managed over 500,000+ customer records using multiple CRM API integrations.",
        "Integrated and maintained payment gateways processing AED 40K-50K daily.",
        "Deployed applications via AWS, WHM, cPanel, GitHub Actions, and CI/CD pipelines.",
        "Designed reusable backend architecture to improve scalability and maintainability.",
        "Created the Shopify store for BYJU'S Middle East, with custom integration using Shopify API.",
        "Independently handled full project lifecycle: architecture, development, deployment, and maintenance.",
      ],
      skills: ["Laravel", "React", "Tailwind CSS", "AWS", "Shopify API", "CI/CD", "Shopify", "Inertia", "GitHub Actions"],
    },
    {
      title: "PHP Web Developer",
      company: "HMMBiz Web Solutions",
      location: "Ahmedabad, India",
      period: "April 2018 - June 2022",
      description: [
        "Led a development team delivering full-stack web solutions using PHP, Laravel, CodeIgniter, and JavaScript.",
        "Built database-driven web applications and developed dynamic frontend interfaces with Bootstrap and jQuery.",
        "Designed and implemented scalable APIs and integrated multiple third-party CRMs and payment gateways.",
        "Conducted performance reviews, task allocation, and mentoring of junior developers.",
        "Collaborated with UI/UX designers and QA teams to deliver responsive, bug-free experiences.",
        "Optimized server-side logic, resolved performance bottlenecks, and implemented reusable modules.",
      ],
      skills: ["PHP", "Laravel", "CodeIgniter", "jQuery", "Bootstrap", "API Integration"],
    },
    {
      title: "PHP Developer Intern",
      company: "HMMBiz Web Solutions",
      location: "Ahmedabad, India",
      period: "October 2017 - March 2018",
      description: [
        "Created and maintained the visual aspects of websites, including layout, design, and interactivity.",
        "Ensured that websites and applications work seamlessly across various devices and screen sizes.",
        "Designed and developed custom WordPress themes based on client requirements.",
        "Customized existing themes to match specific design needs and branding guidelines.",
      ],
      skills: ["HTML", "CSS", "JavaScript", "WordPress", "Responsive Design"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <div>
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDescription className="text-base mt-1">
                          {exp.company} | {exp.location}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill, i) => (
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

