"use client"
import { motion } from "framer-motion"
import SkillBox from "./skill-card"
import { GrMysql } from "react-icons/gr"
import { FaReact, FaPython, FaJava, FaNode, FaFigma, FaRobot} from "react-icons/fa"
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiBlender
} from "react-icons/si"

const skills = [
  { logo: <FaFigma />, skill: "Figma" },
  { logo: <SiBlender />, skill: "Blender"},
  { logo: <FaJava />, skill: "Java" },
  { logo: <FaPython />, skill: "Python" },
  { logo: <SiHtml5 />, skill: "HTML" },
  { logo: <SiCss3 />, skill: "CSS" },
  { logo: <SiJavascript />, skill: "Javascript" },
  { logo: <FaReact />, skill: "React.js" },
  { logo: <SiExpress />, skill: "Express.js" },
  { logo: <FaNode />, skill: "Node.js" },
  { logo: <SiMongodb />, skill: "MongoDB" },
  { logo: <GrMysql />, skill: "MySQL" },
  { logo: <SiPostgresql />, skill: "Postgres" },
  { logo: <FaRobot />, skill: "Machine Learning" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-10">
      <div className="container mx-auto px-4">

         <div className="flex flex-col items-center justify-center space-y-4 text-center">
                      <div className="space-y-2">
                      
                      <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-4"
                >
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                          Skills
                        </h2>
                    </motion.div>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Here are the technologies and tools I specialize in.
                        </p>
                      </div>
                    </div>
                    <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12"
        > 
          {skills.map((skill, index) => (
            <SkillBox key={index} logo={skill.logo} skill={skill.skill} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

