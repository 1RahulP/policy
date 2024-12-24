const Cards = ({children,className})=>{
    return(
        <div className={`${className} border rounded-xl p-4 bg-white max-w-[360px] shadow-xl`}>{children}</div>
    )
}
export default Cards