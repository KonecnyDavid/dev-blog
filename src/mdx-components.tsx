import type { MDXComponents } from 'mdx/types'
import {twMerge} from "tailwind-merge";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => <h1 style={{ fontSize: '40px' }}>{children}</h1>,
        code: (props) => <code {...props} className={twMerge(props.className, "rounded-md")} />,
        ...components,
    }
}