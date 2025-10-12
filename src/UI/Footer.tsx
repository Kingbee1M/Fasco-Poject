export default function Footer() {


  return (
        <div className="w-full h-auto py-10 border-t-2 border-[var(--light-gray2)] flex flex-col justify-center items-start gap-5 px-3  lg:items-center lg:gap-20">
          <div  className="w-full flex flex-col justify-center items-start gap-5 lg:flex-row lg:justify-between lg:items-center lg:w-9/10">
            <p className="text-[var(--grey-text2)] text-[17px] lg:text-[25px] font-extrabold">FASCO</p>
            <ul className="flex flex-col justify-center items-start gap-5 ml-0 lg:flex-row lg:justify-end">
              <li className="text-[var(--grey-text2)] text-[12px] lg:text-[16px]">Support Center</li>
              <li className="text-[var(--grey-text2)] text-[12px] lg:text-[16px]">Invoicing</li>
              <li className="text-[var(--grey-text2)] text-[12px] lg:text-[16px]">Contract</li>
              <li className="text-[var(--grey-text2)] text-[12px] lg:text-[16px]">Careers</li>
              <li className="text-[var(--grey-text2)] text-[12px] lg:text-[16px]">Blog</li>
              <li className="text-[var(--grey-text2)] text-[12px] lg:text-[16px]">FAQs</li>
            </ul>
          </div>
          <p className="w-full text-[var(--grey-text2)] text-[10px] text-center lg:text-[16px]">copyright &copy; 2024 Fasco. All rights reserved.</p>
        </div>
  )
}