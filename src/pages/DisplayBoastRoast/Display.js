import React, {Fragment, useState} from 'react'
import { animated } from "react-spring";
import styled from 'styled-components';
import { BoastComponent } from '../../components/Boast/BoastComponent'
import { RoastComponent } from '../../components/Roast/RoastComponent'

export const Display = () => {
    const [ status, setStatus ] = useState(false)
    return (
            <Container>
                    <animated.button 
                        className="Nav-BTN"
                        onClick={() => setStatus(!status)}
                    >
                    See { status ? "Boast" : "Roast"}
                    </animated.button>
                    {
                        !status ? 
                            <BoastComponent/>
                        :
                            <RoastComponent />
                    }
            </Container>
    )
}

//  
//  

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`


