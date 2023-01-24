import RegionHandler from "@/config/RegionHandler"

const DropDown = () => {
    return (
        <div className=" relative bg-white ml-auto shadow-header rounded-sm">
            <div className="peer flex flex-row  w-full px-3 py-3 md:text-lg lg:text-spSize2 hover:text-sp-orange3 transition duration-300 ease-in-out">
                <span className="select-none text-sm font-semibold">Filter by Region</span>
                <div className="flex items-center ml-9">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" >
                        <path d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z" fill="black" />
                    </svg>
                </div>
            </div>
            <ul className="hidden hover:flex peer-hover:flex peer-hover:animate-navbar-anim peer-hover:ease-in-out peer-hover:duration-300   flex-col absolute top-0 w-44  mt-10 bg-white rounded-lg shadow-xl hover:duration-500 ">
                {/* {RegionHandler.map((opt, index) => {
                    return ( */}
                <div className='flex px-4 py-1 text-gray-800 hover:bg-sp-orange3 transition duration-300 ease-in-out hover:text-blue-500 rounded'>
                    <p className="">
                        test
                    </p>
                </div>
                <div className='flex px-4 py-1 text-gray-800 hover:bg-sp-orange3 transition duration-300 ease-in-out hover:text-blue-500 rounded'>
                    <p className="">
                        test
                    </p>
                </div>
                <div className='flex px-4 py-1 text-gray-800 hover:bg-sp-orange3 transition duration-300 ease-in-out hover:text-blue-500 rounded'>
                    <p className="">
                        test
                    </p>
                </div>
                <div className='flex px-4 py-1 text-gray-800 hover:bg-sp-orange3 transition duration-300 ease-in-out hover:text-blue-500 rounded'>
                    <p className="">
                        test
                    </p>
                </div>
                {/* )
                })} */}

            </ul>
        </div>
    )
}

export default DropDown;