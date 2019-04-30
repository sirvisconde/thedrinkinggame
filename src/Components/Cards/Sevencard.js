import React, { Component } from "react";
import '../../cardStyle.css';
import { Card, Typography, CardContent,  } from '@material-ui/core';

export default class Sevencard extends Component{
    render(){
        return(

            <div className="carta">
		    	<div className="naip-area naip-top">
		      		<span className="naip-number">7</span>
		      		<span className="naip-sign">&clubs;</span>
		    	</div>

		    	<div className="naip-area naip-bottom">
		      		<span className="naip-number">7</span>
		      		<span className="naip-sign">&clubs;</span>
		    	</div>

		    	<div className="carta-miolo miolo-7">
				<Card className="carta-palavra-7">
					<CardContent>
						<Typography variant="h5" component="h2">
						PIN
						</Typography>
						<Typography component="p">
						Você deve falar PIN em múltiplos de 7 e todos os números que contenham o algarismo 7. Ex:. 7,14,17,21,27,28. Quem errar, bebe.	
						</Typography>
					</CardContent>
            	</Card>
		    	</div>
		  	</div>

        )
    }
}