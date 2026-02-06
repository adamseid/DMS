export default function Home() {
  return (
  <div className="flex flex-col min-h-screen items-center justify-center gap-8 p-6 bg-brand-white">
    {/* Font Showcase */}
    <section className="text-center space-y-2">
      <h1 className="text-4xl text-brand-primary font-segoe font-bold">
        Segoe UI Bold
      </h1>

      <h2 className="text-2xl font-segoe font-semibold">
        Segoe UI Semibold
      </h2>

      <p className="font-segoe italic">
        Segoe UI Italic
      </p>

      <p className="font-segoe">
        Segoe UI Regular
      </p>
    </section>

    {/* Brand Colors Showcase */}
    <section className="bg-brand-dark text-brand-white p-6 rounded-lg space-y-4 text-center">
      <h1 className="text-4xl font-segoe text-brand-primary">
        Welcome to DMS
      </h1>

      {/* <button
        onClick={() => alert("Button clicked")}
        className="bg-brand-secondary text-brand-white px-4 py-2 rounded hover:bg-brand-tertiary"
      >
        Click Me
      </button> */}

      <span className="text-brand-highlight">
        Highlight Text
      </span>
    </section>
  </div>
  );
}
