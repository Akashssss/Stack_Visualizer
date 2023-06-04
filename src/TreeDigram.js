import React, { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';



export function MyTreeComponent({dataArray}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(dataArray)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(currentIndex => (currentIndex + 1) % dataArray.length);
        }, 4000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className=' h-[600px] w-full'>
            <Tree data={dataArray[currentIndex]} 
            orientation='vertical' />
        </div>
    );
}
