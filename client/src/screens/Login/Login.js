import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import React, {useState, useContext, useEffect} from 'react';
import LoginComponent from '../../components/LoginComponent/LoginComponent';
import {GlobalContext} from './../../context/Provider';
import loginUser from '../../context/actions/loginUser';
import formValidators from '../../utils/formValidator';
const Login = () => {
  const [form, setForm] = useState({});
  const [errors,setErrors] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(null);
  const {
    authDispatch,
    authState: {error, loading, isLoggedIn, data},
  } = useContext(GlobalContext);
  const {params} = useRoute();
  const emailCheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const onSubmit = () => {
    if (form.email && form.mobile) {
     

      loginUser(form)(authDispatch);
    }
  };
  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    setForm({...form,[name]:value})
    if (value !== '') {
     
    if (name ==='email') {
        if (!emailCheck.test(value)) {
          setErrors((prev) => {
            return {...prev, [name]: 'Invalid Email'};
          });
        } 
        
        else {
          setErrors((prev) => {
            return {...prev, [name]: null};
          });
        }
      }
       else if (name === 'password' || name === 'confirmPassword') {
        if (value.length < 8) {
          setErrors((prev) => {
            return {...prev, [name]: 'This field needs min 8 characters'};
          });
        } 
        
        else {
          setErrors((prev) => {
            return {...prev, [name]: null};
          });
        }
      } 

      
      else {
        setErrors((prev) => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors((prev) => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };
  const onClear = () =>{
    setForm({
      ['email']:'',
      ['mobile']:'',
      ['password']:'',
    })
  }

  return (
    <>
      <LoginComponent
        onSubmit={onSubmit}
        onChange={onChange}
        form={form}
        justSignedUp={justSignedUp}
        error={error}
        loading={loading}
        isLoggedIn={isLoggedIn}
        data={data}
        onClear={onClear}
        errors={errors}
      />
    </>
  );
};

export default Login;
