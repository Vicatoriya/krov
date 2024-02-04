import React from 'react';
import ReactDOM from 'react-dom/client';
import MyImage from '../../pics/a.jpg';
import "./First_section.css";

export default function First_section(){
    return(<section className='first_section'>
    <img className='photo' src={MyImage}></img>
    <div>
        <h1 className='text'>КРОВЕЛЬНЫЕ РАБОТЫ</h1>
        <h3 className='text'>Кровельные работы - обязательный вид работ при строительстве, капитальном ремонте, реконструкции здания.</h3>
        <h3 className='text'>Они придусматривают устройство крыши с покрытмем из листовых, штучных, рулонных, мастичных материалов.</h3>
    </div>
</section>)
}