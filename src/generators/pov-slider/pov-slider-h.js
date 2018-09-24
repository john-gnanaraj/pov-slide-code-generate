import React, { Component } from 'react';
import './pov-slider.css';
// import pov1 from './img/pov1.jpg';
import overlayLogo from './img/overlayLogo.jpg';
// import rgtArrow from './img/pov-rgt-arrow.png';

// import {
//   Link
// } from 'react-router-dom';

class povSlider extends Component {

    // var encoded = Encoder.htmlEncode(document.getElementById('input'));
   
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.addValue = this.addValue.bind(this);
      this.updateInput = this.updateInput.bind(this);
      this.harish = this.addValue.bind(this);
    }

    // allFieldSubmit = () => {
    //     console.log("Input data values");
    // }
    // addSlideFunc = () => {
    //     console.log("Add slide details");
    // }

    updateInput(evt){
        this.setState={value: evt.target.value};   
    }

    addValue(evt) {
      evt.preventDefault();
      if(this.state.value !==undefined) {
        // console.log('Your input value is: ' + this.state.value);
        let myValue = this.state.value;
        console.log(myValue);
      }
    }


    harish(evt){
     let cardTitle=this.refs.cardTitle;  
     var cardSubTitle=this.refs.cardSubTitle;
     var cardLogo=this.refs.cardLogo;
     var arrowImage=this.refs.arrowImage;
     var arrowLink=this.refs.arrowLink;
     console.log(cardTitle+" "+cardSubTitle+" "+cardLogo+" "+arrowImage+" "+arrowLink);
    }

    render() {

        

        return (
        <div className="pov-slider-wrap">
            <h2>POV Slider</h2>

            <div className="pov-slider-fields wrap-bdr">
                <h3>Slide Input Fields</h3>
                <div className="field-row">
                    <label>Image Source *</label>
                    <input type="file" placeholder="Image Path" id="imgSource" ref="imgSource" />
                    <small className="smallheader">Image size should be 1360px X 600px and jpg / png</small>
                </div>
                <div className="field-row">
                    <label>Image Description</label>
                    <input type="text" id="imgDesc" ref="imgDesc" onChange={this.updateInput} />
                    {/* onChange={this.updateInput} */}
                </div>
                <div className="pov-slider-cart-wrap">
                    <div className="field-row">
                        <label>Card Title</label>
                        <input type="text" id="cardTitle" ref="cardTitle" onChange={this.updateInput} />
                    </div>
                    <div className="field-row">
                        <label>Card Sub Title</label>
                        <input type="text" id="cardsubTitle" ref="cardsubTitle" onChange={this.updateInput} />
                    </div>
                    <div className="field-row">
                        <label>Card Logo</label>
                        <input type="text" id="cardLogo" ref="cardLogo" onChange={this.updateInput} />
                    </div>
                    <div className="field-row nav-arrow">
                        <label>Nav Arrow Image</label>
                        <input type="file" id="arrowImage" ref="arrowImage" placeholder="Image Path" />
                    </div>
                    <div className="field-row nav-arrow">
                        <label>Nav Arrow link</label>
                        <input type="text" id="arrowLink" placeholder="Navigation Arrow Link Here" />
                    </div>
                </div>
                <div className="slider-btns">
                    {/* <button className="submitbtn" onClick={this.addValue}>Submit</button> */}
                    <button className="submitbtn" id="submitBtn" onClick={this.harish}>Submit</button>
                    <button className="addSlidebtn" onClick={this.addSlideFunc}>Add Slide</button>
                </div>
            </div>
            {/* End pov-slider-fields */}


            <div className="pov-slider-preview wrap-bdr">
                <h3>Preview</h3>
                <div className="slider-preview-outer">
                    
                    <div className="trm-pov-slider">
                        <div className="trm-pov-slide">			
                            <div className="trm-pov-imageWrapper">
                                {/* <img src={pov1} alt="POV1 Image" /> */}
                            </div>
                            <div className="trm-pov-overlay">
                                <h2>POV 1 Header</h2>
                                <p>POV 1 Sub Header</p>
                                <img src={overlayLogo} alt="Overlay Logo" className="trm-logo-image" />
                                {/* <a href="javascript:;">
                                    <img src={rgtArrow} alt="Navigation Arrow" />
                                </a> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* End pov-slider-preview */}

            <div className="pov-slider-source">
                <h3>Source Code</h3>
                {/* <pre> */}
                    <code>  
                    <div className="trm-pov-slider">
                        <div className="trm-pov-slide">			
                            <div className="trm-pov-imageWrapper">
                                <img src=" " alt=" " />
                            </div>
                            <div className="trm-pov-overlay">
                                <h2> </h2>
                                <p> </p>
                                <img src=" " alt=" " className="trm-logo-image" />
                                {/* <a href="javascript:;"><img src=" " alt="" /></a> */}
                            </div>              
                        </div>
                    </div>

                    </code>
                {/* </pre> */}
            </div>
            {/* End pov-slider-source */}


        </div>
        );
    }
}

export default povSlider;
