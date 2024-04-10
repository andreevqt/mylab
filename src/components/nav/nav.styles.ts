import styled from 'styled-components';
import {Link} from 'gatsby';

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const Item = styled(Link)`
  align-self: start;
  padding-bottom: 5px;
  border-bottom: 1px solid #3c3f52;
  color: inherit;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #e36e6e;
`;

export const Nav = {
  Container,
  Item,
};
