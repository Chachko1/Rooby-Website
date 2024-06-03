"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const BlogHeader = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=50');
        if (!postsResponse.ok) {
          throw new Error('Failed to fetch posts');
        }
        const postsData = await postsResponse.json();

        const imagesResponse = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=50");
        if (!imagesResponse.ok) {
          throw new Error('Failed to fetch images');
        }
        const imagesData = await imagesResponse.json();

        const combinedData = postsData.map((post: any, index: number) => ({
          ...post,
          imageUrl: imagesData[index].url
        }));

        setPosts(combinedData);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-white'>
      <div className="font-inter bg-white max-w-[1440px] mx-auto">
        <div className="w-full lg:w-[60%] p-10 lg:pl-[100px]">
          <h1 className="font-bold text-[40px] lg:text-[64px] text-black leading-tight">
            News and insights <span className="text-gray-400">from our experts</span>
          </h1>
        </div>
        <ul className="text-center flex flex-col lg:flex-row gap-5 font-medium text-[18px] p-5 lg:pl-[100px] text-gray-400">
          {["All articles", "Sales", "Marketing", "Service", "Product", "News"].map((item) => (
            <li
              key={item}
              onClick={() => handleItemClick(item)}
              className={`cursor-pointer ${
                selectedItem === item ? 'underline duration-300 text-black ' : ''
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        {loading ? (
          <div className='text-black bg-white p-10 text-[80px] text-center'>Loading...</div>
        ) : (
          <ul className="p-5 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-5 ">
            {posts.map((post) => (
              <li key={post.id} className="cursor-pointer hover:scale-105 duration-300">
                <Link href={`/blog/${post.id}`}>
                  <div className="flex flex-col w-full">
                    <img src={post.imageUrl} width={361} height={241} alt={post.title} className='p-2'/>
                    <div className='flex w-full md:w-[85%]'>
                      <h2 className="text-black font-bold text-[24px] cursor-pointer p-2">{post.title}</h2>
                    </div>
                    <div className='flex gap-5 p-2'>
                      <p className="text-gray-600">Author: Unknown</p>
                      <p className="text-black font-medium text-[16px]">Date: {new Date().toDateString()}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default BlogHeader;