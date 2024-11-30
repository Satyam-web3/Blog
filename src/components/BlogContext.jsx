import React, { createContext, useState, useEffect } from 'react';
export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogData, setBlogData] = useState([]);

  const fetchBlogData = async () => {
    try {
      const url = 'https://newsdata.io/api/1/latest?apikey=pub_6086489604694011c081d9bbe51b782ff11bc&domain=bbc&language=en';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      const articlesWithId = data.results.map((article, index) => ({
        ...article,
        id: index.toString(),
      }));

      setBlogData(articlesWithId);
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
