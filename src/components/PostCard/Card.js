import React from 'react'
import styled from 'styled-components';
import moment from 'moment'
import { upvote, downvote } from '../utils/api'

export const Card = ({id, isBoast, post, up_votes, down_votes, post_time, shouldShow}) => {

    const refreshPage = () => {
        window.location.reload(false);
    }

    const handleUpvote = (id) => {
        upvote(id)
        refreshPage()
    }

     const handleDownvote = (id) => {
        downvote(id)
        refreshPage()
    }



    return (
        <Container>
            <InfoContainer>
                <h1>{ !isBoast ? "Roast" : "Boast" }</h1>
                <p>{post}</p>
                <LiksContainer>
                    <Button onClick={() => handleUpvote(id)}><i className="fas fa-thumbs-up"></i> { up_votes }</Button>
                    <Button onClick={() => handleDownvote(id)}><i className="fas fa-thumbs-down"></i> { down_votes}</Button>
                </LiksContainer>
                <p>{moment(post_time, "YYYYMMDD").fromNow()}</p>
                {
                    shouldShow ? 
                    <input type="submit" value="Delete Post!" />
                    :
                    ""
                }
            </InfoContainer>
        </Container>
    )
}

const Button = styled.button`
    font-size: 20px;
    background-color: #2e3233;
    outline: none;

    i{
        color: #ccc;
         transition: all 0.3s ease-in;
    }
    i:hover{
        color: #717E71;
    }
`

const Container = styled.div`
	margin-top: 50px;
	margin-bottom: 50px;
	height: 40vh;
	width: 250px;
	border-radius: 10px;
    position: relative;
    color: #ccc;
    background-color: #2e3233; 
	border: 1px solid #2d7c9d;

	&:before {
		content: "";
		position: absolute;
		height: 40vh;
		width: 250px;
		top: -23px;
		left: -43px;
		z-index: -1;
        border-radius: 10px;
        background-color: #36498f;
		border: 1px solid #ccc;
	}
`;

const LiksContainer = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const InfoContainer = styled.div`
	margin: 15px auto;
	text-align: center;
`;