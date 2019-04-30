import React, {Component} from 'react';
import '../../cardStyle.css';
import { Card, Typography, CardContent } from '@material-ui/core';

export default class Tencard extends Component{

    render(){
        return(
			
            <div className="carta">

		    	<div className="naip-area naip-top">
		      		<span className="naip-number">10</span>
		      		<span className="naip-sign">&clubs;</span>
		    	</div>

		    	<div className="naip-area naip-bottom">
		      		<span className="naip-number">10</span>
		      		<span className="naip-sign">&clubs;</span>
		    	</div>

		    	<div className="carta-miolo miolo-10">
				
				<Card className="carta-palavra-10">
				<CardContent>
					<Typography variant="h5" component="h2">
					PALAVRA
					</Typography>
					<Typography component="p">
						Defina uma palavra que ninguém pode pronunciar. O primeiro que pronunciar, bebe uma dose. A regra termina até o próximo 10 ser retirado e assim definida outra palavra.				
					</Typography>
				</CardContent>
    			</Card>		      		
		    	</div>
				
		  	</div>
        )
    }

}