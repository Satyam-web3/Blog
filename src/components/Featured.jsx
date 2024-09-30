import React, { useContext } from "react";
import { BlogContext } from "./BlogContext";
import { Link } from "react-router-dom";

export default function Featured(props) {
  const { blogData } = useContext(BlogContext);
  const article = blogData[props.index];

  const cardStyle = {
    width: props.width,
    height: props.height,
    fontSize: props.font,
  };
  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to={`/article/${props.index}`}>
        <div className="featuredcard" style={cardStyle}>
          <div className="featured_image">
            <img src={article.urlToImage} />
          </div>

          <div className="featured_title">
            <h2> {article.title}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}
