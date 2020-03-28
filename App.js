import * as React from 'react';
import AppContainer from '~_drawers';
import { SafeAreaView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { setNavigation } from '~_services/navigation.service';
import { useSelector } from 'react-redux';

const App = () => {
	const { screenLoading } = useSelector( state => state.alert );
	
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Spinner
				visible={ screenLoading }
				textContent={''}
				textStyle={{ color: '#FFF' }}
			/>
			<AppContainer 
        		ref={ navigation => setNavigation( navigation )}
			/>
		</SafeAreaView>
	)
}

export default App;