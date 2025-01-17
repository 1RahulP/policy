"use client"
import React from "react"
import Cards from "../card-ui/Card";
const InsuranceProducts = () => {
    const [selectedTab, setSelectedTab] = React.useState("Bike");
    return (
        <div className="mt-6">
            <div className="flex overflow-x-auto max-w-[850px] mx-auto sm:gap-4 gap-2 text-center" style={{scrollbarWidth:"none"}}>
                {productsTab?.map((item, index) => {
                    return (
                        <div key={index} className="h-fit w-fit">
                            <p className={`cursor-pointer sm:text-xl px-2 pb-1 w-fit ${selectedTab===item?.tabName ? "text-blue-800 border-b-[3px] border-blue-800":""}`} onClick={() => setSelectedTab(item?.tabName)}>{item?.tabName}</p>
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

                                        <Cards key={ind} className={"min-w-[140px] !max-w-[145px] sm:!max-w-[180px] w-full !shadow-none sm:!p-4 !p-2 !py-4"}>
                                            <img src={value?.imageUrl} alt="image" className=" sm:h-[44px] h-[36px] mx-auto" importance />
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
            {
                imageUrl: "/png/donor.png",
                title: "Donor Insurance"
            },
            {
                imageUrl: "/png/ivf.png",
                title: "IVF Insurance"
            },
            {
                imageUrl: "/png/employee.png",
                title: "Employer employee Insurance"
            },
            {
                imageUrl: "/png/employee-group.png",
                title: "Employee Group Medical Insurance"
            },
            {
                imageUrl: "/png/cancer.png",
                title: "⁠Cancer Insurance"
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
            {
                imageUrl: "/png/group.png",
                title: "Group Term"
            },
            {
                imageUrl: "/png/nri.png",
                title: "NRI Term Insurance"
            },
           
        ]
    },
    
    {
        tabName:"Property",
        collection: [
            {
                imageUrl: "/png/home.png",
                title: "Home Insurance"
            },
            {
                imageUrl: "/png/property.png",
                title: "Property Insurance"
            },
            {
                imageUrl: "/png/flat.png",
                title: "Flat Insurance"
            },
            {
                imageUrl: "/png/mortgage.png",
                title: "Mortgage Insurance"
            },
            {
                imageUrl: "/png/factory.png",
                title: "Factory Insurance"
            },
            {
                imageUrl: "/png/godown.png",
                title: "Godown Insurance"
            },
            {
                imageUrl: "/png/shop.png",
                title: "Shop Insurance"
            },
            {
                imageUrl: "/png/pg.png",
                title: "PG Insurance"
            },
            {
                imageUrl: "/png/hostel.png",
                title: "Hostel Insurance"
            },
            {
                imageUrl: "/png/corporate.png",
                title: "Corporate Insurance"
            },
            
            {
                imageUrl: "/png/land.png",
                title: "Land Insurance"
            },
           
        ]
    },
    {
        tabName:"Engineering",
        collection: [
            {
                imageUrl: "/png/risk.png",
                title: "Contractor's All Risk"
            },
            {
                imageUrl: "/png/ere.png",
                title: "Erection All Risk"
            },
            {
                imageUrl: "/png/equip.png",
                title: "Erection All Risk"
            },
            
        ]
    },
    
    {
        tabName:"Business",
        collection: [
            {
                imageUrl: "/png/marine.png",
                title: "Marine Insurance"
            }, 
            {
                imageUrl: "/png/fire.png",
                title: "Fire & Burglary"
            },
            {
                imageUrl: "/png/owner.png",
                title: "Shop Owner"
            },
            {
                imageUrl: "/png/office.png",
                title: "Office Package Policy"
            },
        ]
    },
    {
        tabName:"Liability",
        collection: [
            {
                imageUrl: "/png/doctor.png",
                title: "Professional Indemnity for Doctors"
            }, 
            {
                imageUrl: "/png/company.png",
                title: "Professional Indemnity for Companies"
            }, 
            {
                imageUrl: "/png/worker.png",
                title: "Workmen Compensation"
            }, 
            {
                imageUrl: "/png/cyber.png",
                title: "General Liability Cyber Insurance"
            }, 
            {
                imageUrl: "/png/director.png",
                title: "Directors & Officers Liability"
            }, 
           
        ]
    },
    {
        tabName: "Other",
        collection: [
            {
                imageUrl: "/png/mutual.png",
                title: "Mutual Fund"
            },
            {
                imageUrl: "/png/sip.png",
                title: "Lumpsum/SIP"
            },
           
            {
                imageUrl: "/png/security2.png",
                title: "ICICI"
            },
            {
                imageUrl: "/png/security3.png",
                title: "SBI"
            },
            {
                imageUrl: "/png/security4.png",
                title: "PNB"
            },
            {
                imageUrl: "/png/security5.png",
                title: "Kotak Mahindra"
            },
            {
                imageUrl: "/png/security6.png",
                title: "Mutual fund"
            },
            {
                imageUrl: "/png/demat.png",
                title: "Demat Account"
            },
            {
                imageUrl: "/png/motor.png",
                title: "Motor Insurance"
            },
            {
                imageUrl: "/png/pet.png",
                title: "Pet Insurance"
            },           
            {
                imageUrl: "/png/phone.png",
                title: "Mobile Insurance"
            },           
            {
                imageUrl: "/png/education.png",
                title: "Education Insurance"
            },           
            {
                imageUrl: "/png/wedding.png",
                title: "Wedding Insurance"
            },           
            {
                imageUrl: "/png/travel.png",
                title: "Travel Insurance"
            },           
            {
                imageUrl: "/png/loan.png",
                title: "Loan Insurance"
            },           
            {
                imageUrl: "/png/nbfc.png",
                title: "NBFC Insurance"
            },           
            {
                imageUrl: "/png/sfb.png",
                title: "SFBs Insurance"
            },           
                      
        ]
    },

]