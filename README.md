# React-Size-Hook

React-size-hook is a React hook designed to calculate the screen size. It's helpful to identify what kind o device the page is being rendered and conditionally render something based on that info.

## Installation

React-Scrollbar-Size is available as an [npm package](https://www.npmjs.com/search?q=react-size-hook):

```bash
# using npm
npm i react-size-hook

# using yarn
yarn add react-size-hook
```

## Usage

The `useScreenSize` hook returns an object with the following properties

### screenSize

An `object` with the current screen's width and height

```ts
{
  height: number;
  width: number;
}
```

### isLargeDesktop

`boolean` that tells with the current screen width is over 1200px

### isDesktop

`boolean` that tells with the current screen width is over 992px

### isTablet

`boolean` that tells with the current screen width is over 768px

### isLargeMobile

`boolean` that tells with the current screen width is over 576px

### isMobile

`boolean` that tells with the current screen width is bellow 576px

## Example

```ts
import React from 'react';
import { useScreenSize } from 'react-size-hook';

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
```
