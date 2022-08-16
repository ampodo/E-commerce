

import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import {useEffect, useState} from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Order } from "../../app/models/order.ts";
import { currencyFormat } from "../../app/util/util";
import "./order.css";

export default function Orders() {

       const [orders, setOrders] = useState<Order[] | null>(null);
       const [loading, setLoading] = useState(true);
       
       
       useEffect(() => {
            agent.Orders.list()
            .then(orders => setOrders(orders))
            .catch(error => console.log(error))
            .finally(() => setLoading(false)); 
       }, [])

       if (loading) return <LoadingComponent message='Loading orders...' />

       return (

        <TableContainer component={Paper} sx={{mt:6}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order number</TableCell>
              <TableCell align="center">Total</TableCell>
              <TableCell align="center">Order Date</TableCell>
              <TableCell align="center">Order Status</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.map((order) => (
              <TableRow
                key={order.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.id}
                </TableCell>
                <TableCell align="center">{currencyFormat(order.subtotal)}</TableCell>
                <TableCell align="center">{order.orderDate.split('T')[0]}</TableCell>
                <TableCell  align="center">{order.orderStatus}</TableCell>
                <TableCell  align="right"> 
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    

       )

}
