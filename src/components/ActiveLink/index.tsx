import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement } from 'react';

import { colors } from '@/styles/globals';

interface ActiveLinkProps extends LinkProps {
  children: React.ReactElement;
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter();

  let isActive = false;

  if (asPath === rest.href || asPath === rest.as) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        backgroundColor: isActive ? `${colors.white}` : `${colors.primary}`,
        color: isActive ? `${colors.primary}` : `${colors.white}`,
      })}
    </Link>
  );
}
