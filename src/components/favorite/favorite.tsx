import styles from './favorite.module.scss';
import classNames from 'classnames';
import { FavCard } from '../fav-card/fav-card';
import {useContext} from 'react';
import {FavoriteContext} from '../../context/FavoriteContext'
export interface FavoriteProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-favorites-and-templates
 */
export const Favorite = ({ className }: FavoriteProps) => {
    const {state}=useContext(FavoriteContext);
    return (
        <div className={classNames(styles.root, className)}>
            <h1>
                Favorites
                {state.favorites.length >0 && state.favorites.map((movie)=><FavCard movie={movie} key={movie.id}/>)}
            </h1>
        </div>
    );
};
