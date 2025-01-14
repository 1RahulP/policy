
import './App.css';
import Cards from './components/card-ui/Card';

function App() {
  return (
    <>
      <div className='sm:px-12 px-4 py-16 bg-gradient-to-r from-blue-200 via-[#f5deb32b] to-blue-50'>
        <h1 className='text-center sm:text-8xl text-2xl font-semibold'>Your<span className='bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 text-transparent bg-clip-text'> Trusted</span> <br />  Insurance  <img src='/insurance.png' width={80} height={80} className='rounded-full sm:w-[80px] sm:h-[80px] w-[50px] border-blue-800 p-1 border inline' /> Partner</h1>
        <p className='text-center sm:text-lg text-sm mt-5 text-gray-500 max-w-[800px] m-auto'>Smart Insurance For Smart People. Comprehensive Coverage, Exceptional Service. The Strength To Rebuild, The Power To Protect.</p>
        <div className='grid sm:grid-cols-3 max-w-[1250px] mx-auto mt-12'>
          <Cards>
            <h2 className='font-semibold sm:text-4xl text-2xl mt-2'>Select Best Plan For Your Future</h2>
            <p className='text-xs text-gray-400 mt-4 font-semibold ml-2'>Making Accidents Less Of A Hassle. Your Safety Gear On The Road. Ride Worry-Free With Us</p>
            <p className='text-xs text-gray-400 font-semibold mb-2 ml-2'>A Promise Of Security On Wheels.</p>
            <div className='flex'>
              <a href='#' className='font-semibold underline whitespace-nowrap pl-2'>See Plans</a>
              <div>
                <img src='/family.png' className='h-[220px] object-cover' />
              </div>
            </div>
          </Cards>
          <div className='py-6'>
            <Cards className={""}>
              <img src='/MensHealth.jpeg' className='rounded-xl h-[180px] w-full object-cover' />
              <div>
                <div className='mt-4 sm:flex justify-between items-center'>
                  {/* <div className='flex gap-1'>
                    <div className='px-3 py-1.5 rounded-full w-fit bg-blue-600 border text-xs text-white font-semibold'>Health</div>
                    <div className='px-3 py-1.5 rounded-full w-fit border text-xs font-semibold'>Home Loan</div>
                    <div className='px-3 py-1.5 rounded-full w-fit border text-xs font-semibold'>Car Loan</div>
                  </div>
                  <div className='font-bold text-xs sm:mt-0 mt-2'>₹599/month</div> */}
                </div>
                <h3 className='mt-4 font-bold text-sm'>Health Insurance</h3>
                <p className='text-xs font-semibold text-gray-400 my-1 line-clamp-2'>The Strength To Rebuild, The Power To Protect. Trusted By Generations. Protecting Your Legacy.</p>
                <div className='flex gap-1 items-center mt-4'>
                  <img src='/star.svg' width={20} />
                  <span className='font-bold text-xs'>4.9(289 reviews)</span>
                </div>
              </div>
            </Cards>
          </div>
          <div>
            <Cards>
              <div className='flex gap-4 sm:items-start items-center'>
                <div className='bg-[#d1f1ff] rounded-xl h-fit p-2'>
                  <img src='/calender.svg' width={24} />
                </div>
                <div>
                  {/* <p className='text-green-700 text-sm font-semibold'>15.4% Seat available</p> */}
                  <p className='text-gray-500 font-semibold text-lg'>Upcoming Events</p>
                  <p>
                    <span className='font-bold text-xl'>9035 </span>
                    <span className='font-semibold text-gray-500 sm:text-md text-sm'>peple are coming</span>
                  </p>
                </div>
              </div>
            </Cards>
            <Cards className={"mt-4"}>
              <div>
                <div className='bg-[#d1deff] h-fit rounded-full p-3 w-fit'>
                  <img src='/secure.svg' width={28} />
                </div>
                <div className='mt-4'>
                  <h3 className='font-bold text-lg'>Secure your family</h3>
                  <p className='text-xs font-semibold mt-2 mb-4 text-semibold text-gray-400 line-clamp-3'>Comprehensive Coverage, Exceptional Service. Security Through Every Season. Where Protection Meets Affordability. Drive Without Worry, Insured With Us.</p>
                  <a href='#' className='underline font-bold'>Explore More</a>
                </div>
              </div>
            </Cards>
          </div>
        </div>
      </div>
      <div class="max-w-[1250px] mx-auto sm:p-8 p-4">
        <div class="text-center mb-8">
          <img src="/insurance.png" alt="PBP Logo" class="mx-auto sm:w-32 w-14 h-auto" />
          <h1 class="sm:text-4xl text-xl font-semibold text-blue-600 mt-4">
            PBP Fintech & Insurance
          </h1>
          <p class="sm:text-lg text-gray-700 mt-2">
            An Indian company licensed to provide online marketing, consulting, and technology services to insurers and lending partners.
          </p>
        </div>


        <div class="bg-blue-50 sm:p-6 p-4 rounded-lg shadow-md">
          <h2 class="sm:text-xl text-lg sm:text-left text-center font-semibold text-blue-700">Creating Common Shade For:</h2>
          <ul class="list-disc pl-6 sm:mt-4 mt-2 space-y-2 text-gray-800 text-sm sm:text-md">
            <li><strong>A)</strong> All Insurance Solutions with Leading Companies (Life/Health/Motor/Non-Motor)</li>
            <li><strong>B)</strong> Mutual Fund Investments (Lumpsum/SIP)</li>
            <li><strong>C)</strong> Credit Card</li>
            <li><strong>D)</strong> All Types of Loans: Personal/Business/Mortgage/Home/New Car/Refinance</li>
            <li><strong>E)</strong> Solar Power Distribution (Under PM Surya Ghar Subsidy for Residential Households)</li>
          </ul>
        </div>


        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="text-center p-4 bg-white rounded-lg shadow-sm">
            <img src="/png/policy-bazar.png" alt="Policy Sazar Logo" class="w-36 mx-auto " />
            <p class="text-gray-600 mt-4">An online platform for consumers and insurer partners to buy and sell insurance products.</p>
          </div>
          <div class="text-center p-4 bg-white rounded-lg shadow-sm h-full">
            <img src="/png/paisa.svg" alt="Paisabazar Logo" class="w-36 mx-auto" />
            <p class="text-gray-600 mt-4">An independent digital lending platform for personal credit products.</p>
          </div>
        </div>


        <div class="mt-12">
          <h3 class="text-xl font-semibold text-blue-700 mb-8 sm:text-left text-center">Also Incorporated With:</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div class="p-4 bg-white rounded-lg shadow-md border bg-gradient-to-r from-blue-100 to-purple-100">
              <h4 class="text-lg font-semibold text-blue-800">Pro Finance for Credit Activities</h4>
            </div>
            <div class="p-4 bg-white rounded-lg shadow-md border bg-gradient-to-r from-blue-100 to-purple-100">
              <h4 class="text-lg font-semibold text-blue-800">New Fintech for Solar Empowerment</h4>
            </div>
            <div class="p-4 bg-white rounded-lg shadow-md border bg-gradient-to-r from-blue-100 to-purple-100">
              <h4 class="text-lg font-semibold text-blue-800">Probus as Alternative Insurance Partner</h4>
            </div>
            <div class="p-4 bg-white rounded-lg shadow-md border bg-gradient-to-r from-blue-100 to-purple-100">
              <h4 class="text-lg font-semibold text-blue-800">DOL as Loan Provider</h4>
            </div>
            <div class="p-4 bg-white rounded-lg shadow-md border bg-gradient-to-r from-blue-100 to-purple-100">
              <h4 class="text-lg font-semibold text-blue-800">Andromeda: India's Largest Loan Partner</h4>
            </div>
            <div class="p-4 bg-white rounded-lg shadow-md border bg-gradient-to-r from-blue-100 to-purple-100">
              <h4 class="text-lg font-semibold text-blue-800">HDFC Secretariat for Mutual Fund SIP</h4>
            </div>
          </div>
        </div>
      </div>

      <div className=' px-4 py-16'>
        <div className='max-w-[1250px] mx-auto'>
          <h2 className='sm:text-5xl text-2xl font-semibold text-center mb-14'>Why <span className='bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 text-transparent bg-clip-text'> PB Fintech?</span></h2>
          <div className='grid sm:grid-cols-4 gap-4'>
            {whyArray?.map((item, index) => {
              return (
                <div className='text-center' key={index}>
                  <img src={item?.imageUrl} alt={item?.alt} width={80} height={80} className='mx-auto mb-4 w-[80px] w-[50px]' />
                  <p className='font-semibold sm:text-2xl text-xl my-2'>{item?.counts}</p>
                  <p className='sm:text-md text-sm'>{item?.title}</p>
                </div>

              )
            })}
          </div>
        </div>
      </div>
      <div className='px-4 sm:py-16 py-6 bg-gradient-to-r from-blue-100 to-purple-100'>
        <div className='max-w-[1250px] mx-auto grid sm:grid-cols-[1fr_1.2fr] gap-16 items-center'>
          <div>
            <h2 className='font-[400] leading-normal sm:text-5xl text-3xl'><span className='bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 text-transparent bg-clip-text font-semibold'>Leveraging</span> the power of technology, data and innovation</h2>
            <p className='sm:text-xl text-gray-500 mt-4 border-l-2 pl-2 border-blue-500'>Our Policy platform offerings Address the large and highly under penetrated online insurance and lending markets</p>
          </div>
          <div>
            <div className='grid sm:grid-cols-2 gap-8'>
              <Cards className={"p-6"}>
                <div>
                  <img src='/easy.svg' width={60} />
                </div>
                <h3 className='text-2xl font-semibold mt-4'>Get easy access to insurance, credit & other financial products</h3>
                <p className='mt-3 line-clamp-5 sm:text-lg text-gray-500'>We aim to create awareness amongst Indian households about the financial impact of death, disease, and damage.</p>
              </Cards>
              <Cards className={"p-6"}>
                <div>
                  <img src='/trans.svg' width={60} />
                </div>
                <h3 className='text-2xl font-semibold mt-4'>We seek to increase transparency for consumers</h3>
                <p className='mt-3 line-clamp-5 sm:text-lg text-gray-500'>Through our consumer-centric approach, we seek to enable online research-based purchases of insurance and lending products. This helps consumers to make informed choices.</p>
              </Cards>
            </div>
            <div className='mt-8'>
              <Cards className={"max-w-full p-6"}>
                <div>
                  <img src='/limited.svg' width={60} />
                </div>
                <h3 className='text-2xl font-semibold mt-4'>Get easy access to insurance, credit & other financial products</h3>
                <p className='mt-3 line-clamp-5 sm:text-lg text-gray-500'>We aim to create awareness amongst Indian households about the financial impact of death, disease, and damage.</p>
              </Cards>
            </div>

          </div>
        </div>
      </div>
      <div className=''>
        <div className='max-w-[1250px] mx-auto px-4 py-8'>
          <h2 className='sm:text-5xl text-2xl sm:text-left text-center font-semibold sm:py-12'>We're <span className='bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 text-transparent bg-clip-text italic'> Offerings</span></h2>
          <div className='flex gap-8 flex-wrap mt-8'>
            {offeringArray?.map((item, index) => {
              return (
                <div key={index} className='w-[140px]'>
                  <div className='bg-[#F2F7FF] rounded-xl p-2 h-[80px]'>
                    <img src={item?.imageUrl} alt={item?.alt} width={60} className='mx-auto' />
                  </div>
                  <p className='text-center whitespace-normal mt-2'>{item?.name}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='max-w-[1250px] mx-auto my-12'>
        <h2 className='sm:text-5xl text-3xl font-bold text-center'>What <span className='bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 text-transparent bg-clip-text italic font-semibold'> sets us</span> apart</h2>
        <div className='sm:mt-20 mt-12'>
          {apartArray?.map((item, index) => {
            return (
              <div key={index} className={`flex sm:flex-row flex-col items-center gap-8 py-8 ${index % 2 === 0 ? "" : "sm:flex-row-reverse"} flex-col-reverse`}>
                <div className={`flex-[1.5] ${item?.background} p-8 rounded-xl`}>
                  <h2 className={`text-5xl font-light tracking-wider mb-4`}>{item?.sNo}</h2>
                  <h3 className='smLtext-4xl text-2xl font-semibold'>{item?.heading}</h3>
                  <span className={`block w-[70px] h-[3px] mt-1 ${item?.color}`}></span>
                  <p className='sm:text-xl text-gray-500 mt-4'>{item?.content}</p>
                </div>
                <div className='px-8'>
                  <img src={item?.imageUrl} width={400} className='mx-auto' />
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='bg-[#f2f7ff] px-4 py-6'>
        <div className='max-w-[1250px] mx-auto sm:my-8 my-4'>
          <div className='max-w-[450px] mx-auto bg-white p-4 rounded-xl'>
            <h2 className='sm:text-3xl text-2xl font-semibold text-center mb-8'>Connect with us</h2>
            <form action={"#"} className='grid gap-4'>
              <input type='text' placeholder='Full name' className='block px-4 py-2 rounded-md bg-[#f2f7ff] border border-[#f2f7ff] focus:border-blue-500 focus-visible:border outline-none' />
              <input type='mail' placeholder='Email' className='block px-4 py-2 rounded-md bg-[#f2f7ff] border border-[#f2f7ff] focus:border-blue-500 focus-visible:border outline-none' />
              <input type='phone' placeholder='Phone no.' className='block px-4 py-2 rounded-md bg-[#f2f7ff] border border-[#f2f7ff] focus:border-blue-500 focus-visible:border outline-none' />
              <div className='text-center mt-4'>
                <button className='text-white font-semibold px-6 py-3 rounded-xl bg-blue-600 mx-auto w-full'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-r from-blue-100 to-purple-100'>
        <div className='sm:p-12 p-4 max-w-[1350px] mx-auto'>
          <h2 className='sm:text-4xl text-2xl mb- font-semibold8'>Contact Us</h2>
          <div className='grid sm:grid-cols-3 gap-8'>
            <div>
              <h3 className='text-lg font--semibold text-gray-500 border-b-[3px] border-[#00B8D9] pb-2'>Write to us at:</h3>
              <div>
                <h4 className='font-semibold text-xl mt-4'>Rasleen Kaur</h4>
                <p className='sm:text-md text-sm'>Head, Investor Relations</p>
                <a href='#' className='sm:text-md text-sm'>investor.relations@pbfintech.in </a>
              </div>
            </div>
            <div>
              <h3 className='text-lg font--semibold text-gray-500 border-b-[3px] border-[#8777D9] pb-2'>Compliance officer:</h3>
              <div className='grid gap-1'>
                <h4 className='font-semibold text-xl mt-4'>Bhasker Joshi</h4>
                <p className='sm:text-md text-sm'>Company Secretary & Compliance Officer</p>
                <p className='sm:text-md text-sm'>complianceofficer@pbfintech.in</p>
                <a className='sm:text-md text-sm' href='#'>Contact No. 0124- 4562907</a>
                <a className='sm:text-md text-sm' href='#'>Fax: 0124-4562902</a>
                <p className='sm:text-md text-sm'>**For Redressal of Investor Grievances you may contact the Compliance Officer.</p>
              </div>
            </div>
            <div>
              <h3 className='text-lg font--semibold text-gray-500 border-b-[3px] border-[#36B37E] pb-2'>Registered address:</h3>
              <div className='grid gap-1'>
                <h4 className='font-semibold text-xl mt-4'>PB Fintech Limited</h4>
                <p className='sm:text-md text-sm'>Plot 119, Sector 44, Gurugram- 122001, Haryana</p>

                <a className='sm:text-md text-sm' href='#'>Phone No: 0124-4562907</a>
                <a className='sm:text-md text-sm' href='#'>Fax: 0124-4562907</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='fixed bottom-8 w-full text-center'>
        <button class="px-6 py-3 text-white font-semibold bg-blue-500 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 animate-blink-shadow">
          Join Now
        </button>
      </div>
    </>
  );
}

export default App;
const offeringArray = [
  {
    imageUrl: "/01.png",
    alt: "term insurance",
    name: "Term Insurance"
  },
  {
    imageUrl: "/02.svg",
    alt: "life insurance",
    name: "Life Insurance"
  },
  {
    imageUrl: "/03.png",
    alt: "health",
    name: "Health Insurance"
  },
  {
    imageUrl: "/04.png",
    alt: "investment",
    name: "Investment Plans"
  },
  {
    imageUrl: "/05.png",
    alt: "car",
    name: "Car Insurance"
  },
  {
    imageUrl: "/06.png",
    alt: "two wheeler",
    name: "2 Wheeler Insurance"
  },
  {
    imageUrl: "/07.png",
    alt: "family",
    name: "Family Health Insurance"
  },
  {
    imageUrl: "/08.png",
    alt: "aeroplane",
    name: "Travel Insurance"
  },
  {
    imageUrl: "/09.png",
    alt: "women",
    name: "Term Insurance (Women)"
  },
  {
    imageUrl: "/10.png",
    alt: "guarnteed",
    name: "Guaranteed Return Plans"
  },
  {
    imageUrl: "/11.png",
    alt: "child",
    name: "Child Savings Plans"
  },
  {
    imageUrl: "/12.png",
    alt: "retirement",
    name: "Retirement Plans"
  },
  {
    imageUrl: "/13.png",
    alt: "home",
    name: "Home Insurance"
  },
]
const apartArray = [
  {
    sNo: "01",
    imageUrl: "/apart01.png",
    color: "bg-blue-500",
    background: "bg-[#e6fcff]",

    heading: "Strong, consumer friendly brands",
    content: "We offer wide choice, transparency and the ability for Consumers to research and access insurance and personal credit products offered by our Insurer and Lending Partners. Through our Consumer-centric approach, we have created strong brands which are recognised throughout India."
  },
  {
    sNo: "02",
    imageUrl: "/apart02.png",
    color: "bg-green-500",
    background: "bg-[#e3fcef]",

    heading: "Our Proprietary Technology, Data and Intelligence Stack",
    content: "Our proprietary technology stack helps us design user-friendly Consumer journeys across all of our processes by automating various aspects across the product value chain We also leverage technology to provide high quality consumer service."
  },
  {
    sNo: "03",
    imageUrl: "/apart03.png",
    color: "bg-purple-500",
    background: "bg-[#f4f2ff]",

    heading: "Service and Responsiveness",
    content: "We provide convenient servicing options to our Consumers using technology integrations with our insurer and lending Partners, supported by our experienced, qualified and knowledgeable staff."
  },
  {
    sNo: "04",
    imageUrl: "/apart04.png",
    color: "bg-yellow-500",
    background: "bg-[#fcf5da]",

    heading: "Collaborative partner for Insurer and Lending Partners",
    content: "In addition to providing our partners with a low cost platform to target the right customers, we leverage our technology and insights to help our partners improve their risk assessment models, fraud detection and underwriting capabilities as well as help them create customised products. The consumer acquisition cost for our Insurer and Lending Partners is one of the lowest through our platforms"
  },
  {
    sNo: "05",
    imageUrl: "/apart05.png",
    color: "bg-red-500",
    background: "bg-[#fff2ef]",

    heading: "Asset light capital strategy",
    content: "We have an asset-light capital strategy and do not underwrite any insurance or retain any credit risk on our books."
  },
]
const relationArray = [
  {
    imageUrl: "/premium.png",
    alt: "insurance",
    title: "Insurance Premium",
    count: "₹218 billion",
    time: "ARR Q2 FY25"
  },
  {
    imageUrl: "/sold.png",
    alt: "policy",
    title: "Insurance Policies Sold",
    count: "46.8 million",
    time: "Till September 2024"
  },
  {
    imageUrl: "/loan.png",
    alt: "loan",
    title: "Loan Disbursals",
    count: "₹169 billion",
    time: "ARR Q2 FY25"
  },
  {
    imageUrl: "/score.png",
    alt: "score",
    title: "Credit Score Customers",
    count: "47.7 million",
    time: "Till September 2024"
  },
]
const whyArray = [
  {
    imageUrl: "/png/advisor.png",
    alt: "advisor",
    counts: "3 Lakh+",
    title: "TRAINED ADVISORS"
  },
  {
    imageUrl: "/png/customer.png",
    alt: "customer",
    counts: "45 Lakh+",
    title: "HAPPY CUSTOMERS"
  },
  {
    imageUrl: "/png/partner.png",
    alt: "partner",
    counts: "45+",
    title: "INSURANCE PARTNERS"
  },
  {
    imageUrl: "/png/policy.png",
    alt: "policy",
    counts: "1 Crore+",
    title: "POLICIES SOLD"
  },
]