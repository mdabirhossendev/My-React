import { FaFacebookF, FaDiscord, FaTiktok, FaYoutube } from "react-icons/fa";
import { IoMdStopwatch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";





export const iconData = [
  {
    id:0,
    icon: <FaFacebookF />,
    url:'#'
  },
  {
    id:0,
    icon: <FaDiscord />,
    url:'#'
  },
  {
    id:0,
    icon: <FaTiktok />,
    url:'#'
  },
  {
    id:0,
    icon: <FaYoutube />,
    url:'#'
  },
]



export const FooterServices = [
    {
        id:0,
        label:"Residential Cleaning",
        href:"/"
    },
    {
        id:1,
        label:"Commercial Cleaning",
        href:"/"
    },
    {
        id:2,
        label:"Deep Cleaning ",
        href:"/"
    },
    {
        id:3,
        label:"Move-In/Move-Out Cleaning",
        href:"/"
    },
    {
        id:4,
        label:"Post-Construction Cleaning",
        href:"/"
    },
    {
        id:5,
        label:"Carpet and Upholstery Cleaning",
        href:"/"
    },
]


export const footerInfo = [
  {
    id:0,
    icon:<IoMdStopwatch />,
    title:"We're Open",
    decs:"Monday - Saturday 08.00 - 18.00"
  },
  {
    id:1,
    icon:<FaLocationDot />,
    title:"Office Location",
    decs:"100 S Main St, New York, NY"
  },
  {
    id:2,
    icon:<FaEnvelope />,
    title:"Send a Message",
    decs:"contact@uclean.com"
  }
]