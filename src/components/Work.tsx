import Skill, {ISkill, SkillKey} from "@/components/Skill";

export interface IWork {
    title: string,
    content: string,
    from: string,
    to: string,
    role: string,
    skills: SkillKey[]
}

interface WorkProps extends IWork {
    allSkills: ISkill[]
}

const Work = ({title, content, from, to, role, skills, allSkills}: WorkProps) => {
    return (
        <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                {title}
            </h3>
            <div className="text-lg font-semibold">{role} | {from} - {to}</div>
            <p className="leading-7">
                {content}
            </p>
            <div className="flex flex-row gap-1 flex-wrap">
                {allSkills.filter(skill => skills.includes(skill.type)).map(skill => <Skill
                    key={skill.type} {...skill}/>)}
            </div>
        </div>
    )
}

export default Work;