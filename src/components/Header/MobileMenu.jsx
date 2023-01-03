import React, {useState} from 'react';
import MenuList from "./MenuList";
import HeaderButtons from "./HeaderButtons";

const MobileMenu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        className={`burger ${isActive ? 'active' : ''}`}
        onClick={() => setIsActive(state => !state)}
      >
        <span/>
        <span/>
        <span/>
      </div>
      <menu className={`mobile ${isActive ? 'active' : ''}`}>
        <MenuList />

        <HeaderButtons />
      </menu>
    </>
  );
};

export default MobileMenu;
