import React, {useState, useEffect, Fragment} from 'react'
import { getAllPost } from '../utils/api'
import { Card } from '../PostCard/Card'
import styled from 'styled-components';

export const BoastComponent = () => {
      const [boast, setBoast] = useState([])

    useEffect(() => {
        async function fetchPost(){
            getPost()
        }
        fetchPost()
    }, [])
    const getPost = async () => {
        try {
            const response = await getAllPost()
            let boast = response.filter(item => {
                return item.isBoast === true
            })
            setBoast(boast)
        } catch (error) {
            console.log(error)
        }
    }

    console.log(boast)
    return (
    <Fragment>
        <H1>All Boast</H1>
        <Container>
            {
                boast.map(post => (
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
    flex-wrap: wrap;
`
