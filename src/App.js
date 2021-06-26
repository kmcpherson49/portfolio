

import React, { useState } from 'react';
import Nav from './components/Nav/nav';
import Page from './components/Page/page';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const[tabs] = useState([
    {name: 'about me'
  },
  {name: 'portfolio'
  },
  {name: 'resume'
  },
  {name: 'contact'
  },
  ]);

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <div className="color-change-2x">
      <Nav
      tabs={tabs}
      setCurrentTab={setCurrentTab}
      currentTab={currentTab}
      ></Nav>
      <main>
      <Page currentTab={currentTab}></Page>
      </main>
      <footer>
      <h2>Made by KLM</h2>
    </footer>
    </div>
  );
}

export default App;
