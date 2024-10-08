import React, { useContext } from 'react';
import { BlogContext } from './BlogContext';
import { useLocation,Link } from 'react-router-dom';

export default function SearchResults() {
  const { blogData } = useContext(BlogContext);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  
  const filteredBlogs = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <div >
      <h1>Search Results for "{query}"</h1>
      <div className="search-boxes">
      {filteredBlogs.length > 0 ? (
        filteredBlogs.map((blog, index) => (
          <div key={index} className="blog-result">
            <Link to={`/article/${blog.id}`}>
            <img src={blog.urlToImage} alt={blog.title}  />
            <h3>{blog.title}</h3>
            </Link>
            <p>{blog.description}</p>
          </div>
        ))
      ) : (
        <div>No results found</div>
      )}
      </div>
    </div>
  );
}
