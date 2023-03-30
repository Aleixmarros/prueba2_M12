import React from 'react';
import '../App.css';
import campo from '../img/campoMyTeam.png'

const MyTeam = () => {


    return (
        <article>
            <h2 className='h'>My Team</h2>

           
                <img src={{campo}} alt='campo' className="containerMyTeam"/>
                <div>

                <div className="elemento-1" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    jugador 1
                </div>
                <div className="elemento-2" style={{ position: 'absolute', top: '20%', left: '20%' }}>
                    jugador 2
                </div>
            </div>
        </article>


    );
};

export default MyTeam;
