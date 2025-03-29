import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem]">
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-6">
        {/* FAQ 1 */}
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg md:text-2xl font-normal text-gray-900 hover:text-indigo-600">
            How can I reset my password?
          </AccordionTrigger>
          <AccordionContent className="text-base text-gray-700">
            To reset your password, go to the login page and click on "Forgot
            Password." Follow the instructions sent to your email.
          </AccordionContent>
        </AccordionItem>

        {/* FAQ 2 */}
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg md:text-2xl font-normal text-gray-900 hover:text-indigo-600">
            How do I update my billing information?
          </AccordionTrigger>
          <AccordionContent className="text-base text-gray-700">
            You can update your billing details by navigating to the "Billing"
            section in your account settings.
          </AccordionContent>
        </AccordionItem>

        {/* FAQ 3 */}
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg md:text-2xl font-normal text-gray-900 hover:text-indigo-600">
            How can I contact customer support?
          </AccordionTrigger>
          <AccordionContent className="text-base text-gray-700">
            You can contact our support team via live chat or email at
            support@example.com.
          </AccordionContent>
        </AccordionItem>

        {/* FAQ 4 */}
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg md:text-2xl font-normal text-gray-900 hover:text-indigo-600">
            How do I delete my account?
          </AccordionTrigger>
          <AccordionContent className="text-base text-gray-700">
            To delete your account, go to "Settings" → "Account" → "Delete
            Account." This action is irreversible.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
