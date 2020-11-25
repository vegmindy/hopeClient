import {useState} from 'react';
import './Favorites.css';
import FavoriteItem from './FavoriteItem';

const Favorites = (props) => {

    const showToken = () => {
        console.log(props.token)
    }

    const [dbFavorites, setDbFavorites] = useState([
        {
            id: 1,
            name: "Test Game 1",
            owner_id: 1
        },
        {
            id: 2,
            name: "Test Game 2",
            owner_id: 1
        },
        {
            id: 3,
            name: "Test Game 3",
            owner_id: 1
        },
        {
            id: 4,
            name: "Test Game 4",
            owner_id: 1
        },
    ]);

    const removeItem = (id) => {
        let tmpArray = dbFavorites;

        let elementPos = tmpArray.map(
            function (x) {
                return x.id;
            }
        ).indexOf(id);

        if (elementPos > -1) {
            tmpArray.splice(elementPos, 1);
            setDbFavorites(tmpArray);
        }
        console.log(dbFavorites)
    }

    return (
        <div>{showToken()}
            <FavoriteItem items={dbFavorites} removeItem={removeItem} />
        </div>
    );

};

export default Favorites;