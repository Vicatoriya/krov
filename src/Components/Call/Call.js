import React,{useRef, useState,useEffect} from "react";
import "../../index.css";
import "./Call.css"
import emailjs from "@emailjs/browser"
import validator from 'validator'; 

export default function Call(){
    const [phone,setPhone]=useState('');
    const [phoneDirty,setPhoneDirty]=useState(false);
    const [incorrectPhone,setIncorrectPhone]=useState("Некорректный номер телефона");
    const [formValid,setFormValid]=useState(false);
    const [clicked,setClicked]=useState(false);
 
    const phoneHandler=(e)=>{
        setPhone(e.target.value);
        if(!(validator.isMobilePhone(e.target.value, ['be-BY']) || (validator.contains(e.target.value,"80") && validator.isLength(e.target.value,11,11))))
            setIncorrectPhone("Некорректный номер телефона");
        else{
            setIncorrectPhone("");
        }
    }
    const clickHadler=(e)=>{
        setPhone("");
        setClicked(true);
        emailjs.sendForm('service_xx4kczk', 'template_15sloo1', form.current,{publicKey:"VB9TxeuvGsQJ2WSTh"});
    }
    const sendEmail = (e) => {
        e.preventDefault();
        // emailjs
        //   .sendForm('service_bcbbiwk', 'template_knb9jcj', form.current, {
        //     publicKey: 'IgseQxdVOTCsugiKI',});
    }
    const blurHandler=(e)=>{
        setPhoneDirty(true);
    }
    useEffect(()=>{
        if(incorrectPhone){
            setFormValid(false);
        } else{
            setFormValid(true);
        }
    },[incorrectPhone])

    const form = useRef();
    return(
        <form id="call" ref={form} onSubmit={sendEmail} className="call_sec">
            <p className="call">Заказать звонок специалиста</p>
            <input onChange={e=>phoneHandler(e)} value={phone} onBlur={e=>blurHandler(e)} type="text" name="phone" className="input"></input>
            {(phoneDirty && incorrectPhone) && <div style={{color:'red'}}>{incorrectPhone}</div>}
            <button onClick={e=>clickHadler(e)} disabled={!formValid} className="call_button" type="submit">Отправить запрос</button> 
            {clicked && <div style={{position:"relative",bottom:"10%",color:"white"}}>Данные успешно отправлены!</div>}
        </form>
    )
}