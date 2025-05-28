import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Developed by{' '}
          <a 
            href="https://garbuz-shay.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="portfolio-link"
          >
            Shay Garbuz
          </a>
        </p>
        <p className="copyright">© {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
};
