import React from 'react';
import {
    View,
    Text,
} from 'react-native';

const UserProfile = ({navigation}) => {

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center'}}>
                <Text style={{ fontSize: 30, textAlign: 'center' }}>
                    Welcome!
                </Text>
                <Text style={{ fontSize: 30, textAlign: 'center' }}>
                    User Profile Screen.
                </Text>
            </View>
        </View>
    )
}

export default UserProfile;