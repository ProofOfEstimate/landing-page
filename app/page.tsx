import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-100">
      <Head>
        <title>POE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <header className="text-center bg-blue-500 text-white p-6">
        <h1 className="text-4xl font-bold">Join the Future of Forecasting!</h1>
        <p className="mt-2 text-xl">
          Make your predictions, earn points, and build your reputation
        </p>
      </header>

      {/* Features Section */}
      <section className="p-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Features</h2>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {/* Feature 1 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
              <h3 className="font-bold text-xl mb-2">Submit Estimates</h3>
              <p>
                Share your insights and predictions on future events with a
                global audience.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
              <h3 className="font-bold text-xl mb-2">Earn Points</h3>
              <p>
                Get points for accurate predictions and climb up the
                leaderboard.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
              <h3 className="font-bold text-xl mb-2">Build Reputation</h3>
              <p>
                Establish yourself as a foresightful predictor and gain
                recognition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>Follow us on social media for updates</p>
        <a
          href="https://twitter.com/ProofOfEstimate"
          className="text-blue-400 hover:text-blue-600"
        >
          Twitter
        </a>{" "}
        |
        <a
          href="https://discord.com"
          className="text-blue-400 hover:text-blue-600"
        >
          Discord
        </a>
      </footer>
    </div>
  );
}
