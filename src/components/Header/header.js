
import React from 'react';
import './header-style.css';


function Header() {
    return (
        <header>
        <div class="overlay"></div>
        <div>
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source src="/public/videos/header-vid.mp4" type="video/mp4"/>
          </video>
          </div>
        <div class="container h-100">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="w-100 text-white">
              <h1 class="display-3">Krista McPherson</h1>
              <p class="lead mb-0">Full Stack Web Developer / Social Media Marketing</p>
            </div>
          </div>
        </div>
        </header>
      
    );
}

export default Header;