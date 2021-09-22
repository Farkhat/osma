import React from 'react';
import * as ReactRedux from "react-redux";

import "./index.css";

export const Partners = () => {
    const strings = ReactRedux.useSelector((state) => state.strings);
    const lang = ReactRedux.useSelector((state) => state.lang);

    return (
        <div id="partners" className="container">
            <h1 className="title">{strings[lang]["partners_title"]}</h1>
            <div className="row row-cols-4 justify-content-around">
                <div className="col activities img-1"> 
                <h2>Fortylines</h2>                
                </div>
                <div className="col activities img-2">                 
                </div> 
                <div className="col activities img-3">                 
                </div> 
                <div className="col activities img-4">                 
                </div>
            </div>
        </div>
    );

}
