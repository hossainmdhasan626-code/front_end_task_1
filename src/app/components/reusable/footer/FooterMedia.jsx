import footerMediaData from "@/app/data/FooterMediaData";
import Link from "next/link";

const FooterMedia = () => {
  const data = footerMediaData;
  return (
    <div className="flex gap-5">
      {data.map((item) => (
        <Link key={item?.id} href={item?.link}>
          <div dangerouslySetInnerHTML={{ __html: item?.icon }} />
        </Link>
      ))}
    </div>
  );
};

export default FooterMedia;
