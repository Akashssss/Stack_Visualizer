import './App.css';
import { Tree } from './Tree';
import { useState } from 'react';
import MindmapComponent from './TreeView';
import { functionRunner } from './temp.mjs';
import MyTreeComponent from './TreeDiagram';


const tree= new Tree("main");
tree.arguments = Array.from(["  hidden "]);
function App() {

  document.body.classList.add('light-mode')

  const [funDef, setFunDef] = useState([]);
  const [funCall, setfunCall] = useState([]);



  const functionRun = (code , call ) => {
    try { 
    var temperory_tree = tree;
    var obj = functionRunner( code , call ) ; 
   

    console.log(obj)


     for (let i = 0 ; i<obj.utilityFunctions.length ;i++ )
      {
       var para = obj.utilityFunctions[i].declaration.substring(0, obj.utilityFunctions[i].declaration.indexOf('(')).trim() ; 
       window[para] = eval(`( function ` + obj.utilityFunctions[i].declaration + ' {' + obj.utilityFunctions[i].code + '})');
      }
   


  let utilityFunctions = obj.utilityFunctions ; 
  // console.log( utilityFunctions)



// console.log( userFunction) ;
// console.log(call)
   console.log("() function " + obj.userFunction[0].declaration + ' {' + obj.userFunction[0].code + '} ') ; 
    if(obj.userFunction[0])
    {
     const a =  eval("( function " + obj.userFunction[0].declaration + ' {' + obj.userFunction[0].code + '} )');
    console.log(a)
      eval("a" + call.substring(call.indexOf("(")))
    }


    
      

    tree.getJsonDat(tree, tree.dat, tree.treeHistory) ; 
    setSubmitted(true);
    } catch {
      setSubmitted(false);
      alert("An error has occurred! Please check the syntax of your code or calls exceeded the data limit.")
    }
  };

  const [submitted, setSubmitted] = useState(false);




  const [nightMode, setNightMode] = useState(false);


  return (
    <div className="App flex flex-col items-center justify-center rounded   m-6">
     
      <form className='md:w-[80%] w-[90%] flex flex-col items-center justify-evenly  '
        action="" onSubmit={(e) => {
          e.preventDefault(); functionRun(funDef, funCall); 
}}>
        <div className='w-full my-6 px-'>
          <label className="ml-2  text-green-600 items-center flex  text-center font-semibold text-lg" htmlFor="functionName">Function Name : </label>
          <textarea
            value={funCall}
            onChange={(e) => { setfunCall(e.target.value) }}
            type="text"
            placeholder='functionName(parameter1 , parameter2 ,....)'
            name = "funName"
            className='w-full  min-h-[3rem] border rounded py-2 px-6 text-yellow-200 shadow-md m-1 bg-slate-800'/>
        </div>

       

        <div className='w-full my-6 '>
          <label className="ml-2 text-pink-500 font-semibold text-lg items-center flex  text-center" htmlFor="functionName">Function Definition : </label>
          <textarea
            placeholder={`function functionName( arg1 , arg2 ,...)
            {function def ...}`}
            value={funDef}
            onChange={(e) => { setFunDef(e.target.value) }}
            name="userFunction"
            cols="50" rows="10"
            className='border  p-6 w-full rounded min-h-[400px] m-1 bg-slate-800 text-violet-200'  >
          </textarea>
       </div>
        <button
          type='submit'
          className='w-[60%] md:w-[20%] md:self-end  block border p-2 bg-purple-500 text-white font-bold rounded-md hover:bg-purple-950 shadow-xl shadow-slate-300'> Submit 
        </button>
      </form>
      
      {submitted && <div className=' md:mt-36 sm:mt-18 mt-8  md:w-[90%] sm:w-[95%] w-[100%]'>            <label htmlFor="" className='ml-2 mt-4 text-blue-500 font-semibold text-xl items-center flex  text-center'> Tree :</label>
<MindmapComponent data={tree.dat} /></div>}
      {submitted && <div className='md:mt-36 sm:mt-18 mt-8 md:w-[90%] sm:w-[95%] w-[100%]'>            <label htmlFor="" className='ml-2 mt-6 text-blue-500 font-semibold text-xl items-center flex  text-center'> Visualizer :</label>
<MyTreeComponent dataArray={tree.treeHistory} /></div>}
    </div>
  );
}

export default App;
