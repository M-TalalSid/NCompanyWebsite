export default function AboutHero() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              MT International
            </span>
          </h1>
          <p className="text-xl text-purple-200 leading-relaxed mb-12">
            We are a passionate team of software developers, designers, and
            innovators dedicated to transforming businesses through cutting-edge
            technology solutions. Since our founding, we've been committed to
            delivering exceptional software that drives growth and success for
            our clients.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-purple-200">
                To empower businesses with innovative software solutions that
                drive digital transformation and sustainable growth.
              </p>
            </div>
            <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-purple-200">
                To be the leading software development partner, known for
                excellence, innovation, and transformative solutions.
              </p>
            </div>
            <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <p className="text-purple-200">
                Innovation, quality, collaboration, and client success are at
                the core of everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
