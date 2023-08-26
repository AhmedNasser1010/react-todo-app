import {BrowserRouter , Routes , Route} from 'react-router-dom';

import Home from "./Component/Home.js";
import Signup from "./Component/Signup.js";
import Login from "./Component/Login.js";
import Tasks from "./Component/Tasks.js";
import New from "./Component/New.js";
import Settings from "./Component/Settings.js";
import AddCategory from "./Component/AddCategory.js";

function App() {
  return (

    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="new" element={<New />} />
          <Route path="new/add-category" element={<AddCategory />} />
          <Route path="settings" element={<Settings />} />
          <Route path="categories/:category" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;