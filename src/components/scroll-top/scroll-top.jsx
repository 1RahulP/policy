const ScrollToTop = ()=>{
    const ScrollToTop = () =>{
        const top = document.getElementById("home");
        top.scrollIntoView({behavior:"smooth"})
    }
    return(
        <div className="fixed sm:bottom-8 bottom-4 right-4 sm:right-8 shadow-xl p-2 rounded-full border cursor-pointer bg-white z-[9]" onClick={()=>ScrollToTop()}>
            <img src="/png/top-arrow.png" alt="arrow" width={24} />
        </div>
    )
}
export default ScrollToTop