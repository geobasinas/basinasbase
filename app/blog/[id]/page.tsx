import { getPostData, getSortedPostsData } from '@/lib/posts'

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
      <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">{postData.date}</p>
      <div 
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
      />
    </article>
  )
}