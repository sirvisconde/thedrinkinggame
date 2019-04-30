import React, {Component} from 'react';
import '../../cardStyle.css';
import { Card, Typography, CardContent,  } from '@material-ui/core';

export default class Twocard extends Component{
    render(){
        return(
		  	<div className="carta">
		    	<div className="naip-area naip-top">
		      		<span className="naip-number">2</span>
		      		<span className="naip-sign">&clubs;</span>
		    	</div>

		    	<div className="naip-area naip-bottom">
		      		<span className="naip-number">2</span>
		      		<span className="naip-sign">&clubs;</span>
		    	</div>

		    	<div className="carta-miolo miolo-2">
				<Card className="carta-palavra-1">
                        <CardContent>
                            <Typography variant="h5" component="h2">
                            2 BEBEM
                            </Typography>
                            <Typography component="p">
                                Escolha dois jogadores para beber uma dose cada.				
                            </Typography>
                        </CardContent>
    			</Card>	
		    	</div>
		  	</div>
            
        )
    }
}