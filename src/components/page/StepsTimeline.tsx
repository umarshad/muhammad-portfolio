// Four steps joined by a line that draws itself as the section scrolls into view.
export function StepsTimeline({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="lpsteps">
      {steps.map((s, i) => (
        <li key={s.title} className="lpstep reveal" style={{ ["--d" as string]: `${i * 0.14}s` }}>
          <span className="lpstep__dot">{String(i + 1).padStart(2, "0")}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
