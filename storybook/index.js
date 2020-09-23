// import { AppRegistry } from 'react-native';
// import { getStorybookUI, configure } from '@storybook/react-native';

// import './rn-addons';

// // import stories
// configure(() => {
//   require('./stories');
// }, module);

// // Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// // To find allowed options for getStorybookUI
// const StorybookUIRoot = getStorybookUI({});

// // If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// // If you use Expo you can safely remove this line.
// AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

// export default StorybookUIRoot;

//   // // storybook/index.js
//   // import { getStorybookUI, configure } from '@storybook/react-native';

//   // import './rn-addons';
  
//   // // import stories
//   // configure(() => {
//   //   require('../components/Task.stories.js');
//   // }, module);
  
//   // const StorybookUIRoot = getStorybookUI({
//   //   asyncStorage: null,
//   // });
  
//   // export default StorybookUIRoot;


import { getStorybookUI, configure } from '@storybook/react-native';
import './rn-addons';

configure(() => {
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: false,
});
export default StorybookUIRoot;
