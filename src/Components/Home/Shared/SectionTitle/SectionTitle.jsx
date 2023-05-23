import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    

    return (
        <section>
         <p>{subHeading}</p>
         <h1>{heading}</h1>
        </section>
    );
};

export default SectionTitle;