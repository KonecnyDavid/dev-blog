import {ReactNode} from "react";

export default function DashboardLayout({
                                            children,
                                        }: {
    children: ReactNode
}) {
    return <div className="container mx-auto">
        <div className="p-4 my-4 backdrop-blur-sm bg-white/30 border rounded-md shadow-sm">
            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
                Developer Blog
            </h1>
        </div>
        <section>{children}</section>
    </div>
}