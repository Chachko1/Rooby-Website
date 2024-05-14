"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const BlogPost = () => {
  const [post, setPost] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async (postId: string) => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const postData = await response.json();
        setPost(postData);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    if (router.query.id) {
      const postId = Array.isArray(router.query.id) ? router.query.id[0] : router.query.id;
      fetchPost(postId as string); // Assuming router.query.id is always a string
    }
  }, [router.query.id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {/* Additional post details */}
    </div>
  );
};

export default BlogPost;
