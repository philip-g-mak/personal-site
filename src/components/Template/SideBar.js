import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Philip &apos;Mak</h2>
        <p><a href="mailto:pmak0116@gmail.com">pmak0116@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Philip. I like building things.
        I am a <a href="https://rutgers.edu/">Rutgers University</a> graduate, Freehold Boro CS Alumni, and
        current work at <a href="https://facebook.com">Facebook</a>. Before Facebook I was
        at <a href="https://citi.com">Citi</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>
  </section>
);

export default SideBar;
