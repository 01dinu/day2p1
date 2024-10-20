import React, { useState, useEffect } from 'react';
import './Home.css'; // Import custom CSS for animations and background

const Home = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const fullText = "NEW COLLECTION"; // The text to type out

  useEffect(() => {
    if (index < fullText.length) {
      const typingInterval = setInterval(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 200); // Typing speed, 200ms per character
      return () => clearInterval(typingInterval); // Clean up the interval
    }
  }, [index, fullText]);

  return (
    <div className="home-container">
      <div className="inner-container">
        <div className="flex flex-col items-start justify-center h-full relative" style={{ paddingLeft: '80px' }}> {/* Adjust padding for alignment */}
          <p className="summer-text mb-4">Summer 2020</p>
          <h1 className="text-4xl font-bold mb-4">
            <span className="typing-animation">{text}</span>
          </h1>
          <p className=" para mb-8">We know how large objects will act, <br/>but things on a small scale.</p>
          <button className="shop-button" >SHOP NOW</button> {/* Using the styled button class */}
        </div>

        <div className="image-container">
          <img
            src="/dayg.png"
            alt="New Collection"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
