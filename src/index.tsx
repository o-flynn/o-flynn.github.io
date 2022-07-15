import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from "react-router-dom";
import { mergeStyles } from '@fluentui/react';
import reportWebVitals from './reportWebVitals';
import './index.css';

import TextPage from './Pages/TextPage';
import ListPage from './Pages/ListPage';
import { Landing } from './Pages/Landing';

export const pages = ["professional", "academic", "personal"]

// Inject some global styles
mergeStyles({
  ':global(body,html,#root)': {
    margin: 0,
    padding: 0,
    height: '100vh',
  },
});

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="professional" element={<ListPage entryJSON='professional'/>} />
      <Route path="academic" element={<ListPage entryJSON='academic'/>} />
      <Route path="personal" element={<TextPage contentJSON='personal'/>} />
    </Routes>
  </HashRouter>,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
