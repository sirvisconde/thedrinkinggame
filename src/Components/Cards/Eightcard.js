import React, {Component} from 'react';
import '../../cardStyle.css';
import { Card, Typography, CardContent,  } from '@material-ui/core';

export default class Eightcard extends Component{

    render(){
        return(
            <div className="carta">
		    	<div className="naip-area naip-top">
		      		<span className="naip-number">8</span>
		      		<span className="naip-sign">&clubs;</span>
		    	</div>

		    	<div className="naip-area naip-bottom">
		      		<span className="naip-number">8</span>
		      		<span className="naip-sign">&clubs;</span>
		    	</div>

		    	<div className="carta-miolo miolo-8">
				<Card className="carta-palavra-8">
                        <CardContent>
                            <Typography variant="h5" component="h2">
                            REGRA GERAL
                            </Typography>
                            <Typography component="p">
                                Você deve criar uma regra para TODOS nesta rodada. QUALQUER REGRA. Use com sabedoria.			
                            </Typography>
                        </CardContent>
    			</Card>	
		    	</div>
		  	</div>
        )
    }

}