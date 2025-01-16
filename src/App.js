
import './App.css';
import Cards from './components/card-ui/Card';
import InsurancePartners from './components/partners/partners';
import InsuranceProducts from './components/products/products';

function App() {
  const scrollToProduct = () =>{
    const product = document.getElementById("product");
    product.scrollIntoView({
      behavior:"smooth"
    })
  }
  return (
    <>
      <div id='home' className='bg-gradient-to-r from-blue-200 via-[#f5deb32b] to-blue-50 sm:flex justify-start items-center sm:pt-16 pt-28 pb-16 px-4 relative h-fit overflow-hidden'>
        <div className='max-w-[1250px] mx-auto sm:py-16 w-full grid sm:grid-cols-[1.5fr_1fr] items-center justify-between z-[2]'>
          <div className='max-w-[650px] w-full'>
            <h1 className='sm:text-6xl text-4xl sm:text-left text-center tracking wider'>The <span className='font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent italic'> Futuristic Way</span> To Buy Insurance</h1>
            <p className='sm:mt-16 mt-4 sm:text-2xl text-lg sm:text-left text-center'>Get a quote or compare</p>
            <div className='flex flex-wrap gap-4 mt-6'>
              {policiesArray?.map((item, index) => {
                return (
                  <div key={index} className='cursor-pointer w-fit from-blue-500 via-purple-500 to-purple-400 p-[2px] rounded-xl m-auto' onClick={()=>scrollToProduct()}>

                    <Cards className={"sm:w-[120px] w-[80px] sm:h-[120px] w-[80px] flex place-content-center bg-white rounded-lg p-4 border-[3px] border-white shadow hover:border-[#2a6dcf]"} >
                      <img src={item?.imageUrl} alt={item?.alt} width={60} className='m-auto' />
                    </Cards>
                    <p className='text-center mt-2 text-xl'>{item?.title}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='text-right ml-auto sm:mt-0 mt-8'>
            <img src='/banner.png' alt='robot' className='sm:w-[750px] w-[230px]' />
          </div>
        </div>
        <img src='/png/star.png' alt='star' className='absolute left-10 top-12 w-[10%] custom-spin duration-300' />

        <img src='/png/circle.png' alt='star' className='absolute sm:left-[42%] left-[25%] top-[28%] sm:w-[18%] w-[50%] custom-spin2 duration-300 custom-pulse' />
        <img src='/png/star-blue.png' alt='star' className='absolute sm:left-28 left-12 sm:bottom-16 bottom-24 sm:w-[8%] w-[25%] custom-spin2 duration-300' />
        <img src='/png/star-blue.png' alt='star' className='absolute right-10 sm:top-8 top-14 w-[18%] custom-spin2 duration-300' />

      </div>
      <div className=' px-4 sm:py-16 py-8' >
        <div className='max-w-[1250px] mx-auto'>
          <h2 className='sm:text-5xl text-2xl font-semibold text-center sm:mb-14 mb-8'>Why <span className='bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 text-transparent bg-clip-text italic'> PBP Fintech?</span></h2>
          <div className='grid sm:grid-cols-4 grid-cols-2 gap-4'>
            {whyArray?.map((item, index) => {
              return (
                <div className='text-center mt-2' key={index}>
                  <img src={item?.imageUrl} alt={item?.alt} width={80} height={80} className='mx-auto sm:mb-4 mb-2 sm:w-[80px] w-[40px]' />
                  <p className='font-semibold sm:text-2xl text-lg sm:my-2'>{item?.counts}</p>
                  <p className='sm:text-md text-xs'>{item?.title}</p>
                </div>

              )
            })}
          </div>
        </div>
      </div>
      {/* types */}
      <div className='bg-gradient-to-r from-blue-100 to-purple-100' id='product'>
        <div className='max-w-[1250px] mx-auto sm:py-16 py-8 px-4'>
          <h2 className='sm:text-5xl text-2xl font-semibold text-center'>Types Of <span className='bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 text-transparent bg-clip-text italic'> Insurance Products</span></h2>
          <InsuranceProducts />
        </div>
      </div>
      {/* partners */}
      <div className='max-w-[1250px] mx-auto sm:py-16 py-8 px-4'>
        <h2 className='sm:text-5xl text-2xl font-semibold text-center mb-6'>Our <span className='bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 text-transparent bg-clip-text italic'> Partners</span></h2>
        <InsurancePartners />
      </div>
      <div className='px-4 sm:py-16 py-6 bg-gradient-to-r from-blue-100 to-purple-100'>
        <div className='max-w-[1250px] mx-auto grid sm:grid-cols-[1fr_1.2fr] gap-16 items-center'>
          <div>
            <h2 className='font-[400] leading-normal sm:text-5xl text-3xl'><span className='bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 text-transparent bg-clip-text font-semibold italic'>Leveraging</span> the power of technology, data and innovation</h2>
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

      <div class="max-w-[1250px] mx-auto sm:p-8 p-4 pb-8">
        <div class="text-center mb-8">
          <h1 class="sm:text-4xl text-2xl font-semibold mt-4">
            About<span className='bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 text-transparent bg-clip-text italic'> Us</span>
          </h1>
          <p class="max-w-[650px] mx-auto text-gray-700 mt-2">
            An Indian company licensed to provide online marketing, consulting, and technology services to insurers and lending partners.
          </p>
        </div>

        <div class="sm:mt-16 mt-12 flex flex-wrap gap-6">
          <Cards className="text-center shadow-none">
            <img src="/png/policy-bazar.png" alt="Policy Sazar Logo" class="w-36 mx-auto" />
            <p class="text-gray-600 mt-4 sm:text-md text-sm">An online platform for consumers and insurer partners to buy and sell insurance products.</p>
          </Cards>
          <Cards className="text-center shadow-none">
            <img src="/png/paisa.svg" alt="Paisabazar Logo" class="w-36 mx-auto" />
            <p class="text-gray-600 mt-4 sm:text-md text-sm">An independent digital lending platform for personal credit products.</p>
          </Cards>
        </div>
        <div class="mt-12">
          <h2 class="sm:text-xl text-lg sm:text-left text-center font-semibold mb-6">Creating Common Shade For:</h2>
        <div className='flex flex-wrap sm:justify-start justify-center gap-x-4 sm:gap-y-6 gap-y-4'>
            <Cards className={"max-w-[300px] min-w-[280px] w-full shadow-none"}>
              <img src='/about/01.jpg' alt='insurance' className='w-[150px] mx-auto' />
              <p className='text-gray-500 text-sm text-center'> All Insurance Solutions with Leading Companies (Life/Health/Motor/Non-Motor)</p>
              </Cards>
            <Cards className={"max-w-[300px] min-w-[280px] w-full shadow-none"}>
              <img src='/about/02.jpg' alt='insurance' className='w-[150px] mx-auto' />
              <p className='text-gray-500 text-sm text-center'> Mutual Fund Investments (Lumpsum/SIP)</p>
              </Cards>
            <Cards className={"max-w-[300px] min-w-[280px] w-full shadow-none"}>
              <img src='/about/03.jpg' alt='insurance' className='w-[150px] mx-auto' />
              <p className='text-gray-500 text-sm text-center'> Credit Card</p>
              </Cards>
            <Cards className={"max-w-[300px] min-w-[280px] w-full shadow-none"}>
              <img src='/about/04.jpg' alt='insurance' className='w-[150px] mx-auto' />
              <p className='text-gray-500 text-sm text-center'> All Types of Loans: Personal/Business/Mortgage/Home/New Car/Refinance</p>
              </Cards>
            <Cards className={"max-w-[300px] min-w-[280px] w-full shadow-none"}>
              <img src='/about/05.jpg' alt='insurance' className='w-[150px] mx-auto' />
              <p className='text-gray-500 text-sm text-center'> Solar Power Distribution (Under PM Surya Ghar Subsidy for Residential Households)</p>
              </Cards>
           
            </div>
        </div>       

        <div class="mt-12">
          <h3 class="text-xl font-semibold mb-8 sm:text-left text-center">Also Incorporated With:</h3>
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
              <h4 class="text-lg font-semibold text-blue-800">HDFC Securities for Mutual Fund SIP</h4>
            </div>
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
      <div className='bg-[#f2f7ff] px-4 py-6' id='contact'>
        <div className='max-w-[1250px] mx-auto sm:my-8 my-4 grid sm:grid-cols-2 sm:gap-4 gap-12 items-center'>
          <div>
            <img src='/contact.png' alt='contact' className='sm:w-[400px] w-[200px] mx-auto'/>
          </div>
          <div className='max-w-[450px] w-full mx-auto bg-white p-4 rounded-xl'>
            <h2 className='sm:text-3xl text-2xl font-semibold text-center mb-8'><span className='bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 text-transparent bg-clip-text italic'> Connect</span> with us</h2>
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
      <div className='bg-gradient-to-r from-blue-100 to-purple-100 sm:pt-0 pt-6'>
        <div className='sm:p-12 p-4 max-w-[1350px] mx-auto'>
          <h2 className='sm:text-4xl text-2xl mb-8 font-semibold8'>Contact Us</h2>
          <div className='grid sm:grid-cols-3 gap-8'>
            <div>
              <h3 className='text-lg font-semibold text-gray-500 border-b-[3px] border-[#00B8D9] pb-2'>Write to us at:</h3>
              <div>
                <h4 className='font-semibold text-xl mt-4'>Our HR</h4>
                <p className=''>E-mail: &nbsp;
                <a href='mailto:n$K55fGtD8@pbpfintech.in' className='sm:text-md text-sm font-semibold'>n$K55fGtD8@pbpfintech.in </a>
                </p>
                <h4 className='font-semibold text-xl mt-4'>Support</h4>
                <p className=''>E-mail: &nbsp;
                <a href='mailto:BhTt3a6D!8@pbpfintech.in' className='sm:text-md text-sm font-semibold'>BhTt3a6D!8@pbpfintech.in </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-gray-500 border-b-[3px] border-[#8777D9] pb-2'>Quick Links:</h3>
              <div className='grid gap-2 mt-4'>
                <p className='sm:text-md text-sm w-fit cursor-pointer'>Car Insurance</p>                
                <p className='sm:text-md text-sm w-fit cursor-pointer'>Bike Insurance</p>                
                <p className='sm:text-md text-sm w-fit cursor-pointer'>Health Insurance</p>                
                <p className='sm:text-md text-sm w-fit cursor-pointer'>Life Insurance</p>                
                <p className='sm:text-md text-sm w-fit cursor-pointer'>Raise A Claim</p>                
              </div>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-gray-500 border-b-[3px] border-[#36B37E] pb-2'>Registered address:</h3>
              <div className='grid gap-1'>
                <h4 className='font-semibold text-xl mt-4'>PBP Fintech Limited</h4>
                <p className='sm:text-md text-sm'>NH-37, Near DTO Office, Betkuchi, Guwahati-40</p>

                <a className='sm:text-md text-sm' href='tel:+918822992838'>Phone No: +918822992838</a>
                <a className='sm:text-md text-sm' href='tel:+919706948902'>Phone No: +919706948902</a>
              </div>
            </div>
          </div>
        </div>
      <p className='px-4 py-2 text-center border-t border-gray-500 text-sm'>© 2025 PBP Fintech Limited, All rights reserved.</p>
      </div>
      <footer class="relative gradient-bg py-2">
  <div class="max-w-7xl mx-auto px-6">
    <div class="flex justify-center items-center">
      <div class="bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 shadow-lg">
        <p class="text-center text-white text-sm md:text-base">
          Designed and Developed by &nbsp;
          <a href="#" class="font-semibold text-[#fff8dc]">Xynocast</a>
        </p>
      </div>
    </div>
  </div>
</footer>
      {/* <div className='fixed bottom-8 w-full text-center'>
        <button class="px-6 py-3 text-white font-semibold bg-blue-500 rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 animate-blink-shadow">
          Join Now
        </button>
      </div> */}
    </>
  );
}

export default App;
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
const policiesArray = [
  {
    imageUrl: "/png/bike.png",
    alt: "bike",
    title: "Bike"
  },
  {
    imageUrl: "/png/car.png",
    alt: "car",
    title: "Car"
  },
  {
    imageUrl: "/png/health.png",
    alt: "health",
    title: "Health"
  },
  {
    imageUrl: "/png/term.png",
    alt: "term",
    title: "Term"
  },
  // {
  //   imageUrl: "/png/arrow.png",
  //   alt: "arrow",
  //   title: "View All"
  // },
]