import styles from './fav-card.module.scss';
import classNames from 'classnames';
import {useContext} from 'react';
import {FavoriteContext} from '../../context/FavoriteContext'
export interface FavCardProps {
    className?: string;
    movie: {
        id: number;
        poster_path?: string;
        title: string;
        overview: string;
        vote_average: number;
        relase_date: string;
    };
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-fav-cards-and-templates
 */
export const FavCard = ({ className, movie }: FavCardProps) => {
    const {dispatch}=useContext(FavoriteContext);
    return (
        <div className={classNames(styles.root, className)}>
            <img src={movie.poster_path} className={styles.favImg} />
            <div className={styles.detail}>
                <h1 className={styles.title}>{movie.title}</h1>
                <span>{movie.vote_average}</span>
            </div>
            <div className={styles.del}onClick={()=>dispatch({type:'REMOVE_MOVIE',payload:movie})}>
                <img  src="../public/img/del.png" className={styles.delimg} />
            </div>
        </div>
    );
};
