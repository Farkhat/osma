import React from 'react'
import './index.css'
import * as ReactRedux from "react-redux";

export const Partners = () => {
    const strings = ReactRedux.useSelector((state) => state.strings);
    const lang = ReactRedux.useSelector((state) => state.lang);

    return (
        <div id="partners">
            <div className="container-fluid">
                <div className="row">
                    <div className="col about-us-area">
                        <div className="container">
                            <div className="partners_title"><h1>{strings[lang]["partners_title"]}</h1> 
                        </div>
                    </div>
                   
                </div>
            </div> 
            </div>
        <div className="partners_img" /></div>
    );

}
