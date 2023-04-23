import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => <Card
            movie={{
                id: 123,
                overview:
                    'desc dzfhgjgmghk hxghjxfgjxfgjfchfhfh cghfghfh ghgfhfgh fhhdfhdhgjjjfghgjfgjfgj gjgjgjhjhjghjghjhggjhjghjghjgjfgfdghdfhjcj xchfhfhdfh',
                relase_date: '2000',
                title: 'Avatar',
                vote_average: 7,
                poster_path: '../public/img/poster.jpg',
            }} />,
});
