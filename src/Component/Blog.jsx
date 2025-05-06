import React from 'react';

function Blog() {
  return (
    <div className="page blog-page">
      <h1>Blog</h1>
      <div className="blog-container">
        <div className="blog-post">
          <h2>Getting Started with React</h2>
          <p className="post-meta">Posted on May 2, 2025</p>
          <p>
            React is a JavaScript library for building user interfaces. It's declarative, 
            efficient, and flexible. React makes it painless to create interactive UIs.
          </p>
          <button className="btn btn-outline">Read More</button>
        </div>
        
        <div className="blog-post">
          <h2>Building a Responsive Navbar</h2>
          <p className="post-meta">Posted on April 28, 2025</p>
          <p>
            Navigation is a key element of any website. Learn how to create a responsive 
            navigation bar that works seamlessly on both mobile and desktop devices.
          </p>
          <button className="btn btn-outline">Read More</button>
        </div>
        
        <div className="blog-post">
          <h2>CRUD Operations in React</h2>
          <p className="post-meta">Posted on April 15, 2025</p>
          <p>
            Create, Read, Update, and Delete (CRUD) operations form the foundation of many 
            web applications. This post covers implementing these operations in React.
          </p>
          <button className="btn btn-outline">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Blog;