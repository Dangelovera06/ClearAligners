import { InfiniteSlider } from "@/components/ui/infinite-slider";

export function InfiniteSliderBasic() {
  return (
    <InfiniteSlider gap={24} reverse className="w-full bg-transparent" duration={60} durationOnHover={120}>
      <img
        src="/before and after invisilign/4.png"
        alt="Before and after dental transformation"
        className="h-[300px] w-auto rounded-lg shadow-lg object-cover"
      />
      <img
        src="/before and after invisilign/5.png"
        alt="Before and after dental transformation"
        className="h-[300px] w-auto rounded-lg shadow-lg object-cover"
      />
      <img
        src="/before and after invisilign/6.png"
        alt="Before and after dental transformation"
        className="h-[300px] w-auto rounded-lg shadow-lg object-cover"
      />
      <img
        src="/before and after invisilign/7.png"
        alt="Before and after dental transformation"
        className="h-[300px] w-auto rounded-lg shadow-lg object-cover"
      />
      <img
        src="/before and after invisilign/8.png"
        alt="Before and after dental transformation"
        className="h-[300px] w-auto rounded-lg shadow-lg object-cover"
      />
    </InfiniteSlider>
  );
}

export function InfiniteSliderReverse() {
  return (
    <InfiniteSlider gap={24} reverse={false} className="w-full bg-transparent mt-6" duration={35} durationOnHover={70}>
      <img
        src="/before and after invisilign/5.png"
        alt="Before and after dental transformation"
        className="h-[280px] w-auto rounded-lg shadow-lg object-cover"
      />
      <img
        src="/before and after invisilign/6.png"
        alt="Before and after dental transformation"
        className="h-[280px] w-auto rounded-lg shadow-lg object-cover"
      />
      <img
        src="/before and after invisilign/7.png"
        alt="Before and after dental transformation"
        className="h-[280px] w-auto rounded-lg shadow-lg object-cover"
      />
      <img
        src="/before and after invisilign/8.png"
        alt="Before and after dental transformation"
        className="h-[280px] w-auto rounded-lg shadow-lg object-cover"
      />
      <img
        src="/before and after invisilign/4.png"
        alt="Before and after dental transformation"
        className="h-[280px] w-auto rounded-lg shadow-lg object-cover"
      />
    </InfiniteSlider>
  );
}
