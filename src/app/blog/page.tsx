"use client";
import { useEffect } from 'react';
import BlogHeader from "@/components/BlogHeader";
import Form from "@/components/Form";

const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <BlogHeader />
      <Form />
    </main>
  );
}

export default Page;