import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'
import { userContext } from './userContext';


export const noteContext = createContext()

export default function NoteContextProvider(props) {
const {userLogin}=useContext(userContext);


 async function addNotes(note){
  return await axios.post(`https://note-sigma-black.vercel.app/api/v1/notes`,note,
    { 
      headers: { 
        token: `3b8ny__${userLogin}` 
      } 
    }
  )
     .then((response)=>{return response;})
     .catch((error)=>{return error;  })
 }


async function getallUserNotes() {
  try {
    let { data } = await axios.get(`https://note-sigma-black.vercel.app/api/v1/notes/allNotes`); 
    return data; 
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function updateNote(currentNoteId, note) {
  try {
    let { data } = await axios.put(
      `https://note-sigma-black.vercel.app/api/v1/notes/${currentNoteId}`,
      note, 
      { headers: { token: `3b8ny__${userLogin}` } }
    );
    return { data }; 
  } catch (err) {
    console.log("Update Error:", err);
    return err;
  }
}

async function deleteNote(currentNoteId) {
  try {
    let { data } = await axios.delete(
      `https://note-sigma-black.vercel.app/api/v1/notes/${currentNoteId}`,
      { headers: { token: `3b8ny__${userLogin}` } }
    );
    return { data }; 
  } catch (err) {
    console.log("Delete Error:", err);
    return err;
  }
}


  return (
    <noteContext.Provider value={{ updateNote,deleteNote, getallUserNotes, userLogin, addNotes}}>
      {props.children}
    </noteContext.Provider>
  )
}
