"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Award() {
  return (
    <section id="award" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Exceptional Hire Award
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 items-center">
            <div className="md:col-span-2 flex justify-center">
              <div className="relative w-96 h-96 rounded-lg overflow-hidden border-4 border-primary shadow-lg">
                <Image
                  src="/images/exceptional-hire-award.jpg"
                  alt="Exceptional Hire Award"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="text-lg mb-6">
                I am honored to have received the <strong>Exceptional Hire Award</strong> in recognition of my exceptional performance and dedication. This award highlights my commitment to excellence and my drive to deliver meaningful results.
              </p>
              <p className="text-lg">
                It inspires me to continue pushing boundaries and to strive for success in all future endeavors.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}