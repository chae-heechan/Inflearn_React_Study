
import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import EmptyPage from "./component/EmptyPage";

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<DayList/>}>
          </Route>
          <Route path="/day/:day" element={<Day/>}>
          </Route>
          <Route element={<EmptyPage/>}>
          </Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
