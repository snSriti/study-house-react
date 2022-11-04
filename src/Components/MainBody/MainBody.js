import React, { useEffect, useState } from 'react';
import { FaLocationArrow } from "react-icons/fa";
import Swal from 'sweetalert2';
import FAQ from '../FAQ/FAQ';
import Header from '../Header/Header';
import Routines from '../Routines/Routines';


const MainBody = () => {

    const [selected, setSelected] = useState([]);
    const [totalTime, setTotalTime] = useState(0);
    const [breakTime, setBreakTime] = useState(0);

    useEffect(() => {
        let total = 0;
        selected.map(s => {
            total += s.time;
        })
        setTotalTime(total)
    }, [selected])
    useEffect(() => {
        localStorage.setItem("breakTime", `${breakTime}`)
    }, [breakTime])

    return (
        <div>
            <div className="container main">
                <div>
                    <div className="body-lf">
                        <Header></Header>
                        <Routines selected={selected} setSelected={setSelected}></Routines>
                        <FAQ></FAQ>
                    </div>
                </div>
                <div className="body-rt">
                    <div className="my-info-fl">
                        <img className='my-logo' src="https://i.ibb.co/DMX22JC/myImg.png" alt="" />
                        <div className="name-fl">
                            <h3>Sadikun Naher Sriti</h3>
                            <FaLocationArrow className='icon-color' /><a className='address' href="#">Gazipur-1700, Dhaka</a>
                        </div>
                    </div>
                    {/* h-w-a */}
                    <div className="h-w-a-fl">
                        <div className='h-w-a'>
                            <h2>75kg</h2>
                            <span>Weight</span>
                        </div>
                        <div className='h-w-a'>
                            <h2>5.3</h2>
                            <span>Height</span>
                        </div>
                        <div className='h-w-a'>
                            <h2>17Y</h2>
                            <span>Age</span>
                        </div>
                    </div>
                    {/* add a break  */}
                    <h3 className='add-title'>Add A Break </h3>
                    <div className="h-w-a-fl">
                        <div>
                            <h2 onClick={() => setBreakTime(10)} className='add-title2'>10min</h2>
                        </div>
                        <div>
                            <h2 onClick={() => setBreakTime(20)} className='add-title2'>20min</h2>
                        </div>
                        <div>
                            <h2 onClick={() => setBreakTime(30)} className='add-title2'>30min</h2>
                        </div>
                        <div>
                            <h2 onClick={() => setBreakTime(40)} className='add-title2'>40min</h2>
                        </div>
                    </div>
                    {/* Study-details  */}
                    <h3 className='add-title'>Study  Details</h3>
                    <div className="study-detail">
                        <div className='study-details-fl'>
                            <span>Study Time</span>
                            <p>{totalTime}min</p>
                        </div>
                        <div className='study-details-fl'>
                            <span>Break Time</span>
                            <p>{breakTime}min</p>
                        </div>

                    </div>
                    <div onClick={() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Activity Complete',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }} className='activity'><button className="activity-btn">Activity Complete</button></div>
                </div>



            </div>

        </div>
    );
};

export default MainBody;