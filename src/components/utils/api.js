import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://127.0.0.1:8000/api/',
	 headers: {
            'Content-Type': 'application/json'
        }
	
});

export const getAllPost = async () => {
    try {
       const response = await api.get('post/')
       return response.data
    } catch (error) {
        console.log(error)
    }
}

export const createPost = async ({ post, isBoast }) => {
    try {
        await api.post('post/',  {
            post,
            isBoast
        })
    } catch (error) {
        console.log(error)
    }
}

export const upvote = async (id) => {
    try {
        await api.post(`post/${id}/upvote/`)
    } catch (error) {
        console.log(error)
    }
}

export const downvote = async (id) => {
    try {
        await api.post(`post/${id}/downvote/`)
    } catch (error) {
        console.log(error)
        
    }
}

export const sortedVotes = async () => {
    try {
        const response = await api.get('post/sorted_votes/')
        return response.data
    } catch (error) {
        console.log(error)
        
    }
}

// export const getPost = async (id) => {
//     try {
//         const response = await api.post(`post/${id}/`)
//         return response.data
//     } catch (error) {
//         console.log(error)
//     }
// }

