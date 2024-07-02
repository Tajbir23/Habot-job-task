import Dive from "./Dive/Dive"
import GetVerified from "./GetVerified/GetVerified"
import HowItWorks from "./HowItWork/HowItWork"
import Requirements from "./Requirements/Requirements"


const Body = () => {
  return (
    <>
    <div className="py-5 px-6 sm:px-10">
        <Dive />
        <Requirements />
    </div>
    <GetVerified />
    <div className="py-5 px-6 sm:px-10">
    <HowItWorks />
    </div>
    </>
  )
}

export default Body