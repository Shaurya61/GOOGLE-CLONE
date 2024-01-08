import {TbGridDots} from 'react-icons/tb'
import Image from 'next/image'
import Link from 'next/link';
const Header: React.FC=  () => {
    // FC -> functional component declaration in typescript
    const url: string = "https://images.unsplash.com/photo-1615592389070-bcc97e05ad01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

    return (
        //Links-> for routing to external links outside my domain
        <div className="flex justify-end pr-4 pt-3 space-x-4 items-center">
            <Link href="https://mail.google.com" className="text-sm hover:underline cursor-pointer">Gmail</Link>
            <Link href="https://images.google.com" className="text-sm hover:underline cursor-pointer">Images</Link>
            <TbGridDots className='text-4xl hover: bg-gray-200 p-2 rounded-full' />
            <Image
            src={url}
            alt="dp"
            width={50}
            height={100}  //this height property is not working but if i remove it shows error
            className="rounded-full object-cover"
            style={{height: 50}} 
            />
        </div>
            
    )
}
export default Header;