import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  label?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  label,
  title,
  intro,
  children,
  className = "",
}: SectionShellProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="container-page">
        {(label || title || intro) && (
          <div className="mb-10 max-w-3xl">
            {label ? <p className="eyebrow">{label}</p> : null}
            {title ? <h2 className="section-heading mt-3">{title}</h2> : null}
            {intro ? <p className="body-large mt-5">{intro}</p> : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
