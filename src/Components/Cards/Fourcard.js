import React, { Component } from "react";
import '../../cardStyle.css';
import { Card, Typography, CardContent,  } from '@material-ui/core';

export default class ThreeCard extends Component{
    render(){
        return(
            <div className="carta">
		    	<div className="naip-area naip-top">
		      		<span className="naip-number">4</span>
		      		<span className="naip-sign">&clubs;</span>
		    	</div>

		    	<div className="naip-area naip-bottom">
		      		<span className="naip-number">4</span>
		      		<span className="naip-sign">&clubs;</span>
		    	</div>

		    	<div className="carta-miolo miolo-4">
				<Card className="carta-palavra-4">
					<CardContent>
						<Typography variant="h5" component="h2">
						Jogo do “Stop”
						</Typography>
						<Typography component="p">
						Você deve escolher uma categoria e uma letra do alfabeto e dá um exemplo. O primeiro que errar ou não souber, bebe. Ex.: “carros com a letra A” = “Audi”. O próximo diz “Astra”, e assim por diante.		
						</Typography>
					</CardContent>
    			    </Card>	
		    	</div>
		  	</div>
        )
    }
}

	  	

		  	