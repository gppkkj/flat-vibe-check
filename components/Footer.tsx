export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        <div>

          <h2 className="text-4xl font-bold">
            FlatVibeCheck
          </h2>

          <p className="text-gray-400 mt-4">
            AI-powered flatmate compatibility and trust assessment platform.
          </p>

        </div>

        <div>

          <h3 className="font-semibold mb-4">
            Quick Links
          </h3>

          <div className="space-y-2 text-gray-300">

            <p>Home</p>
            <p>How It Works</p>
            <p>Features</p>
            <p>Contact</p>

          </div>

        </div>

        <div>

          <h3 className="font-semibold mb-4">
            Research Modules
          </h3>

          <div className="space-y-2 text-gray-300">

            <p>Compatibility Assessment</p>
            <p>Trust Scoring</p>
            <p>Conflict Prediction</p>
            <p>AI Recommendations</p>

          </div>

        </div>

      </div>

    </footer>
  );
}