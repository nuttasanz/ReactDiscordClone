import Link from "next/link";
import "../../styles/footerStyle.css";

const FooterMenu = () => {
  return (
    <>
      <div className="footer-menu">
        <div>
          <h5>ผลงาน</h5>
          <Link href={""}>ดาวน์โหลด</Link>
          <Link href={""}>Nitro</Link>
          <Link href={""}>สถานะ</Link>
          <Link href={""}>แอปไดเรกทอรี่</Link>
        </div>
        <div>
          <h5>บริษัท</h5>
          <Link href={""}>เกี่ยวกับ</Link>
          <Link href={""}>งาน</Link>
          <Link href={""}>แบรนด์</Link>
          <Link href={""}>ห้องข่าว</Link>
          <Link href={""}>Fall Release</Link>
        </div>
        <div>
          <h5>แหล้งข้อมูล</h5>
          <Link href={""}>วิทยาลัย</Link>
          <Link href={""}>สนับสนุน</Link>
          <Link href={""}>ความปลอดภัย</Link>
          <Link href={""}>Blog</Link>
          <Link href={""}>คำติชม</Link>
          <Link href={""}>Developers</Link>
          <Link href={""}>StreamKit</Link>
          <Link href={""}>Creators</Link>
          <Link href={""}>Community</Link>
          <Link href={""}>Official 3rd Party Merch</Link>
        </div>
        <div>
          <h5>นโยบาย</h5>
          <Link href={""}>ข้อตกลง</Link>
          <Link href={""}>ความเป็นส่วนตัว</Link>
          <Link href={""}>การคั้งค่าคุกกี้</Link>
          <Link href={""}>แนวทางปฏิบัติ</Link>
          <Link href={""}>คำขอบคุณ</Link>
          <Link href={""}>ใบอนุญาต</Link>
          <Link href={""}>ข้อมูลบริษัท</Link>
        </div>
      </div>
    </>
  );
};

export default FooterMenu;
