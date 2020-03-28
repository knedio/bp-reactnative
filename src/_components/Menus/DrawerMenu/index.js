import React from 'react';
import {
    ScrollView,
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { navigation } from '~_services/navigation.service';
import { authActions, alertActions } from '~_store/_actions';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';

const DrawerMenu = ( stacks ) => {

    const dispatch = useDispatch();

    const onLogout = async () => {
        try {
            await dispatch(alertActions.setScreenLoading(true));
            const { message } = await dispatch(authActions.logout());
            await dispatch(alertActions.setScreenLoading(true));
            onRemoveData();
        } catch ( err ) {
            onRemoveData()
        }

    }

    const onRemoveData = async () => {
        await dispatch({ type: 'RESET_APP' });
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('user');
        navigation('Login');
    }

    return (
        <SafeAreaView style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}
        >
            <View style={ styles.headerContainer }>
                <Text style={styles.headerTitle}>
                    App Name
                </Text>
            </View>
            <ScrollView 
                style={styles.contentContainer}
            >
                {(
                    Object.keys(stacks).map( (key, index) => (
                        <View key={ index } 
                            style={[ styles.itemContainer, { borderTopWidth: (index === 0) ? 1 : 0 } ]}
                        >
                            <TouchableOpacity 
                                onPress={ () => navigation( key ) }
                            >
                                <Text style={ styles.itemText }>
                                    { stacks[key].title }
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))
                )}
            </ScrollView>
            <View style={styles.footerContainer}>
                <TouchableOpacity 
                    onPress={ () => onLogout() }
                >
                    <Text style={styles.footerText}>
                        Log out
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default DrawerMenu;