import './App.css';
import { Tree } from './Tree';
import { useState } from 'react';
import MindmapComponent from './TreeView';
import { functionRunner } from './temp.mjs';
const tree= new Tree("main");
tree.arguments = Array.from(["  hidden "]);

function App() {


  const [funDef, setFunDef] = useState([]);
  const [funCall, setfunCall] = useState([]);



  const functionRun = (code , call ) => {
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


    
      

     tree.getJsonDat(tree ,tree.dat) ; 
     console.log( tree.dat)
    setSubmitted(true);
  };
  const [submitted, setSubmitted] = useState(false);





























  return (
    <div className="App">
      <form action="" onSubmit={(e) => { e.preventDefault(); functionRun(funDef, funCall) }}>
        <div className='mt-10'>
          <label className="text-black font-bold " htmlFor="functionName">Function Name : </label>
          <textarea
            value={funCall}
            onChange={(e) => { setfunCall(e.target.value) }}
            type="text"
            name = "funName"
            className='w-[70%] border rounded-sm py-2 px-6  shadow-md bg-white'/>
        </div>

       

        <textarea
          value={funDef}
          onChange={(e) => { setFunDef(e.target.value) }}
          name="userFunction"
          cols="50" rows="10"
          className='border m-10 p-10'  >
        </textarea>

        <button
          type='submit'
          className='border p-2 bg-purple-500 text-white font-bold rounded-md hover:bg-purple-950 shadow-xl shadow-slate-300'> Submit 
        </button>
      
      </form>
   
      {submitted&&<MindmapComponent data = {tree.dat} />}

    </div>
  );
}

export default App;
