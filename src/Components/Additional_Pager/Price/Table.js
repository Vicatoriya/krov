import React from "react";
import './Price.css';

const DataTable=({ data })=> {
    // const separatorIndex = 4;
    return (
        <table>
            <thead>
            <tr>
                <th>Вид работ</th>
                <th>Цена</th>
                <th>Единицы измерения</th>
            </tr>
            </thead>
            <tbody>
            {data.map((price, index) => (
                <tr key={index}>
                    <td>{price.name}</td>
                    <td>{price.cost}</td>
                    <td>{price.metrics}</td>
                </tr>
                ))}
            </tbody>
            {/*<tr>*/}
            {/*    <td className={'exception'}colSpan="3">Дополнительные работы</td>*/}
            {/*</tr>*/}
            {/*<tbody>*/}
            {/*{data.slice(separatorIndex).map((row, index) => (*/}
            {/*    <tr key={index}>*/}
            {/*        <td>{row[0]}</td>*/}
            {/*        <td>{row[1]}</td>*/}
            {/*        <td>{row[2]}</td>*/}
            {/*    </tr>*/}
            {/*))}*/}
            {/*</tbody>*/}
        </table>
    );
}
export default DataTable;