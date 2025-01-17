import React from "react"

const Header = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false)
    const scrollToNavigate = (e)=>{
        console.log(e)
        const product = document.getElementById("product");
        const home = document.getElementById("home");
        const contact = document.getElementById("contact")
        if(e=== "Car" || "Bike" || "Health" || "Life"){
            product.scrollIntoView({
                behavior:"smooth"
            })
        }
        if(e==="Home"){
            home.scrollIntoView({
                behavior:"smooth"
            })
        }
        if(e==="contact"){
            contact.scrollIntoView({
                behavior:"smooth"
            })
        }
        
    }
    const [background, setBackground] = React.useState("bg-transparent")
    // const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        
        setBackground("bg-white border-b")
      } else {
        setBackground("bg-transparent")
        
      }
    });
    return (
        <div className={`fixed top-0 z-[9] w-full sm:py-4 px-4 py-2 ${background}`}>
            <div className="max-w-[1250px] mx-auto flex justify-between items-center">
                <div onClick={()=>scrollToNavigate("Home")}>
                    <img src="/insurance.png" alt="logo" width={54} />
                </div>
                <div className="sm:flex gap-12 hidden font-semibold text-gray-500">
                    {menuArray?.map((item,index)=>{
                        return(

                            <p key={index} className="cursor-pointer" onClick={()=>scrollToNavigate(item?.menu)}>{item?.menu}</p>
                        )
                    })}
                    <p className="cursor-pointer" >Raise A Claim</p>
                </div>
                <div onClick={()=>scrollToNavigate("contact")}>
                    <button className="border px-4 py-2 rounded-md bg-white bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">Become A Partner</button>
                </div>
                {/* <div className="sm:hidden block cursor-pointer" onClick={() => setToggleMenu(true)}>
                    <img src="/png/menu.png" alt="menu" width={24} />
                </div> */}
            </div>
            
        </div>
    )
}
export default Header
const menuArray = [
    {
        menu:"Car"
    },
    {
        menu:"Bike"
    },
    {
        menu:"Health"
    },
    {
        menu:"Life"
    },
]