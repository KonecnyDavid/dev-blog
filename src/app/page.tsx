"use client"
import Image from 'next/image'
import ContactLink from "@/components/ContactLink";
import {Instagram, Linkedin, Mail, Phone, X} from "lucide-react";
import Work, {IWork} from "@/components/Work";
import Education, {IEducation} from "@/components/Education";
import Skill, {ISkill, SkillKey} from "@/components/Skill";
import Link from "next/link";
import {useState} from "react";
import {useAutoAnimate} from "@formkit/auto-animate/react";


const skills: ISkill[] = [
    {title: "C#", type: "c#"},
    {title: ".Net", type: ".net"},
    {title: "PostgreSQL", type: "psql"},
    {title: "Docker", type: "docker"},
    {title: "CI/CD", type: "ci/cd"},
    {title: "Typescript", type: "typescript"},
    {title: "React", type: "react"},
    {title: "Next.js", type: "next"},
    {title: "Rust", type: "rust"},
    {title: "Figma", type: "figma"},
    {title: "UX/UI", type: "ui/ux"},
    {title: "C1 English", type: "english"},
    {title: "Testing", type: "testing"},
    {title: "Python", type: "python"},
    {title: "Linux", type: "linux"},
    {title: "Symfony", type: "symfony"},
    {title: "PHP", type: "php"},
]

const education: IEducation[] = [
    {
        title: "Faculty of Informatics at Masaryk University",
        from: "2023",
        to: "present",
        programme: "Software Engineering",
        location: "Brno",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut luctus nisi. Maecenas sit amet suscipit justo, vel consequat lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque blandit risus ac felis elementum semper. Duis dictum sapien magna, vitae congue ex aliquam tristique."
    },
    {
        title: "Faculty of Informatics at Masaryk University",
        from: "2019",
        to: "2023",
        programme: "Programming and development",
        location: "Brno",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut luctus nisi. Maecenas sit amet suscipit justo, vel consequat lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque blandit risus ac felis elementum semper. Duis dictum sapien magna, vitae congue ex aliquam tristique."
    },
    {
        title: "Grammar School of T. G. Masaryk",
        from: "2019",
        to: "2023",
        programme: "8 year general study",
        location: "Hustopeče",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut luctus nisi. Maecenas sit amet suscipit justo, vel consequat lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque blandit risus ac felis elementum semper. Duis dictum sapien magna, vitae congue ex aliquam tristique."
    },
]

const work: IWork[] = [
    {
        title: "Appio s.r.o.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut luctus nisi. Maecenas sit amet suscipit justo, vel consequat lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque blandit risus ac felis elementum semper. Duis dictum sapien magna, vitae congue ex aliquam tristique.",
        from: "2021",
        to: "2023",
        role: "Fullstack software engineer",
        skills: ["next", "typescript", ".net", "docker", "psql", "react", "ci/cd"]
    },
    {
        title: "Faculty of Informatics at Masaryk University",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut luctus nisi. Maecenas sit amet suscipit justo, vel consequat lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque blandit risus ac felis elementum semper. Duis dictum sapien magna, vitae congue ex aliquam tristique.",
        from: "2023",
        to: "2023",
        role: "Semminar tutor",
        skills: ["next", "typescript", "docker", "react", "ci/cd"]
    },
    {
        title: "Graweb s.r.o.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut luctus nisi. Maecenas sit amet suscipit justo, vel consequat lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque blandit risus ac felis elementum semper. Duis dictum sapien magna, vitae congue ex aliquam tristique.",
        from: "2018",
        to: "2023",
        role: "Fullstack developer",
        skills: ["symfony", "php", "docker", "react", "psql"]
    },
    {
        title: "HomeCredit a.s.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut luctus nisi. Maecenas sit amet suscipit justo, vel consequat lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque blandit risus ac felis elementum semper. Duis dictum sapien magna, vitae congue ex aliquam tristique.",
        from: "2018",
        to: "2023",
        role: "IT Helpdesk specialist",
        skills: []
    },
]

export default function Home() {
    const [selectedSkills, setSelectedSkills] = useState<SkillKey[]>([])
    const [animationParent] = useAutoAnimate()

    return (
        <main>
            <div className="container mx-auto">
                <div className="flex flex-row items-center justify-between">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-10 mb-4">
                        David Konečný
                    </h1>
                    <Link href="/blog"
                          className="bg-blue-800 rounded px-4 py-2 text-white hover:bg-blue-700 transition-all">My
                        blog</Link>
                </div>
                <p className="text-xl text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut luctus nisi. Maecenas sit amet
                    suscipit justo, vel consequat lacus. Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Quisque blandit risus ac felis elementum semper. Duis dictum sapien magna,
                    vitae congue ex aliquam tristique.
                </p>
                <div className="flex flex-col gap-2 my-4">
                    <ContactLink icon={<Phone/>} title="+420 774 159 774" link="mailto:david@konecny.eu"/>
                    <ContactLink icon={<Mail/>} title="david@konecny.eu" link="mailto:david@konecny.eu"/>
                    <ContactLink icon={<Instagram/>} title="davidkonecny" link="https://instagram.com/davidkonecny"/>
                    <ContactLink icon={<Linkedin/>} title="David Konečný"
                                 link="https://www.linkedin.com/in/david-kone%C4%8Dn%C3%BD-8987b71b9/"/>
                </div>
                <section>
                    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        Skills
                    </h2>
                    <div className="flex flex-row gap-1 flex-wrap">
                        {skills.map(skill => <Skill key={skill.type} {...skill}
                                                    selected={selectedSkills.includes(skill.type)}
                                                    onClick={() => selectedSkills.includes(skill.type)
                                                        ? setSelectedSkills(selectedSkills.filter(s => s !== skill.type))
                                                        : setSelectedSkills([...selectedSkills, skill.type])}/>)}
                        <div className={`px-4 py-0.5 text-white rounded bg-gray-500 transition-all cursor-pointer flex flex-row items-center gap-1`} onClick={() => setSelectedSkills([])}><X size={16}/> Reset</div>
                    </div>
                </section>
                <section>
                    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight mt-6">
                        Work
                    </h2>
                    <div className="flex flex-col gap-2" ref={animationParent}>
                        {work.filter(w => selectedSkills.length === 0 || w.skills.some(s => selectedSkills.includes(s))).map(w =>
                            <Work key={w.title} {...w} allSkills={skills}/>)}
                    </div>
                </section>
                <section>
                    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight mt-6">
                        Education
                    </h2>
                    <div className="flex flex-col gap-2">
                        {education.map(e => <Education key={e.title} {...e}/>)}
                    </div>
                </section>
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight mt-6">
                    Projects
                </h2>
            </div>
        </main>
    )
}
