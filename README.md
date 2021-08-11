# UI React Component Project (WIP)

### Installing as a dependency
``` cmd
npm install -i hlym-reactui
```
or
```cmd
yarn add hlym-reactui
```

### Usage

```jsx
import React from 'react'

import { Button } from 'hlym-reactui';

export default const App = () => <Button>hahah</Button>
```

entry file  add global CSS

``` jsx
import React from 'react';
import ReactDOM from 'react-dom';
import 'hlym-reactui/lib/style/entry.css'

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

```