import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createBrowserHistory } from "history";
import { ABOUT, BLOG, HOME, PORTFOLIO, RESUME } from "./constants/url";
import {
  HomePage,
  Page404,
  AboutPage,
  ResumePage,
  PortfolioPage,
  BlogPage,
} from "./pages";

function App() {
  const history = createBrowserHistory({
    basename: process.env.REACT_APP_BASE_URL,
  });
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path={HOME} component={HomePage} />
          <Route exact path={ABOUT} component={AboutPage} />
          <Route exact path={RESUME} component={ResumePage} />
          <Route exact path={PORTFOLIO} component={PortfolioPage} />
          <Route exact path={BLOG} component={BlogPage} />
          <Route path='*' exact component={Page404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
