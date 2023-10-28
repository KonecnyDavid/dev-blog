import {MapPin} from "lucide-react";

export interface IEducation {title: string, programme: string, location: string, from: string, to: string, content: string };

const Education = ({title, programme, location, from, to, content}: IEducation) => {
    return <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {programme} - {title}
        </h3>
        <div className="text-lg font-semibold"><span className="inline-flex items-center gap-1"><MapPin size={16} /> {location}</span> | {from} - {to}</div>
        <p className="leading-7">
            {content}
        </p>
    </div>
}

export default Education;