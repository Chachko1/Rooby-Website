"use client";
import { useEffect, useState } from 'react';

const BlogPost = ({ params }: any) => {
  const [post, setPost] = useState<any>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async (postId: string) => {
      try {
        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (!postResponse.ok) {
          throw new Error('Failed to fetch post');
        }
        const postData = await postResponse.json();

        const imagesResponse = await fetch(`https://jsonplaceholder.typicode.com/photos/${postId}`);
        if (!imagesResponse.ok) {
          throw new Error('Failed to fetch images');
        }
        const imagesData = await imagesResponse.json();

        // Assuming imagesData is an array and we want the first image URL
        const firstImageUrl = imagesData.url;

        setPost(postData);
        setImageUrl(firstImageUrl);
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
    <div className="flex flex-col w-full justify-center items-center gap-10">
      <h2 className="text-black font-bold text-[48px] cursor-pointer">{post.title}</h2>
      <div className='flex gap-5'>
        <p className="text-gray-600">Author: Unknown</p>
        <p className="text-black font-medium text-[16px]">Date: {new Date().toDateString()}</p>
      </div>
      {imageUrl && <img src={imageUrl} alt={post.title} />}
      <p className='font-inter font-medium text-[24px] w-[80%] mx-auto'>{post.body}</p>
    </div>
  );
};

export default BlogPost;
