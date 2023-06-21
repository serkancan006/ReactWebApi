import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(carts, totalAmount, itemCount, "carts");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>

        {
            carts?.length > 0 ? <div>
                {
                    carts?.map((cart, i)=>{
                        return <CartComp key={i} cart={cart}/>
                    })
                }
                <div className="flex items-center justify-end text-2xl">TOPLAM TUTAR : <span className="font-bold text-3xl ml-2">{totalAmount} TL</span></div>
            </div> : 
            <div>
                Kartınız Boş...
            </div>
        }
    </div>
  );
};

export default Cart;
