import React, { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';
import MindmapComponent from './TreeView';
export default function MyTreeComponent({ dataArray ,colr}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);
    const [intervalTime, setIntervalTime] = useState(2000);

    useEffect(() => {
        let intervalId = null;
        if (isAnimating) {
            intervalId = setInterval(() => {
                setCurrentIndex((currentIndex) => (currentIndex + 1) % dataArray.length);
            }, intervalTime);
        }

        return () => clearInterval(intervalId);
    }, [isAnimating, intervalTime]);

    const handleStartStopAnimation = () => {
        setIsAnimating((prevIsAnimating) => !prevIsAnimating);
    };

    const handleManualIndexIncrease = () => {
        setCurrentIndex((currentIndex) => (currentIndex + 1) % dataArray.length);
    };

    const handleResetIndex = () => {
        setCurrentIndex(0);
    };

    const handleIntervalChange = (event) => {
        const newInterval = Number(event.target.value);
        setIntervalTime(newInterval);
    };

    return (
      

            <div className="  flex flex-col  h-[35rem] ">
                <div className=" shadow-md rounded-t-md bg-slate-200 flex m-1 justify-end mt-2 space-x-4 controller flex-col sm:flex-row">
                    <div className=" flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                        <label htmlFor="interval-range">Interval Time (ms):</label>
                        <input
                            type="range"
                            id="interval-range"
                            min="500"
                            max="4000"
                            step="100"
                            value={intervalTime}
                            onChange={handleIntervalChange}
                        />
                        <span>{intervalTime} ms</span>
                    </div>
                    <div className="flex space-x-2 mt-2 sm:mt-0 mb-2 p-2">
                        <button
                            className="bg-orange-600 hover:bg-orange-800 text-white py-2 px-3 rounded-md"
                            onClick={handleStartStopAnimation}
                        >
                            {isAnimating ? 'Stop Animation' : 'Start Animation'}
                        </button>
                        <button
                            className="bg-teal-500 hover:bg-teal-700 text-white py-2 px-3 rounded-md"
                            onClick={handleManualIndexIncrease}
                        >
                            Next
                        </button>
                        <button
                        className="bg-teal-500  hover:bg-teal-700 text-white py-2 px-3 rounded-md"
                            onClick={handleResetIndex}
                        >
                            Reset
                        </button>
                    </div>
                </div>
                <MindmapComponent
                    translate={{ x: window.innerWidth / 2.5, y: 100 }}
                    data={dataArray[currentIndex]}
                    orientation="vertical"
                    colr= {colr}
                />
            </div>
           
      
    );
}
