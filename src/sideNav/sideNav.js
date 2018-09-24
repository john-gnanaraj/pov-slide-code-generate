import React, { Component } from 'react';
import './sideNav.css';

class sideNav extends Component {

    render() {
        return (
            <div className="sideNav-wrap">
                <ul>
                    <li className="active"><span>POV Slide</span></li>
                    <li><span>2Column POV Mod1</span></li>
                    <li><span>2Column POV Mod2</span></li>
                    <li><span>MosaicLayout 2ups</span></li>
                    <li><span>MosaicLayout 3ups</span></li>
                    <li><span>MosaicLayout 5ups</span></li>
                    <li><span>Product Scroller</span></li>
                    <li><span>Featured Brands Slider</span></li>
                    <li><span>Slidebar Menu</span></li>
                    <li><span>3Grid Module</span></li>
                </ul>
            </div>
        )
    }

}

export default sideNav;