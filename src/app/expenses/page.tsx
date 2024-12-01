import React from "react";
import Link from 'next/link';
import '@/app/styles/css/expenses-page.css';

function expenses() {
  return (
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

          <Link href="/pages/expenses" className="nav-link btn">
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
    <div className="data"></div>
  </main>
  <footer></footer>
</>
  );
}

export default expenses