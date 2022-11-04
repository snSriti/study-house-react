import React, { useEffect, useState } from 'react';
import Routine from '../Routine/Routine';

const Routines = ({ selected, setSelected }) => {
    const [routines, setRoutines] = useState([]);

    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setRoutines(data))
    }, [])
    return (
        <div className='routines' >
            <h3 className='study-title'>Select-Todays-Routine</h3>
            <div className="study-container container">

                {
                    routines.map(routine => <Routine
                        key={routine.id}
                        routine={routine}
                        selected={selected}
                        setSelected={setSelected}
                    ></Routine>)
                }

            </div>
        </div >
    );
};
export default Routines;