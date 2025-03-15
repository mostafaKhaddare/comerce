"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import style from "styled-jsx/style";

type CarouselProps = {
  children: React.ReactNode;
  setEmblaApi?: (api: any) => void; // Pass API to parent
  className1?: string;
  className2?: string;
  slideSize: string;
  slideSpacing: string;
  slideHeight: string;
};

const Carousel: React.FC<CarouselProps> = ({
  children,
  setEmblaApi,
  className1,
  className2,
  slideSize,
  slideSpacing,
  slideHeight,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  useEffect(() => {
    if (emblaApi && setEmblaApi) {
      setEmblaApi(emblaApi);
    }
  }, [emblaApi, setEmblaApi]);

  return (
    <section
      className={`embla ${className1}`}
      style={
        {
          "--slide-size": slideSize || "100%" /* Default to full size */,
          "--slide-spacing": slideSpacing || "1rem",
          "--slide-height": slideHeight || "19rem",
        } as React.CSSProperties
      }
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className={`embla__container ${className2}`}>{children}</div>
      </div>
    </section>
  );
};

export default Carousel;
