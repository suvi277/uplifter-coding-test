import React from 'react';

interface Props {
    title: string;
}

const PageHeading: React.FC<Props> = ({ title }) => {
    return <h1 className="pt-4 text-center text-uppercase">{title}</h1>;
};
export default PageHeading;
