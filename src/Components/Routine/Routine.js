import React from 'react';
import Swal from 'sweetalert2';

const Routine = ({ routine, selected, setSelected }) => {
    const handleSelection = (id) => {
        const isExist = selected.find(routine => routine?.id === id);
        if (isExist) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Already Selected!',

            })
        }
        else {
            setSelected([...selected, routine])
        }
    }

    const { name, time, description, img } = routine;
    return (
        <div>
            <div className="routine">
                <img className="routine-image" height="200" width="100%" src={img} alt="" />
                <h3 className="sub">Sub:{name}</h3>
                <p className="">{description}</p>
                <p className="">Study-Time: {time}min</p>
                <button onClick={() => {
                    handleSelection(routine.id)
                }} className="activity-btn">Add to list</button>
            </div>
        </div>
    );
};

export default Routine;