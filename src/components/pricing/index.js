import React, { Component } from 'react';
import MyButton from '../Utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices:[100,150,250],
        positions:['Balcony','Medium','Star'],
        desc: [
            'Chei qui non mi sorprenda Lascia che mallontani; tu lo calma.Ai piedi suoi mi getterò, divisi Ei più non ne vorrà; sarem felici', 
            'Perché tu mami, Alfredo, non è vero O, quanto! Perché piangi? Di lagrime avea duopo, or son tranquilla Lo vedi? ti sorrido... lo vedi? Or sono tranquilla, ti sorrido!',
            'Sarò là, tra quei fior, presso a te sempre. Sempre, sempre presso a te! Amami, Alfredo,Quantio tamo!Addio!'
        ],

        linkto:['http://sales/balcony','http://sales/medium','http://sales/star'],
        delay:[500,0,500]


    }

    showBoxes = () => (

        this.state.prices.map((box, i)=>(

            <Zoom delay={this.state.delay[i]} key={i}>
            <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                    <span>${this.state.prices[i]}</span>
                    <span>{this.state.positions[i]}</span>
                    </div>

                    <div className="pricing_description">
                    <span>{this.state.desc[i]}</span>
                    </div>
                    <div className="pricing_buttons">
                    <MyButton
                        text="Purchase package"
                        bck="#ffa800"
                        color="#ffffff"
                        link={this.state.linkto[i]}
                    
                    />
                    </div>
                 </div>
            </div>
    </Zoom>
       ))
        
    )



    render() {
        return (
            <div className="bck_black">
            <div className="center_wrapper pricing_section">
            <h2>Pricing</h2>

            <div className="pricing_wrapper">
            {this.showBoxes()}
            
            </div>
            
            
            </div>
                
            </div>
        );
    }
}

export default Pricing;