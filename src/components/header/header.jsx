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
        // selectedMenu.scrollIntoView({
        //     behavior:"smooth"
        // })
    }
    return (
        <div className="bg-[#ffffffde] fixed top-0 z-[9] w-full border-b sm:py-4 px-4 py-2">
            <div className="max-w-[1250px] mx-auto flex justify-between items-center">
                <div onClick={()=>scrollToNavigate("Home")}>
                    <img src="/insurance.png" alt="logo" width={54} />
                </div>
                <div className="sm:flex gap-12 hidden font-semibold text-gray-500">
                    {menuArray?.map((item,index)=>{
                        return(

                            <p className="cursor-pointer" onClick={()=>scrollToNavigate(item?.menu)}>{item?.menu}</p>
                        )
                    })}
                    <p className="cursor-pointer" >Raise A Claim</p>
                </div>
                <div className="sm:block hidden" onClick={()=>scrollToNavigate("contact")}>
                    <button className="border px-4 py-2 rounded-md bg-white bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">Become A Partner</button>
                </div>
                <div className="sm:hidden block cursor-pointer" onClick={() => setToggleMenu(true)}>
                    <img src="/png/menu.png" alt="menu" width={24} />
                </div>
            </div>
            {toggleMenu &&
                <div className="bg-white text-white fixed top-0 h-screen w-screen left-0 py-2 px-4">
                    <div className="flex items-center justify-between">
                        <img src="/insurance.png" alt="logo" width={54} />
                    <img src="/png/close.png" alt="menu" width={24} className="flex-none" onClick={()=>setToggleMenu(false)} />

                    </div>
                    <div className="h-[91%] grid">
                        <div className="text-black text-lg grid gap-3 h-fit mt-8">
                            <p className="cursor-pointer bg-gradient-to-r from-blue-100 via-blue-100  border-blue-800 to-blue-50 rounded-md px-3 py-1.5 h-fit">Car</p>
                            <p className="cursor-pointer bg-gradient-to-r from-blue-100 via-blue-100  border-blue-800 to-blue-50 rounded-md px-3 py-1.5 h-fit">Bike</p>
                            <p className="cursor-pointer bg-gradient-to-r from-blue-100 via-blue-100  border-blue-800 to-blue-50 rounded-md px-3 py-1.5 h-fit">Health</p>
                            <p className="cursor-pointer bg-gradient-to-r from-blue-100 via-blue-100  border-blue-800 to-blue-50 rounded-md px-3 py-1.5 h-fit">Life</p>
                        </div>
                        <div className="my-auto ">
                            <p className="text-blue-700 font-semibold mb-2">
                            Raise A Claim
                            </p>
                            <p className="text-blue-700 font-semibold">
                                Become A Partner
                            </p>

                        </div>
                    </div>
                </div>
            }
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