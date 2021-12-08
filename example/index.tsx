import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useScreenSize } from '../.';

const App = () => {
  const {
    isDesktop,
    isTablet,
    isMobile,
    isLargeMobile,
    isLargeDesktop,
    screenSize,
  } = useScreenSize();

  return (
    <div>
      <h1>Resize me!</h1>

      <h2>Screen size</h2>
      <p>
        Width: <b>{screenSize.width}</b>
      </p>
      <p>
        height: <b>{screenSize.height}</b>
      </p>

      <h2>Devices helper</h2>

      <p>
        isLargeDesktop (screen over 1200px):{' '}
        <b>{isLargeDesktop ? 'True' : 'False'}</b>
      </p>

      <p>
        isDesktop (screen over 992px): <b>{isDesktop ? 'True' : 'False'}</b>
      </p>

      <p>
        isTablet (screen over 768px): <b>{isTablet ? 'True' : 'False'}</b>
      </p>

      <p>
        isLargeMobile (screen over 576px):{' '}
        <b>{isLargeMobile ? 'True' : 'False'}</b>
      </p>

      <p>
        isMobile (screen bellow 576px): <b>{isMobile ? 'True' : 'False'}</b>
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
