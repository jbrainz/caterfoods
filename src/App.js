import Header from "./code/layouts/Header"
import { ThemeProvider } from "@material-ui/styles"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import theme from "./code/Components/Theme"
import { AppProvider } from "./code/Components/context/ContextState"

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route
              exact
              path="/order"
              component={() => <div>Explore Our Fleets</div>}
            />
            <Route
              exact
              path="/about"
              component={() => <div>Explore Our Fleets</div>}
            />
            <Route
              exact
              path="/contact"
              component={() => <div>Explore Our Fleets</div>}
            />
            <Route
              exact
              path="/menu"
              component={() => <div>Explore Our Fleets</div>}
            />
            <Route exact path="/" component={() => <div>Landing Page</div>} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </AppProvider>
  )
}

export default App
