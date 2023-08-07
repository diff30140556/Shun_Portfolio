import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function Header() {
    const navigation = [
        { name: 'Home', href: '#', current: true },
        { name: 'About', href: '#', current: false },
        { name: 'Skills', href: '#', current: false },
        { name: 'Projects', href: '#', current: false },
        { name: 'Contact', href: '#', current: false },
    ];

    const [NavbarItem, setNavbarItem] = useState(navigation);

    function handleClick(e) {
        console.log(e.target.innerText)
        const target = e.target.innerText;
        setNavbarItem(
            NavbarItem.map((item) => 
            item.name === target
                ? {...item, current: true}
                : {...item, current: false}
            )
        );
    }

    
    return (
        <Disclosure as="nav" className="bg-sky-200/5 fixed top-0 w-full">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-between">
                                <div className="flex flex-shrink-0 items-center">
                                    <a href="#" className="w-auto">
                                        <h1 className='text-sky-200/70 font-bold text-3xl'>Wayne</h1>
                                    </a>
                                </div>
                                <div className="hidden md:ml-6 md:block">
                                    <div className="flex space-x-4">
                                        {NavbarItem.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 font-bold' : 'font-bold hover:bg-gray-700',
                                                    'rounded-md px-3 py-2 text-sm text-sky-200/60 text-[1rem]'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                                onClick={handleClick}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {NavbarItem.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    onClick={handleClick}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Header;
