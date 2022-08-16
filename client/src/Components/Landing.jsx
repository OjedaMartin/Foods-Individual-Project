import React from 'react';
import {Link} from 'react-router-dom';
// import Header from './Header';<Header/>
import { LandingBase, LandingImage, LandingSlogan,
 LandingPrompt, LandingButton, LandingCont } from './Styles/StyledLanding';
import { Cont }  from './Styles/StyledContainer';


export default function Landing(){
    return(
        <Cont>
            
            

            <LandingBase>
                
                    <LandingImage src={require('./Styles/Image/LandingPhoto.jpg')} alt='Landing Photo'/>
                
                <LandingCont>
                    <img src={require('./Styles/Image/IconFoods.png')} alt='Foods Logo' width='60%' height='60%' />          
                    <LandingSlogan>Cooking Made Simple.</LandingSlogan>
                    <LandingPrompt>Find the best recipes for you in an instant! </LandingPrompt>                       
                    <Link to = '/home'><LandingButton>Start Now</LandingButton></Link>
                </LandingCont>
            </LandingBase>
            
        
        </Cont>
    ) 
}
