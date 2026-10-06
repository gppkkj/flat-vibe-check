const features = [
  {
    icon: "👥",
    title: "Smart Compatibility",
    desc: "AI analyzes your lifestyle, habits, and preferences to find your best match.",
  },
  {
    icon: "🛡️",
    title: "Trust & Safety First",
    desc: "Multi-layer verification and trust score ensure genuine profiles.",
  },
  {
    icon: "🧠",
    title: "AI-Powered Insights",
    desc: "Understand personality and compatibility using AI analysis.",
  },
  {
    icon: "⚠️",
    title: "Avoid Future Conflicts",
    desc: "Predict potential conflicts before it's too late.",
  },
  {
    icon: "⭐",
    title: "Better Living Experience",
    desc: "Find flatmates who truly match your vibe.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Why Choose FlatVibeCheck?
        </h2>

        <p className="text-center text-gray-500 mt-4">
          We go beyond basic details to understand what really matters.
        </p>

        <div className="grid lg:grid-cols-5 gap-6 mt-16">

          {features.map((feature, index) => (

            <div
              key={index}
              className="
              bg-white
              rounded-3xl
              border
              p-8
              text-center
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >

              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center text-3xl mb-5">

                {feature.icon}

              </div>

              <h3 className="font-bold text-xl">
                {feature.title}
              </h3>

              <p className="text-gray-500 mt-4">
                {feature.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}