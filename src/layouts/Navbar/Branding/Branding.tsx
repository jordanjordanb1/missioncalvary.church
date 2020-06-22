import React from 'react';
import { Link } from 'gatsby';
import { BrandLink } from './Branding.style';

type BrandingProps = {
  children: string | JSX.Element | HTMLElement;
  to: string;
};

const Branding: React.SFC<BrandingProps> = ({ children, to, ...props }) => (
  <BrandLink clone={false}>
    <Link to={to}>{children}</Link>
  </BrandLink>
);

export default React.memo(Branding);
