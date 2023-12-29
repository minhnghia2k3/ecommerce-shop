import React from 'react'
import Link from 'next/link'
import { IoIosSpeedometer } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";

import clsx from 'clsx';
const sidebar = [
    {
        name: 'Dashboard',
        icon: <IoIosSpeedometer size={20} />,
        link: '/',
        active: true,
    },
    {
        name: 'Customers',
        icon: <FaUser size={20} />,
        link: 'dashboard/customers',
    },
    {
        name: 'Invoices',
        icon: <LiaFileInvoiceSolid size={20} />,
        link: 'dashboard/invoices',
    },
    {
        name: 'Products',
        icon: <MdOutlineProductionQuantityLimits size={20} />,
        link: 'dashboard/products',
    },
]

const Sidebar = () => {
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                {sidebar.map((item, index) => (
                    <li className="nav-item" key={index}>
                        <Link className={clsx("nav-link gap-2", !item.active && "collapsed"
                        )} href={`${item.link}`}>
                            {item.icon}
                            <span>{item.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>

    )
}

export default Sidebar