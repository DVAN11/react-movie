import React from 'react';
import Banner from './Banner/Banner';
import ListMovie from './ListMovie/ListMovie';

const Home = () => {
    const arrMove = [
        {
            id: 1,
            title: "ONLINE STREAMING",
            desc: "Now Playing Movie",
            api: `now_playing`,
        },
        {
            id: 2,
            title: "ONLINE STREAMING",
            desc: "Upcoming Movie",
            api: `upcoming`,
        },
        {
            id: 3,
            title: "ONLINE STREAMING",
            desc: "Top Rated Movie",
            api: `top_rated`,
        }
    ]
    return (
        <div>
            <Banner></Banner>
            {arrMove.map((item) => (
                <ListMovie key={item.id} title={item.title} desc={item.desc} api={item.api}></ListMovie>
            ))}
        </div>
    );
};

export default Home;