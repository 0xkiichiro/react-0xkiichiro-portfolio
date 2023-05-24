import BlogStyled from './Blog.styled';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export const Blog = () => {
  const { isMinimized } = useContext(Context);
  return (
    <BlogStyled isMinimized={isMinimized}>
      <h2>Work in progress...</h2>
    </BlogStyled>
  );
};
