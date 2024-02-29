'use client'
import useIsDesktop from "@/hooks/useIsDesktop";

const TestimonialCard = () => {
  const isDesktop = useIsDesktop()

  return (
    <div className={`${isDesktop ? 'w-2/3' : 'w-full'}`} dangerouslySetInnerHTML={{ __html: `
        <script src="https://widget.trustmary.com/ifxYUX_hp"></script>
      ` }} />
  );
};

export default TestimonialCard;

