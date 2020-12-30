import React, {useState, useEffect, Fragment} from 'react'
import { getAllPost } from '../utils/api'
import { Card } from '../PostCard/Card'
import styled from 'styled-components';

export const RoastComponent = () => {
      const [roast, setRoast] = useState([])

    useEffect(() => {
        async function fetchPost(){
            getPost()
        }
        fetchPost()
    }, [])
    const getPost = async () => {
        try {
            const response = await getAllPost()
            let roast = response.filter(item => item.isBoast === false)
            setRoast(roast)
        } catch (error) {
            console.log(error)
        }
    }

    console.log(roast)
    return (
    <Fragment>
        <H1>All Roast</H1>
        <Container>
            {
                roast.map(post => (
                    <Card
                        key={post.id}
                        id={post.id}
                        isBoast={post.isBoast}
                        post={post.post}
                        up_votes={post.up_votes}
                        down_votes={post.down_votes}
                        post_time={post.post_time}
                    />
                ))
            }

        </Container>
    </Fragment>
    )
}

const H1 = styled.h1`
    text-align: center;
    color: #ccc;
`
const Container = styled.div`
     display: flex;
    justify-content: space-around;
    align-items: center;
    flex-grow: 1;
    flex-wrap: wrap;
`