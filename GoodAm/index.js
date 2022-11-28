/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SnoozeScreen from './components/screens/SnoozeScreen';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('snooze-screen', () => SnoozeScreen);
