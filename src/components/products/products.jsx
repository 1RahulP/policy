"use client"
import React from "react"
import Cards from "../card-ui/Card";
const InsuranceProducts = () => {
    const [selectedTab, setSelectedTab] = React.useState("Bike");
    return (
        <div className="mt-6">
            <div className=" flex max-w-[350px] mx-auto justify-between gap-4 text-center">
                {productsTab?.map((item, index) => {
                    return (
                        <div key={index} className="h-fit">
                            <p className={`cursor-pointer sm:text-xl px-2 pb-1 ${selectedTab===item?.tabName ? "text-blue-800 border-b-[3px] border-blue-800":""}`} onClick={() => setSelectedTab(item?.tabName)}>{item?.tabName}</p>
                        </div>
                    )
                })}
            </div>
            <div className="max-w-[1250px] mx-auto sm:mt-8 mt-4">
            {productsTab?.map((items, index) => {
                return (

                    <div key={index} className="overflow-hidden">
                        {selectedTab === items?.tabName &&
                            <div className="flex flex-wrap gap-4 mx-auto justify-center">
                                {items?.collection?.map((value, ind) => {
                                    return (

                                        <Cards key={ind} className={"min-w-[140px] max-w-[140px] w-full sm:shadow-xl shadow-none"}>
                                            <img src={value?.imageUrl} alt="image" className="w-[52px] h-[52px] mx-auto" />
                                            <p className="text-center text-[16px] text-gray-500">{value?.title}</p>
                                        </Cards>
                                    )
                                })}

                            </div>
                        }

                    </div>
                )
            })}
</div>
        </div>
    )
}
export default InsuranceProducts
const productsTab = [
    {
        tabName: "Bike",
        collection: [
            {
                imageUrl: "/products/hand.png",
                title: "Third Party"
            },
            {
                imageUrl: "/products/comprehensive.png",
                title: "Comprehensive"
            },
            {
                imageUrl: "/products/damage.png",
                title: "Own Damage"
            }
        ]
    },
    {
        tabName: "Car",
        collection: [
            {
                imageUrl: "/products/hand.png",
                title: "Third Party"
            },
            {
                imageUrl: "/products/comprehensive.png",
                title: "Comprehensive"
            },
            {
                imageUrl: "/products/damage.png",
                title: "Own Damage"
            }
        ]
    },
    {
        tabName: "Health",
        collection: [
            {
                imageUrl: "/products/hand.png",
                title: "Third Party"
            },
            {
                imageUrl: "/products/comprehensive.png",
                title: "Comprehensive"
            },
            {
                imageUrl: "/products/damage.png",
                title: "Own Damage"
            },
            {
                imageUrl: "/products/damage.png",
                title: "Own Damage"
            },
            {
                imageUrl: "/products/damage.png",
                title: "Own Damage"
            },
            {
                imageUrl: "/products/damage.png",
                title: "Own Damage"
            },
        ]
    },
    {
        tabName: "Life",
        collection: [
            {
                imageUrl: "/products/hand.png",
                title: "Third Party"
            },
            {
                imageUrl: "/products/comprehensive.png",
                title: "Comprehensive"
            },
            {
                imageUrl: "/products/damage.png",
                title: "Own Damage"
            },
            {
                imageUrl: "/products/damage.png",
                title: "Own Damage"
            },
            {
                imageUrl: "/products/damage.png",
                title: "Own Damage"
            },
            {
                imageUrl: "/products/damage.png",
                title: "Own Damage"
            },
            {
                imageUrl: "/products/damage.png",
                title: "Own Damage"
            },
        ]
    },

]