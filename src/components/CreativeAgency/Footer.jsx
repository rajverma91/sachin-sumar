import React, { useEffect } from 'react';
//= Data
import data from '@/data/app-data.json';

function Footer({ lightMode }) {
  useEffect(() => {
    if (window.innerWidth > 991) {
      gsap.set('.footer-container', { yPercent: -50 })
      const uncover = gsap.timeline({ paused: true })
      uncover.to('.footer-container', { yPercent: 0, ease: 'none' });
      ScrollTrigger.create({
        trigger: 'main',
        start: 'bottom bottom',
        end: '+=50%',
        animation: uncover,
        scrub: true,
      });
    }
  }, []);

  return (
    <footer>
      <div className="footer-container">
        <div className="container pb-80 pt-80 ontop">
          <div className="row">
            <div className="col-lg-3">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <p>Excellence decisively nay man per impression maximum contrasted remarkably is perfect point. uncommonly solicitude inhabiting projection.</p>
                </div>
             
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6>Say Hello</h6>
                </div>
                <div className="text">
                <p className="mb-10">Plot No. 823, Sector 79, S.A.S. Nagar (Mohali)</p>
                  <p className="mb-10">
                    <a href="#0">akshdigitalsolutions@gmail.com</a>
                  </p>
                  <h5>
                    <a href="#">+44 7423024323</a><br/>
                    <a href="#">+91 9779 281128</a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 md-mb50">
              <div className="tit mb-20">
                <h6>Social</h6>
              </div>
              <ul className="rest social-text">
                <li>
                  <a href="#0">Facebook</a>
                </li>
                <li>
                  <a href="#0">Twitter</a>
                </li>
                <li>
                  <a href="#0">LinkedIn</a>
                </li>
                <li>
                  <a href="#0">Instagram</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <div className="tit mb-20">
                <h6>Newsletter</h6>
              </div>
              <div className="subscribe">
                <p>Join our subscribers list to get the latest news and special offers.</p>
                <form action="contact.php">
                  <div className="form-group rest">
                    <input type="email" placeholder="Type Your Email" />
                    <button type="submit">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-footer pt-40 pb-40 bord-thin-top ontop">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="logo">
                  <a href="#0">
                    <img src={`/dark/assets/imgs/logo-${lightMode ? 'dark' : 'light'}.png`} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="copyright d-flex">
                  <div className="ml-auto">
                    <p className="fz-13">© 2023 Aksh Digital Solutions  <span className="underline"><a
                      href="https://akshdigitalsolutions.com/"
                      target="_blank">AKS</a></span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer