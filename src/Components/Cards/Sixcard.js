import React, { Component } from "react";
import '../../cardStyle.css';
import { Card, Typography, CardContent,  } from '@material-ui/core';

export default class ThreeCard extends Component{
    render(){
        return(
            <div className="carta">
            <div className="naip-area naip-top">
                    <span className="naip-number">6</span>
                    <span className="naip-sign">&clubs;</span>
            </div>

            <div className="naip-area naip-bottom">
                    <span className="naip-number">6</span>
                    <span className="naip-sign">&clubs;</span>
            </div>

            <div className="carta-miolo miolo-6">
            <Card className="carta-palavra-7">
                <CardContent>
                    <Typography variant="h5" component="h2">
                    BANHEIRO
                    </Typography>
                    <Typography component="p">
                        Você tem direito de ir ao banheiro agora. Você pode doar esta carta, mas deve beber uma dose.		
                    </Typography>
                </CardContent>
            </Card>
            </div>
            </div>

        )
    }
}