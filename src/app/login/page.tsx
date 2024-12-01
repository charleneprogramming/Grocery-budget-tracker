'use client';

import Link from 'next/link';
import '@/app/styles/css/login.css';

const Background = () => {
    const backgroundStyle = {
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
      <div style={backgroundStyle}>
      <div className="container-1">
          <div className="container-2">
            <div className="header">
              <center>
                <h2>LOGIN</h2>
                <hr />
              </center>
            </div>
            <div className="main">
              <div className="email-input">
                <input id="email" type="text" placeholder="Enter email address" />
              </div>
              <div className="pass-input">
                <input id="password" type="password" placeholder="Enter password" />
              </div>
            </div>
            <div className="footer">
              <Link href="/home">
              <button>LOGIN</button>
              </Link>
              <br />
              <Link href="/signup">
              <p>Don't have an Account?</p>
              </Link>
            </div>
            <div className="footer-2">
              <p>© Charlene A. Barrientos | ACLC College of Mandaue</p>
            </div>
          </div>
        </div>
        <div className="quotes">
          <h1>
            A <font color="#ffd700">STEP</font> CLOSER
            <br />
            TO <font color="#ffd700">FINANCIAL FREEDOM</font>.
          </h1>
          <div className="logo">
            <img src="/images/SA.jpg" />
          </div>
        </div>
      </div>
        
      

      {/* Scoped styles */}
      <style jsx>{`

        @keyframes animate {
          0% {
            background-image: url('/images/top-view-payroll-concept-with-document.jpg');
          }
          50% {
            background-image: url('/images/moneyy.jpg');
          }
          100% {
            background-image: url('/images/depositphotos_351453458-stock-photo-person-filling-us-tax-form.jpg');
          }
        }

      `}</style>
    </>
  );
};

export default Background;
