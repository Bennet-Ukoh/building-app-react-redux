import HomePage from "./component/home/HomePage";
import AboutPage from "./component/about/AboutPage";
import { Route, Routes } from "react-router-dom";
import Header from "./component/common/Header";
import PageNotFound from "./component/PageNotFound";
import CoursesPage from "./component/courses/CoursesPage"

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
    </div>
  );
}

export default App;
