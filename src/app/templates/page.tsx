'use client';

import Link from 'next/link';
import '@/app/styles/css/templates-page.css';

function templates (){
    return(
        <>
  <header>
    <div className="menu-bar">
      <img src="/images/SA.jpg" />
    </div>
    <nav>
      <div className="pages">
        <Link href="/home" className="nav-link btn">
            Home
          </Link>

          <Link href="/expenses" className="nav-link btn">
            Expenses
          </Link>

          <Link href="/templates" className="nav-link btn">
            Templates
          </Link>

          <Link href="/announce" className="nav-link btn">
            Announcements
          </Link>
      </div>
    </nav>
    <div className="setting">
      <img src="/images/settings-icon.png" />
    </div>
  </header>
  <main>
    <div className="templates">
      <div className="temp-1">
        <img src="/images/budget-1.jpg" />
        <div className="option">
          <p>60. PHP</p>
          <div className="options">
            <img src="/images/download-icon.png" />
            <a href="#">Digital Download</a>
          </div>
        </div>
      </div>
    </div>
    <div className="templates">
      <div className="temp-1">
        <img src="/images/budget-1.jpg" />
        <div className="option">
          <p>60. PHP</p>
          <div className="options">
            <img src="/images/download-icon.png" />
            <a href="#">Digital Download</a>
          </div>
        </div>
      </div>
    </div>
    <div className="templates">
      <div className="temp-1">
        <img src="/images/budget-1.jpg" />
        <div className="option">
          <p>60. PHP</p>
          <div className="options">
            <img src="/images/download-icon.png" />
            <a href="#">Digital Download</a>
          </div>
        </div>
      </div>
    </div>
    <div className="templates">
      <div className="temp-1">
        <img src="/images/budget-1.jpg" />
        <div className="option">
          <p>60. PHP</p>
          <div className="options">
            <img src="/images/download-icon.png" />
            <a href="#">Digital Download</a>
          </div>
        </div>
      </div>
    </div>
    <div className="templates">
      <div className="temp-1">
        <img src="/images/budget-1.jpg" />
        <div className="option">
          <p>60. PHP</p>
          <div className="options">
            <img src="/images/download-icon.png" />
            <a href="#">Digital Download</a>
          </div>
        </div>
      </div>
    </div>
    <div className="templates">
      <div className="temp-1">
        <img src="/images/budget-1.jpg" />
        <div className="option">
          <p>60. PHP</p>
          <div className="options">
            <img src="/images/download-icon.png" />
            <a href="#">Digital Download</a>
          </div>
        </div>
      </div>
    </div>
    <div className="templates">
      <div className="temp-1">
        <img src="/images/budget-1.jpg" />
        <div className="option">
          <p>60. PHP</p>
          <div className="options">
            <img src="/images/download-icon.png" />
            <a href="#">Digital Download</a>
          </div>
        </div>
      </div>
    </div>
    <div className="templates">
      <div className="temp-1">
        <img src="/images/budget-1.jpg" />
        <div className="option">
          <p>60. PHP</p>
          <div className="options">
            <img src="/images/download-icon.png" />
            <a href="#">Digital Download</a>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer></footer>
</>

        
    );
;
}
export default templates;