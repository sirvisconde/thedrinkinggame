import React, {Component} from 'react';
import '../../cardStyle.css';
import { Card, Typography, CardContent } from '@material-ui/core';

export default class Kcard extends Component{

    render(){
        return(
            <div className="carta">
		    	<div className="naip-area naip-top">
		      		<span className="naip-number">K</span>
		      		<span className="naip-sign">&clubs;</span>
		    	</div>

		    	<div className="naip-area naip-bottom">
		      		<span className="naip-number">K</span>
		      		<span className="naip-sign">&clubs;</span>
		    	</div>

		    	<div className="carta-miolo miolo-10">
				<Card className="carta-palavra-13">
					<CardContent>
						<Typography variant="h5" component="h2">
						O REI BEBE
						</Typography>
						<Typography component="p">
							Você, que tirou a carta, bebe. 	
						</Typography>
					</CardContent>
    			</Card>	
		    	</div>
		  	</div>
        )
    }

}