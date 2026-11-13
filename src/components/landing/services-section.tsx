import {
  BarChart3,
  BookOpenCheck,
  FlaskConical,
  GraduationCap,
  Lightbulb,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Eyebrow } from "./section-heading";

const services: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Tutoring and Concept Explanation",
    description: "Break down tough topics with clear, patient explanations from peers who get it.",
    icon: Lightbulb,
  },
  {
    title: "Research and Project Guidance",
    description: "Shape ideas, structure chapters and keep your project moving forward.",
    icon: BookOpenCheck,
  },
  {
    title: "Research Methodology Support",
    description: "Choose the right methods and understand how to apply them with confidence.",
    icon: FlaskConical,
  },
  {
    title: "Data Analysis Guidance",
    description: "Make sense of your data, tools and results, step by step.",
    icon: BarChart3,
  },
  {
    title: "Academic Mentorship",
    description: "Learn from students a step ahead of you on the same academic journey.",
    icon: GraduationCap,
  },
  {
    title: "Study and Learning Support",
    description: "Build better study habits and prepare smarter for tests and exams.",
    icon: Users,
  },
];

export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-title" className="section-y bg-card">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Services</Eyebrow>
          <h2 id="services-title" className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Support for every academic need
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From understanding a single concept to completing a final-year project, SabiExperts
            are here to help.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {services.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon aria-hidden="true" className="size-6" strokeWidth={1.8} />
              </span>
              <h3 className="mt-6 text-lg font-bold leading-snug">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
