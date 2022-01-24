import React,{useState} from 'react';

export default function TextForm(props)
  
 {
    const[text,setText]=useState("");
    const handelUpclick=()=>{
    //  console.log("click on handelUpclick");
     let newtext=text.toUpperCase();
     setText(newtext);
    }



    const handelLoclick=()=>{
        //  console.log("click on handelUpclick");
         let newtext=text.toLowerCase();
         setText(newtext);
        }
        const handelClearclick=()=>{
            //  console.log("click on handelUpclick");
             let newtext='';
             setText(newtext);
            }
    const handelCopy=()=>{
      var text=document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);

    }

    const handelExtraSpace=()=>{
      let newtext=text.split(/[ ]+/)
      setText(newtext.join(" "));
    }


    const  handelonChange=(event)=>{
    //  console.log("click on handelonChange");
     setText(event.target.value);
    }

   
  return(
    <>
      <div>
        <div className="container" style={{color:props.mode==='dark'?'white':'#0c3b64'}}>
          <h1>{props.heading}</h1>
            <div className="mb-3"   >
            <textarea  className="form-control" value={text} onChange={handelonChange} style={{background:props.mode==='dark'?'gray':'white'}} id="myBox" rows="10"></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-2" onClick={handelUpclick}>Convert to Uppercase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handelLoclick}>Convert to Lowercase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handelClearclick}>Clear</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handelCopy}>CopyText</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handelExtraSpace}>Remove Space</button>
            </div>
            </div>
            <div className="containr1 my-4" style={{color:props.mode==='dark'?'white':'#0c3b64'}}>
            <h3>Your text summary</h3>
            <p>{text.split(" ").length}Word And {text.length} Character </p>
            <p>{0.08*text.split(" ").length} Minutes to read</p>
            <h4>preview</h4>
            <p>{text}</p>
            </div>
    
    </>
  ); 
}
