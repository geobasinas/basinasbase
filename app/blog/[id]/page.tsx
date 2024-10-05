import { getPostData, getSortedPostsData } from '@/lib/posts'
import BackButton from '@/app/components/BackButton';

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    id: post.id,
  }))
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id)
  return (
    <article className="max-w-2xl mx-auto">
      <BackButton />
      <h1 className="text-4xl font-bold mb-4 text-foreground">{postData.title}</h1>
      <p className="text-muted-foreground mb-8">{postData.date}</p>
      <div 
        className="prose dark:prose-invert prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 max-w-none"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
      />
    </article>
  )
}