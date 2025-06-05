import Link from "next/link";
import Image from 'next/image'
import logo from '@/public/logo.png'

function Logo({ name }) {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <Image src={logo} className="w-[45px] h-[45px] md:w-[50px] md:h-[50px]" quality={100} alt="The Wild Oasis logo" />
      <span className="text-xl font-semibold text-primary-100">
        {name}
      </span>
    </Link>
  );
}

export default Logo;
