import { getStorybookUI, configure } from '@storybook/react-native';
import './rn-addons';

configure(() => {
  require('./Canvas/canvas.stories');
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});
export default StorybookUIRoot;

