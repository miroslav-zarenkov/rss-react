import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ErrorBoundary from '../providers/ErrorBoundary/ErrorBoundary';

function MainPage() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Header />
        <Content />
      </ErrorBoundary>
    </Provider>
  );
}

export default MainPage;
