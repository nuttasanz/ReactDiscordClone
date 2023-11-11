import HomePage from "./components/home/HomePage";
import Layouts from "./components/layouts/Layouts";

export default function Home() {
  return (
    <>
      <div className="bg-[#404EED]">
        <Layouts>
          <HomePage />
        </Layouts>
      </div>
    </>
  );
}
