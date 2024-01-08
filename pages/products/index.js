import { ListItem } from "@mui/material";
import { useState } from "react";

export default function Products(){
      const [products, setProducts] = useState([]);
    return (
        <div className="container">
            <h1>Product List</h1>
            <button onClick={()=>setProducts([...products,{name:"Apple",price:50}])}>Add Item </button>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                            <td>book</td>
                            <td>3000</td>
                            </tbody>
                            </table>                    
        </div>
    )
}