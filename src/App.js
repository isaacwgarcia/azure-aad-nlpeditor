/*
 *
 * Copyright 2022 Elyra Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import { Provider } from 'react-redux';
import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderMenuItem,
} from 'carbon-components-react';
import VisualEditor from './nlp-visual-editor';
import { store } from './redux/store';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { SignIn, SignOut } from './nlp-visual-editor/components/Login';
import { User16 } from '@carbon/icons-react';
import { UnsupportedFormatterError } from 'react-intl';
const App = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <Provider store={store}>
      <Header aria-label="Elyra Open Source">
        <HeaderName href="#" prefix="Elyra">
          Visual Editor for NLP rules
        </HeaderName>
        {isAuthenticated ? (
          <HeaderGlobalBar>
            <HeaderMenuItem style={{ display: 'inline' }}>
              <User16 />
            </HeaderMenuItem>
            <HeaderMenuItem style={{ display: 'inline', cursor: 'pointer' }}>
              <SignOut />
            </HeaderMenuItem>
          </HeaderGlobalBar>
        ) : (
          <HeaderGlobalBar>
            <HeaderMenuItem style={{ display: 'inline', cursor: 'pointer' }}>
              <SignIn />
            </HeaderMenuItem>
          </HeaderGlobalBar>
        )}
      </Header>

      {isAuthenticated ? <VisualEditor /> : <>NOT SIGNED IN</>}
    </Provider>
  );
};

export default App;
