'use client';

import Link from 'next/link';
import "@/app/styles/css/sign.css";

const sign = () => {
    const signStyle = {
        margin: '0',
        background: 'url(images/top-view-payroll-concept-with-document.jpg)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: '4s',
        display: 'flex',
        justifyContent: 'space-evenly',
        animationName: 'animate',
        animationDirection: 'alternate-reverse',
        animationPlayState: 'running',
        animationTimingFunction: 'ease-in-out',
        animationDuration: '14s',
        animationFillMode: 'forwards',
        animationIterationCount: 'infinite',
      };

  return (
    <>
      <div style={signStyle}>
        <div className="container-3">
            <div className="container-4">
            <div className="header">
                <center>
                <h2>SIGNUP</h2>
                <hr />
                </center>
            </div>
            <div className="main">
                {/* -- email address sa user/admin --*/}
                <div className="email-input">
                <input id="email" type="text" placeholder="Enter email address" />
                </div>
                {/* -- password sa user/admin --*/}
                <div className="password-input">
                <input id="password" type="password" placeholder="Enter password" />
                </div>
            </div>
            <div className="footer">
              <Link href="/login">
              <button>SIGNUP</button>
              </Link>
              <br />
              <Link href="/login">
              <p>Already have an Account?</p>
              </Link>
            </div>
            <div className="footer-2">
                <p>© Charlene A. Barrientos | ACLC College of Mandaue</p>
            </div>
            </div>
        </div>
        <div className="logo">
            <img src="/images/SA.jpg" />
        </div>
      </div>
        
      

      {/* Scoped styles */}
      <style jsx>{`
 @keyframes animate {
          0% {
            background-image: url('/images/sign-1.jpg');
          }
          50% {
            background-image: url('/images/sign-2.jpg');
          }
          100% {
            background-image: url('/images/sign-3.jpg');
          }
        }

      `}</style>
    </>
  );
};

export default sign;
