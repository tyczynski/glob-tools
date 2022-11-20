import globToRegexp from 'glob-to-regexp';
import { type FormEvent, useState, useRef } from 'react';

import * as styles from './Form.module.scss';

export const Form = () => {
  const [globValue, setGlobValue] = useState('');
  const [extended, setExtended] = useState(false);
  const [regexpValue, setRegExpValue] = useState(globToRegexp(''));
  const alertRef = useRef<HTMLDivElement>();

  const transformToRegExp = (v: string, e: boolean) => {
    const regexpValue = globToRegexp(v, {
      extended: e,
    });

    setRegExpValue(regexpValue);
  };

  const handleGlobValue = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    const { value } = currentTarget;

    setGlobValue(value);

    transformToRegExp(value, extended);
  };

  const handleExtendedValue = ({
    currentTarget,
  }: FormEvent<HTMLInputElement>) => {
    const { checked } = currentTarget;

    setExtended(currentTarget.checked);

    transformToRegExp(globValue, checked);
  };

  const handleCopyRegExp = () => {
    navigator.clipboard.writeText(regexpValue.toString()).then(() => {
      alertRef.current?.classList.add(styles.alertVisible);

      setTimeout(
        () => alertRef.current?.classList.remove(styles.alertVisible),
        3000,
      );
    });
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label className={styles.title} htmlFor="glob-value">
          Transform Glob to RegExp
        </label>

        <input
          className={styles.inputGlob}
          placeholder="gl*b"
          id="glob-value"
          type="text"
          value={globValue}
          onChange={handleGlobValue}
        />

        <div className={styles.extendedGroup}>
          <label className={styles.extendedGroupLabel} htmlFor="extended">
            Extended (
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/fitzgen/glob-to-regexp#glob-to-regular-expression"
            >
              more
            </a>
            ):
          </label>

          <input
            onChange={handleExtendedValue}
            checked={extended}
            id="extended"
            type="checkbox"
          />
        </div>
      </div>

      <hr />

      <pre>{regexpValue.toString()}</pre>

      <button onClick={handleCopyRegExp}>Copy RegExp</button>

      <p ref={alertRef} className={styles.alert}>
        RegExp copied to clipboard.
      </p>
    </>
  );
};
