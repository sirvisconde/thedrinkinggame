import React, { Component } from "react";
import '../../cardStyle.css';
import { Card, Typography, CardContent,  } from '@material-ui/core';

export default class Threecard extends Component{
    render(){
        return(

            <div className="carta">
		    	<div className="naip-area naip-top">
		      		<span className="naip-number">3</span>
		      		<span className="naip-sign">&clubs;</span>
		    	</div>

		    	<div className="naip-area naip-bottom">
		      		<span className="naip-number">3</span>
		      		<span className="naip-sign">&clubs;</span>
		    	</div>

		    	<div className="carta-miolo miolo-3">
				<Card className="carta-palavra-1">
                        <CardContent>
                            <Typography variant="h5" component="h2">
                            3 BEBEM
                            </Typography>
                            <Typography component="p">
                                Escolha três jogadores para beber uma dose cada.				
                            </Typography>
                        </CardContent>
    			</Card>	
		    	</div>
		  	</div>

        )
    }



}
		  	

		  