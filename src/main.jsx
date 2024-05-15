import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

{
  /* <React.StrictMode>
<BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
</BrowserRouter>
</React.StrictMode>, */
}
