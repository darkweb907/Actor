import Actor from "../../assets/actor.jpeg";

export default function About() {
  return (
    <section className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <img
          src="./images/acting.jpeg"
          alt="Jide Peniel"
          className="w-full h-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-red-500">
              Jide Peniel
            </h1>
            <p className="text-gray-300 mt-4 text-lg">
              Actor • Performer • Storyteller
            </p>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div>
          <img
            src={Actor}
            alt="Jide Peniel portrait"
            className="rounded-2xl shadow-2xl"
          />
        </div>

        {/* Bio */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-red-500">
            About Jide Peniel
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            Jide Peniel is a passionate actor dedicated to bringing characters
            to life through powerful storytelling. Known for his emotional
            depth and versatility, he delivers performances that resonate with
            audiences across stage and screen.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            With experience in drama, action, and contemporary roles, Jide
            continues to grow as an artist while exploring diverse narratives.
            His commitment to authenticity and creativity allows him to
            transform every role into a memorable performance.
          </p>

          <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-300">
            “Acting is the art of living truthfully under imaginary
            circumstances.”
          </blockquote>
        </div>
      </div>

      {/* Quote Section */}
      <div className="py-16 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6">
          The Power of Storytelling
        </h3>

        <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
          Through every performance, Jide Peniel seeks to inspire, connect,
          and tell stories that reflect the human experience. Acting is not
          just a craft — it is a way to bring emotions, ideas, and characters
          to life.
        </p>
      </div>

    </section>
  );
}

