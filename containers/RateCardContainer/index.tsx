import React, {HTMLAttributes} from 'react';
import RateCard from '../../components/RateCard';

const reviews = [
    {
        rate: 5,
        reviewer: 'Reviews',
    },
    {
        rate: 5,
        reviewer: 'Report Guru',
    },
    {
        rate: 5,
        reviewer: 'BestTech',
    },
]

const RateCardContainer: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div {...props}>
            {reviews.map((props, index) => (
                <RateCard {...props}
                          key={index}
                />
            ))}
        </div>
    );
};

export default RateCardContainer;
