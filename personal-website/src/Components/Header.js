import React from 'react';
import Typography from '@material-ui/core/Typography';
import Typed from 'react-typed';
import '../App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


const Header = () => {
    return (
        <div className="hearder-wraper">
            <div className="main-info"> 
            <CssBaseline />
            <Container fixed>
                    <Typography variant="h3" align='center' alignItems='center'>
                    Luis Felipe Cruz   
                    </Typography>  
                    <Typed 
                    className="typed-text"
                    strings={["Web development","Back-end Web development","Data science"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                    />
                </Container>               
            </div>
        </div>
    )
}

export default Header
