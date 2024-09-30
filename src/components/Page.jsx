import React, {useContext } from 'react'
import { useParams } from 'react-router-dom';
import { BlogContext } from './BlogContext';
import Navbar from './Navbar';

export default function Page() {
  const { blogData } = useContext(BlogContext);
  const { index } = useParams();
  const articleIndex = parseInt(index, 10);
  const blog = blogData[articleIndex];
  


    
      if (!blog) {
        return <div>Loading...</div>; 
      }

      
    
      
  return (
    <div>
      <Navbar/>
      <div className="featuredcard" >
        <div className="featured_image">
            <img src={blog.urlToImage}/>
        </div>

        

        <div className="featured_title">
            <h2> {blog.title}</h2>
        </div>
     

      </div>
    </div>
  )
}
