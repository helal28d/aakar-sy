import { createBoard } from '@wixc3/react-board';
import { FavCard } from '../../../components/fav-card/fav-card';

export default createBoard({
    name: 'FavCard',
    Board: () => (
        <FavCard
            movie={{
                id: '12',
                overview: 'ghjkk',
                relase_date: '2000',
                title: 'wert',
                vote_average: 5,
                poster_path: '../public/img/poster.jpg',
            }}
        />
    ),
});
