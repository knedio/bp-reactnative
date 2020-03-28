import { StackActions, NavigationActions } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';

let _navigator;

export const setNavigation = (navigatorRef) => {
    _navigator = navigatorRef;
}

export const navigation = (routeName, params) => {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

export const pushNavigation = (routeName, params) => {
    _navigator.dispatch(
        StackActions.push({
            routeName,
            params,
        })
    );
}

export const popNavigation = (num = 1) => {
    _navigator.dispatch(
        StackActions.pop({
            n: num,
        })
    );
}

export const popTopNavigation = () => {
    _navigator.dispatch(
        StackActions.popToTop()
    );
}

export const resetNavigation = (routeName) => {
    _navigator.dispatch(
        StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: routeName })],
        })
    );
}

export const toggleDrawerNavigation = () => {
    _navigator.dispatch(
        DrawerActions.toggleDrawer()
    );
}