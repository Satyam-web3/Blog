import React, {useContext} from 'react'
import { BlogContext } from './BlogContext';


export default function SidePost(props) {
    const { blogData } = useContext(BlogContext);
    const article = blogData[props.index];
  
    const cardStyle = {
      width: props.width ,  
      height: props.height , 
      fontSize:props.font
    };
    if (!article) {
      return <div>Loading...</div>; 
    }
  
    return (
      <div>
        <div className="sidecard" style={cardStyle}>
          <div className="sidecard_image">
              <img src={article.urlToImage}/>
          </div>
  
          <div className="sidecard_title">
              <h2>{article.title} </h2>
          </div>
  
         
  
        </div>
      </div>
    )
  
}
