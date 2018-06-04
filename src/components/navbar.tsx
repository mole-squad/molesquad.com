import * as React from 'react';

export const Navbar = () => {
  const links = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: 'https://github.com/mole-squad',
      label: 'Projects',
    },
  ].map((aLink) => {
    return (
      <a href={aLink.href} className="nav-link" target="_blank" key={aLink.label}>
        {aLink.label}
      </a>
    );
  });

  return (
    <div className="app-nav">
      {links}
    </div>
  );
};
