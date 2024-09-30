import React, {useContext } from 'react'
import { useParams } from 'react-router-dom';
import { BlogContext } from './BlogContext';
import Navbar from './Navbar';

export default function Page() {
  const { blogData } = useContext(BlogContext);
  const { index } = useParams();
  const articleIndex = parseInt(index, 10);
  const article = blogData[articleIndex];
  


    
      if (!article) {
        return <div>Loading...</div>; 
      }

      
    
      
  return (
    <div>
      <Navbar/>
      <div className="blog_page" >

      <div className="blog_page_title">
            <h2>{article.title} </h2>
        </div>
        <div className="blog_page_image">
            <img src={article.urlToImage}/>
        </div>

        {/* <div className="blog_category">
          <p>{article.} </p>
        </div> */}

        

        
          <div className="blog_page_desc">
            <p>{article.description}</p>
          </div>
        

      </div>
    </div>
  )
}
