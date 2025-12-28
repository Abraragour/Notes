import React, { useContext, useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { userContext } from './../../Context/userContext';
import toast from 'react-hot-toast';

export default function Login() {
    let { setuserLogin } = useContext(userContext);
  const [isLoading, setIsLoading] = useState(false);
    const [success, setIsSuccess] = useState(null);
  const [iserror, setIsError] = useState(null);

  const navigate = useNavigate();
  const validationSchema = yup.object({
   email: yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
      
    password: yup.string()
      .matches(/^[A-Z][a-z0-9]{5,10}$/, "Password must start with uppercase and be 6-10 characters")
      .required("Password is required"),
  });




  function handleLogin(formValues) {
    setIsLoading(true);
    axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signIn`, formValues)
      .then((response) => {
        setIsSuccess(response.data.msg)
        if (response?.data?.msg === 'done') {
            setuserLogin(response?.data?.token);
            localStorage.setItem('userToken',response?.data?.token);
            toast.success(response?.data?.msg,{ duration:1000,
            position:"top-center"});
          navigate('home');
        }
         setIsLoading(false)
        console.log(response);
       })
      .catch((error) => { 
        setIsLoading(false)
        setIsError(error?.response?.data?.msg);
        console.log(error);
      })
    
  }

  let formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: handleLogin,
    validationSchema
  })
  

  return (
  <form 
      onSubmit={formik.handleSubmit} 
      className="w-full h-full flex flex-col justify-center items-center p-8 bg-transparent"
    >

      <h2 className="text-4xl font-bold text-[#38b29b] mb-4">Sign in</h2>
                    {iserror&& <div className="mb-2 text-red-500 text-[10px] text-center">{iserror}</div>}

      <div className="space-y-4 w-full max-w-[320px] flex flex-col">
        {['email', 'password'].map((field) => (
          <div key={field} className="w-full">
            <input
              name={field}
              type={field === 'password' ? 'password' : 'email'}
              placeholder={field.toUpperCase()}
              value={formik.values[field]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-5 py-3 bg-[#f4f8f7] border-none rounded-xl focus:ring-2 focus:ring-[#38b29b] outline-none transition-all placeholder-gray-400 text-gray-600 text-sm"
            />

                  {formik.errors[field] && formik.touched[field] && (
              <p className="text-[9px] text-red-500 mt-0.5 ml-1">* {formik.errors[field]}</p>
            )}
          </div>
        ))}

      
        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-4 py-3 rounded-full bg-[#38b29b] text-white font-bold shadow-lg hover:bg-[#2f9683] hover:scale-105 transition-all uppercase tracking-widest text-sm"
        >
          {isLoading ? <i className="fas fa-spinner fa-spin"></i> : 'SIGN IN'}
        </button>
      </div>
    </form>
  )
}