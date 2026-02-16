export default function Footer() {
  return (
    <footer className="bg-brand-black text-white mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Sundown Cafe. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Fresh coffee, great food, amazing vibes.
          </p>
        </div>
      </div>
    </footer>
  )
}
