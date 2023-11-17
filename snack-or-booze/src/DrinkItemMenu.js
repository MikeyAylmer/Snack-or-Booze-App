// MenuItem.js
import React from 'react';
import { useParams } from 'react-router-dom';

const MenuItem = ({ items, itemType }) => {
    const { id } = useParams();
    const item = items.find((item) => item.id === parseInt(id, 10));

    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div>
            <h2>{`${itemType} Details`}</h2>
            <p>Name: {item.name}</p>
            <p>Description: {item.description}</p>
        </div>
    );
};

export default MenuItem;

