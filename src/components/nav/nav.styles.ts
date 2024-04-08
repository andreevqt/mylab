import styled from 'styled-components';
import {Link} from 'gatsby';

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const Item = styled(Link)`
  align-self: start;
  padding-bottom: 5px;
  border-bottom: 1px solid #e36e6e;
  color: inherit;
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Nav = {
  Container,
  Item,
};
