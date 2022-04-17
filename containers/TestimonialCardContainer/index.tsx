import React, {HTMLAttributes} from 'react';
import TestimonialCard from '../../components/TestimonialCard';

const testimonials = [
    {
        avatar: '/img/image-colton.jpg',
        name: 'Colton Smith',
        description: '“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”',
    },
    {
        avatar: '/img/image-irene.jpg',
        name: 'Irene Roberts',
        description: '“ Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”',
    },
    {
        avatar: '/img/image-anne.jpg',
        name: 'Anne Wallace',
        description: '“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”',
    },
];

const TestimonialCardContainer: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div {...props}>
            {testimonials.map((props, index) => (
                <TestimonialCard {...props}
                                 key={index}
                />
            ))}
        </div>
    );
};

export default TestimonialCardContainer;
