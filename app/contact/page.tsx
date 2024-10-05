'use client'

import { useForm, ValidationError } from '@formspree/react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

export default function Contact() {
  const [state, handleSubmit] = useForm("xzzpndyd")

  if (state.succeeded) {
    return (
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Contact Me</h1>
        <Alert variant="success">
          <AlertTitle>Thank you!</AlertTitle>
          <AlertDescription>Your message has been sent. I will get back to you soon.</AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-foreground">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
            Name
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Doe"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-destructive" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@example.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-destructive" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Your message here..."
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-destructive" />
        </div>
        <div>
          <Button
            type="submit"
            disabled={state.submitting}
          >
            Send Message
          </Button>
        </div>
      </form>
    </div>
  )
}