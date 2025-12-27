import React, { createContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export const userContext = createContext()
export default function UsercontextProvider(props) {

      const [userLogin, setuserLogin] = useState(null);
      useEffect(() => {
                        if(localStorage.getItem('userToken')!==null)
                            {
                                setuserLogin(localStorage.getItem('userToken'))
                            }     
                    
                      }, []);
          

  return <userContext.Provider value={{userLogin,setuserLogin}} >
     {props.children}
    </userContext.Provider>
    
}
