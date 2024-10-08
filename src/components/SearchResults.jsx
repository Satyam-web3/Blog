import React, { useContext } from 'react';
import { BlogContext } from './BlogContext';
import { useLocation } from 'react-router-dom';

export default function SearchResults() {
  const { blogData } = useContext(BlogContext);
  const location = useLocation();
  
  const query = new URLSearchParams(location.search).get('query');
  
  const filteredBlogs = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      
      {filteredBlogs.length > 0 ? (
        filteredBlogs.map((blog, index) => (
          <div key={index} className="blog-result">
            <img src={blog.urlToImage} alt={blog.title} style={{ width: '100px' }} />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </div>
        ))
      ) : (
        <div>No results found</div>
      )}
    </div>
  );
}
