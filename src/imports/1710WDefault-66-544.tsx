import img51 from "figma:asset/154c3c7b4c42e50a3621dac6b5ae63e0d1f9bfda.png";
import imgSugarnologooo1 from "figma:asset/90d0b2808b9f2d4ad23a49432895256cef99dbdf.png";

function ParagraphBackgroundOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[0.3px] h-[123px] leading-[0] left-0 not-italic right-0 text-center top-[571px]" data-name="Paragraph+Background+OverlayBlur">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center left-1/2 text-[32px] text-black top-[28.5px] translate-x-[-50%] translate-y-[-50%] uppercase w-[409.892px]">
        <p className="css-4hzbpn leading-[33px]">Eating outside makes things even harder</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center left-1/2 text-[15px] text-[rgba(0,0,0,0.7)] top-[103.5px] translate-x-[-50%] translate-y-[-50%] w-[291.693px]">
        <p className="css-4hzbpn leading-[18px]">Hidden sugars, portions, and combinations are easy to miss.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#f14e58] h-[56px] left-[24px] right-[24px] rounded-[32px] top-[calc(50%+348px)] translate-y-[-50%]" data-name="Button">
      <div className="absolute css-g0mm18 flex flex-col font-['Roboto:SemiBold','Noto_Sans_Symbols:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[calc(50%-0.26px)] text-[18px] text-center text-white top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[22px]">Continue →</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute inset-0 overflow-auto" data-name="Container">
      <ParagraphBackgroundOverlayBlur />
      <Button />
      <div className="absolute h-[461.34px] left-1/2 top-[78px] translate-x-[-50%] w-[417.522px]" data-name="5 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[128.8%] left-0 max-w-none top-[-5.5%] w-full" src={img51} />
        </div>
      </div>
    </div>
  );
}

function BackgroundOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[2px] h-[53.33px] left-0 right-0 top-0" data-name="Background+OverlayBlur">
      <div className="absolute bottom-0 h-[38.062px] left-1/2 translate-x-[-50%] w-[156.7px]" data-name="sugarnologooo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSugarnologooo1} />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bottom-0 left-1/2 overflow-clip top-0 translate-x-[-50%] w-[450px]" data-name="Background">
      <div className="absolute bg-gradient-to-b from-[rgba(245,245,245,0)] h-[834.781px] left-[calc(50%-94.17px)] to-[#f5f5f5] top-[calc(50%+1.39px)] translate-x-[-50%] translate-y-[-50%] w-[667.662px]" data-name="1 931" />
      <Container />
      <BackgroundOverlayBlur />
    </div>
  );
}

export default function Component1710WDefault() {
  return (
    <div className="bg-[#f5f5f5] relative size-full" data-name="1710w default">
      <Background />
    </div>
  );
}