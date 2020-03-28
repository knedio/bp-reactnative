import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    ScrollView, 
    View, 
    Text, 
    TouchableOpacity 
} from 'react-native';
import { Button } from 'react-native-elements';
import InputField from '~_components/Form/InputField';
import { authActions } from '~_store/_actions';
import styles from './styles';

const LoginScreen = ({navigation}) => {

    const dispatch = useDispatch();
    const [registerForm, setRegisterForm] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        address: '',
        gender: '',
        password: '',
        confirmPassword: ''
    }); 
    const [ errorMessages, setErrorMessages ] = useState([]);

    const onChangeInput = (name, value) => {
        setRegisterForm( data => ({
            ...data,
            [name]: value
        }));
    }

    const onSubmit = async () => {
        try {
            const { data } = await dispatch(authActions.register(registerForm));
            navigation.navigate('Login');
        } catch ( err ) {
            if(err.response && err.response.status === 422) {
                setErrorMessages(err.response.data.errors);
            }
        }
        
    }

    return (
        <View style={ styles.container }>
            <ScrollView contentContainerStyle={ styles.scrollContainer }>
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
                        Registration Page
                    </Text>
                </View>
                <View>
                    <InputField
                        label='First Name :'
                        name='firstName'
                        value={ registerForm.firstName }
                        placeholder=''
                        errorMessage={ errorMessages.firstName }
                        onChangeText={ value => onChangeInput('firstName', value) }
                    />
                    <InputField
                        label='Middle Name :'
                        name='middleName'
                        value={ registerForm.middleName }
                        errorMessage={ errorMessages.middleName }
                        onChangeText={ value => onChangeInput('middleName', value) }
                    />
                    <InputField
                        label='Last Name :'
                        name='lastName'
                        value={ registerForm.lastName }
                        errorMessage={ errorMessages.lastName }
                        onChangeText={ value => onChangeInput('lastName', value) }
                    />
                    <InputField
                        label='Email Address :'
                        name='email'
                        value={ registerForm.email }
                        autoCapitalize='none'
                        errorMessage={ errorMessages.email }
                        onChangeText={ value => onChangeInput('email', value) }
                    />
                    <InputField
                        label='Address :'
                        name='address'
                        value={ registerForm.address }
                        errorMessage={ errorMessages.address }
                        onChangeText={ value => onChangeInput('address', value) }
                    />
                    <InputField
                        label='Gender :'
                        name='gender'
                        value={ registerForm.gender }
                        errorMessage={ errorMessages.gender }
                        onChangeText={ value => onChangeInput('gender', value) }
                    />
                    <InputField
                        label='Password :'
                        secureTextEntry={true}
                        name='password'
                        value={ registerForm.password }
                        autoCapitalize='none'
                        errorMessage={ errorMessages.password }
                        onChangeText={ value => onChangeInput('password', value) }
                    />
                    <InputField
                        label='Confirm Password :'
                        secureTextEntry={true}
                        name='confirmPassword'
                        value={ registerForm.confirmPassword }
                        autoCapitalize='none'
                        errorMessage={ errorMessages.confirmPassword }
                        onChangeText={ value => onChangeInput('confirmPassword', value) }
                    />
                </View>
                <Button 
                    containerStyle={ styles.loginBtnContaniner }
                    title='Create an Account' 
                    onPress={ () => onSubmit() } 
                />
                <View>
                    <TouchableOpacity
                        onPress={  () => navigation.navigate('Login') }
                    >
                        <Text style={[ styles.navigateTextStyle, { color: '#3b99fc' } ]}>
                            Back to Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
   )
}

export default LoginScreen;