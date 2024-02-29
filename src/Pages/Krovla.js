// import React, {useEffect, useState} from 'react';
// import Upsite from "../Components/Upsite/Upsite";
// import Header from "../Components/Header/Header";
// import C1 from "../Components/Additional_Pager/vidi_mater/vidi_mater";
// import Price from "../Components/Additional_Pager/Price/Price";
// import G1 from "../Components/Additional_Pager/Galleries/Gallery1/G1";
// import G2 from "../Components/Additional_Pager/Galleries/Gallery2/G2";
// import First_section from '../Components/First_section/First_section';
// import Title from "../Components/Title/Title";
// import Vid_Krovli from "../Components/Additional_Pager/Vid_krovli/Vid_Krovli";
// const Krovla = () => {
//     const [GalleryData,setPriceData] = useState([]);
//     useEffect(()=>{
//         const fetchData = async()=>{
//             try{
//                 const response = await fetch('Examples.js');
//                 if(!response.ok){
//                     throw new Error('Ошибка при загрузке файла');
//                 }
//                 const jsonData = await response.json();
//                 const extractedData = jsonData[0].roof.map(type=>({
//                     g1: type.g1,
//                     g2: type.g2,
//                 }));
//                 setPriceData(extractedData);
//             }catch (error){
//                 console.error('ошибка при загрузке и обработке данных', error);
//             }
//         }
//         fetchData();
//     },[]);
//
//     return(
//         <div>
//             <Upsite/>
//             <Header/>
//             <First_section/>
//             <C1/>
//             <Vid_Krovli />
//             <Price/>
//             <Title title={"Примеры работ"}/>
//             <G1 data={GalleryData.g1}/>
//             <G2 data={GalleryData.g2}/>
//         </div>
//     )
// }
// export default Krovla;
/// Компонент Krovla
import React, { useEffect, useState } from 'react';
import Upsite from "../Components/Upsite/Upsite";
import Header from "../Components/Header/Header";
import C1 from "../Components/Additional_Pager/vidi_mater/vidi_mater";
import Price from "../Components/Additional_Pager/Price/Price";
import G1 from "../Components/Additional_Pager/Galleries/Gallery1/G1";
import G2 from "../Components/Additional_Pager/Galleries/Gallery2/G2";
import First_section from '../Components/First_section/First_section';
import Title from "../Components/Title/Title";
import Vid_Krovli from "../Components/Additional_Pager/Vid_krovli/Vid_Krovli";
import data2 from "./data/DataForG2krov";
import data1 from "./data/Examples";
// import data from "./data/ex.json";
const Krovla = () => {
    // const [GalleryData, setGalleryData] = useState([]);
    //
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('Examples.json');
    //             if (!response.ok) {
    //                 throw new Error('Ошибка при загрузке файла');
    //             }
    //             const jsonData = await response.json();
    //             setGalleryData(jsonData[0]);
    //         } catch (error) {
    //             console.error('ошибка при загрузке и обработке данных', error);
    //         }
    //     };
    //
    //     fetchData();
    // }, []);

    return (
        <div>
            <Upsite />
            <Header />
            <First_section />
            <C1 />
            <Vid_Krovli />
            <Price />
            <Title title={"Примеры работ"} />
            {/* Передача массива g1 в компонент G1 */}
            <G1 data={data1} />
            <G2 data={data2} />
        </div>
    );
};

export default Krovla;
