import { ButtonProps } from '@/types';
import React from 'react';

import styles from "../styles/modules/Button.module.scss";

const Button = ({ title }: ButtonProps) => {
  return (
    <button className={styles.button}>
        {title}
    </button>
  )
}

export default Button