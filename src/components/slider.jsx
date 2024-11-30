import React, { useState, useContext, useEffect } from "react";
import { BlogContext } from "./BlogContext"; // Assuming you already have BlogContext

export default function BlogSlider({ intervalTime = 3000 }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { blogData } = useContext(BlogContext);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === blogData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? blogData.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, intervalTime);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide, intervalTime]);

  return (
    <div className="slider">
      <div
        className="slider-container"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {blogData.map((blog, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img
              src={blog.image_url}
              alt={blog.title}
              style={{ objectFit: "cover" }}
            />
            <div className="blog-content">
              <h2>{blog.title}</h2>
            </div>
          </div>
        ))}
      </div>

      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}
