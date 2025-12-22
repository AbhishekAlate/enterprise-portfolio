"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { MotionCard } from "@/components/ui/Card";

export default function ResumeClient() {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "me@abhialate.dev", href: "mailto:me@abhialate.dev" },
    { icon: Phone, label: "Phone", value: "(202) 817-6495", href: "tel:+12028176495" },
    { icon: MapPin, label: "Location", value: "Seattle, Washington", href: null },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/abhishekalate", href: "https://linkedin.com/in/abhishekalate" },
  ];

  const skills = {
    "Testing & Automation": ["Test Automation", "Quality Assurance", "Cross-platform Validation", "Selenium", "Test Frameworks"],
    "Programming Languages": ["Python", "Java", "MATLAB"],
    "Cloud & Infrastructure": ["AWS", "CDK", "Jenkins", "CI/CD", "Infrastructure Deployment"],
    "Platforms & Tools": ["Linux", "GNOME AT-SPI", "ServiceNow", "Scrum", "Agile Methodologies"],
  };

  const experience = [
    {
      title: "Senior Software Quality Assurance Engineer",
      company: "Amazon Web Services Inc.",
      location: "Seattle, WA",
      period: "April 2021 - Present",
      description: "Spearheaded the quality assurance, automation, and release engineering for the Amazon WorkSpaces client platform.",
      achievements: [
        "Led an 8-member offshore QA team to deliver 142 releases and 42 features across six WorkSpaces client platforms by designing and implementing a unified release process for two engineering teams",
        "Reduced the release cycle by 10 days; validated over 100+ releases by introducing automated feature and security validation, including CVE detection within a Python-based test framework",
        "Improved test reliability by engineering a CDK-driven infrastructure deployment pipeline for automated test environments, ensuring consistent, repeatable validation across 100+ releases",
        "Enabled deterministic automation for 200+ Linux test cases by engineering a GNOME AT-SPI-based Linux automation framework, improving reliability and accelerating validation across 20+ releases",
      ],
    },
    {
      title: "Senior Software Development Engineer",
      company: "Apple Inc.",
      location: "Hyderabad, India",
      period: "April 2019 - August 2019",
      description: "Led the design and development of a Python-based test automation framework for the Apple Business Connect and Apple maps service .",
      achievements: [
        "Enabled the QA team to rapidly scale coverage and standardize validation for core business flows",
        "Delivered high-priority automated test suites for new features, driving test coverage to 60% within the first two months",
        "Integrated the automation framework and test suites into the Continuous Integration pipeline, reducing end-to-end QA cycle time by 20%",
      ],
    },
    {
      title: "Automation and Quality Assurance Engineer",
      company: "ServiceNow Inc.",
      location: "Hyderabad, India",
      period: "June 2016 - March 2018",
      description: "Served as the sole test automation point of contact for three teams, managing multiple parallel projects and building scalable Java/Selenium automation for the ServiceNow platform.",
      achievements: [
        "Delivered 18 features while managing multiple parallel projects and building scalable Java/Selenium automation",
        "Led an 8-member team through a full end-to-end version upgrade testing cycle, ensuring seamless platform migration and zero regressions",
        "Leveraged analytics from prior test cycles to optimize test coverage and automation allocation, enabling earlier defect detection by 6 days",
        "Proposed and implemented a page-caching optimization that improved web application load times by ~10%",
      ],
    },
    {
      title: "Automation and Quality Assurance Engineer",
      company: "Veritas Pvt. Ltd. (formerly Symantec)",
      location: "Pune, India",
      period: "March 2014 - June 2016",
      description: "Designed and implemented test automation solutions and infrastructure for enterprise informmation management software products.",
      achievements: [
        "Mentored and onboarded 7–10 new engineers, accelerating ramp-up time and enabling deeper product understanding",
        "Designed and implemented a web-based virtual machine allocation system that eliminated resource redundancy and reduced testing cycle time by ~3 days",
        "Built and integrated a Jenkins-based Continuous Integration pipeline for OpsCenter automated testing, reducing manual QA effort by 40%",
      ],
    },
    {
      title: "Business Analyst",
      company: "MarketsandMarkets Pvt. Ltd.",
      location: "Pune, India",
      period: "June 2013 - March 2014",
      description: "Researched and authored market analysis reports in the emerging domain of business continuity and disaster recovery.",
      achievements: [
        "Researched and authored two market analysis reports, delivering data-driven insights for strategic decision-making",
        "Generated qualified sales leads for published reports, driving over $5,000 in revenue within a single month",
        "Authored and relayed communications with customers to furnish custom reports in the market of interest",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Science, Business Analytics",
      school: "The George Washington University, School of Business",
      location: "Washington, DC",
      period: "December 2020",
      details: "GPA: 3.4 • Recipient of Global Initiative Fellowship • Areas of Focus: Consulting for Analytics, Statistics for Analytics I&II, Programming for Analytics, Data Management for Analytics, Decision and Risk Analytics, Data Mining, and Social Network Analytics",
    },
    {
      degree: "Bachelor of Engineering, Information Technology",
      school: "University of Pune",
      location: "Lonavala, India",
      period: "August 2013",
      details: "GPA: 3.6 • Leadership: Acted as an interdepartmental liaison; Chaired the Information Technology department student forum",
    },
  ];

  const projects = [
    {
      title: "National Football League Scheduler",
      description: "Designed an optimized NFL scheduling engine that minimizes total travel distance for each team by modeling distance constraints and competitive variables, producing more efficient season schedules through algorithmic optimization.",
    },
    {
      title: "OCR for Devanagari Characters",
      description: "Developed a full optical character recognition (OCR) system for the Devanagari script, enhancing segmentation algorithms and implementing character classification using MATLAB and random forest models. Collaborated in a four-member team and individually led model design and accuracy optimization.",
    },
  ];

  const certifications = [
    { name: "Certified Scrum Master", issuer: "ScrumAlliance", year: "" },
  ];

  const publications = [
    {
      title: "A new approach to segmentation of Devanagari characters",
      publisher: "Global Research Analysis publications",
      year: "2013",
      description: "International research publication pertaining to the approach developed for segmentation of handwritten Devanagari characters as part of final-year project in college. Used the Neighborhood Tracing Algorithm as well as the Projection Profile in order to provide individual characters from a word present in the text.",
    },
  ];

  const additionalInfo = {
    interests: ["Adventure sports enthusiast"],
  };

  return (
    <div className="space-y-12 sm:space-y-16 lg:space-y-20">
      {/* Header Section */}
      <ScrollReveal delay={0.1}>
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-zinc-50 via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
              Abhishek Alate
            </span>
          </h1>
          <p className="mt-4 text-xl text-zinc-300 sm:text-2xl">Senior Quality Assurance Engineer</p>
          <p className="mt-2 text-lg text-zinc-400 sm:text-xl">
          Senior Quality Assurance Engineer specializing in large-scale product releases, automation frameworks, and cross-platform validation. Known for designing scalable test strategies, building secure test infrastructure with integrated AI agents, and delivering high-impact automation.
          </p>
        </div>
      </ScrollReveal>

      {/* Contact Information */}
      <ScrollReveal delay={0.2} direction="up">
        <MotionCard whileHover={{ scale: 1.01 }} className="p-6 sm:p-8">
          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">Contact Information</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.label} delay={0.25 + index * 0.05} direction="up">
                  {item.href ? (
                    <motion.a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      whileHover={{ x: 4 }}
                      className="group flex items-center gap-3 text-zinc-300 transition-colors hover:text-zinc-50"
                    >
                      <Icon className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-zinc-300" />
                      <div>
                        <div className="text-xs text-zinc-500">{item.label}</div>
                        <div className="font-medium">{item.value}</div>
                      </div>
                    </motion.a>
                  ) : (
                    <div className="flex items-center gap-3 text-zinc-300">
                      <Icon className="h-5 w-5 text-zinc-400" />
                      <div>
                        <div className="text-xs text-zinc-500">{item.label}</div>
                        <div className="font-medium">{item.value}</div>
                      </div>
                    </div>
                  )}
                </ScrollReveal>
              );
            })}
          </div>
        </MotionCard>
      </ScrollReveal>

      {/* Skills Section */}
      <ScrollReveal delay={0.3} direction="up">
        <div>
          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">Skills</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <ScrollReveal
                key={category}
                delay={0.35 + categoryIndex * 0.1}
                direction="up"
              >
                <MotionCard variant="soft" whileHover={{ y: -4 }} className="p-6">
                  <h3 className="mb-4 font-semibold text-zinc-100">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="rounded-lg bg-zinc-800/50 px-3 py-1.5 text-sm text-zinc-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </MotionCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Experience Section with Timeline */}
      <ScrollReveal delay={0.4} direction="up">
        <div>
          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">Experience</h2>
          <div className="space-y-10 sm:space-y-12">
            {experience.map((job, index) => (
              <ScrollReveal key={job.title} delay={0.45 + index * 0.1} direction="up">
                <div className="flex items-stretch gap-6 sm:gap-8">
                  <div className="relative flex w-8 shrink-0 items-center justify-center sm:w-10">
                    <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-zinc-500/70 to-transparent" />
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                      className="relative z-10"
                    >
                      <div className="flex h-4 w-4 items-center justify-center rounded-full border border-zinc-500/80 bg-zinc-950/90 shadow-[0_0_0_5px_rgba(9,9,11,0.9),0_0_22px_rgba(255,255,255,0.1)] sm:h-5 sm:w-5">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-200 sm:h-2 sm:w-2" />
                      </div>
                    </motion.div>
                  </div>

                  <MotionCard whileHover={{ x: 4 }} className="group flex-1 p-6 sm:p-8">
                      {/* Period Badge */}
                      <div className="mb-4 inline-block">
                        <motion.span
                          initial={{ opacity: 0, y: -10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.55 + index * 0.1 }}
                          className="rounded-full border border-zinc-700 bg-zinc-800/50 px-4 py-1.5 text-xs font-medium text-zinc-300 sm:text-sm"
                        >
                          {job.period}
                        </motion.span>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h3 className="text-xl font-semibold text-zinc-100 sm:text-2xl">
                            {job.title}
                          </h3>
                          <div className="mt-1 flex flex-col gap-1 text-zinc-400 sm:flex-row sm:gap-2">
                            <span className="font-medium">{job.company}</span>
                            <span className="hidden sm:inline">•</span>
                            <span>{job.location}</span>
                          </div>
                        </div>
                        
                        <p className="text-zinc-300">{job.description}</p>

                        {job.company === "Amazon Web Services Inc." && (
                          <div className="mt-4 overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-950/50">
                            <div className="aspect-video w-full">
                              <iframe
                                title="Amazon Web Services video"
                                src="https://www.youtube.com/embed/uCH04Mlg0yU"
                                className="h-full w-full"
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              />
                            </div>
                          </div>
                        )}

                        {job.company === "Apple Inc." && (
                          <div className="mt-4 rounded-xl border border-zinc-800/60 bg-gradient-to-br from-zinc-950/70 to-zinc-900/40 p-4 sm:p-5">
                            <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Preview</div>
                            <div className="mt-2 text-sm font-semibold text-zinc-200 sm:text-base">
                              Apple Business Connect
                            </div>
                            <p className="mt-2 text-sm text-zinc-400">
                              Open Apple Business Connect in a new tab.
                            </p>
                            <div className="mt-4">
                              <a
                                href="https://businessconnect.apple.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-zinc-700/70 bg-zinc-900/40 px-4 py-2 text-xs font-medium text-zinc-200 transition hover:border-zinc-500 hover:text-zinc-50"
                              >
                                Visit Apple Business Connect
                              </a>
                            </div>
                          </div>
                        )}

                        {job.company === "ServiceNow Inc." && (
                          <div className="mt-4 rounded-xl border border-zinc-800/60 bg-gradient-to-br from-zinc-950/70 to-zinc-900/40 p-4 sm:p-5">
                            <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Preview</div>
                            <div className="mt-2 text-sm font-semibold text-zinc-200 sm:text-base">
                              ServiceNow platform
                            </div>
                            <p className="mt-2 text-sm text-zinc-400">
                              Open the official ServiceNow site in a new tab.
                            </p>
                            <div className="mt-4">
                              <a
                                href="https://www.servicenow.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-zinc-700/70 bg-zinc-900/40 px-4 py-2 text-xs font-medium text-zinc-200 transition hover:border-zinc-500 hover:text-zinc-50"
                              >
                                Visit ServiceNow
                              </a>
                            </div>
                          </div>
                        )}

                        {job.company.startsWith("Veritas") && (
                          <div className="mt-4 overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-950/50">
                            <div className="aspect-video w-full">
                              <iframe
                                title="Veritas video"
                                src="https://www.youtube.com/embed/LCydAAU977I?list=PLCL5UFA_IQ6s64RVNrG1UiN_aC--JmLYB"
                                className="h-full w-full"
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              />
                            </div>
                          </div>
                        )}
                        
                        <ul className="space-y-2 pt-2">
                          {job.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.6 + index * 0.1 + achievementIndex * 0.1 }}
                              className="flex items-start gap-3 text-zinc-400"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </MotionCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Education Section */}
      <ScrollReveal delay={0.5} direction="up">
        <div>
          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <ScrollReveal key={edu.degree} delay={0.55 + index * 0.1} direction="up">
                <MotionCard
                  whileHover={{ x: 4 }}
                  className="p-6 sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-zinc-100 sm:text-2xl">
                    {edu.degree}
                  </h3>
                  <div className="mt-2 flex flex-col gap-1 text-zinc-400 sm:flex-row sm:gap-2">
                    <span className="font-medium">{edu.school}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{edu.location}</span>
                  </div>
                  <div className="mt-2 text-sm text-zinc-500">{edu.period}</div>
                  <p className="mt-3 text-zinc-300">{edu.details}</p>
                  {edu.degree === "Master of Science, Business Analytics" && (
                    <div className="mt-4">
                      <a
                        href="https://business.gwu.edu/academics/programs/masters/ms-in-business-analytics"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-zinc-700/70 bg-zinc-900/40 px-4 py-2 text-xs font-medium text-zinc-200 transition hover:border-zinc-500 hover:text-zinc-50"
                      >
                        GWU MS Business Analytics
                      </a>
                    </div>
                  )}
                </MotionCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Projects Section */}
      <ScrollReveal delay={0.6} direction="up">
        <div>
          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">Relevant Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={0.65 + index * 0.1} direction="up">
                <MotionCard
                  whileHover={{ x: 4 }}
                  className="p-6 sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-zinc-100 sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-zinc-300">{project.description}</p>
                </MotionCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Certifications Section */}
      <ScrollReveal delay={0.7} direction="up">
        <div>
          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">Certifications</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <ScrollReveal key={cert.name} delay={0.75 + index * 0.1} direction="up">
                <MotionCard
                  variant="soft"
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-6"
                >
                  <h3 className="font-semibold text-zinc-100">{cert.name}</h3>
                  <div className="mt-2 flex flex-col gap-1 text-sm text-zinc-400">
                    <span>{cert.issuer}</span>
                    {cert.year && <span className="text-zinc-500">{cert.year}</span>}
                  </div>
                </MotionCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Publications Section */}
      <ScrollReveal delay={0.8} direction="up">
        <div>
          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">Publications</h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <ScrollReveal key={pub.title} delay={0.85 + index * 0.1} direction="up">
                <MotionCard
                  whileHover={{ x: 4 }}
                  className="p-6 sm:p-8"
                >
                  <h3 className="text-xl font-semibold text-zinc-100 sm:text-2xl">
                    {pub.title}
                  </h3>
                  <div className="mt-2 flex flex-col gap-1 text-zinc-400 sm:flex-row sm:gap-2">
                    <span className="font-medium">{pub.publisher}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="text-zinc-500">{pub.year}</span>
                  </div>
                  <p className="mt-3 text-zinc-300">{pub.description}</p>
                </MotionCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Additional Information Section */}
      <ScrollReveal delay={0.9} direction="up">
        <div>
          <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">Additional Information</h2>
          <MotionCard whileHover={{ scale: 1.01 }} className="p-6 sm:p-8">
            <h3 className="mb-4 text-lg font-semibold text-zinc-100">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {additionalInfo.interests.map((interest, index) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.95 + index * 0.1 }}
                  className="rounded-lg bg-zinc-800/50 px-4 py-2 text-sm text-zinc-300"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </MotionCard>
        </div>
      </ScrollReveal>
    </div>
  );
}

