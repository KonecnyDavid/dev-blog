import * as fs from "fs";
import path from "path";
import fm from "front-matter";
import Link from "next/link";

const getBlogPosts = async () => {
    try {
        const dir = path.resolve('./src/app/blog/post');
        const files = fs.readdirSync(dir).filter(file => !file.includes('.'));


        return files.map((fileName) => {
            const data = fm(path.resolve('./src/app/blog/post', fileName, "page.mdx"));
            return {
                fileName,
                attributes: data.attributes
            };
        });
    } catch (error) {
        return [

        ]
    }
}

const BlogPage = async () => {
    const posts = await getBlogPosts();
    return <div className="mt-4">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl">Latest blog posts</h1>
        <ul>
            {posts.map(post => <li key={post.fileName}>
                <Link href={`/blog/post/${post.fileName}`}>{(post.attributes as {title: string}).title ?? post.fileName}</Link>
            </li>)}
        </ul>
    </div>
}

export default BlogPage;