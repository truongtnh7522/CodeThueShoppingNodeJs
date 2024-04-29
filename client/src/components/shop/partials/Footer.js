import React, { Fragment } from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";

const Footer = (props) => {

  const history = useHistory();

  return (
    <Fragment>

    <footer className="p-4 rounded-[10px_10px_0px_0px] sm:pl-8 sm:pr-12 sm:py-6 bg-neutral-900 z-10 mt-5">
    <div className="flex sm:flex-row items-center sm:justify-between flex-col">
        
        {/* Change / with your website homepage */}
        <a href="/" className="flex items-center mb-2 sm:mb-0">
            <span className="self-center tracking-[0.7rem] ml-3 font-bold uppercase sm:text-[27px] text-2xl text-white">LQ-CAMERA</span>
        </a>
        <ul className="flex flex-wrap items-center sm:text-base text-sm md:text-lg sm:mb-0 text-gray-400">
            <li className="cursor-pointer" onClick={(e) => history.push("/about")}>
                <div className="mr-4 hover:underline md:mr-6 ">About</div>
            </li>
            <li className="cursor-pointer" onClick={(e) => history.push("/contact-us")}>
                <div className="hover:underline">Contact</div>
            </li>
        </ul>
    </div>
    <hr className="my-3  sm:mx-auto border-gray-700 sm:my-5" />
    <div className="flex flex-col-reverse sm:flex-row items-center sm:justify-between">
                
        <span className="sm:text-base md:text-lg text-sm  sm:text-center text-gray-400">© {moment().format("YYYY")} <a href="/" className="hover:underline">LQ-CAMERA</a>. All Rights Reserved.
        </span>
        <div className="flex my-2 sm:my-0 space-x-6 sm:justify-center ">
            {/* Facebook link */}
            <a href="https://facebook.com/" className="text-gray-500  hover:text-white">
                <svg className="w-5 h-5 md:w-7 md:h-7 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                <span className="sr-only">Facebook page</span>
            </a>
           
             {/* Instagram link */}
            <a href="https://instagram.com/" className="text-gray-500  hover:text-white">
                <svg className="w-5 h-5 md:w-7 md:h-7 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                <span className="sr-only">Instagram page</span>
            </a>
           
            {/* Location link */}
            <a href="https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+S%C6%B0+ph%E1%BA%A1m+K%E1%BB%B9+thu%E1%BA%ADt+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/@10.8506324,106.7693382,17z/data=!3m1!4b1!4m6!3m5!1s0x31752763f23816ab:0x282f711441b6916f!8m2!3d10.8506324!4d106.7719131!16s%2Fm%2F02pz17z?hl=vi-VN&entry=ttu" className="text-gray-500  hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v.01M12 18v.01M12 6c-3.87 0-7 3.134-7 7 0 3.87 3.13 7 7 7 3.866 0 7-3.13 7-7 0-3.866-3.134-7-7-7zM2 12h.01M22 12h.01"/>
                <circle cx="12" cy="12" r="10" fill="none" />
            </svg>
                <span className="sr-only">Location page</span>
            </a>

            
        </div>
    </div>
</footer>
</Fragment>
  );
};

export default Footer;
