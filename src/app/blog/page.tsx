import * as fs from "fs";
import path from "path";
import Link from "next/link";
import * as matter from 'gray-matter';

const getBlogPosts = async () => {
    try {
        const dir = path.resolve('./src/app/blog/post');
        const files = fs.readdirSync(dir).filter(file => !file.includes('.'));


        return files.map((fileName) => {
            const data = matter.read((path.resolve('./src/app/blog/post', fileName, "page.mdx")));
            return {
                fileName,
                attributes: data.data
            };
        });
    } catch (error) {
        return []
    }
}

const BlogPage = async () => {
    const posts = await getBlogPosts();
    console.log(posts)
    return <div className="mt-4">
        {/*<h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl mb-8 mt-4">Latest blog posts</h1>*/}
        <div className="flex gap-4">
            {posts.map(post => <div key={post.fileName}>
                <Link href={`/blog/post/${post.fileName}`}>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        {(post.attributes as { title: string }).title ?? post.fileName}
                    </h3>
                    {"snippet" in post.attributes && <p className="text-xl text-muted-foreground">
                        {post.attributes.snippet}
                    </p>}
                </Link>
            </div>)}
        </div>
    </div>
}

export default BlogPage;