import React from 'react';
import {
    Text,
    Button,
} from 'react-native';

export default Registration = () => {
    return (
        <>
            <Text>Registration</Text>
            <Button
                title='Go to Signup'
                onPress={() => this.props.navigation.navigate('Login')}
            />
        </>
    )
}
