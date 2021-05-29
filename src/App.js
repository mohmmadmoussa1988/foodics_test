import React from "react";
import CustomersPage from "./screens/customers-page/customers-page";
import { AppWrapper } from "./App.styles";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage.component";
import GlobalStyle from "./assets/fonts/font";
import EditCustomerPage from "./screens/Edit-customer-page/Edit-customer-page";
import { Route, Switch } from "react-router";
import CategoriesPage from "./screens/categories-page/categories-page";
import CategoriesSortingPage from "./screens/categories-sorting/categories-sorting";
import EditCategoryPage from "./screens/Edit-categories/Edit-categories-page";
import ProductsPage from "./screens/products-page/products-page";
import EditProductPage from "./screens/Edit-products-page/Edit-products-page";
import NotFound from "./screens/not-found/not-found";
function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <BackgroundImage />
      <Switch>
        <Route exact path="/">
          <CustomersPage />
        </Route>
        <Route path="/edit/customer/:id">
          <EditCustomerPage />
        </Route>
        <Route path="/edit/category/:id">
          <EditCategoryPage />
        </Route>

        <Route exact path="/categories/sorting">
          <CategoriesSortingPage />
        </Route>
        <Route exact path="/categories">
          <CategoriesPage />
        </Route>

        <Route exact path="/products">
          <ProductsPage />
        </Route>

        <Route exact path="/edit/products/:id">
          <EditProductPage />
        </Route>

        <Route component={NotFound} />
      </Switch>
    </AppWrapper>
  );
}

export default App;
