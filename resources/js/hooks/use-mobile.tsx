import { useSyncExternalStore } from 'react';

const MOBILE_BREAKPOINT = 768;

const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

function mediaQueryListener(callback: (event: MediaQueryListEvent) => void) {
    mql.addEventListener('change', callback);

    return () => {
        mql.removeEventListener('change', callback);
    };
}

export function useIsMobile() {
    return useSyncExternalStore(
        mediaQueryListener,
        () => window.innerWidth < MOBILE_BREAKPOINT,
    );
}
