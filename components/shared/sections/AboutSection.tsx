import React from "react";
import { ArrowRight } from "lucide-react";
import Section from "../layout/Section";
import Container from "../layout/Container";

interface StatProps {
  number: string;
  label: string;
}

function Stat({ number, label }: StatProps) {
  return (
    <div className="flex flex-col items-start transition-transform duration-300 hover:transform hover:translate-y-[-4px]">
      <h4 className="text-4xl font-bold text-gray-900 bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
        {number}
      </h4>
      <h6 className="text-gray-500 font-medium">{label}</h6>
    </div>
  );
}

function AboutSection() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid sm:grid-cols-2 gap-6 lg:order-first order-last">
            <div className="pt-24 flex justify-end">
              <img
                className="rounded-2xl object-cover w-full h-[400px] shadow-lg transition-transform duration-500 hover:transform hover:scale-105"
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Modern office space"
                loading="lazy"
              />
            </div>
            <img
              className="rounded-2xl object-cover w-full h-[360px] shadow-lg transition-transform duration-500 hover:transform hover:scale-105"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-10 lg:items-start items-center">
            <div className="space-y-8 w-full">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900 lg:text-start text-center leading-tight">
                  Empowering Each Other to Succeed
                </h2>
                <p className="text-gray-600 lg:text-start text-center leading-relaxed">
                  Every project we've undertaken has been a collaborative
                  effort, where every person involved has left their mark.
                  Together, we've not only constructed buildings but also built
                  enduring connections that define our success story.
                </p>
              </div>

              <div className="flex sm:flex-row flex-col sm:gap-10 gap-6 lg:justify-start justify-center items-center">
                <Stat number="33+" label="Years of Experience" />
                <Stat number="125+" label="Successful Projects" />
                <Stat number="52+" label="Happy Clients" />
              </div>
            </div>

            <button className="group inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg transition-all duration-300 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span className="font-medium">Read More</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default AboutSection;
