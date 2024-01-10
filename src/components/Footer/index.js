import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                {/* <div className="content">
                    
                </div>
                <div className="copyright">
                    <p>2023 © All Right Reserved</p>
                </div> */}
                <div className="px-4 py-6 mx-auto overflow-hidden sm:px-6 lg:px-8">
                    <nav className="flex flex-wrap justify-center mx-5 my-2">
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-slate-300 px-3 py-2">
                                Home
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-slate-300 px-3 py-2">
                                About
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-slate-300 px-3 py-2">
                                Skills
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-slate-300 px-3 py-2">
                                Projects
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className="text-base leading-6 text-gray-500 hover:text-slate-300 px-3 py-2">
                                Contact
                            </a>
                        </div>
                    </nav>

                    <div className="flex justify-center py-3 space-x-6">
                        <a href="#" className="text-gray-400 hover:text-slate-200 p-2">
                            <span className="sr-only">LinkedIn</span>
                            <svg fill="currentColor" className="bi bi-linkedin w-5 h-6" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-slate-200 p-2">
                            <span className="sr-only">GitHub</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>

                    <div className='text-center'><a href="mailto:waynehu.dev@gmail.com" className='text-base leading-6 text-gray-400 hover:text-slate-300 px-3 py-2'>waynehu.dev@gmail.com</a></div>

                    <p className="mt-4 text-base leading-6 text-center text-gray-400">
                        2023 © Wayne Dev. All Right Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;