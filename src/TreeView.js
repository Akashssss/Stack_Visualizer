import React, { useState } from 'react';
import Tree from 'react-d3-tree';

const MindmapComponent = ({ data }) => {
    const [tooltip, setTooltip] = useState(null);

    const nodeClickHandler = (nodeData) => {
        if( tooltip)
            setTooltip(null);
        else    
            setTooltip(nodeData.arguments);
    };

    const nodeMouseOutHandler = () => {
        
    };

    const renderCustomNodeElement = ({
        nodeDatum,
        toggleNode,
        pathProps,
    }) => {
        const { name } = nodeDatum;

        const isLeafNode = !nodeDatum.children || nodeDatum.children.length === 0;
        const circleRadius = isLeafNode ? 8 : 12;
        const circleFill = isLeafNode ? 'white' : 'lightgrey';
        const textYOffset = isLeafNode ? 20 : 30;

        return (
            <g>
                <circle
                    r={circleRadius}
                    fill={circleFill}
                    onClick={() => nodeClickHandler(nodeDatum)}
                   
                />
                <text dy={textYOffset} fontSize={12} textAnchor={'middle'}>
                    {name}
                </text>
                {tooltip && (
                    <foreignObject
                        x={20}
                        y={circleRadius + 5}
                        width={100}
                        height={30}
                        style={{ pointerEvents: 'none' }}
                    >
                        <div className="tooltip">
                            {nodeDatum.arguments}
                        </div>
                    </foreignObject>
                )}
            </g>
        );
    };

    return (
        <div className="border h-screen m-20">
            <div className="h-full w-full">
                <Tree
                    data={data}
                    orientation="vertical"
                    translate={{ x: 50, y: 50 }}
                    renderCustomNodeElement={renderCustomNodeElement}
                />
            </div>
        </div>
    );
};

export default MindmapComponent;
