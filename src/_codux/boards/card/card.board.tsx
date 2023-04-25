import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => (
        <Card
            movie={{
                poster_path: '../public/img/poster.jpg',
                vote_average: 3,
                title: 'lord',
                relase_date: '2000',
                overview: 'sdfghjklpoiuytrewq',
                id: 55,
            }}
        />
    ),
});
