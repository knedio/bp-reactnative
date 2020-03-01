import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Registration from '../screens/Registration';

const AuthNavigation = createStackNavigator(
    {
        Login: { 
            screen: Login 
        },
        Registration: { 
            screen: Registration
        },
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
    }
)

export default AuthNavigation