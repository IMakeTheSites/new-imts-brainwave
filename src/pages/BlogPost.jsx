import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Section from "../components/Section";
import { formatDate, getPost } from "../lib/posts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPost(slug);

  useEffect(() => {
    document.title = post ? `${post.title} | I Make the Sites` : "Post not found | I Make the Sites";
    window.scrollTo(0, 0);
  }, [post]);

  return (
    <Section>
      <div className="container max-w-[48rem]">
        <Link to="/blog" className="button text-n-3 transition-colors hover:text-color-1">
          ← All posts
        </Link>
        {post ? (
          <article className="mt-8">
            <p className="tagline text-n-4 mb-4">
              {formatDate(post.date)} · {post.readingMinutes} min read
            </p>
            <h1 className="h2 mb-10">{post.title}</h1>
            <div className="blog-prose" dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
        ) : (
          <div className="mt-8">
            <h1 className="h2 mb-4">Post not found</h1>
            <p className="body-2 text-n-3">That post doesn&apos;t exist or has moved.</p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default BlogPost;
