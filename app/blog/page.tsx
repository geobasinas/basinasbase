import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import BackButton from '@/app/components/BackButton';

type Post = {
  id: string;
  date: string;
  title: string;
  excerpt?: string; // Make excerpt optional
}

export default function Blog() {
  const posts = getSortedPostsData() as Post[]

  return (
    <div className="max-w-2xl mx-auto">
      <BackButton />
      <h1 className="text-4xl font-bold mb-8 text-foreground">Blog</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>
                <Link 
                  href={`/blog/${post.id}`}
                  className="text-2xl font-semibold hover:text-primary transition-colors"
                >
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{post.date}</p>
              {post.excerpt && (
                <p className="mt-2 text-foreground">{post.excerpt}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}