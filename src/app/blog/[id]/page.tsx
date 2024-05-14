"use client";
import { useEffect, useState } from 'react';

const BlogPost = ({params}:any) => {
  const [post, setPost] = useState<any>(null);
  

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

    if (params.id) {
      const postId = Array.isArray(params.id) ? params.id[0] : params.id;
      fetchPost(postId as string); 
    }
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {}
    </div>
  );
};

export default BlogPost;
