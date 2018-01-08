import configureStoreProd from './configureStore.production';
import configureStoreDev from './configureStore.development';

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;
export default configureStore;