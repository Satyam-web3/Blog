import React, { createContext, useState, useEffect } from 'react';
export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogData, setBlogData] = useState([]);

  const fetchBlogData = async () => {
    try {
      const url = 'https://newsapi.org/v2/everything?q=index&apiKey=625d5b8e6e2545f38b1c27f091fe9389';
      const response = await fetch(url);
      const data = await response.json();
      setBlogData(data.articles); // Ensure data has unique ids
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };



  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <BlogContext.Provider value={{ blogData }}>
      {children}
    </BlogContext.Provider>
  );
};
