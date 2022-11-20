import { type PropsWithChildren } from 'react';

import * as styles from './HomeLayout.module.scss';

export const HomeLayout = ({ children }: PropsWithChildren) => (
  // @ts-ignore
  <div className={styles.container}>
    {/* @ts-ignore */}
    <div className={styles.innerContainer}>{children}</div>
  </div>
);
