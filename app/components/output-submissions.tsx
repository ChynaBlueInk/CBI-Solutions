"use client"

import type React from "react"

import { useState } from "react"

interface Submission {
  id: string
  name: string
  email: string
  fileUrl: string
  fileName: string
  createdAt: Date
}

export default function OutputSubmissions({ challengeMonth }: { challengeMonth: string }) {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    file: null as File | null,
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({ ...formData, file })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.file) {
      alert("Please fill in all fields")
      return
    }

    const reader = new FileReader()
    reader.onload = (event) => {
      const newSubmission: Submission = {
        id: Math.random().toString(36).substr(2, 9),
        name: formData.name,
        email: formData.email,
        fileUrl: event.target?.result as string,
        fileName: formData.file!.name,
        createdAt: new Date(),
      }

      setSubmissions([newSubmission, ...submissions])
      setFormData({ name: "", email: "", file: null })
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
      if (fileInput) fileInput.value = ""
    }
    reader.readAsDataURL(formData.file)
  }

  return (
    <section className="mt-8 space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-2">Share Your Output</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Completed your challenge? Share your work with the community. Sharing is optional and always private to this
          group.
        </p>
      </div>

      {/* Upload Form */}
      <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Sarah Chen"
              className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div>
          <label htmlFor="file" className="block text-sm font-medium text-foreground mb-2">
            Upload Your Output
          </label>
          <div className="border-2 border-dashed border-border rounded-md p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
            <input
              id="file"
              type="file"
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.png,.jpg,.jpeg,.gif,.mp4,.mp3,.doc,.docx"
            />
            <label htmlFor="file" className="cursor-pointer block">
              <p className="text-foreground font-medium">
                {formData.file ? formData.file.name : "Click to upload or drag and drop"}
              </p>
              <p className="text-xs text-muted-foreground mt-1">PDF, PNG, JPG, MP4, MP3, or DOC (up to 10MB)</p>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={isUploading}
          className="w-full px-4 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {isUploading ? "Uploading..." : "Share My Output"}
        </button>
      </form>

      {/* Submissions Display */}
      {submissions.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Community Submissions ({submissions.length})</h3>
          <div className="space-y-3">
            {submissions.map((submission) => (
              <div key={submission.id} className="bg-card border border-border rounded-lg p-4 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-foreground">{submission.name}</p>
                    <p className="text-xs text-muted-foreground">{submission.email}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{submission.createdAt.toLocaleDateString()}</p>
                </div>
                <a
                  href={submission.fileUrl}
                  download={submission.fileName}
                  className="inline-block text-sm font-medium text-primary hover:underline"
                >
                  📥 {submission.fileName}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {submissions.length === 0 && (
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
          <p className="text-muted-foreground">No submissions yet. Be the first to share your work!</p>
        </div>
      )}
    </section>
  )
}
