const Videos = () => {
  const videos = [
    {
      title: "Acting Showreel",
      url: "https://www.youtube.com/embed/ysz5S6PUM-U",
    },
    {
      title: "Drama Scene Performance",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    },
    {
      title: "Interview Clip",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Short Film Scene",
      url: "https://www.youtube.com/embed/ScMzIvxBSi4",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white px-6 py-16">

      {/* Page Title */}
     

      {/* Video Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              className="w-full h-56"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>

            <div className="p-4">
              <h3 className="text-lg font-semibold">{video.title}</h3>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Videos;