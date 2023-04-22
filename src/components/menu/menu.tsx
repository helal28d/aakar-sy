import styles from './menu.module.scss';
import classNames from 'classnames';

export interface MenuProps {
    className?: string;
}
const sortBy: string[] = ['pobularity', 'Most voted', 'Relase date'];
const genres: string[] = ['Action','Comedy','Romance'];
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-menus-and-templates
 */
export const Menu = ({ className }: MenuProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <img src="../public/img/logo.png" className={styles.logoimg} />
                <span className={styles.logoText}>AakarSy</span>
            </div>
            <span className={styles.title}>Sort By</span>
            <hr className={styles.hrt} />
            <ul className={styles.list}>
                {sortBy.map((item) => (
                    <li key={item} className={styles.listItem}>
                        {item}
                    </li>
                ))}
            </ul>
            <span className={styles.title}>Genre</span>
            <hr className={styles.hrt} />
            <ul className={styles.list}>
                {genres.map((item) => (
                    <li key={item} className={styles.listItem}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
