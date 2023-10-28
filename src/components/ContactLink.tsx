import {ReactNode} from "react";
import Link from "next/link";

const ContactLink = ({icon, link, title}: {icon: ReactNode, title: string, link: string}) => {
    return (
        <Link href={link} className="flex items-center gap-2">
            <div>{icon}</div>
            <div>{title}</div>
        </Link>
    )
}

export default ContactLink;