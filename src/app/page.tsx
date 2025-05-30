import Link from 'next/link'
import { getFeaturedPost, getAllPosts } from '@/lib/posts'

export default function HomePage() {
  const featuredPost = getFeaturedPost()
  const allPosts = getAllPosts()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to my blog
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Stories about technology, life, and everything in between. 
            Written by a developer who occasionally gets diabetes and makes friends with cats.
          </p>
          <Link 
            href="/about"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Learn More About Me
          </Link>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Featured Story
            </h2>
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img 
                    src={`/images/diabetes/${featuredPost.frontmatter.cardImage}`}
                    alt={featuredPost.frontmatter.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span>{featuredPost.frontmatter.formattedDate || featuredPost.frontmatter.date}</span>
                    <span>•</span>
                    <span>{featuredPost.frontmatter.hashtags}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {featuredPost.frontmatter.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {featuredPost.frontmatter.subTitle}
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Read Full Story
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Latest Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Latest Posts
          </h2>
          {allPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2">
              {allPosts.slice(0, 4).map((post) => (
                <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={`/images/${post.slug}/${post.frontmatter.cardImage}`}
                    alt={post.frontmatter.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>{post.frontmatter.formattedDate || post.frontmatter.date}</span>
                      <span>•</span>
                      <span>{post.frontmatter.hashtags}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {post.frontmatter.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No posts available yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want to stay updated?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Follow me on social media or check out my other projects.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
            <Link 
              href="/books"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Check My Books
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
