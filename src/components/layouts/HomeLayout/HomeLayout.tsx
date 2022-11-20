import { type PropsWithChildren } from 'react';

import * as styles from './HomeLayout.module.scss';

export const HomeLayout = ({ children }: PropsWithChildren) => (
  <div className={styles.container}>
    <div className={styles.innerContainer}>{children}</div>
  </div>
);
