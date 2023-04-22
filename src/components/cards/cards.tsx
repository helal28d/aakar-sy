import styles from './cards.module.scss';
import classNames from 'classnames';
import { Card } from '../card/card';

export interface CardsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cardss-and-templates
 */
export const Cards = ({ className }: CardsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Card
                movie={{
                    id: '12',
                    overview: 'sdsdffffffffffffffffffffffffffffffffffffffff',
                    relase_date: '2000',
                    title: 'MR Robot',
                    vote_average: 5,
                    poster_path: '../public/img/poster.jpg',
                }}
            />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
};
