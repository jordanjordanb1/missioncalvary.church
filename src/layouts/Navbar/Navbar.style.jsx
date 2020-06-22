import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import styled from 'styled-components/macro';
import AppBar from '@material-ui/core/AppBar';

export const Nav = styled(AppBar)`
  & * {
    font-family: 'Open Sans', Arial, sans-serif;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out 0s;
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

export const StyledTabs = styled(Tabs)`
  margin-left: 40px;
  flex-grow: 1;
`;

export const StyledToolbar = styled(Toolbar)`
  @media (min-width: 600px) {
    min-height: fit-content;
  }
`;
