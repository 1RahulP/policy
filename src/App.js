import logo from './logo.svg';
import './App.css';
import Cards from './components/card-ui/Card';

function App() {
  return (
    <>
      <div className='px-12 py-16 bg-gradient-to-r from-blue-200 via-[#f5deb32b] to-blue-50'>
        <h1 className='text-center sm:text-8xl text-2xl font-semibold'>Your Trusted <br /> Insurance  <img src='/insurance.png' width={80} height={80} className='rounded-full border-blue-800 p-1 border inline' /> Partner</h1>
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
                  <div className='flex gap-1'>
                    <div className='px-3 py-1.5 rounded-full w-fit bg-blue-600 border text-xs text-white font-semibold'>Health</div>
                    <div className='px-3 py-1.5 rounded-full w-fit border text-xs font-semibold'>Home Loan</div>
                    <div className='px-3 py-1.5 rounded-full w-fit border text-xs font-semibold'>Car Loan</div>
                  </div>
                  <div className='font-bold text-xs sm:mt-0 mt-2'>$30/month</div>
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
              <div className='flex gap-4'>
                <div className='bg-[#d1f1ff] rounded-xl h-fit p-2'>
                  <img src='/calender.svg' width={24} />
                </div>
                <div>
                  <p className='text-green-700 text-sm font-semibold'>15.4% Seat available</p>
                  <p className='text-gray-500 font-semibold text-lg'>Upcoming Events</p>
                  <p>
                    <span className='font-bold text-xl'>9035 </span>
                    <span className='font-semibold text-gray-500'>peple are coming</span>
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
      <div className='bg-[#f2f7ff] px-4 py-6'>
        <div className='max-w-[1250px] mx-auto grid sm:grid-cols-[1fr_1.2fr] gap-16 items-center'>
          <div>
            <h2 className='font-[400] leading-normal sm:text-5xl text-3xl'>Leveraging the power of technology, data and innovation</h2>
            <p className='sm:text-xl text-gray-500 mt-4 border-l-2 pl-2 border-blue-500'>Our Policy platform offerings Address the large and highly under penetrated online insurance and lending markets</p>
          </div>
          <div>
            <div className='grid sm:grid-cols-2 gap-8'>
              <Cards className={"p-6"}>
                <div>
                  <img src='/easy.svg' width={60} />
                </div>
                <h3 className='text-2xl font-semibold mt-4'>Get easy access to insurance, credit & other financial products</h3>
                <p className='mt-3 line-clamp-5 text-lg text-gray-500'>We aim to create awareness amongst Indian households about the financial impact of death, disease, and damage.</p>
              </Cards>
              <Cards className={"p-6"}>
                <div>
                  <img src='/trans.svg' width={60} />
                </div>
                <h3 className='text-2xl font-semibold mt-4'>We seek to increase transparency for consumers</h3>
                <p className='mt-3 line-clamp-5 text-lg text-gray-500'>Through our consumer-centric approach, we seek to enable online research-based purchases of insurance and lending products. This helps consumers to make informed choices.</p>
              </Cards>
            </div>
            <div className='mt-8'>
            <Cards className={"max-w-full p-6"}>
              <div>
                <img src='/limited.svg' width={60} />
              </div>
              <h3 className='text-2xl font-semibold mt-4'>Get easy access to insurance, credit & other financial products</h3>
              <p className='mt-3 line-clamp-5 text-lg text-gray-500'>We aim to create awareness amongst Indian households about the financial impact of death, disease, and damage.</p>
            </Cards>
            </div>
            
          </div>
        </div>
      </div>
      <div className='max-w-[1250px] mx-auto px-4 py-8'>
        <h2 className='text-3xl font-semibold'>We're Offerings</h2>
        <div className='flex gap-8 flex-wrap mt-8'>
          {offeringArray?.map((item,index)=>{
            return(
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
      <div className='max-w-[1250px] mx-auto my-12'>
          <h2 className='sm:text-5xl text-3xl font-bold text-center'>What sets us apart</h2>
          <div className='sm:mt-20 mt-12'>
            {apartArray?.map((item,index)=>{
              return( 
                <div key={index} className={`flex sm:flex-row flex-col items-center gap-8 py-8 ${index%2===0?"":"sm:flex-row-reverse"} flex-col-reverse`}>
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
      <div className='max-w-[1250px] mx-auto sm:my-12 my-4'>
            <h2 className='sm:text-5xl text-3xl sm:text-left text-center font-[600]'>Investor relations</h2>
            <div className='grid sm:grid-cols-2 sm:gap-6 gap-12 my-12'>
              {relationArray?.map((item,index)=>{
                return(
                <div className='flex gap-4 items-center'>
                  <div>
                    <img src={item?.imageUrl} alt={item?.alt} width={100} className='sm:w-[100px] w-[70px]' />
                  </div>
                  <div>
                    <p className='font-semibold text-gray-500'>{item?.title}</p>
                    <h3 className='sm:text-4xl text-2xl font-bold mt-2'>
                      <span>{item?.count}</span>
                      <span className='sm:text-[18px] text-sm font-semibold'> ({item?.time})</span>  
                    </h3>
                    
                  </div>
                </div>
                )
              })}
            </div>
            <button className='text-white font-semibold px-6 py-3 rounded-xl bg-blue-600'>View reports</button>
      </div>
      </div>
    </>
  );
}

export default App;
const offeringArray = [
  {
    imageUrl:"/01.png",
    alt:"term insurance",
    name:"Term Insurance"
  },
  {
    imageUrl:"/02.svg",
    alt:"life insurance",
    name:"Life Insurance"
  },
  {
    imageUrl:"/03.png",
    alt:"health",
    name:"Health Insurance"
  },
  {
    imageUrl:"/04.png",
    alt:"investment",
    name:"Investment Plans"
  },
  {
    imageUrl:"/05.png",
    alt:"car",
    name:"Car Insurance"
  },
  {
    imageUrl:"/06.png",
    alt:"two wheeler",
    name:"2 Wheeler Insurance"
  },
  {
    imageUrl:"/07.png",
    alt:"family",
    name:"Family Health Insurance"
  },
  {
    imageUrl:"/08.png",
    alt:"aeroplane",
    name:"Travel Insurance"
  },
  {
    imageUrl:"/09.png",
    alt:"women",
    name:"Term Insurance (Women)"
  },
  {
    imageUrl:"/10.png",
    alt:"guarnteed",
    name:"Guaranteed Return Plans"
  },
  {
    imageUrl:"/11.png",
    alt:"child",
    name:"Child Savings Plans"
  },
  {
    imageUrl:"/12.png",
    alt:"retirement",
    name:"Retirement Plans"
  },
  {
    imageUrl:"/13.png",
    alt:"home",
    name:"Home Insurance"
  },
]
const apartArray = [
  {
    sNo:"01",
    imageUrl:"/apart01.png",
    color:"bg-blue-500",
    background:"bg-[#e6fcff]",

    heading:"Strong, consumer friendly brands",
    content:"We offer wide choice, transparency and the ability for Consumers to research and access insurance and personal credit products offered by our Insurer and Lending Partners. Through our Consumer-centric approach, we have created strong brands in both Policybazaar and Paisabazaar which are recognised throughout India."
  },
  {
    sNo:"02",
    imageUrl:"/apart02.png",
    color:"bg-green-500",
    background:"bg-[#e3fcef]",

    heading:"Strong, consumer friendly brands",
    content:"We offer wide choice, transparency and the ability for Consumers to research and access insurance and personal credit products offered by our Insurer and Lending Partners. Through our Consumer-centric approach, we have created strong brands in both Policybazaar and Paisabazaar which are recognised throughout India."
  },
  {
    sNo:"03",
    imageUrl:"/apart03.png",
    color:"bg-purple-500",
    background:"bg-[#f4f2ff]",

    heading:"Strong, consumer friendly brands",
    content:"We offer wide choice, transparency and the ability for Consumers to research and access insurance and personal credit products offered by our Insurer and Lending Partners. Through our Consumer-centric approach, we have created strong brands in both Policybazaar and Paisabazaar which are recognised throughout India."
  },
  {
    sNo:"04",
    imageUrl:"/apart04.png",
    color:"bg-yellow-500",
    background:"bg-[#fcf5da]",

    heading:"Strong, consumer friendly brands",
    content:"We offer wide choice, transparency and the ability for Consumers to research and access insurance and personal credit products offered by our Insurer and Lending Partners. Through our Consumer-centric approach, we have created strong brands in both Policybazaar and Paisabazaar which are recognised throughout India."
  },
  {
    sNo:"05",
    imageUrl:"/apart05.png",
    color:"bg-red-500",
    background:"bg-[#fff2ef]",

    heading:"Strong, consumer friendly brands",
    content:"We offer wide choice, transparency and the ability for Consumers to research and access insurance and personal credit products offered by our Insurer and Lending Partners. Through our Consumer-centric approach, we have created strong brands in both Policybazaar and Paisabazaar which are recognised throughout India."
  },
]
const relationArray = [
  {
    imageUrl:"/premium.png",
    alt:"insurance",
    title:"Insurance Premium",
    count:"₹218 billion",
    time:"ARR Q2 FY25"
  },
  {
    imageUrl:"/sold.png",
    alt:"policy",
    title:"Insurance Policies Sold",
    count:"46.8 million",
    time:"Till September 2024"
  },
  {
    imageUrl:"/loan.png",
    alt:"loan",
    title:"Loan Disbursals",
    count:"₹169 billion",
    time:"ARR Q2 FY25"
  },
  {
    imageUrl:"/score.png",
    alt:"score",
    title:"Credit Score Customers",
    count:"47.7 million",
    time:"Till September 2024"
  },
]