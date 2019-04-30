import React, {Component} from 'react';
import '../../cardStyle.css';
import { Card, Typography, CardContent } from '@material-ui/core';

export default class Qcard extends Component{

    render(){
        return(
            <div className="carta">
		    	<div className="naip-area naip-top">
		      		<span className="naip-number">Q</span>
		      		<span className="naip-sign">&clubs;</span>
		    	</div>

		    	<div className="naip-area naip-bottom">
		      		<span className="naip-number">Q</span>
		      		<span className="naip-sign">&clubs;</span>
		    	</div>

		    	<div className="carta-miolo miolo-10">
				<Card className="carta-palavra-11">
				<CardContent>
					<Typography variant="h5" component="h2">
					MULHERES BEBEM
					</Typography>
					<Typography component="p">
						Todos as mulheres bebem. Simples assim.	
					</Typography>
				</CardContent>
    			</Card>	
		    	</div>
		  	</div>
        )
    }

}