import React from 'react';
import { StyledTab } from './NavItem.style';
import { TabProps } from '@material-ui/core/Tab/Tab';
import { Link } from 'gatsby';

interface NavItemProps extends TabProps {
  readonly to: string;
  readonly text: string;
  readonly pathname: string;
}

const NavItem: React.SFC<NavItemProps> = ({ to, text, pathname, ...props }): JSX.Element => {
  const isActive = to === pathname || '';

  return (
    <StyledTab
      // @ts-ignore
      component={Link}
      to={to}
      disableFocusRipple
      color="initial"
      underline="none"
      disableRipple
      label={text}
      className={isActive && 'activeLink'}
      {...props}
    />
  );
};

export default React.memo(NavItem);
