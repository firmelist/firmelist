import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuWidget({ menuItems, menuHeading, variant }) {
  return (
    <div className={`cs-footer_menu ${variant || ''}`}>
      {menuHeading && <h4>{menuHeading}</h4>}
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
