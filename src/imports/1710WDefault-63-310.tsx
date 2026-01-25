import svgPaths from "./svg-i8whbkidl5";
import imgSugarnologooo1 from "figma:asset/90d0b2808b9f2d4ad23a49432895256cef99dbdf.png";

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
      <Button />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24.5px] top-[80px] w-[323.806px]">
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28.8px] not-italic relative shrink-0 text-[28px] text-black tracking-[0.4px] w-[306px]">How do you currently see yourself in?</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="flex-[1_0_0] h-[22px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[18px] text-black top-[-1px] tracking-[-0.2px]">I feel out of control around food</p>
      </div>
    </div>
  );
}

function Container1() {
  return <div className="bg-[#f2f2f2] rounded-[16777200px] shrink-0 size-[22px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[44px] items-center left-[9px] pl-[10px] top-[13px] w-[356px]" data-name="Container">
      <Paragraph />
      <Container1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[70px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container2 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="flex-[1_0_0] h-[44px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[18px] text-black top-[-1px] tracking-[-0.2px] w-[221px]">{`I'm trying to eat better, but it's confusing`}</p>
      </div>
    </div>
  );
}

function Container3() {
  return <div className="bg-[#f2f2f2] rounded-[16777200px] shrink-0 size-[22px]" data-name="Container" />;
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[44px] items-center left-[9px] pl-[10px] top-[13px] w-[356px]" data-name="Container">
      <Paragraph1 />
      <Container3 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[70px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container4 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="flex-[1_0_0] h-[44px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[18px] text-black top-[-1px] tracking-[-0.2px] w-[255px]">{`I'm learning and improving step by step`}</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3de7e600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#f14e58] relative rounded-[16777200px] shrink-0 size-[22px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[44px] items-center left-[9px] pl-[10px] top-[13px] w-[356px]" data-name="Container">
      <Paragraph2 />
      <Container5 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[70px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <Container6 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="flex-[1_0_0] h-[44px] min-h-px min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[18px] text-black top-[-1px] tracking-[-0.2px] w-[235px]">I feel like I need better tools and feedback</p>
      </div>
    </div>
  );
}

function Container7() {
  return <div className="bg-[#f2f2f2] rounded-[16777200px] shrink-0 size-[22px]" data-name="Container" />;
}

function Container8() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[44px] items-center left-[9px] pl-[10px] top-[13px] w-[356px]" data-name="Container">
      <Paragraph3 />
      <Container7 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white h-[70px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container8 />
    </div>
  );
}

function QuizQuestion() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[304px] items-start left-[24.5px] top-[168px] w-[382px]" data-name="QuizQuestion">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
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
      <Frame />
      <QuizQuestion />
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