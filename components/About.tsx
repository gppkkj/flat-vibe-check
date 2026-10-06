export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          About FlatVibeCheck
        </h2>

        <p className="text-center text-gray-500 mt-4 max-w-3xl mx-auto">
          FlatVibeCheck is an AI-powered roommate matching
          platform that helps students and professionals
          find compatible flatmates based on lifestyle,
          habits, trust, and personality.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-purple-50 rounded-3xl p-8">
            <h3 className="text-xl font-bold">
              🎯 Our Mission
            </h3>

            <p className="text-gray-600 mt-4">
              Reduce roommate conflicts through intelligent
              compatibility matching.
            </p>
          </div>

          <div className="bg-purple-50 rounded-3xl p-8">
            <h3 className="text-xl font-bold">
              🤖 AI Matching
            </h3>

            <p className="text-gray-600 mt-4">
              Analyze lifestyle preferences and behavioral
              patterns for better recommendations.
            </p>
          </div>

          <div className="bg-purple-50 rounded-3xl p-8">
            <h3 className="text-xl font-bold">
              🛡️ Trust & Safety
            </h3>

            <p className="text-gray-600 mt-4">
              Verification and trust scoring help create
              safer shared living experiences.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}