import HomeBody from "./homeBody";
import BrochureBody from "./brochureBody";
import ContactUsBody from "./contactUsBody";
function Body( {pageName}){
    console.log()
    return(
        <>
        {pageName == "home"? <HomeBody/> : pageName == "brochure"? <BrochureBody/> : <ContactUsBody/>}
        </>
    )
}
export default Body;