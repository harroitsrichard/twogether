import { faqs } from "@/lib/content";

export function FAQ() {
  return (
    <div className="grid gap-3 lg:grid-cols-2">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-sm border border-champagne bg-white px-5 py-4 shadow-sm"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-ink">
            <span>{faq.question}</span>
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-champagne text-copper transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 text-sm leading-7 text-ink-soft">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
