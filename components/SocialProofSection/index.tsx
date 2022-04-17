import React from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import RateCardContainer from '../../containers/RateCardContainer';
import TestimonialCardContainer from '../../containers/TestimonialCardContainer';

const SocialProofSection: React.FC = () => {
    return (
        <section className={styles.socialProofSection}>
            <Container className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        10,000+ of our users love our products.
                    </h2>
                    <p className={styles.description}>
                        We only provide great products combined with excellent customer service. See what our satisfied
                        customers are saying about our services.
                    </p>
                </div>

                <RateCardContainer className={styles.rateCardContainer}/>
                <TestimonialCardContainer className={styles.testimonialCardContainer}/>
            </Container>
        </section>
    );
};

export default SocialProofSection;
