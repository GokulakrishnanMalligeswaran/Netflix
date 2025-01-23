import youtube_icon from "../Assets/assets/youtube_icon.png"
import x_icon from "../Assets/assets/x_logo.png"
import instagram_icon from "../Assets/assets/instagram_icon.png"
import facebook_icon from "../Assets/assets/facebook_icon.png"
const Footer = () => {
  return (
    <div className=" font-thin m-5 text-center">
        <div className="flex w-8 ml-32 my-8 ">
            <img src={youtube_icon} alt="" />
            <img src={x_icon} alt="" className="rounded-full " />
            <img src={instagram_icon} alt="" />
            <img src={facebook_icon} alt="" />
        </div>
        <ul className="grid grid-cols-[auto_auto_auto_auto] gap-4 pb-[30px] pl-5">
            <li>Audio Description</li>
            <li>Help Centre</li>
            <li>Gift Cards</li>
            <li>Media Centre</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Legal Notices</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
        </ul>
    </div>
  )
}

export default Footer