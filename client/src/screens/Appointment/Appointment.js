import {View, Text, Alert} from 'react-native';
import React, {useContext, useState} from 'react';
import AppointmentComponent from '../../components/AppointmentComponent/AppointmentComponent';
import {GlobalContext} from '../../context/Provider';
import axiosInstance from '../../helpers/axiosInstance';
import createAppointments from '../../context/actions/appointments/createAppointments';
import {useNavigation} from '@react-navigation/native';

const Appointment = () => {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({});
  const emailCheck =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const mobileCheck = /^[6-9]\d{9}$/;
  const {
    authDispatch,
    authState: {error, loading, isLoggedIn, data},
  } = useContext(GlobalContext);
  const {
    appointmentDispatch,
    appointmentState: {
      createAppointment: {AppointLoading},
    },
  } = useContext(GlobalContext);
  const [value, setValue] = useState(null);
  const [dropdownValue,setDropdownValue] = useState(null);



  const {navigate} = useNavigation();
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    console.log(date);
  };
  

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      if (name === 'email') {
        if (!emailCheck.test(value)) {
          setErrors(prev => {
            return {...prev, [name]: 'Invalid Email'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else if (name == 'mobile') {
        if (!mobileCheck.test(value)) {
          setErrors(prev => {
            return {...prev, [name]: 'Invalid Mobile'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };
  const onSubmit = id => {
    axiosInstance
      .post(`/appointment/${id}`, {
        patientName: form.patientName,
        mobile: form.mobile,
        email: form.email,
        date: date,
        services:dropdownValue,
        address:form.address
        
      })
      .then(res => {
        console.log(res.data);
        if (res.data.status === 201) {
          Alert.alert('Appointment successful');
          navigate('Home');
        }
        // else if(res.data.status===400){
        //   Alert.alert('Both password should be same');

        // }
        else {
          Alert.alert(res.data.message);
        }
      });
    // createAppointments(form,id)(appointmentDispatch)
  };
  return (
    <>
      <AppointmentComponent
        onChange={onChange}
        errors={errors}
        form={form}
        onSubmit={onSubmit}
        onDateChange={onDateChange}
        show={show}
        setShow={setShow}
        date={date}
        dropdownValue={dropdownValue}
        setDropdownValue={setDropdownValue}
       
      />
    </>
  );
};

export default Appointment;
