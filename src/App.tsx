import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ResetCSS } from 'uikit';
import ToastListener from 'uikit/components/ToastListener';
import GlobalStyle from 'uikit/Global';
import Nav from 'views/Nav';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ResetCSS/>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<Nav />} >
          <Route 
            path='*'
            element={
              <h2>Nothing here</h2>
            }
          />
        </Route>
        
      </Routes>
      <ToastListener />
    </BrowserRouter>
  )
}

export default App;
