'use client';
import Link from 'next/link';
import '@/app/styles/css/announcement-page.css';
import { useState } from 'react';

function Announce() {
  // State to track the current index of the image
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: '/images/store-1.jpg', link: 'https://www.facebook.com/story.php?story_fbid=957529283078017&id=100064628623786&mibextid=WC7FNe&rdid=0nCXtVzQMqEBy6DQ' },
    { src: '/images/store-2.jpg', link: 'https://www.facebook.com/photo/?fbid=10158667240192935&set=a.336141687934' },
    { src: '/images/store-3.jpg', link: 'https://www.facebook.com/smsavemoreapalit/posts/get-your-watsons-card-for-free-and-experience-a-world-of-discounts-and-rewards-s/3484717291559945/' },
    { src: '/images/store-4.jpg', link: 'https://www.facebook.com/SMMarkets/posts/enjoy-free-delivery-when-you-use-the-code-superdel1-shop-online-at-httpssmmarket/1754264761450032/' },
    { src: '/images/store-5.jpg', link: 'https://www.robinsonssupermarket.com.ph/promo-page/robinsons-supermarkets-red-super-sale' },
    { src: '/images/store-6.jpg', link: 'https://www.facebook.com/TheMetroStores/photos/the-much-awaited-metro-supermarket-hakot-hakot-is-back-for-every-p1500-purchase-/10155798949224777/?_rdr' }
  ];

  // Next slide function
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Previous slide function
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <header>
        <div className="menu-bar">
          <img src="/images/SA.jpg" />
        </div>
        <nav>
          <div className="pages">
            <Link href="/home" className="nav-link btn">Home</Link>
            <Link href="/expenses" className="nav-link btn">Expenses</Link>
            <Link href="/templates" className="nav-link btn">Templates</Link>
            <Link href="/announce" className="nav-link btn">Announcements</Link>
          </div>
        </nav>
        <div className="setting">
          <img src="/images/settings-icon.png" />
        </div>
      </header>

      <main>

        <div className="title">
            <h1>DEALS IN ANY STORE!</h1>
        </div>


            <div className="carousel-container">
            {/* Carousel Navigation */}
            <a className="prev" onClick={prevSlide}>
                ❮
            </a>

            <div className="carousel-images">
                <a className="info-card" href={images[currentIndex].link}>
                <img src={images[currentIndex].src} alt={`Carousel ${currentIndex + 1}`} />
                </a>
            </div>

            {/* Next slide button */}
            <a className="next" onClick={nextSlide}>
                ❯
            </a>
            </div>
      </main>

      <footer></footer>
    </>
  );
}

export default Announce;
