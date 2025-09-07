import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Innovation from "@/pages/innovation";
import Healthcare from "@/pages/healthcare";
import Finance from "@/pages/finance";
import OneStream from "@/pages/onestream";
import BankAmerica from "@/pages/bank-america";
import AIArticle from "@/pages/ai-article";
import Resume from "@/pages/resume";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/innovation" component={Innovation} />
      <Route path="/healthcare" component={Healthcare} />
      <Route path="/finance" component={Finance} />
      <Route path="/onestream" component={OneStream} />
      <Route path="/bank-america" component={BankAmerica} />
      <Route path="/ai-article" component={AIArticle} />
      <Route path="/resume" component={Resume} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
