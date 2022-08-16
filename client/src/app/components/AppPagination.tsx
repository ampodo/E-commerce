import { Box, Pagination, Typography } from "@mui/material";
import { MetaData } from "../models/pagination";


interface Props {

    metaData: MetaData;
    onPageChange: (page: number) => void;
}


 export default function AppPagination({metaData, onPageChange}: Props) {
     const {currentPage, totalCount, totalPages, pageSize } = metaData;
     return (
            
        <Box display='flex' justifyContent='space-between' alignItems='center'>
         <Typography>
               {(currentPage-1)*pageSize+1}-
              {currentPage*pageSize > totalCount 
                   ? totalCount 
                   : currentPage*pageSize} of {totalCount} products   
        </Typography>
         <Pagination 
               color = 'standard'
               size='medium'
               count={totalPages}
               page={currentPage}
               onChange={(e, page) => onPageChange(page)}
               sx={{p:2}}
               
           />
   </Box>
     )
 }


