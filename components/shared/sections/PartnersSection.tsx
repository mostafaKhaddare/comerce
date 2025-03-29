import { Card } from "@/components/ui/card";
import Section from "../layout/Section";
import Container from "../layout/Container";
export default function Partners() {
  return (
    <Section>
      <Container>
        <div className="mb-20 text-center">
          <span className="text-indigo-600 font-medium mb-4 block">
            OUR PARTNERS
          </span>
          <h1 className="text-4xl text-gray-900 font-bold">
            We work with the best partners
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <Card
              key={index}
              className="flex justify-center items-center border border-gray-200 shadow-sm h-24 rounded-2xl"
            >
              <svg
                className="h-9"
                viewBox="0 0 120 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_8562_69352)">
                  <path
                    d="M2.50597 14.6871H14.0468V17.9219L9.6962 18.261C2.68833 18.7827 0.5 20.6349 0.5 25.8523V26.8958C0.5 30.7044 3.15726 33.0001 7.2734 33.0001C10.5038 33.0001 12.3795 32.2436 14.6721 29.8958H15.0628V32.374H19.7V9.6001H2.50597V14.6871Z"
                    fill="#F18618"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_8562_69352">
                    <rect
                      width="119"
                      height="36"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
