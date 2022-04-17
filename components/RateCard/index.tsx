import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    rate: number;
    reviewer: string;
}

const RateCard: React.FC<IProps> = ({ rate, reviewer, className, ...props }) => {
    return (
        <div className={cn(styles.rateCard, className)}>
            <div className={styles.iconContainer}>
                {[...Array(rate)].map((_, index) => (
                    <img src={'/icons/icon-star.svg'}
                         alt={''}
                         key={index}
                    />
                ))}
            </div>
            <p className={styles.description}>
                Rated {rate} Stars in {reviewer}
            </p>
        </div>
    );
};

export default RateCard;
