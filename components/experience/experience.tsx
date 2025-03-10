"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceItem {
  company: string
  position: string
  period: string
  location: string
  projects: {
    name: string
    technologies: string[]
    responsibilities: string[]
  }[]
}

const experiences: ExperienceItem[] = [
  {
    company: "FIVLOG TECHNOLOGIES",
    position: "Design Analyst - 2D & 3D Artist",
    period: "Oct 2024 - Apr 2025",
    location: "Hyderabad, Telangana",
    projects: [
      {
        name: "KLIK GAMES",
        technologies: ["BLENDER", "FIGMA", "CANVA"],
        responsibilities: [
          "Designed and animated immersive UI/UX for the Klik Games app using Figma and Blender, enhancing user engagement.",
          "Created detailed Ludo and Cricket scenes, including animations and transitions for seamless gameplay experiences.",
          "Developed smooth page transition animations to improve app navigation and interactivity.",
          "Designed intuitive interfaces for user profiles, home screen, wallet, refer & earn, payments, and gameplay UI.",
          "Implemented win/lose panels and game popups, ensuring a dynamic and responsive user experience."
        ],
      },
      {
        name: "TRADING APP",
        technologies: ["BLENDER", "FIGMA"],
        responsibilities: [
          "Designed an intuitive UI for a trading app, ensuring a seamless user experience across all key screens.",
          "Developed login, signup, and OTP verification pages for secure user authentication.",
          "Created interactive interfaces for home screen, currency selection, and slot selection.",
          "Implemented a real-time running timer for active trades, enhancing user engagement.",
          "Designed payment, wallet, purchases, deposits, and transaction pages, ensuring smooth financial interactions."
        ],
      },
      {
        name: "HOUSE RENTING",
        technologies: ["BLENDER", "FIGMA"],
        responsibilities: [
          "Designed a modern UI for a house renting app, enhancing user experience with intuitive navigation.",
          "Created login and signup pages for seamless user authentication.",
          "Developed an interactive home screen with visually appealing building animations.",
          "Implemented city and budget selection features for personalized property searches.",
          "Designed buying pages, ensuring a smooth property acquisition process."
        ],
      },
    ],
  },
  {
    company: "BLuJ Aerospace",
    position: "CAD Designer & Graphic Designer",
    period: "Jun 2023 - Oct 2024",
    location: "Hyderabad, Telangana",
    projects: [
      {
        name: "CAD Modeling",
        technologies: ["BLENDER", "FIGMA", "CANVA", "FUSION 360"],
        responsibilities: [
          "Designed precision molds for UAV wings and spars, ensuring structural integrity and aerodynamic efficiency.",
          "Engineered lightweight and durable molds, optimizing performance for UAV manufacturing.",
          "Incorporated advanced design techniques, enhancing the production process for UAV components."
        ],
      },
      {
        name: "Graphic Designing",
        technologies: ["BLENDER", "FIGMA", "CANVA", "FUSION 360"],
        responsibilities: [
         "Created high-quality 2D and 3D animations of an aircraft, including detailed decals and high-resolution renders for realistic visual representation.",
         "Designed a visually appealing website UI, ensuring a seamless and engaging user experience.",
         "Implemented modern UI/UX principles, optimizing usability, responsiveness, and interactivity.",
         "Developed intuitive layouts and interactive elements, enhancing both website navigation and digital presentation of 3D assets."
        ],
      },
    ],
  },

  {
    company: "Caparo India Pvt. Ltd.",
    position: "Inplant Training",
    period: "July 2022 - June 2023",
    location: "Chennai, Tamil Nadu",
    projects: [
      {
        name: "CAD Designing & Fitting and Assembly Section",
        technologies: ["SOLID WORKS"],
        responsibilities: [
          "Designed and manufactured precision dies and molds for car, truck, and tractor components.",
          "Assembled and fine-tuned dies, ensuring optimal fit and functionality in production.",
          "Engineered durable and high-precision molds, enhancing manufacturing efficiency and product quality."
        ],
      },
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                      <div className="space-y-2">
                      
                      <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-4"
                >
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                          Experience
                        </h2>
                    </motion.div>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                          I&apos;ve  gained experience across various technologies, from backend systems to full-stack applications, contributing to impactful projects.
                        </p>
                      </div>
                    </div>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{exp.company}</CardTitle>
                <p className="text-gray-600">{exp.position}</p>
                <p className="text-sm text-gray-500">
                  {exp.period} | {exp.location}
                </p>
              </CardHeader>
              <CardContent>
                {exp.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="mb-6 last:mb-0">
                    <h4 className="text-lg font-semibold mb-2">{project.name}</h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <ul className="list-disc list-inside space-y-1">
                      {project.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-gray-700">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

