import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/Home";
import Category from "./pages/Category";
import Article from "./pages/Article";
import Search from "./pages/Search";
import Subscribe from "./pages/Subscribe";
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ServerError from "./pages/ServerError";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/category/:name" component={Category} />
      <Route path="/article/:id" component={Article} />
      <Route path="/search" component={Search} />
      <Route path="/subscribe" component={Subscribe} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/account" component={Account} />
      
      {/* Static Pages */}
      <Route path="/about" component={About} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/contact" component={Contact} />
      
      {/* Error Pages */}
      <Route path="/500" component={ServerError} />
      <Route path="/404" component={NotFound} />
      
      {/* Fallback */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
