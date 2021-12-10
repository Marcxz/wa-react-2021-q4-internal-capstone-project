import "./Checkout.css"
import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom" 
import EcommerceContext from "../../state/Context"

function Checkout () {
    const {cart,totalCart, customer, setCustomer} = useContext(EcommerceContext)
    
    const doOrder = () => {
        setCustomer({
            name: document.getElementById('customerName').value,
            email: document.getElementById('customerEmail').value,
            zipCode: document.getElementById('customerZipCode').value,
            notes: document.getElementById('customerNotes').value,
        })
        alert("Pago realizado con éxito")
    }
    const fillCustomerData = () => {
        document.getElementById('customerName').value = customer.name;
        document.getElementById('customerEmail').value = customer.email;
        document.getElementById('customerZipCode').value = customer.zipCode;
        document.getElementById('customerNotes').value = customer.notes;
    }
    
    useEffect(() => {
        fillCustomerData()
    })

    return (
        <div className="containerCheckout">
            <Link to="/cart">
                <button className="btn"> 
                    <img className="iconLeft" alt="Regresar icon" src="/assets/arrow_back.png" />
                    Regresar
                </button>
            </Link>
            <div class="rowCheckout">
                <h1>Proceso de Pago</h1>
            </div>
            <div class="tblCheckout">
                <div class="sectionCeckout">
                    <h3>Datos del cliente</h3>
                    <div class="rowSection">
                        <span className="labelCheckout">Nombre:</span>
                        <input  id="customerName" className="inputCheckout" type="text"/>
                    </div>
                    <div class="rowSection">
                        <span className="labelCheckout">Correo electronico:</span>
                        <input  id="customerEmail" className="inputCheckout" type="email" />
                    </div>
                    <div class="rowSection">
                        <span className="labelCheckout">Còdigo postal:</span>
                        <input  id="customerZipCode" className="inputCheckout" type="number" />
                    </div>
                    <div class="rowSection">
                        <textarea className="noteSection" placeholder="Notas:" id="customerNotes" rows="4">

                        </textarea>
                    </div>
                </div>
                <div>

                </div>
                <div class="sectionCeckout">
                    <h3>Resumen de compra:</h3>
                    <table class="checkoutTable">
                      <thead>
                          <tr>
                              <th>Articulo</th>
                              <th>Cantidad</th>
                              <th>Precio</th>
                          </tr>
                      </thead>
                      <tbody>
                        {cart.map((p, index) => 
                          <tr key={index}>
                              <td>{p.product.data.name}</td>
                              <td>{p.quantity}</td>
                              <td>{p.quantity * p.product.data.price}</td>
                          </tr>
                        )} 
                      </tbody>
                  </table>
                    <div class="rowSection">
                        <span className="labelCheckout">Total a Pagar:</span>
                        <span className="inputCheckout">$ {totalCart}</span>
                    </div>
                </div>
            </div>
            <div class="rowCheckout">
            <Link to="/cart">
                <button className="btn"> 
                    <img className="iconLeft" alt="Regresar icon" src="/assets/arrow_back.png" />
                    Regresar al carrito de compras
                    <img className="iconRight" alt="Carrito icon" src="/assets/shopping_cart_icon.png" />
                </button>
            </Link>
            <button className="btn" onClick={() => doOrder()}> 
                Hacer la Orden
                <img className="iconRight" alt="Proceder al pago icon" src="/assets/checkout.png" />
            </button>
                
            </div>

        </div>
    )
        
}

export default Checkout;