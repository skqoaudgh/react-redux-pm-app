import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">새 프로젝트</NavLink>
      </li>
      <li>
        <NavLink to="/">로그아웃</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating lighten-1">
          CD
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
