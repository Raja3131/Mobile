import {View, Text, Alert, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import {GlobalContext} from '../context/Provider';
import axiosInstance from './../helpers/axiosInstance';
import Container from '../components/common/container/Container';
import Input from '../components/common/Input/Input';
import CustomButton from '../components/common/CustomButton/CustomButton';
import Icon from '../components/common/Icon/Icon';
import appColors from '../styles/appColors';

const ChangePassword = () => {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({});
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      if (name === 'password') {
        if (value !== data['user'].password) {
          setErrors(prev => {
            return {...prev, [name]: 'Incorrect Password'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else if (
        name === 'password' ||
        name === 'newPassword' ||
        name === 'confirmNewPassword'
      ) {
        console.log(value);
        if (value.length < 8) {
          setErrors(prev => {
            return {...prev, [name]: 'This field needs min 8 characters'};
          });
        } else if (name === 'confirmNewPassword') {
          if (value !== form.newPassword) {
            console.log(value, form.newPassword);
            setErrors(prev => {
              return {...prev, [name]: 'Password not match'};
            });
          } else {
            setErrors(prev => {
              return {...prev, [name]: null};
            });
          }
        } else if (name === 'newPassword') {
          if (value === form.password) {
            console.log(value, form.newPassword);
            setErrors(prev => {
              return {...prev, [name]: ' New Password should not be same '};
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
      .post(`/change-password/${id}`, {
        password: form.password,
        newPassword: form.newPassword,
      })
      .then(res => {
        console.log(res.status);
        if (res.status === 200) {
          Alert.alert(' successful');
        } else {
          Alert.alert('Failed');
        }
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  const onClear = () => {
    Alert.alert('Clear!', 'Are you sure you want to clear?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },

      {
        text: 'OK',
        onPress: () => {
          setForm({
            ['password']: '',
            ['newPassword']: '',
            ['confirmNewPassword']: '',
          });
        },
      },
    ]);
  };
  return (
    <>
      <Container>
        <Input
          label="Old Password"
          onChangeText={value => onChange({name: 'password', value})}
          value={form.password}
          error={errors.password}
          secureTextEntry={isSecureEntry}
          icon={
            <TouchableOpacity
              onPress={() => {
                setIsSecureEntry(prev => !prev);
              }}>
              <Text>
                {isSecureEntry ? (
                  <Icon
                    size={21}
                    name="eye-off"
                    type="feather"
                    color={appColors.Blue}
                  />
                ) : (
                  <Icon
                    size={21}
                    name="eye"
                    type="feather"
                    color={appColors.Blue}
                  />
                )}
              </Text>
            </TouchableOpacity>
          }
          iconPosition="right"
        />

        <Input
          label="New Password"
          onChangeText={value => onChange({name: 'newPassword', value})}
          value={form.newPassword}
          error={errors.newPassword}
          secureTextEntry={isSecureEntry}
          icon={
            <TouchableOpacity
              onPress={() => {
                setIsSecureEntry(prev => !prev);
              }}>
              <Text>
                {isSecureEntry ? (
                  <Icon
                    size={21}
                    name="eye-off"
                    type="feather"
                    color={appColors.Blue}
                  />
                ) : (
                  <Icon
                    size={21}
                    name="eye"
                    type="feather"
                    color={appColors.Blue}
                  />
                )}
              </Text>
            </TouchableOpacity>
          }
          iconPosition="right"
        />
        <Input
          label="Confirm New Password"
          onChangeText={value => onChange({name: 'confirmNewPassword', value})}
          value={form.ConfirmNewPassword}
          error={errors.confirmNewPassword}
          secureTextEntry={isSecureEntry}
          icon={
            <TouchableOpacity
              onPress={() => {
                setIsSecureEntry(prev => !prev);
              }}>
              <Text>
                {isSecureEntry ? (
                  <Icon
                    size={21}
                    name="eye-off"
                    type="feather"
                    color={appColors.Blue}
                  />
                ) : (
                  <Icon
                    size={21}
                    name="eye"
                    type="feather"
                    color={appColors.Blue}
                  />
                )}
              </Text>
            </TouchableOpacity>
          }
          iconPosition="right"
        />
        <CustomButton
          title="Confirm"
          primary
          onPress={() => {
            onSubmit(data['user']._id);
          }}
          disabled={
            errors.password ||
            errors.newPassword ||
            errors.confirmNewPassword ||
            !(form.newPassword && form.password && form.confirmNewPassword)
              ? true
              : false
          }
        />
        <CustomButton
          title="Clear"
          primary
          onPress={onClear}
          disabled={!(form.mobile || form.password)}
        />
      </Container>
    </>
  );
};

export default ChangePassword;
