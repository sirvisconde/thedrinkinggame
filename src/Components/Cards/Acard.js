import React, {Component} from 'react';
import '../../cardStyle.css'
import { Card, Typography, CardContent,  } from '@material-ui/core';

export default class Acard extends Component{
    render(){
        return(
            
                <div className="carta">
                    <div className="naip-area naip-top">
                        <span className="naip-number">A</span>
                        <span className="naip-sign">&clubs;</span>
                    </div>

                    <div className="naip-area naip-bottom">
                        <span className="naip-number">A</span>
                        <span className="naip-sign">&clubs;</span>
                    </div>

                    <div className="carta-miolo miolo-1">
                    <Card className="carta-palavra-1">
                        <CardContent>
                            <Typography variant="h5" component="h2">
                            1 BEBE
                            </Typography>
                            <Typography component="p">
                                Escolha um jogador para beber uma dose.				
                            </Typography>
                        </CardContent>
    			    </Card>	
                    </div>
                </div>		  	
		  	
            
        )
    }
}