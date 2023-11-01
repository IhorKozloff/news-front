import { 
    TiSocialGooglePlusCircular, 
    TiSocialFacebookCircular, 
    TiSocialLinkedinCircular, 
    TiSocialTwitterCircular, 
    TiSocialVimeoCircular 
} from 'react-icons/ti';
import { IconContext } from 'react-icons';
import { PiHouseLine } from 'react-icons/pi';
import { MdOutlineMail } from 'react-icons/md';
import { BiSolidPhoneCall } from 'react-icons/bi';

export const Footer = () => {
    return (
        <div className="w-full h-60 flex flex-col justify-between">
            <div className="bg-footerUp flex justify-between items-center py-6 px-6">
                <h3 className="text-white">Get connected with us on social networks</h3>
                <IconContext.Provider value={{ className: 'text-white w-full h-full' }}>
                    <ul className="links-list flex gap-2 [&_li]:cursor-pointer [&_li]:w-6 [&_li]:h-6">
                    
                        <li>
                            <a>
                                <TiSocialGooglePlusCircular/>
                            </a>
                        </li>

                        <li>
                            <a>
                                <TiSocialFacebookCircular/>
                            </a>
                        </li>

                        <li>
                            <a>
                                <TiSocialLinkedinCircular/>
                            </a>
                        </li>

                        <li>
                            <a>
                                <TiSocialTwitterCircular/>
                            </a>
                        </li>

                        <li>
                            <a>
                                <TiSocialVimeoCircular/>
                            </a>
                        </li>
                    </ul>
                </IconContext.Provider>    
            </div>

            <ul className="py-10 px-6 text-white flex gap-8 bg-footerPrimary">
                <li className="w-1/4">
                    <div className="mb-8 pr-2">
                         COMPANY NAME      
                    </div>
                       
                    <div className="opacity-70">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis fuga iste quaerat beatae amet nesciunt voluptatum eos architecto, similique quia excepturi, id quasi repudiandae totam, repellat ipsa commodi deleniti illo?
                    </div>
                </li>

                <li className="w-1/4">
                    <div className="mb-8">
                        ADVERTISING ON THE WEBSITE   
                    </div>
                    <ul className="[&_li]:cursor-pointer">
                        <li className="mb-4 opacity-70 hover:opacity-100">Commercial advertising</li>
                        <li  className="opacity-70 hover:opacity-100">For individuals</li>
                    </ul>
                    <div>
                    </div>
                </li>

                <li className="w-1/4">
                    <div className="mb-8">
                        OUR PARTNERS      
                    </div>
                    <ul className="[&_a]:opacity-70">
                        <li className="mb-4"><a href="www.google.com" className="hover:opacity-100">IACI. Headquarters</a></li>
                        <li className="mb-4"><a href="www.google.com" className="hover:opacity-100">Nexstar Media Group. Headquarters</a></li>
                        <li className="mb-4"><a href="www.google.com" className="hover:opacity-100">The New York Times Company</a></li>
                        <li><a href="www.google.com" className="hover:opacity-100">Paramount Global. Headquarters</a></li>
                    </ul>
                    <div>
                    </div>
                </li>

                <li className="w-1/4">
                    <div className="mb-8">
                         CONTACTS      
                    </div>
                    <ul className="[&_li]:opacity-70 [&_li]:cursor-pointer">
                        <li className="flex items-center gap-1 mb-4 hover:opacity-100">
                            <div>
                                <PiHouseLine />
                            </div>
                            <span>
                                    New York, NY 10012, US
                            </span>
                        </li>

                        <li className="flex items-center gap-1 mb-4 hover:opacity-100">
                            <div>
                                <MdOutlineMail />
                            </div>
                            <span>
                                    info@example.com
                            </span>
                        </li>

                        <li className="flex items-center gap-1 hover:opacity-100">
                            <div>
                                <BiSolidPhoneCall />
                            </div>
                            <span>
                                    + 01 234 567 88
                            </span>
                        </li>
                    </ul>
                    <div>
                    </div>
                </li>
            </ul>

            <div className="bg-footerDown h-10 flex justify-center items-center py-6 px-6 text-white">
                &copy; 2023 - Neww Web. All Rights Reserved.
            </div>
        </div>
    );
};