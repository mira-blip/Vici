import React, { useState} from 'react'
// import Logo from './Logo'
import './Navbar.css' 
import { Link } from 'react-router-dom'
import {CollegePrepItems} from './CollegePrepItems'
import {EducationItems} from './EducationItems'
import Dropdown from './Dropdown'
const Navbar = () => {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }
    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }
    return (
        <>
            <navbar>
                <div className="logo">
                    <svg width="293" height="91" viewBox="0 0 293 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="56.7751" y="22.5054" width="45.6228" height="44.0323" fill="#FF5555"/>
                        <ellipse cx="127.237" cy="44.5215" rx="22.8114" ry="22.0161" fill="#7EE8FF"/>
                        <path d="M0 66.5376L28.2427 22.5054L54.7474 66.5376H0Z" fill="#FFF066"/>
                        <path d="M180.27 28.995C180.42 28.665 180.63 28.41 180.9 28.23C181.2 28.05 181.515 27.96 181.845 27.96C182.325 27.96 182.745 28.125 183.105 28.455C183.495 28.755 183.69 29.13 183.69 29.58C183.69 29.82 183.63 30.06 183.51 30.3L170.595 59.01C170.415 59.4 170.145 59.7 169.785 59.91C169.425 60.12 169.035 60.225 168.615 60.225C168.195 60.225 167.805 60.12 167.445 59.91C167.085 59.7 166.815 59.4 166.635 59.01L153.765 30.3C153.675 30.06 153.63 29.835 153.63 29.625C153.63 29.145 153.825 28.755 154.215 28.455C154.605 28.125 155.04 27.96 155.52 27.96C156.24 27.96 156.765 28.305 157.095 28.995L168.705 55.23L180.27 28.995ZM189.963 60.225C189.393 60.225 188.943 60.06 188.613 59.73C188.283 59.37 188.118 58.905 188.118 58.335V29.94C188.118 29.37 188.283 28.92 188.613 28.59C188.943 28.23 189.393 28.05 189.963 28.05C190.533 28.05 190.983 28.23 191.313 28.59C191.643 28.92 191.808 29.37 191.808 29.94V58.335C191.808 58.905 191.643 59.37 191.313 59.73C190.983 60.06 190.533 60.225 189.963 60.225ZM213.087 60.36C210.087 60.36 207.492 59.715 205.302 58.425C203.112 57.105 201.417 55.23 200.217 52.8C199.047 50.34 198.462 47.445 198.462 44.115C198.462 40.815 199.047 37.95 200.217 35.52C201.417 33.06 203.112 31.185 205.302 29.895C207.492 28.575 210.087 27.915 213.087 27.915C215.097 27.915 216.987 28.245 218.757 28.905C220.557 29.535 222.117 30.45 223.437 31.65C223.917 32.1 224.157 32.625 224.157 33.225C224.157 33.645 224.037 34.02 223.797 34.35C223.557 34.65 223.272 34.8 222.942 34.8C222.582 34.8 222.147 34.635 221.637 34.305C220.107 33.105 218.712 32.265 217.452 31.785C216.222 31.305 214.797 31.065 213.177 31.065C209.697 31.065 207.012 32.205 205.122 34.485C203.262 36.735 202.332 39.945 202.332 44.115C202.332 48.315 203.262 51.555 205.122 53.835C207.012 56.085 209.697 57.21 213.177 57.21C214.767 57.21 216.192 56.97 217.452 56.49C218.712 56.01 220.107 55.17 221.637 53.97C222.147 53.64 222.582 53.475 222.942 53.475C223.272 53.475 223.557 53.625 223.797 53.925C224.037 54.225 224.157 54.6 224.157 55.05C224.157 55.65 223.917 56.175 223.437 56.625C222.117 57.825 220.557 58.755 218.757 59.415C216.987 60.045 215.097 60.36 213.087 60.36ZM231.931 60.225C231.361 60.225 230.911 60.06 230.581 59.73C230.251 59.37 230.086 58.905 230.086 58.335V29.94C230.086 29.37 230.251 28.92 230.581 28.59C230.911 28.23 231.361 28.05 231.931 28.05C232.501 28.05 232.951 28.23 233.281 28.59C233.611 28.92 233.776 29.37 233.776 29.94V58.335C233.776 58.905 233.611 59.37 233.281 59.73C232.951 60.06 232.501 60.225 231.931 60.225Z" fill="black"/>
                    </svg>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link 
                            to='/college-prep' 
                            className='nav-links' 
                            onClick={closeMobileMenu}
                        >
                            College Prep <i className='fas fa-caret-down' />
                        </Link>
                        { dropdown && <Dropdown listName={CollegePrepItems}/> }
                    </li>
                    <li className='nav-item'>
                        <Link 
                            to='/blog' 
                            className='nav-links' 
                            onClick={closeMobileMenu}
                        >
                            Blog
                        </Link>
                    </li>
                    <span class="line-break"></span>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link 
                            to='/education' 
                            className='nav-links' 
                            onClick={closeMobileMenu}
                        >
                            Education <i className='fas fa-caret-down' />
                        </Link>
                        { dropdown && <Dropdown listName={EducationItems} /> }
                    </li>
                    <li className='nav-item'>
                        <Link 
                            to='/interview' 
                            className='nav-links' 
                            onClick={closeMobileMenu}
                        >
                            Interview
                        </Link>
                    </li>
                </ul>
                <div className="toggle-menu">
                    <div className="toggle">
                    <svg width="64" height="27" viewBox="0 0 64 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="62" height="25" rx="12.5" stroke="black" stroke-width="2"/>
                        <path d="M-2.25972e-06 13.5C-2.25972e-06 6.04416 6.04415 0 13.5 0H22.3651H30.3356C37.7915 0 43.8356 6.04416 43.8356 13.5C43.8356 20.9558 37.7915 27 30.3356 27H13.5C6.04416 27 -2.25972e-06 20.9558 -2.25972e-06 13.5Z" fill="#010101"/>
                        <path d="M19.78 16.305C19.89 16.305 19.985 16.35 20.065 16.44C20.145 16.53 20.185 16.645 20.185 16.785C20.185 17.035 20.01 17.265 19.66 17.475C19.3 17.685 18.92 17.845 18.52 17.955C18.12 18.055 17.73 18.105 17.35 18.105C16.22 18.105 15.325 17.77 14.665 17.1C14.015 16.43 13.69 15.505 13.69 14.325C13.69 13.575 13.835 12.915 14.125 12.345C14.415 11.765 14.82 11.315 15.34 10.995C15.87 10.675 16.47 10.515 17.14 10.515C18.09 10.515 18.845 10.825 19.405 11.445C19.965 12.065 20.245 12.905 20.245 13.965C20.245 14.165 20.205 14.31 20.125 14.4C20.045 14.49 19.915 14.535 19.735 14.535H14.905C14.995 16.255 15.81 17.115 17.35 17.115C17.74 17.115 18.075 17.065 18.355 16.965C18.635 16.855 18.935 16.71 19.255 16.53C19.515 16.38 19.69 16.305 19.78 16.305ZM17.155 11.46C16.515 11.46 16 11.66 15.61 12.06C15.23 12.46 15.005 13.025 14.935 13.755H19.18C19.16 13.015 18.975 12.45 18.625 12.06C18.275 11.66 17.785 11.46 17.155 11.46ZM25.7102 10.515C27.4602 10.515 28.3352 11.48 28.3352 13.41V17.475C28.3352 17.665 28.2802 17.815 28.1702 17.925C28.0702 18.025 27.9252 18.075 27.7352 18.075C27.5452 18.075 27.3952 18.025 27.2852 17.925C27.1752 17.815 27.1202 17.665 27.1202 17.475V13.485C27.1202 12.805 26.9852 12.31 26.7152 12C26.4552 11.69 26.0352 11.535 25.4552 11.535C24.7852 11.535 24.2502 11.74 23.8502 12.15C23.4502 12.56 23.2502 13.115 23.2502 13.815V17.475C23.2502 17.665 23.1952 17.815 23.0852 17.925C22.9852 18.025 22.8402 18.075 22.6502 18.075C22.4602 18.075 22.3102 18.025 22.2002 17.925C22.0902 17.815 22.0352 17.665 22.0352 17.475V11.145C22.0352 10.965 22.0902 10.82 22.2002 10.71C22.3102 10.6 22.4602 10.545 22.6502 10.545C22.8302 10.545 22.9702 10.6 23.0702 10.71C23.1802 10.82 23.2352 10.96 23.2352 11.13V11.895C23.4752 11.445 23.8102 11.105 24.2402 10.875C24.6702 10.635 25.1602 10.515 25.7102 10.515Z" fill="white"/>
                    </svg>
                    </div>
                    <div className="toggle">
                        <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.10156 0C1.84023 0 0 1.84023 0 4.10156C0 6.78125 0 28.2187 0 30.8984C0 33.1603 1.84023 35 4.10156 35C6.78125 35 28.2187 35 30.8984 35C33.1603 35 35 33.1603 35 30.8984C35 28.2187 35 6.78125 35 4.10156C35 1.84023 33.1603 0 30.8984 0C25.5391 0 6.78125 0 4.10156 0ZM30.8984 33.25C30.3789 33.25 27.7812 33.25 23.1055 33.25V21.123H27.3295L28.0273 16.8848H23.1055C23.1055 15.1211 23.1055 14.1411 23.1055 13.9453C23.1055 12.7848 23.9958 11.8945 25.1562 11.8945C25.3433 11.8945 26.2773 11.8945 27.959 11.8945V7.65625C26.2773 7.65625 25.3433 7.65625 25.1562 7.65625C21.6754 7.65625 18.8688 10.4759 18.8688 13.9573C18.8688 14.1526 18.8688 15.1282 18.8688 16.8848H14.7656V21.123H18.8688V33.25C10.0084 33.25 5.08594 33.25 4.10156 33.25C2.91667 33.25 1.75 32.0833 1.75 30.8984C1.75 28.2187 1.75 6.78125 1.75 4.10156C1.75 2.91667 2.91667 1.75 4.10156 1.75C6.78125 1.75 28.2187 1.75 30.8984 1.75C32.2656 1.75 33.25 2.91667 33.25 4.10156C33.25 5.8882 33.25 14.8203 33.25 30.8984C33.25 32.0833 32.0833 33.25 30.8984 33.25Z" fill="black"/>
                        </svg>
                    </div>
                    <div className="toggle">
                    <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.47406 0C4.24977 0 0 4.24977 0 9.47406C0 11.0791 0 23.9209 0 25.5259C0 30.7497 4.24977 35 9.47406 35C11.0791 35 23.9209 35 25.5259 35C30.7497 35 35 30.7497 35 25.5259C35 23.9209 35 11.0791 35 9.47406C35 4.24977 30.7497 0 25.5259 0C25.5259 0 11.0791 0 9.47406 0ZM32.9481 25.5259C32.9481 29.6187 29.6187 32.9481 25.5259 32.9481C23.9209 32.9481 11.0791 32.9481 9.47406 32.9481C5.38125 32.9481 2.05188 29.6187 2.05188 25.5259C2.05188 23.9209 2.05188 11.0791 2.05188 9.47406C2.05188 5.38125 5.38125 2.05188 9.47406 2.05188C11.0791 2.05188 23.9209 2.05188 25.5259 2.05188C29.6187 2.05188 32.9481 5.38125 32.9481 9.47406C32.9481 12.6848 32.9481 22.3158 32.9481 25.5259Z" fill="black"/>
                        <path d="M7.92969 17.5C7.92969 22.7768 12.2232 27.0698 17.5 27.0698C22.7768 27.0698 27.0698 22.7768 27.0698 17.5C27.0698 12.2232 22.7768 7.92969 17.5 7.92969C12.2232 7.92969 7.92969 12.2232 7.92969 17.5ZM9.98156 17.5C9.98156 13.3547 13.3547 9.98156 17.5 9.98156C21.6453 9.98156 25.0179 13.3547 25.0179 17.5C25.0179 21.6453 21.6453 25.0179 17.5 25.0179C13.3547 25.0179 9.98156 21.6453 9.98156 17.5Z" fill="black"/>
                        <path d="M24.471 7.35914C24.471 8.91828 25.7392 10.187 27.2989 10.187C28.858 10.187 30.1268 8.91828 30.1268 7.35914C30.1268 5.79945 28.858 4.53125 27.2989 4.53125C25.7392 4.53125 24.471 5.79945 24.471 7.35914ZM26.5229 7.35914C26.5229 6.93094 26.8712 6.58312 27.2989 6.58312C27.7271 6.58312 28.0749 6.93094 28.0749 7.35914C28.0749 7.7868 27.7271 8.13461 27.2989 8.13461C26.8712 8.13461 26.5229 7.7868 26.5229 7.35914Z" fill="black"/>
                    </svg>
                    </div>
                </div>
            </navbar>
        </>
    )
}

export default Navbar
