import React from 'react';

import styles from './styles.module.css';
import Star from './img/star.svg';
import StarGold from './img/star-gold.svg';
import { Size } from '../../constants/ui';

const createArray = (length) => [...Array(length)];

const Rating = ({ onChange, value, size = Size.l, className, totalStars = 5 }) => {
  return createArray(totalStars).map((_, i) => (
    <img
      loading="lazy"
      className={styles[size]}
      src={i >= value ? Star : StarGold}
      key={i}
      onClick={() => onChange?.(i + 1)}
    />
  ));
};

export default Rating;
