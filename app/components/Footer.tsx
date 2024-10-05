export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} BasinasBase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}