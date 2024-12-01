'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import './styles/css/landing-page.css';

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // This will trigger the animation once the component is mounted
    setIsLoaded(true);
  }, []);

  return (
    <div className={isLoaded ? 'page-animation' : ''}>
      <div className="header">
        <div className="logos">
          <img src="/images/SA.jpg" alt="Logo" />
        </div>
        <div className="about">
          <Link href="/about">
            About Us
          </Link>
        </div>
      </div>

      <div className="main">
        <div className="image">
          <img src="/images/sign-2.jpg" alt="Main Image" />
        </div>
        <div className="tagline">
          <h1>
            The grocery store is where most of us overspend. <br />
            Keep <font color="#ffd700">track</font> and <font color="#ffd700">save</font> big!
          </h1>
          <Link href="/login">
            <button>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
