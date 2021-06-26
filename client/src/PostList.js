import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostItem from './PostItem'

function PostList()
{
    const [postdata, setpostsdata] = useState([])

    useEffect(()=>{
        axios.get('/api/post/getposts').then(res=>{
            console.log(res.data)
            setpostsdata(res.data)
        }).catch(err=>{
            console.log(err)
        })
    } , [])

    const postlist = postdata.map(post=>{
        return(
            <div className="row justify-content-center">
                <PostItem post={post}/>
            </div>
        )
    })

    return(
        <div>
            <a href='/addpost' className='btn btn-primary m-4'>Add Post</a>
            {postlist}
        </div>
    )
}
export default PostList;