import * as React from 'react';

import { Navbar } from './navbar';

export const App = () => {
  return (
    <div className="d-flex justify-content-center align-items-center h-100 flex-column">
      <Navbar />
      <h1 className="d-block text-white">
        Mole Squad
      </h1>

      <h3 className="d-block text-white">
        Underground software development
      </h3>
    </div>
  );
};
