import styles from './card.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';
import { FavoriteContext } from '../../context/FavoriteContext';
export interface CardProps {
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
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cards-and-templates
 */
export const Card = ({ className, movie }: CardProps) => {
    const { dispatch } = useContext(FavoriteContext);
    return (
        <div className={classNames(styles.root, className)}>
            <img
                alt=""
                className={styles.img}
                src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
            <div className={styles.detail}>
                <h1>{movie.title}</h1>
                <span>{movie.vote_average.toFixed(1)}</span>

                <p>{movie.overview.substring(0, 150)}</p>
                <button
                    onClick={() => dispatch({ type: 'ADD_MOVIE', payload: movie })}
                    className={styles.btn}
                >
                    +
                </button>
            </div>
        </div>
    );
};
