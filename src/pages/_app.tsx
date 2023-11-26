import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/normalize.css';
import { wrapper } from './api/store';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
