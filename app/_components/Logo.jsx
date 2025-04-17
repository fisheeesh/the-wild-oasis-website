import Link from "next/link";
import Image from 'next/image'
import logo from '@/public/logo.png'

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <Image src={logo} className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]" quality={100} alt="The Wild Oasis logo" />
      <span className="text-xl font-semibold text-primary-100 hidden md:block">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
