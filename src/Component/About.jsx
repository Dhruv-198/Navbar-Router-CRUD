import React from 'react';

function About() {
  return (
    <div className="page about-page">
      <h1>About Us</h1>
      <div className="about-content">
        <p>
          Welcome to our React demonstration site. We're showcasing a responsive navigation system
          along with basic CRUD operations for inventory management.
        </p>
        <p>
          This project was built using React and includes features such as:
        </p>
        <ul>
          <li>Responsive navigation that works on both mobile and desktop</li>
          <li>React Router for seamless page transitions</li>
          <li>CRUD functionality for inventory management</li>
          <li>Clean, modern UI design</li>
        </ul>
        <p>
          Feel free to explore the different sections of our site and test out the features
          we've implemented.
        </p>
      </div>
    </div>
  );
}

export default About;