import Packages from "@/Components/Packages";
import Deals from "@/Components/Deals";
import DealsLG from "@/Components/DealsLG";
import Newsletter from "@/Components/Newsletter";


export default function productLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <>
        {children}
        <div className="w-full overflow-x-hidden flex flex-col justify-center items-center gap-5">
            <Packages />
            <Deals />
            <DealsLG />
            <Newsletter />
        </div>
      </>
  );
}