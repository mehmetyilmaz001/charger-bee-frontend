import { HomeOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';

import { capitalize } from '@/utils/helpers';

export default function useItems() {
  const router = useRouter();

  const items = useMemo(() => {
    const routes = router.route.split('/').filter(Boolean);

    const homeItem = {
      href: '/',
      title: React.createElement(HomeOutlined),
    };

    let path = '';

    return [
      homeItem,
      ...routes.map((route, index) => {
        const isLast = index === routes.length - 1;

        if (!isLast) path += `/${route}`;

        return {
          ...(isLast
            ? {} // remove href prop for the last item
            : { href: path }), // find the href of the rest items
          title: capitalize(route),
        };
      }),
    ];
  }, [router.route]);

  return items;
}
