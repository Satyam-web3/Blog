import React, { createContext, useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from './FIrebase';
import axios from 'axios';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogData, setBlogData] = useState([]);

  const fetchBlogData = async () => {
    try {
      const url = 'https://newsapi.org/v2/everything?q=index&apiKey=625d5b8e6e2545f38b1c27f091fe9389';
      const response = await fetch(url);
      const data = await response.json();
      setBlogData(data.articles);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  // const [loading, setLoading] = useState(true); // To handle loading state

  // // Fetch blogs from Firestore
  // const fetchCustomBlogData = async () => {
  //   try {
  //     const blogCollection = collection(db, 'blogs'); // Firestore collection
  //     const blogSnapshot = await getDocs(blogCollection);
  //     const blogsList = blogSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  //     return blogsList; // Return the blogs from Firestore
  //   } catch (error) {
  //     console.error("Error fetching custom blog data from Firebase:", error);
  //     return [];
  //   }
  // };

  // // Fetch blogs from News API
  // const fetchApiBlogData = async () => {
  //   try {
  //     const url = 'https://newsapi.org/v2/everything?q=index&apiKey=625d5b8e6e2545f38b1c27f091fe9389';
  //     const response = await axios.get(url);
  //     return response.data.articles; // Return the articles from the API
  //   } catch (error) {
  //     console.error("Error fetching blog data from News API:", error);
  //     return [];
  //   }
  // };

  // // Fetch and combine both sources of blog data
  // const fetchAllBlogData = async () => {
  //   setLoading(true);
  //   const customBlogs = await fetchCustomBlogData(); // Fetch custom blogs from Firebase
  //   const apiBlogs = await fetchApiBlogData(); // Fetch blogs from the API
  //   setBlogData([...customBlogs, ...apiBlogs]); // Merge both into one array
  //   setLoading(false);
  // };

  // // Add a new blog to Firestore
  // const addBlog = async (newBlog) => {
  //   try {
  //     const blogCollection = collection(db, 'blogs'); // Firestore collection
  //     await addDoc(blogCollection, newBlog);
  //     fetchAllBlogData(); // Refresh the blog list after adding
  //   } catch (error) {
  //     console.error("Error adding blog to Firebase:", error);
  //   }
  // };

  // // Delete a blog from Firestore
  // const deleteBlog = async (id) => {
  //   try {
  //     const blogDoc = doc(db, 'blogs', id); // Reference to the document to delete
  //     await deleteDoc(blogDoc);
  //     fetchAllBlogData(); // Refresh the blog list after deleting
  //   } catch (error) {
  //     console.error("Error deleting blog from Firebase:", error);
  //   }
  // };

  useEffect(() => {
    fetchBlogData();
  }, []); 

  return (
    <BlogContext.Provider value={{ blogData }}>
      {children}
    </BlogContext.Provider>
  );
};
