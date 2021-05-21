import React from "react";
import { Footer, Button } from 'react-materialize';

export default function AppFooter () {
    const year = new Date().getFullYear();

    return(
        <div className='banner-container'>
            <Footer copyrights={`${year} James Martineau`}
                moreLinks={
                    <div className='more-links'>
                    <a className="grey-text text-lighten-4 right" href="https://github.com/jamesmart77">GitHub</a>
                    <a className="grey-text text-lighten-4 right" href="https://www.linkedin.com/in/jamesrmartineau">LinkedIn</a>
                    </div>
                }
                links={
                    <ul className='footer-links'>
                    <li>
                        <a className='unsplash-link' 
                            href="https://unsplash.com/@mr_vero?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            title="Download free do whatever you want high-resolution photos from Irvan Smith">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg"  
                                    viewBox="0 0 32 32">
                                    <title>unsplash-logo</title>
                                    <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                                </svg>
                            </span>
                            <span>Irvan Smith</span>
                        </a> 
                    </li>
                    <li>
                        <a  className='unsplash-link' 
                            href="https://unsplash.com/@hnhmarketing?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" 
                            target="_blank" rel="noopener noreferrer" 
                            title="Download free do whatever you want high-resolution photos from Hunter Haley">
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 32 32">
                                <title>unsplash-logo</title>
                                <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                            </svg>
                            </span>
                            <span>Hunter Haley</span>
                        </a>
                    </li>
                    <li>
                    <Button className='footer-email-btn'
                        floating 
                        tooltip='Feel free to contact me via email'
                        node='a' 
                        href="mailto:jamesmart77@gmail.com" 
                        waves='light' 
                        icon='email'/>
                    </li>
                    </ul>
                }>
                <h5 className="white-text">Additional Information</h5>
                <p className="grey-text text-lighten-4">
                    The following links are in appreciation for the various artists free content.
                </p>
            </Footer>
        </div>
    )
}
