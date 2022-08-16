
import {Grid, Paper} from "@mui/material";
import { useEffect } from "react";
import AppPagination from "../../app/components/AppPagination";
import CheckboxButtons from "../../app/components/CheckboxButtons";
import RadioButtonGroup from "../../app/components/RadioButtonGroup";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import {fetchFilters, fetchProductsAsync, productSelectors, setPageNumber, setProductParams } from "./catalogSlice";
import ProductList from "./ProductList";
import ProductSearch from "./ProductSearch";
import "./catalogcomp.css";



const sortOptions = [
      {value: 'name', label: 'A-Z'},
      {value: 'priceDesc', label: 'Price - High to low'},
      {value: 'price', label: 'Price - Low to high'}
]




export default function Catalog() {

     const products = useAppSelector(productSelectors.selectAll);
     const {productsLoaded, filtersLoaded, brands, productParams, metaData } = useAppSelector(state => state.catalog);
     const dispatch = useAppDispatch();


    useEffect(() => {
      
     if (!productsLoaded) dispatch(fetchProductsAsync());
}, [productsLoaded, dispatch])


    useEffect(() => {
     if (!filtersLoaded) dispatch(fetchFilters());
}, [dispatch, filtersLoaded])


if (!filtersLoaded) return <LoadingComponent message='Loading products...' />
    

     return (
         <Grid container direction={{xs:"column", md: "row", lg: "row"}} spacing={4}>
              <Grid item xs={3}>
               <Paper sx={{mb:2}}>
                    <ProductSearch />
               </Paper>
               <Paper sx={{mb: 2, p: 1}}>
                  <RadioButtonGroup
                              selectedValue={productParams.orderBy}
                              options={sortOptions} 
                              onChange={(e) => dispatch(setProductParams({orderBy: e.target.value}))}
                          />
              </Paper>


            <Paper sx={{mb: 2, p: 1 }}>
                   <CheckboxButtons 
                        items={brands}
                        checked={productParams.brands}
                        onChange={(items: string[]) => dispatch(setProductParams({brands: items}))}
                   /> 
            </Paper>
                    
        </Grid>
        <Grid item xs={9}>
          <ProductList products={products} />
          </Grid>
           <Grid item xs={3} />
           <Grid item xs={9}>
                {metaData &&
               <AppPagination 
                   metaData={metaData}
                   onPageChange={(page: number) => dispatch(setPageNumber({pageNumber: page}))}
               />}
           </Grid> 
      </Grid>
     
     )
}

