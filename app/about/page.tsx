import Image from 'next/image'

export default function About() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <Image
          src="./profile3.jpg"
          width={200}
          height={200}
          alt="Profile picture"
          className="rounded-full"
        />
        <div>
          <p className="text-lg mb-4">
            Hi, I am George Basinas. I am a passionate web developer with expertise in React, Next.js, and modern web technologies.
          </p>
          <p className="text-lg mb-4">
            With not many years of experience in the field, I have worked on a variety of projects ranging from small business websites to large-scale web applications.
          </p>
          <p className="text-lg mb-4">
            When I am not coding, you can find me reading manga, watching anime or checking the latest news on technology and artificial intelligence.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Skills</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>HTML5 & CSS3</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
