
import fs from 'fs'
import matter from "gray-matter"
import { notFound } from 'next/navigation'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import {reporter} from 'vfile-reporter'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import OnThisPage from '@/app/com/onthis'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'


export default async function Page({ params }) {
  const prm = await params
      const path  = `content/${prm.slug}.md`
      if(!fs.existsSync(path)){
        notFound()
        
      }
      
      const filename = fs.readFileSync(path,"utf-8")
        const blog= matter(filename)
        // conavert markdown to html 
   const precessor = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, {title: '👋🌍'})
        .use(rehypeFormat)
        .use(rehypeStringify)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings)
        .use(rehypePrettyCode,{
          theme:"dracula-soft",
          transformers: [
            transformerCopyButton({
              visibility: 'always',
              feedbackDuration: 3_000,
            }),
          ],
        })
        .process(blog.content)
      
  return (
    <div className="max-w-3xl mx-auto p-6  ">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          {blog.data.title}
        </h1>
        <div className="flex items-center  mb-4">
          <i><span className="mr-4">By {blog.data.author}</span>
          <span>{blog.data.date}</span></i>
        </div>
        <p className=" italic mb-6">{blog.data.description}</p>
      </header>
      
      <article 
        className=" prose dark:prose-invert  max-w-none"
        dangerouslySetInnerHTML={{__html: precessor.value}}
      />
        <OnThisPage/>
      </div>
  );
}