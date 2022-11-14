import { Container, createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import ContactPage from "../../features/contact/ContactPage";
import { Route, Switch } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "../errors/NotFound";
import BasketPage from "../../features/basket/BasketPage";
import { useCallback, useEffect, useState } from "react";
import LoadingComponent from "./LoadingComponent";
import CheckoutPage from "../../features/checkout/CheckoutPage";
import { useAppDispatch } from "../store/configureStore";
import { fetchBasketAsync } from "../../features/basket/basketSlice";
import Login from "../../features/account/Login";
import Register from "../../features/account/Register";
import { fetchCurrentUser } from "../../features/account/accountSlice";
import PrivateRoute from "./PrivateRoute";
import Orders from "../../features/orders/Orders";
import Footer from "./Footer";
import HomePage from "../../features/home/Homepage";


function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp]);

  const theme = createTheme({
    palette: {
      mode: "dark",
    },

    typography: {
      fontFamily: ["Poppins", "Open Sans"].join(","),
    },
  });

  if (loading) return <LoadingComponent message="Loading app..." />;

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar />
      <CssBaseline />
      <Header />
      <main className="container content">
        <Route exact path="/" component={HomePage} />
       
        
        <Route
          path={"/(.+)"}
          render={() => (
            <Container sx={{ mt: 4 }}>
              <Switch>
                <Route exact path="/catalog" component={Catalog} />
                <Route path="/catalog/:id" component={ProductDetails} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/basket" component={BasketPage} />
                <PrivateRoute path="/checkout" component={CheckoutPage} />
                <PrivateRoute path="/orders" component={Orders} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          )}
        />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
