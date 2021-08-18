

import React, { useState } from 'react';
import Nav from './components/Nav/nav';
import Page from './components/Page/page';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

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
      <footer class="footer py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-start text">Copyright &copy; Krista McPherson 2021</div>
                    <div class="col-lg-4 my-3 my-lg-0">
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <div class="col-lg-4 text-lg-end">
                        <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
