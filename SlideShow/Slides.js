import React, { useEffect, useState } from "react";

function Slides({ slides }) {
  const [indx, setIndx] = useState(0);
  useEffect(()=>{
    console.log(slides);
  },[])
  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined" onClick={()=> setIndx(0)} disabled={indx === 0 ? true : false}>
          Restart
        </button>
        <button data-testid="button-prev" className="small" onClick={()=> setIndx((prevIndx)=> prevIndx - 1)} disabled={indx === 0 ? true : false}>
          Prev
        </button>
        <button data-testid="button-next" className="small" onClick={()=> setIndx((prevIndx)=>prevIndx + 1)} disabled={indx === slides.length - 1 ? true : false}>
          Next
        </button>
      </div>
      {/* Slides */}

      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[indx].title}</h1>
        <p data-testid="text">{slides[indx].text}</p>
      </div>
    </div>
  );
}

export default Slides;
