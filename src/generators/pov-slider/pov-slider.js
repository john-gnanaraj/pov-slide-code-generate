import React, { Component } from 'react';
import './pov-slider.css';

class povSlider extends Component {
    constructor(props) {
      super(props);
      this.state = {
          imageWrapperSrc: '',
          imageDesc: '',
          rightArrowImgSrc: '',
          subTitle: '',
          logoImgSrc: '',
        //   rightArrowImgSrc: '',
          arrowLink: '',
          slider: []
      };
      this.handleInputChange = this.handleInputChange.bind(this)
      this.handleFileChange = this.handleFileChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    handleFileChange(event) {
        const target = event.target;
        const files = event.target.files[0]

        const name = target.name;

        var reader = new FileReader();
        var url = reader.readAsDataURL(files);

        reader.onloadend = function (e) {
            this.setState({
                [name]: [reader.result]
            })
        }.bind(this);
        // this.setState({
        //     [name]: URL.createObjectURL(files)
        // })
    }

    handleSubmit(event) {
        event.preventDefault()
        const slide = {
            imageWrapperSrc: this.state.imageWrapperSrc,
            imageDesc: this.state.imageDesc,
            title: this.state.title,
            subTitle: this.state.subTitle,
            logoImgSrc: this.state.logoImgSrc,
            rightArrowImgSrc: this.state.rightArrowImgSrc,
            arrowLink: this.state.arrowLink
        }
        let isFormFilled = true;
        const stateVal = this.state
        Object.keys(slide).map((key) => {
            if(!stateVal[key])
            isFormFilled = false
        })
        if(!isFormFilled) {
            alert("Please fill the form details")
            return false;
        }
        const slider = this.state.slider
        slider.push(slide)
        this.setState({
            slider: slider
        })
    }

    render() {
        return (
        <div className="pov-slider-wrap">
            <h2>POV Slide</h2>

            <div className="pov-slider-fields wrap-bdr">
                <h3>Slide Input Fields</h3>
                <div className="field-row">
                    <label>Image Source *</label>
                    <input 
                        name="imageWrapperSrc" 
                        type="file" 
                        placeholder="Image Path" 
                        id="imgSource" 
                        onChange={this.handleFileChange} />
                    <small className="smallheader">Image size should be 1360px X 600px and jpg / png</small>
                </div>
                <div className="field-row">
                    <label>Image Description</label>
                    <input 
                        name="imageDesc" 
                        type="text" 
                        id="imgDesc"
                        onChange={this.handleInputChange} />
                </div>
                <div className="pov-slider-cart-wrap">
                    <div className="field-row">
                        <label>Card Title</label>
                        <input 
                            name="title" 
                            type="text" 
                            value={this.state.title} 
                            onChange={this.handleInputChange} />
                    </div>
                    <div className="field-row">
                        <label>Card Sub Title</label>
                        <input 
                            name="subTitle" 
                            type="text" 
                            value={this.state.subTitle} 
                            onChange={this.handleInputChange} />
                    </div>
                    <div className="field-row">
                        <label>Card Logo</label>
                        <input 
                            name="logoImgSrc" 
                            type="file"
                            onChange={this.handleFileChange} />
                    </div>
                    <div className="field-row nav-arrow">
                        <label>Nav Arrow Image</label>
                        <input 
                            name="rightArrowImgSrc" 
                            type="file"
                            onChange={this.handleFileChange} />
                    </div>
                    <div className="field-row nav-arrow">
                        <label>Nav Arrow link</label>
                        <input 
                            name="arrowLink" 
                            type="text" 
                            placeholder="Navigation Arrow link here"
                            value={this.state.arrowLink} 
                            onChange={this.handleInputChange} />
                    </div>
                </div>
                <div className="slider-btns">
                    <button className="submitbtn" onClick={this.handleSubmit}>Submit</button>
                    {/* <button className="addSlidebtn" onClick={this.addSlideFunc}>Add Slide</button> */}
                </div>
            </div>
            {/* End pov-slider-fields */}


            <div className="pov-slider-preview wrap-bdr">
                <h3>Preview</h3>
                <div className="slider-preview-outer">
                    {
                        this.state.slider.map((item, key) => {
                            return (
                                <div className="trm-pov-slider">
                                    <div className="trm-pov-slide">         
                                        <div className="trm-pov-imageWrapper">
                                            { item.imageWrapperSrc && <img src={item.imageWrapperSrc} alt={item.imageDesc} /> }
                                        </div>
                                        <div className="trm-pov-overlay">
                                            <h2>{item.title}</h2>
                                            <p>{item.subTitle}</p>
                                            { item.logoImgSrc && <img src={item.logoImgSrc} alt="Overlay Logo" className="trm-logo-image" /> }
                                            { item.rightArrowImgSrc &&  <a href={item.arrowLink}>
                                                <img src={item.rightArrowImgSrc} alt="Navigation Arrow" />
                                            </a> }
                                        </div>              
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            {/* End pov-slider-preview */}

            <div className="pov-slider-source">
                <h3>Source Code</h3>
                {
                    this.state.slider.map((item, key) => {
                        return (<code><pre>{`
                        <div className="trm-pov-slider">
                            <div className="trm-pov-slide">         
                                <div className="trm-pov-imageWrapper">
                                    <img src="${item.imageWrapperSrc}" alt="${item.imageDesc}" />
                                </div>
                                <div className="trm-pov-overlay">
                                    <h2>${item.title}</h2>
                                    <p>${item.subTitle}</p>
                                    <img src="${item.logoImgSrc}" alt="Overlay Logo" className="trm-logo-image" /> 
                                    <a href="${item.arrowLink}">
                                        <img src="${item.rightArrowImgSrc}" alt="Navigation Arrow" />
                                    </a>
                                </div>              
                            </div>
                        </div>
                        `
                        }</pre></code>)
                    })
                }
            </div>
            {/* End pov-slider-source */}


        </div>
        );
    }
}

export default povSlider;