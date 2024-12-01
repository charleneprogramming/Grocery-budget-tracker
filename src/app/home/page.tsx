import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import '@/app/styles/css/main-page.css';

function Home() {
  return (
    <>
    
      <Head>
    
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/images/SA.jpg" />
        <link rel="stylesheet" href="public/css/main-page.css" />
        <title>Home | Grocery Budget Tracker</title>

      </Head>

    <div className="background">
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
      <div className="wallet">
        <img src="/images/wallet.png" />
        <div className="remain-bal">
          <h1>Amount</h1>
          <p>8,500. PHP</p>
        </div>
      </div>
      <center>
        <div className="board">
          <h1>Overall Budget:</h1>
        </div>
      </center>
    </main>
    <footer></footer>

    </div>
    
  </>
  );
}

export default Home