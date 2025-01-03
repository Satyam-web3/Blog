import React, { useContext } from "react";
import { BlogContext } from "./BlogContext";
import { Link } from "react-router-dom";

export default function Blogcard(props) {
  const { blogData } = useContext(BlogContext);
  const article = blogData[props.index];

  const cardStyle = {
    width: props.width,
    height: props.height,
    fontSize: props.font || "0.8rem",
  };
  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to={`/article/${props.index}`}>
        <div className="blogcard" style={cardStyle}>
          <div className="blog_image">
            <img src={article.image_url} />
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
      </Link>
    </div>
  );
}
