"use client"
import React from "react"
import Cards from "../card-ui/Card";
const InsurancePartners = () => {
    const [selectedTab, setSelectedTab] = React.useState("Bike");
    return (
        <div className="mt-6">
            <div className=" flex sm:max-w-[350px] max-w-[310px] mx-auto justify-between gap-4 text-center">
                {productsTab?.map((item, index) => {
                    return (
                        <div key={index} className="h-fit">
                            <p className={`cursor-pointer sm:text-xl px-2 pb-1 ${selectedTab === item?.tabName ? "text-blue-800 border-b-[3px] border-blue-800" : ""}`} onClick={() => setSelectedTab(item?.tabName)}>{item?.tabName}</p>
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
                                                <img src={value?.imageUrl} alt="image" className="h-[60px] mx-auto" />
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
export default InsurancePartners
const productsTab = [
    {
        tabName: "Bike",
        collection: [
            {
                imageUrl: "/products/Bajaj-Allianz-Insurance.webp",
            },
            {
                imageUrl: "/products/HDFC-ERGO-Insurance.webp",
            },
            {
                imageUrl: "/products/ICICI-Lombard-Insurance.webp",
            },
            {
                imageUrl: "/products/IFFCO-Tokio-Insurance.webp",
            },
            {
                imageUrl: "/products/National-Insurance.webp",
            },
            {
                imageUrl: "/products/New-India-Assurance-Insurance.webp",
            },
            {
                imageUrl: "/products/Oriental-Insurance.webp",
            },
            {
                imageUrl: "/products/Reliance-Insurance.webp",
            },
            {
                imageUrl: "/products/TATA-AIG-Insurance.webp",
            },
            {
                imageUrl: "/products/United-India-Insurance.webp",
            },
        ]
    },
    {
        tabName: "Car",
        collection: [
            {
                imageUrl: "/products/Bajaj-Allianz-Insurance.webp",
            },
            {
                imageUrl: "/products/Cholamandalam-Insurance.webp",
            },
            {
                imageUrl: "/products/Future-Generali-Insurance.webp",
            },
            {
                imageUrl: "/products/HDFC-ERGO-Insurance.webp",
            },
            {
                imageUrl: "/products/ICICI-Lombard-Insurance.webp",
            },
            {
                imageUrl: "/products/IFFCO-Tokio-Insurance.webp",
            },
            {
                imageUrl: "/products/Kotak-General-Insurance.webp",
            },
            {
                imageUrl: "/products/National-Insurance.webp",
            },
            {
                imageUrl: "/products/New-India-Assurance-Insurance.webp",
            },
            {
                imageUrl: "/products/Oriental-Insurance.webp",
            },
        ]
    },
    {
        tabName: "Health",
        collection: [
            {
                imageUrl: "/products/Aditya-Birla-Insurance.webp",
            },
            {
                imageUrl: "/products/Bajaj-Allianz-Insurance.webp",
            },
            {
                imageUrl: "/products/Care-Insurance.webp",
            },
            {
                imageUrl: "/products/Cholamandalam-Insurance.webp",
            },
            {
                imageUrl: "/products/Future-Generali-Insurance.webp",
            },
            {
                imageUrl: "/products/HDFC-ERGO-Insurance.webp",
            },
            {
                imageUrl: "/products/ICICI-Lombard-Insurance.webp",
            },
            {
                imageUrl: "/products/IFFCO-Tokio-Insurance.webp",
            },
            {
                imageUrl: "/products/Kotak-General-Insurance.webp",
            },
            {
                imageUrl: "/products/Manipal-Cigna-Insurance.webp",
            },
            
        ]
    },
    {
        tabName: "Life",
        collection: [
            {
                imageUrl: "/products/Aviva_Insurance.webp",
            },
            {
                imageUrl: "/products/Bajaj-Allianz-Insurance.webp",
            },
            {
                imageUrl: "/products/Birla_Sunlife_Insurance.webp",
            },
            {
                imageUrl: "/products/Canara_HSBC_Insurance.webp",
            },
            {
                imageUrl: "/products/Edelweis_Tokio_Insurance.webp",
            },
            {
                imageUrl: "/products/Exide-insurance.webp",
            },
            {
                imageUrl: "/products/Future-Generali-Insurance.webp",
            },
            {
                imageUrl: "/products/HDFC_Life_Insurance.webp",
            },
            {
                imageUrl: "/products/ICICI_Pru_Insurance.webp",
            },
            {
                imageUrl: "/products/IDBI_Fed_Insurance.webp",
            },
            
        ]
    },
    {
        tabName: "Other",
        collection: [
           
            {
                imageUrl: "/products/HDFC_Life_Insurance.webp",
            },
            
        ]
    },
]