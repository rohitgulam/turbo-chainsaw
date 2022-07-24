import { createContext, useState } from "react";

const OptionContext = createContext();

export function OptionProvider({children}){
    
    // For stats and toggling it
    const [stats, setStats] = useState(false);
    const toggleStats = ()=>{
        setStats(!stats)
    }

    // For dark tweet image and toggling it
    const [dark, setDark] = useState(false);
    const toggleDark = ()=>{
        setDark(!dark)
    }

    return(
        <OptionContext.Provider value={{stats, toggleStats, dark, toggleDark}}>
            {children}
        </OptionContext.Provider>
    )
}

export default OptionContext;

// import { createContext, useStae } from "react";

// const CartContext = createContext();

// export function CartProvider({ children }){
//     return(
//         <CartContext.Provider value={{item:4}}>
//             {children}
//         </CartContext.Provider>
//     )
// }

// export default CartContext;