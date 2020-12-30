import React, { Fragment, useEffect, useState }  from 'react'
import styled from 'styled-components';
import { Card } from '../../components/PostCard/Card';
import { sortedVotes } from '../../components/utils/api'

export const Sorted = () => {

     const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPost(){
            getPost()
        }
        fetchPost()
    }, [])

    const getPost = async () => {
        try {
            const response = await sortedVotes()
            setPosts(response)
        } catch (error) {
            console.log(error)
        }
    }
    console.log(posts)

    return (
        <Fragment>
            <H1>Popular Post</H1>
            <Container>
                {
                    posts.map((post) => (
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
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    flex-wrap: wrap;
    margin: 100px;
`
