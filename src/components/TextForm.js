import React,{useState} from 'react'



export default function TextForm(props) {
    
    const handleUpperClick= () =>
    {
        //console.log("Upper Case was clicked"+ text);
       // setText("You have clicked on handleUpperClick")
       let newText=text.toUpperCase();
       setText(newText)
       props.showAlert('Coverted to UpperCase','success');
    }
    const handleLowerClick= () =>
    {
        //console.log("Upper Case was clicked"+ text);
       // setText("You have clicked on handleUpperClick")
       let newText=text.toLowerCase();
       setText(newText)
       props.showAlert('Coverted to LowerCase', 'success');
    }
    const handleonChange=(event) =>
    {
       // console.log("on change");
        setText(event.target.value)
    }

    const handleclearClick=() =>
    {
       let newText='';
       setText(newText)
       props.showAlert('Text is Cleared','success');
   }


const handlecopy=() =>
{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert('Copied to Clipboard','success');

}

const handleextraspaces=() =>
{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert('ExtraSpaces are removed','success');
}


    const [text, setText] = useState('Enter text here');
  return (
    <>
<div style={{color:props.mode==='light'?'black':'#042743'}}>
<h1 style={{color:props.mode==='dark'?'white':'black'}}><strong>{props.heading}</strong></h1>
<div className="mb-3">
<textarea className="form-control" id="myBox" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} rows="8"></textarea>
</div>

<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleUpperClick}>Convert ot UpperCase</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleLowerClick}>Convert ot LowerCase</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleclearClick}>Clear Text</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handlecopy}>Copy Text</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleextraspaces}>Remove Extra spaces</button>
</div>

<div className="container" style={{color:props.mode==='light'?'grey':'white'}} >
<h1 style={{color:props.mode==='dark'?'white':'black'}}>Text Summary</h1>
<p>{text.split(/\s+/).filter((element)=>
{
return element.length!==0
}).length}words and {text.length} characters</p>
<p>{0.008 * text.split(" ").filter((element)=>
{
return element.length!==0
}).length} minutes read</p>
<h2 style={{color:props.mode==='dark'?'white':'black'}}>Preview</h2>
<p>{text.length>0?text:"Nothing to preview  "}</p>

</div>
</>
)
}
