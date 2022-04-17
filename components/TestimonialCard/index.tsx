import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    avatar: string;
    name: string;
    description: string;
};

const TestimonialCard: React.FC<IProps> = ({ avatar, name, description, className, ...props }) => {
    return (
        <div className={cn(styles.testimonialCard, className)}
             {...props}
        >
            <div className={styles.header}>
                <img className={styles.avatar}
                     src={avatar}
                     alt={''}
                />
                <div>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.verifiedBuyer}>Verified Buyer</div>
                </div>
            </div>
            <p className={styles.description}>
                {description}
            </p>
        </div>
    );
};

export default TestimonialCard;
