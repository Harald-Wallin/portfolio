interface CareerFact {
  label: string;
  value: string;
  detail?: string;
}

const careerFacts: CareerFact[] = [
  {
    label: "Utbildning",
    value: "Fullstack Developer",
    detail: "Medieinstitutet, Göteborg",
  },
  {
    label: "LIA-period",
    value: "[STARTDATUM] – [SLUTDATUM]",
    detail: "Tillgänglig för LIA",
  },
  {
    label: "Tidigare",
    value: "Utbildningar & erfarenheter",
    detail: "Mer om mig →",
  },
];

export default function CareerFacts() {
  return (
    <section className="career-facts" aria-label="Snabbfakta">
      {careerFacts.map((fact) => (
        <article className="career-fact" key={fact.label}>
          <h2>{fact.label}</h2>

          <p className="career-fact-value">{fact.value}</p>

          {fact.detail && (
            <p className="career-fact-detail">{fact.detail}</p>
          )}
        </article>
      ))}
    </section>
  );
}