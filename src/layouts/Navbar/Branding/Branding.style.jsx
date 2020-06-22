import styled from 'styled-components/macro';
import Box from '@material-ui/core/Box';

export const BrandLink = styled(Box)`
  height: 100px;
  transition: all 0.2s ease-in-out 0s;

  &:hover,
  &:focus {
    filter: brightness(120%) blur(1px);
  }
`;
