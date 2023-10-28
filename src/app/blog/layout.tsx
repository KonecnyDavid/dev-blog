import {ReactNode} from "react";

export default function DashboardLayout({
                                            children,
                                        }: {
    children: ReactNode
}) {
    return <div className="container mx-auto px-2">
        <div className="p-4 my-4 backdrop-blur-md bg-white/60 border rounded-md shadow-sm sticky top-0">
            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
                David Konečný Developer Blog
            </h1>
        </div>
        <section className="px-4">{children}</section>
    </div>
}