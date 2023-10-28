export type SkillKey =
    "c#"
    | ".net"
    | "psql"
    | "docker"
    | "ci/cd"
    | "typescript"
    | "react"
    | "next"
    | "rust"
    | "figma"
    | "ui/ux"
    | "english"
    | "testing"
    | "python"
    | "linux"
    | "php"
    | "symfony"


export interface ISkill {
    title: string,
    type: SkillKey
}

interface SkillProps extends ISkill {
    onClick?: () => void;
    selected?: boolean;
}

const Skill = ({title, onClick, selected}: SkillProps) => {
    return <div
        className={`px-4 py-0.5 ${selected ? "bg-blue-950" : "bg-blue-800"} text-white rounded ${onClick ? "hover:bg-blue-700 transition-all cursor-pointer" : ""}`} onClick={onClick}>{title}</div>
}

export default Skill;