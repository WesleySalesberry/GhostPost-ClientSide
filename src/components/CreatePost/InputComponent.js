import React, { useState} from 'react'
import styled from 'styled-components';

import { CHOICES } from './opitions'
import { createPost } from '../utils/api'
import { Redirect } from 'react-router-dom';
export const InputComponent = () => {
    const [submitted, hasSubmitted] = useState(false)
    const [postData, setPost] = useState({
        isBoast: null,
        post: ""
   })

   const { post, isBoast } = postData

   const handleSelect = (evt) => {
       if(evt.target.value === "Choose"){
           setPost({
           ...postData,
           isBoast: null
       })

       }else{
            setPost({
                ...postData,
                isBoast: evt.target.value
            })
        }
   }

   const handleChange = (evt) => {
       setPost({
           ...postData,
           post: evt.target.value
       })
      
   }

   const handleSubmit = (evt) => {
       evt.preventDefault()
       if(isBoast === null){
           return
       }
       createPost(postData)
        hasSubmitted(true)
   }

    return (
        <Form onSubmit={(evt) => handleSubmit(evt)}>
            <FormGroup>
                 <Select
                    onChange={handleSelect}
                 > <option>Choose</option>
                     {
                         CHOICES.map((item) => (
                             <option key={item.id} value={item.value}>{ item.name }</option>
                         ))
                     }

                 </Select>
            </FormGroup>
            <FormGroup>
                <TextArea
                    value={post}
                    name="post"
                    onChange={handleChange}
                />
            </FormGroup>
            <input type="submit" value="Post It!" />
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const FormGroup = styled.div`
    margin: 10px;
`

const Select = styled.select`
    color: #ccc;
    background-color: #26324a;
    width: 10.5em;
    height: 2em;
    border-radius: 10px;
    text-align: center;
    outline: none;
`
const TextArea = styled.textarea`
    background-color: #26324a;
    color: #ccc;
    outline: none;
`




