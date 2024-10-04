import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 dark:text-gray-200">
          BasinasBase
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}