"use client"
import React from "react"
import Cards from "../card-ui/Card";
const InsuranceProducts = () => {
    const [selectedTab, setSelectedTab] = React.useState("Bike");
    return (
        <div className="mt-6">
            <div className=" flex sm:max-w-[350px] max-w-[240px] mx-auto justify-between gap-4 text-center">
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

                                        <Cards key={ind} className={"min-w-[140px] !max-w-[145px] sm:!max-w-[180px] w-full !shadow-none sm:!p-4 !p-2"}>
                                            <img src={value?.imageUrl} alt="image" className="w-[52px] h-[52px] mx-auto" />
                                            <p className="text-center text-[16px] text-gray-500 mt-1">{value?.title}</p>
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
                imageUrl: "/products/medical.png",
                title: "Mediclaim"
            },
            {
                imageUrl: "/products/citizen.png",
                title: "Senior Citizen"
            },
            {
                imageUrl: "/products/family.png",
                title: "Family Plans"
            },
            {
                imageUrl: "/products/maternity.png",
                title: "Maternity Plans"
            },
            {
                imageUrl: "/products/illness.png",
                title: "Critical Illness"
            },
            {
                imageUrl: "/products/accident.png",
                title: "Personal Accident"
            },
        ]
    },
    {
        tabName: "Life",
        collection: [
            {
                imageUrl: "/products/term.png",
                title: "Term"
            },
            {
                imageUrl: "/products/umbrella.png",
                title: "ULIPs"
            },
            {
                imageUrl: "/products/saving.png",
                title: "Savings"
            },
            {
                imageUrl: "/products/pension.png",
                title: "Pension Plans"
            },
            {
                imageUrl: "/products/child.png",
                title: "Child Insurance"
            },
            {
                imageUrl: "/products/money.png",
                title: "Money Back"
            },
           
        ]
    },

]