import React from 'react';
import CanvasJSReact from '../canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export const Board = () => {

    const options = {
        title: {
            text: "Basic Column Chart in React"
        },
        dataPointWidth: 10,
        axisX:{
            labelFontSize: 15,
        },
        legend: {
            horizontalAlign: "left", // "center" , "right"
            verticalAlign: "bottom",  // "top" , "bottom"
            fontSize: 15
        },
        data: [
            {
                type: "column",
                color:"#ee6942",
                showInLegend: true,
                legendText: "최고기록",
                indexLabelFontSize: 10,
                indexLabelPlacement: "outside",
                indexLabelOrientation: "horizontal",
                dataPoints: [
                    {label:"Names & Faces",y:368,indexLabel:"368"},
                    {label:"Binary Numbers",y:1500,indexLabel:"1500"},
                    {label:"Long Numbers",y:463,indexLabel:"463"},
                    {label:"Abstract Images",y:670,indexLabel:"670"},
                    {label:"Random Images",y:930,indexLabel:"930"},
                    {label:"Speed Numbers",y:505,indexLabel:"505"},
                    {label:"Historic Dates",y:359,indexLabel:"359"},
                    {label:"Long Cards",y:640,indexLabel:"640"},
                    {label:"Random Words",y:1120,indexLabel:"1120"},
                    {label:"Spoken Numbers",y:473,indexLabel:"473"},
                    {label:"Speed Cards",y:442,indexLabel:"442"},
                ]
            },
            {
                type: "column",
                color:"#5f52a2",
                showInLegend: true,
                legendText: "한국기록",
                indexLabelFontSize: 10,
                indexLabelPlacement: "outside",
                indexLabelOrientation: "horizontal",
                dataPoints: [
                    {label:"Names & Faces",y:368,indexLabel:"368"},
                    {label:"Binary Numbers",y:1500,indexLabel:"1500"},
                    {label:"Long Numbers",y:463,indexLabel:"463"},
                    {label:"Abstract Images",y:670,indexLabel:"670"},
                    {label:"Random Images",y:930,indexLabel:"930"},
                    {label:"Speed Numbers",y:505,indexLabel:"505"},
                    {label:"Historic Dates",y:359,indexLabel:"359"},
                    {label:"Long Cards",y:640,indexLabel:"640"},
                    {label:"Random Words",y:1120,indexLabel:"1120"},
                    {label:"Spoken Numbers",y:473,indexLabel:"473"},
                    {label:"Speed Cards",y:442,indexLabel:"442"},
                ]
            },
            {
                type: "column",
                color:"#00a1e9",
                showInLegend: true,
                legendText: "나의기록",
                indexLabelFontSize: 10,
                indexLabelPlacement: "outside",
                indexLabelOrientation: "horizontal",
                dataPoints: [
                    {label:"Names & Faces",y:0,indexLabel:"0"},
                    {label:"Binary Numbers",y:1,indexLabel:"1"},
                    {label:"Long Numbers",y:0,indexLabel:"0"},
                    {label:"Abstract Images",y:0,indexLabel:"0"},
                    {label:"Random Images",y:11,indexLabel:"11"},
                    {label:"Speed Numbers",y:0,indexLabel:"0"},
                    {label:"Historic Dates",y:0,indexLabel:"0"},
                    {label:"Long Cards",y:0,indexLabel:"0"},
                    {label:"Random Words",y:0,indexLabel:"0"},
                    {label:"Spoken Numbers",y:0,indexLabel:"0"},
                    {label:"Speed Cards",y:42,indexLabel:"42"},
                ]
            }
        ]
    };

    const cube = [[[1,2,3],[4,5,6],[7,8,9]],[[10,11,12],[13,14,15],[16,17,18]],[[19,20,21],[22,23,24],[25,26,27]]];
    const shuffleAlgorithm = (cube) => {
        //27번 -> 섞기 -> 0번째 index부터 차례로 넣는다.
        const array = [];
        cube.map((x) => {
            x.map((y) => {
                y.map((z) => {
                    array.push(z);
                })
            })
        });
        array.sort(() => 0.5 - Math.random());
        cube.map((x, index_x) => {
            x.map((y, index_y) => {
                y.map((z, index_z) => {
                    // console.log(index_x * x.length * y.length + index_y * y.length + index_z);
                    cube[index_x][index_y][index_z] = array[index_x * x.length * y.length + index_y * y.length + index_z];
                })
            })
        });
        console.log(cube);
    };
    shuffleAlgorithm(cube);
    // 예상 return 값 : [[[11,4,23],[1,15,26],[9,10,12]],[[14,....]]


    return (
        <div>
            <CanvasJSChart options = {options} />
        </div>
    );
};
