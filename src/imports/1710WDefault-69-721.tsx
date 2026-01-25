import imgComment from "figma:asset/4090368ede298bd4865f4a73dc8bdeec27aeb009.png";
import imgComment1 from "figma:asset/0046aa22c1782876a4197cbcf673c88da02835b9.png";
import imgComment2 from "figma:asset/a343318fd8129a9f8f4e6e9a877de341f60c4886.png";
import imgComment3 from "figma:asset/f2727b58aaa6615937edd31b0ead752ff2200c5c.png";
import imgSugarnologooo1 from "figma:asset/165b9628374c2afe18a87818797525922cc22a7b.png";

function Comment() {
  return (
    <div className="relative size-full" data-name="comment">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComment} />
    </div>
  );
}

function Comment1() {
  return (
    <div className="relative size-full" data-name="comment">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComment1} />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold gap-[8px] items-center leading-[0] left-1/2 text-center top-1/2 translate-x-[-50%] translate-y-[-50%] w-[187.54px]">
      <div className="flex flex-col h-[18px] justify-center relative shrink-0 text-[15px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[18px]">Trusted by</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0 text-[#f14e58] text-[44.8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-ew64yg leading-[34px]">12K users</p>
      </div>
    </div>
  );
}

function Comment2() {
  return (
    <div className="relative size-full" data-name="comment">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComment2} />
    </div>
  );
}

function Comment3() {
  return (
    <div className="absolute aspect-[264.1199951171875/107.75] bottom-[1.18px] right-[24.06px] top-[490.94px]" data-name="comment">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgComment3} />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute inset-[93px_0_141px_0] overflow-clip" data-name="Container">
      <div className="absolute aspect-[230.73823176618407/109.22732237256088] bottom-[494.17px] flex items-center justify-center left-[25.13px] top-[-3.4px]">
        <div className="flex-none h-[107.75px] rotate-[-0.37deg] w-[230.05px]">
          <Comment />
        </div>
      </div>
      <div className="absolute aspect-[242.0781977428196/108.60105608662397] bottom-[386.32px] flex items-center justify-center right-[25.32px] top-[105.08px]">
        <div className="flex-none h-[107.75px] rotate-[0.2deg] w-[241.7px]">
          <Comment1 />
        </div>
      </div>
      <Frame />
      <div className="absolute aspect-[205.11250701668905/108.09752789243237] bottom-[110.17px] flex items-center justify-center left-[25.21px] top-[381.73px]">
        <div className="flex-none h-[107.75px] rotate-[-0.1deg] w-[204.93px]">
          <Comment2 />
        </div>
      </div>
      <Comment3 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#f14e58] h-[56px] left-[24px] right-[24px] rounded-[32px] top-[calc(50%+347px)] translate-y-[-50%]" data-name="Button">
      <div className="absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[23px] justify-center leading-[0] left-[calc(50%+0.1px)] text-[18px] text-center text-white top-1/2 translate-x-[-50%] translate-y-[-50%] uppercase w-[85.47px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn leading-[22px]">{`Let’s `}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute inset-0 overflow-auto" data-name="Container">
      <Container />
      <Button />
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
      <Container1 />
      <BackgroundOverlayBlur />
    </div>
  );
}

export default function Component1710WDefault() {
  return (
    <div className="bg-[#f8f8f8] relative size-full" data-name="1710w default">
      <Background />
    </div>
  );
}