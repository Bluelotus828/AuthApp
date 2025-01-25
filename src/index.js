/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from '../app.json';

// Register the application
AppRegistry.registerComponent(appName, () => App);

// If running on the web, render to the "app" div
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app'),
});
