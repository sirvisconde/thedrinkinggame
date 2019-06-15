import React, {Component} from 'react';
import '../../cardStyle.css'
import TDGLogo from '../../img/android-chrome-384x384.png';
import '../../cardStyleBack.css';

export default class Acard extends Component{
    render(){
        return(   
                     
                <div className="cartaback">
                <div class="cardback">
                    <div class="back"><img className="imgback" src={TDGLogo} alt=""/></div>
                </div>
                </div>
        )
    }
}