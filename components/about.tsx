"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
                <Image
                  src="/images/profile.png"
                  alt="Aniket Sharma"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="text-lg mb-6">
                Results-driven Web Developer with 7 years of experience in
                full-stack development, delivering scalable, secure, and
                high-performance web applications. Proficient in PHP, Laravel,
                React, Inertia.js, Tailwind CSS, MySQL and API integrations.
              </p>
              <p className="text-lg mb-6">
                Experienced in managing over 500K+ customer records via multiple
                CRM APIs, and handling daily payment transactions of AED 40K–50K
                through various payment gateways.
              </p>
              <p className="text-lg mb-8">
                Currently based in Dubai, UAE, I'm passionate about creating
                efficient, user-friendly web solutions that solve real business
                problems.
              </p>

              <Button asChild>
                <a
                  href="/CV/Aniket-Web-Developer-CV-v6.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
