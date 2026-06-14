const stats = [
  { value: "100%", label: "Open source" },
  { value: "MIT", label: "License" },
  { value: "$0", label: "Per month" },
  { value: "5 min", label: "To deploy" },
]

export function Stats() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-4 sm:px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1 py-10 text-center"
          >
            <span className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              {stat.value}
            </span>
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
