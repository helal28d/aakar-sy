import styles from './cards.module.scss';
import classNames from 'classnames';
import { Card } from '../card/card';
import {useState,useEffect} from'react'
export interface CardsProps {
    className?: string;
     
}
export interface Movie {
        id: number;
        poster_path?: string;
        title: string;
        overview: string;
        vote_average: number;
        relase_date: string;
    };
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cardss-and-templates
 */
export const Cards = ({ className }: CardsProps) => {
    const[movies,setMovies]=useState<Movie[]>([]);
    useEffect(()=>{
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=93c7b789a0314f2fe982bfd7e755bff1')
    .then(response=>response.json())
    .then((data)=>setMovies(data.results))
    .catch((err)=>console.log(err))
    },[]);
    return (
        <div className={classNames(styles.root, className)}>
          {movies?.map((movie)=>(
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
    );
};
