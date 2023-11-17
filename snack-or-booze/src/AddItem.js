// AddItemPage.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddItemPage = ({ addItem, itemType }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = { id: Date.now(), name, description };
        addItem(newItem);
        history.push(`/${itemType.toLowerCase()}`);
    };

    return (
        <div>
            <h2>Add {itemType}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Description:
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <br />
                <button type="submit">Add {itemType}</button>
            </form>
        </div>
    );
};

export default AddItemPage;
