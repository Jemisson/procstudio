import Link, { LinkProps } from 'next/link';
import { Box } from '@chakra-ui/react';

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
      <Box
        w={0.01}
        bg={isActive ? colors.white : 'transparent'}
      />
      {cloneElement(children)}
    </Link>
  );
}
