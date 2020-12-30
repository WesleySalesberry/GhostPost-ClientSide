import React from 'react'
import { InputComponent } from '../../components/CreatePost/InputComponent'
import styled from 'styled-components';

export const CreatePost = () => {
    return (
        <Container>
            <h1>Create a Post</h1>
            <InputComponent />
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #ccc;
`