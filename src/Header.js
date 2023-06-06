import React from 'react';
export default function Header() {
    return (
        <div className='flex flex-col'>
           
            
                <div className=" w-screen h-14 shadow-2xl fixed  stack-viz-box stack-viz-text  text-center inset-0 text-white text-4xl flex items-center justify-center bg-gradient-to-r from-slate-800 to-slate-950 ">
                    Stack-Viz</div>
                    <div className='flex flex-col md:flex-row mt-28 ml-4 mr-4 mb-4'>
                        <div className='flex-[0.5] ml-4'>
                    <h1 className='text-slate-950 font-bold text-5xl'>Stack-Viz :<br /><p className='mt-4 text-4xl'>Visualizing & Analysing Function Calls</p></h1>
                    <p className='text-xl text-justify mt-4 '>Stack-Viz is an interactive tool that allows you to visualize the execution flow of your code and understand the intricacies of function calls and recursion.</p>
                        <div className='mt-4 mb-2 font-bold text-slate-800'>Steps :
                        <ul className='ml-10 list-disc  text-slate-600 text-lg font-normal border border-slate-50 shadow-inner rounded'>
                            <li className='md:pb-3 pl-3'>Write your function definiton.</li>
                            <li className='md:p-3'>Write the function call with your parametes.</li>
                            <li className='md:p-3'>Summit the code.</li>
                            <li className='md:p-3'>Analyse and visualize the function calls.</li>
                            <li className='md:p-3'>"Click on any node to view the arguments, and click again to make them disappear."</li>
                        </ul></div>
                        </div>
                <div className='flex-[0.5]'><img   src={require("./head.png")} alt="" /></div>
                    </div>


        </div>
          
    );
}
