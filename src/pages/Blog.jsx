import { useEffect } from "react";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import Section from "../components/Section";
import { formatDate, posts } from "../lib/posts";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog | I Make the Sites";
    window.scrollTo(0, 0);
  }, []);

  return (
    <Section id="blog">
      <div className="container">
        <Heading
          tag="Notes from Mark"
          title="Blog"
          text="Thoughts on web, software, and AI development."
        />
        {posts.length === 0 ? (
          <p className="body-2 text-center text-n-4">No posts yet. Check back soon!</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col p-6 bg-n-8 border border-n-6 rounded-[1.5rem] transition-colors hover:border-n-1/30"
              >
                <p className="tagline text-n-4 mb-3">
                  {formatDate(post.date)} · {post.readingMinutes} min read
                </p>
                <h3 className="h6 mb-3 transition-colors group-hover:text-color-1">
                  {post.title}
                </h3>
                {post.summary && <p className="body-2 text-n-3 mb-6">{post.summary}</p>}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-code text-n-3 bg-n-7 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
};

export default Blog;
