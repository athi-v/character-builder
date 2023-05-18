import Yoga from "../assets/yoga.png";
import Developer from "../assets/developer.png";
import Social from "../assets/social-media.png";
import Chef from "../assets/chef.png";


export const occupationRender = (watch) => {
    if(watch().occupation.value === "chef") 
    {
      return (
        <img src={Chef} alt="chef" />

      )
    }
    else if(watch().occupation.value === "yoga") 
    {
      return (<img src={Yoga} alt="femmale head" />)
    }
    else if(watch().occupation.value === "social_media") 
    {
      return (<img src={Social} alt="femmale head" />
      )
    }
    else {
      return (<img src={Developer} alt="femmale head" />)
    }

  }