import React, { Suspense, ReactElement, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Global } from '@emotion/core';

import { globalStyles } from './app/uikit';

const TestPage = lazy(() =>
  import('./app/components/TestPage' /* webpackChunkName: "test-page" */),
);

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Global styles={globalStyles} />
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path="/" exact component={TestPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
