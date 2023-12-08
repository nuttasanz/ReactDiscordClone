import DetailComponents from "./components/DetailComponents";
import FooterDetailComponents from "./components/FooterDetailComponents";
import IntroduceComponent from "./components/IntroduceComponents";

const HomePage = () => {
  return (
    <>
      <IntroduceComponent />
      <DetailComponents
        title={"สร้างโลกที่เป็นของคุณและเปิดรับผู้ที่ได้คำเชิญเท่านั้น"}
        desc={
          "เซิร์ฟเวอร์ Discord ได้จัดเรียงช่องตามหัวข้อต่าง ๆ ซึ่งคุณสามารถทำงานร่วมกัน แชร์และพูดคุยเรื่องราวในแต่ละวันของคุณได้โดยไม่ต้องสร้างแชทกลุ่มให้วุ่นวาย"
        }
        imgUrl={"/images/ComponentImages/HomePage/DetailImage1.png"}
        reverse={false}
        bgColor={"bg-[#fff]"}
      />
      <DetailComponents
        title={"พื้นที่เพื่อการสังสรรค์อย่างง่ายดาย"}
        desc={
          "ว่างเมื่อไรก็หาที่นั่งแล้วใช้งานช่องสำหรับพูด เพื่อนในเซิร์ฟเวอร์ของคุณสามารถรู้ได้ว่าคุณกำลังออนไลน์และเข้ามาพูดคุยได้ทันทีโดยไม่ต้องโทรหา"
        }
        imgUrl={"/images/ComponentImages/HomePage/DetailImage2.png"}
        reverse={true}
        bgColor={"bg-[#F6F6F6]"}
      />
      <DetailComponents
        title={"รวบรวมคนให้เป็นกลุ่มแฟนคลับ"}
        desc={
          "สร้างชุมชนได้โดยใช้เครื่องมือการคัดกรองและการกำหนดสิทธิ์การเข้าถึงของสมาชิกตามความต้องการ มอบพลังวิเศษให้สมาชิก ตั้งค่าช่องส่วนตัว และอื่นๆ อีกมากมาย"
        }
        imgUrl={"/images/ComponentImages/HomePage/DetailImage3.png"}
        reverse={false}
        bgColor={"bg-[#fff]"}
      />
      <FooterDetailComponents/>
    </>
  );
};

export default HomePage;
