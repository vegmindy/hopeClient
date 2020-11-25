import {useState} from 'react';
import './Favorites.css';

const FavoriteItem = (props) => {

    return (
        <div>
            {
                props.items.map(function (item) {
                    return <div>{item.name} <button onClick={() => {props.removeItem(item.id)}}>X</button></div>
                })
            }
        </div>
    );

};

export default FavoriteItem;