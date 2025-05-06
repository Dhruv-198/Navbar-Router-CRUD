import React from 'react';

function Home() {
  return (
    <div className="page home-page">
      <div className="demo-section">
        <div className="demo-content">
          <h1>
            <span className="text-primary">React</span>{" "}
            <span className="text-green">Navbar</span>
          </h1>
          <div className="difficulty-tag">
            Difficulty Level: 0;
          </div>
          <p>Welcome to our responsive navigation demo. Try resizing the browser or viewing on different devices!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;