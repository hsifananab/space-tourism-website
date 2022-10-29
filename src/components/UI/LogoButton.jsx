import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/shared/logo.svg';
import { useStateContext } from '../../contexts/ContextProvider';

const LogoButton = () => {
  const { handleActiveIndex } = useStateContext();
  const handleClick = () => handleActiveIndex(0);
  return (
    <Link to="/" onClick={handleClick}>
      <img src={Logo} alt="logo" className="w-10 md:w-12 aspect-square" />
    </Link>
  );
};

export default LogoButton;
