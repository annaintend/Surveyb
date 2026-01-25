import imgGroup1331 from "figma:asset/fa169b49cf63fdfe570fba6ff1c896aa0b17a46f.png";
import imgSugarnologooo1 from "figma:asset/90d0b2808b9f2d4ad23a49432895256cef99dbdf.png";

function ParagraphBackgroundOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[0.3px] h-[123px] left-0 not-italic right-0 text-black text-center top-[559px]" data-name="Paragraph+Background+OverlayBlur">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[33px] left-[calc(50%-0.23px)] text-[32px] top-[32.5px] translate-x-[-50%] translate-y-[-50%] uppercase w-[357px]">
        <p className="css-4hzbpn mb-0">Discover your True</p>
        <p className="css-4hzbpn text-[#f14e58]">Metabolic Health</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-1/2 text-[15px] top-[103.5px] translate-x-[-50%] translate-y-[-50%] w-[291.693px]">
        <p className="css-4hzbpn leading-[18px]">Built from your habits, signals, and blood sugar–related patterns</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#f14e58] h-[56px] left-[24px] right-[24px] rounded-[32px] top-[calc(50%+348px)] translate-y-[-50%]" data-name="Button">
      <div className="absolute css-g0mm18 flex flex-col font-['Roboto:SemiBold','Noto_Sans_Symbols:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[calc(50%-0.76px)] text-[18px] text-center text-white top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[22px]">Start 3-min Test →</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute inset-0 overflow-auto" data-name="Container">
      <ParagraphBackgroundOverlayBlur />
      <Button />
      <div className="absolute h-[403.68px] left-1/2 top-[92px] translate-x-[-50%] w-[414.884px]" data-name="Group 133 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGroup1331} />
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
    <div className="absolute bottom-0 left-1/2 top-0 translate-x-[-50%] w-[450px]" data-name="Background">
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