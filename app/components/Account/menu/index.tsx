import React from "react";

interface MenuItem {
  label: string;
  link: string;
}

interface MenuProps {
  title: string;
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ title, items }) => {
  return (
    <ul className="menu bg-base-200 rounded-box w-56">
      <li>
        <h2 className="menu-title">{title}</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default Menu;
