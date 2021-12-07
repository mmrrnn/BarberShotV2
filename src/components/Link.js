import styled from 'styled-components';
import { Link as GatsbyLink } from "gatsby"

const Link = styled(GatsbyLink)`
  font-family: 'Dosis', 'Helvetica', 'Arial', 'sans-serif';
  color: inherit;
  text-decoration: none;

  * {
    font-family: 'Dosis', 'Helvetica', 'Arial', 'sans-serif';
  }
`;

export default Link;
