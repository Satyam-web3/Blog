import React, {useContext} from 'react'
import { BlogContext } from './BlogContext';


export default function Blogcard(props) {
  const { blogData } = useContext(BlogContext);
  const article = blogData[props.index];

  const cardStyle = {
    width: props.width ,  
    height: props.height , 
    fontSize:props.font ||'0.8rem'
  };
  if (!article) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <div className="blogcard" style={cardStyle}>
        <div className="blog_image">
            <img src={article.urlToImage}/>
        </div>

        {/* <div className="blog_category">
          <p>{article.} </p>
        </div> */}

        <div className="blog_title">
            <h2>{article.title} </h2>
        </div>

        {props.showDescription && article.description && (
          <div className="blog_desc">
            <p>{article.description}</p>
          </div>
        )}

      </div>
    </div>
  )
}
