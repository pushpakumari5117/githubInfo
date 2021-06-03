import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h3>Sorry, we can't find the page you are looking for</h3>
        <Link to='/' className='btn'>
          Go Home
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-grey-1);
  text-align: center;
  h1{
    font-size:10rem;
    color:var(--clr-black-1);
  }
  h3 {
    color: var(--clr-blue-2);
    margin-bottom: 1.5rem;
  }
`;
export default Error;
