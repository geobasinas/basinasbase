import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

export default function Blog() {
  const posts = getSortedPostsData()

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <Link href={`/blog/${post.id}`}>
              <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600 dark:hover:text-blue-400">{post.title}</h2>
            </Link>
            <p className="text-gray-500 dark:text-gray-400">{post.date}</p>
          </article>
        ))}
      </div>
    </div>
  )
}