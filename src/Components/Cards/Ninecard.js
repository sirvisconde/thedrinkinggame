import React, {Component} from 'react';
import '../../cardStyle.css';
import { Card, Typography, CardContent,  } from '@material-ui/core';

export default class Ninecard extends Component{

    render(){
        return(
            <div className="carta">
		    	<div className="naip-area naip-top">
		      		<span className="naip-number">9</span>
		      		<span className="naip-sign">&clubs;</span>
		    	</div>

		    	<div className="naip-area naip-bottom">
		      		<span className="naip-number">9</span>
		      		<span className="naip-sign">&clubs;</span>
		    	</div>

		    	<div className="carta-miolo miolo-9">
				<Card className="carta-palavra-9">
					<CardContent>
						<Typography variant="h5" component="h2">
						DEDINHO
						</Typography>
						<Typography component="p">
						Você poderá a qualquer momento da RODADA, posicionar o dedo indicador discretamente sobre a mesa, sem falar nada, e os outros jogadores devem perceber e fazer o mesmo. O último jogador a posicionar o dedo na mesa, bebe uma dose.
						</Typography>
					</CardContent>
    			</Card>	
		    	</div>
		  	</div>
        )
    }

}