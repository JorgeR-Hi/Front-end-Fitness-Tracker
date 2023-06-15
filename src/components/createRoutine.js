import React, { useState } from 'react';


function createRoutine({token, getRoutines}){
    const [title, setTitle ]= useState('');
    const [workout, setWorkout]= useState('');

    async function handleSubmit(event){
        event.preventDefault();
        const post = {title, workout}
        const results = await makePost(post, token)

        if(results.success){
            getPosts();
        }
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            placeholder="Title"
            value={title}
            onChange={(event)=> {setTitle(event.target.value)}}
            />
            <input 
            type='text'
            placeholder='Workout description'
            value={workout}
            onChange={(event)=> {setWorkout(event.target.value) }}
            />
        </form>
        </>
    )

}

export default createRoutine;