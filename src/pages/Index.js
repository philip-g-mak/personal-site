import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Philip Mak's personal website. New York based Rutgers's Engineering graduate, "
    + 'engineer at Facebook.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript.
          </p>
        </div>
      </header>
      <p>
        <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/philip-g-mak/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
