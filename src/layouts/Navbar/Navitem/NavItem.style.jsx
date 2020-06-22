import styled from 'styled-components/macro';
import Tab from '@material-ui/core/Tab';

export const StyledTab = styled(Tab)`
  && {
    min-width: 50px;
    color: var(--almond);
    transition: all 200ms ease-out;
    font-family: 'Ubuntu';
    cursor: pointer;
    font-size: 1em;
    margin: 0 5px;
    opacity: 1;
    &.activeLink {
      background: var(--almond);
      color: var(--eerie-black);
      cursor: default;
      opacity: 1;
      &:hover {
        background: var(--almond);
        color: var(--eerie-black);
      }
    }
    &:hover {
      color: var(--tuscany);
    }
  }
`;
