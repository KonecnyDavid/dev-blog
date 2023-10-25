import type { MDXComponents } from 'mdx/types'
import {twMerge} from "tailwind-merge";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-3">{children}</h1>,
        h2: ({ children }) => <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-3">{children}</h2>,
        h3: ({ children }) => <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-3">{children}</h3>,
        h4: ({ children }) => <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-3">{children}</h4>,
        p: ({ children }) => <p className="leading-7 [&:not(:first-child)]:mt-1">{children}</p>,
        ul: ({ children }) => <ul className="my-1 ml-6 list-disc [&>li]:mt-2">{children}</ul>,
        ol: ({ children }) => <ol className="my-1 ml-6  list-decimal  [&>li]:mt-2">{children}</ol>,
        code: (props) => <code {...props} className={twMerge(props.className, "rounded-md")} />,
        ...components,
    }
}