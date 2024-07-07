import HomeBody from "./body/homeBody";
import ProductBody from "./body/productBody";
import ContactUsBody from "./body/contactUsBody";
import About from "./body/aboutBody"
function Body( {pageName}){
    // console.log()
    return(
        <>
        {pageName == "home"? <HomeBody/> :pageName == "about"? <About/> : pageName == "contactUs"? <ContactUsBody/> :<ProductBody/> }
        </>
    )
}
export default Body;