"use client";
import { useState, useEffect } from 'react';

const BlogHeader = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [posts, setPosts] = useState<any[]>([]);

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
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  

  return (
    <div className="font-inter bg-white">
      <div className="w-full lg:w-[60%] p-10 lg:pl-[100px]">
        <h1 className="font-bold text-[40px] lg:text-[64px] text-black">News and insights <span className="text-gray-400">from our experts</span></h1>
      </div>
      <ul className="text-center  flex flex-col lg:flex-row gap-5 font-medium text-[18px] p-5 lg:pl-[100px] text-gray-400">  
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
      
      <ul className="p-5 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-5 ">  
        {posts.map((post) => (
          <li key={post.id} className="cursor-pointer hover:scale-105 duration-300">
            <div className="flex flex-col w-full" onClick={() => handleItemClick(post.title)}>
              <img src={post.imageUrl} width={361} height={241} alt={post.title} />
              <div className='flex w-full md:w-[85%]'><h2 className="text-black font-bold text-[24px]">{post.title}</h2></div>
              <div className='flex gap-5'>
                <p className="text-gray-600">Author: Unknown</p> 
                <p className="text-black font-medium text-[16px]">Date: {new Date().toDateString()}</p> 
              </div>
            </div>
          </li>
        ))}
      </ul>
      
      
    </div>
  );
}

export default BlogHeader;
