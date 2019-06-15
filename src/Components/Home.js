import React, {Component} from 'react';
import 'materialize-css';
import Acard from '../Components/Cards/Acard';
import Twocard from '../Components/Cards/Twocard';
import Threecard from '../Components/Cards/Threecard';
import Fourcard from '../Components/Cards/Fourcard';
import Fivecard from '../Components/Cards/Fivecard';
import Sixcard from '../Components/Cards/Sixcard';
import Sevencard from './Cards/Sevencard';
import Eightcard from './Cards/Eightcard';
import Ninecard from './Cards/Ninecard';
import Tencard from './Cards/Tencard';
import Jcard from './Cards/Jcard';
import Qcard from './Cards/Qcard';
import Kcard from './Cards/Kcard';
import Backcard from './Cards/Backcard'
import { Button } from '@material-ui/core';
import '../cardStyleBack.css';

export default class Home extends Component{

    constructor(){
        super();
        this.state = {
            card: 14,
            loading: false
        }
        this.trocaCarta = this.trocaCarta.bind(this)
    }

    components = {

        1:  Acard,
        2:  Twocard,
        3:  Threecard,
        4:  Fourcard,
        5:  Fivecard,
        6:  Sixcard,
        7:  Sevencard,
        8:  Eightcard,
        9:  Ninecard,
        10: Tencard,
        11: Jcard,
        12: Qcard,
        13: Kcard,
        14: Backcard
    };

    

    trocaCarta (){
        
        this.setState({
            card: 14
        })
        setTimeout(() =>{
            this.setState({
                card: Math.floor(Math.random() * 13) + 1})
            
        }, 700)
        
    };

    render() {

        const TagName = this.components[this.props.tag || this.state.card];
        return ( 

            <div>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/css/materialize.min.css"></link>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
                
               

                <title>The Drinking Game</title>      


                <div className="section no-pad-bot" id="index-banner">
                    <div className="container">      
                        <h2 className="header center white-text">The Drinking Game</h2>
                        <div className="row center carta-box">
                            <TagName />
                        </div>
                        <div className="row center">
                            <Button onClick={this.trocaCarta} variant="contained" className="btn-large waves-effect waves-light white black-text" disabled={this.loading} >
                            
                                Trocar Carta
                            </Button>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}