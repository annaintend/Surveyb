import img1932 from "figma:asset/2667ac5d63702f710b80a7d97ec5142d0b68ba8e.png";
import imgSugarnologooo1 from "figma:asset/90d0b2808b9f2d4ad23a49432895256cef99dbdf.png";

function ParagraphBackgroundOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[0.3px] h-[123px] leading-[0] left-0 not-italic right-0 text-center top-[571px]" data-name="Paragraph+Background+OverlayBlur">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center left-1/2 text-[32px] text-black top-[16.5px] translate-x-[-50%] translate-y-[-50%] uppercase w-[409.892px]">
        <p className="css-4hzbpn leading-[33px]">{`That's more common than it seems`}</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center left-1/2 text-[15px] text-[rgba(0,0,0,0.7)] top-[91.5px] translate-x-[-50%] translate-y-[-50%] w-[291.693px]">
        <p className="css-4hzbpn leading-[18px]">{`Food doesn't affect everyone the same way.`}</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#f14e58] h-[56px] left-[24px] right-[24px] rounded-[32px] top-[calc(50%+348px)] translate-y-[-50%]" data-name="Button">
      <div className="absolute css-g0mm18 flex flex-col font-['Roboto:SemiBold','Noto_Sans_Symbols:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[calc(50%-0.76px)] text-[18px] text-center text-white top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[22px]">get to know my body more →</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute inset-0 overflow-auto" data-name="Container">
      <ParagraphBackgroundOverlayBlur />
      <Button />
      <div className="absolute h-[493.802px] left-1/2 top-[45.32px] translate-x-[-50%] w-[395.042px]" data-name="1 932">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1932} />
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