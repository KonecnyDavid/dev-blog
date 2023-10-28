import nextMDX from '@next/mdx';
import rehypeHighlight from 'rehype-highlight';
import remarkFrontmatter from "remark-frontmatter";

const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
};

const withMDX = nextMDX({
    options: {
        remarkPlugins: [remarkFrontmatter],
        rehypePlugins: [rehypeHighlight],
    },
});

export default withMDX(nextConfig);