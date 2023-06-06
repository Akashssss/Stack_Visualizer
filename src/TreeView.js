import React, { useState } from 'react';
import Tree from 'react-d3-tree';

const MindmapComponent = ({ data }) => {
//  console.log( data)
    const [tooltip, setTooltip] = useState(null);

    const nodeClickHandler = (nodeData) => {
        if( tooltip)
            setTooltip(null);
        else    
        setTooltip(nodeData.arguments);
    };

   

    const renderCustomNodeElement = ({
        nodeDatum,

    }) => { 
        const { name } = nodeDatum;
        // console.log(nodeDatum.arguments)
        const isLeafNode = !nodeDatum.children || nodeDatum.children.length === 0;
        const circleRadius = isLeafNode ? 8 : 12;
        const circleFill = isLeafNode ? 'white' : nodeColor;
        const textYOffset = isLeafNode ? 20 : 30;

        return (
            <g>
                <circle
                    r={circleRadius}
                    fill={circleFill}
                    onClick={() => nodeClickHandler(nodeDatum)}
                   
                />
                <text dy={textYOffset} fontSize={20} fontWeight={5} textAnchor={'middle'}>
                    {name}
                </text>
                {tooltip && (
                    <foreignObject
                        x={25}
                        y={circleRadius -50}
                        width={90}
                        height={300}
                        style={{cursor :"default" }}
                    >
                        <div className="rounded-md max-h-14 bg-slate-600 text-slate-200 overflow-x-scroll ">
                            {nodeDatum.arguments}
                        </div>
                    </foreignObject>
                )}
            </g>
        );
    };
    const [nodeColor, setNodeColor] = useState('#F87171');

    const colorPalette = ['#F87171', '#FCD34D', '#6EE7B7', '#60A5FA', '#C084FC', '#F59E0B', '#10B981'];


    return (
        <div className='h-[35rem] '>
            <div className="flex justify-center py-2">
                {colorPalette.map((color, index) => (
                    <div
                        key={index}
                        className={`w-4 h-4 rounded-full m-1 cursor-pointer ${color === nodeColor ? 'border-2 border-white' : ''}`}
                        style={{ backgroundColor: color }}
                        onClick={() => setNodeColor(color)}
                    ></div>
                ))}
            </div>
        <div className=" h-full ">
           
            <div className="h-full w-full border border-slate-200 bg-orange-50 bg-opacity-5 shadow-inner rounded">
                <Tree
                    data={data}
                    orientation="vertical"
                    translate={{ x: window.innerWidth/2.5, y: 100 }}
                    renderCustomNodeElement={renderCustomNodeElement}
                        
                />
            </div>
            </div></div>
    );
};

export default MindmapComponent;
