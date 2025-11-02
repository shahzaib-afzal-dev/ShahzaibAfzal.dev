'use client'

export default function ErrorPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Something went wrong</h1>
        <p className="text-gray-400">An unexpected error occurred. Please try again later.</p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl font-medium hover:opacity-90 transition-opacity"
        >
          Go back home
        </a>
      </div>
    </main>
  )
}
