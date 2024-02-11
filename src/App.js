import React from "react";
import "./index.css";
import Header from "./Components/Header/Header";
import Upsite from "./Components/Upsite/Upsite";
import Main_sec1 from "./Components/Main_sec1/Main_sec1";
import C1 from "./Components/Additional_Pager/vidi_mater";
import First_section from "./Components/First_section/First_section";
import Title from "./Components/Title/Title";
import Main_sec2 from "./Components/Main_sec2/Main_sec2";
import Call from "./Components/Call/Call";
import Price from "./Components/Price/Price"


export default function App(){
    return(
        <div>
            <Upsite></Upsite>
            <Header></Header>
            <Main_sec1></Main_sec1>
            <Title title="Калькулятор кровли"></Title>
            <Main_sec2></Main_sec2>
            <Title title="Виды работ"></Title>
            <Call></Call>
            {/* <First_section/>
            <C1/> */}
            {/* <Price/> */}
        </div>
    )
}