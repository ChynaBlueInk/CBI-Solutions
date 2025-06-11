"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import { Upload, FileVideo, ImageIcon, X, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function UploadRecordingPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    duration: "",
    tags: "",
    instructor: "",
    premium: false,
    downloadable: false,
  })

  const [uploadedFiles, setUploadedFiles] = useState({
    video: null as File | null,
    thumbnail: null as File | null,
  })

  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadComplete, setUploadComplete] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleFileUpload = (type: "video" | "thumbnail", file: File) => {
    setUploadedFiles((prev) => ({
      ...prev,
      [type]: file,
    }))
  }

  const removeFile = (type: "video" | "thumbnail") => {
    setUploadedFiles((prev) => ({
      ...prev,
      [type]: null,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          setUploadComplete(true)
          return 100
        }
        return prev + 10
      })
    }, 500)

    // Here you would typically handle the actual file upload to your server
    console.log("Form data:", formData)
    console.log("Files:", uploadedFiles)
  }

  if (uploadComplete) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <div className="pt-24 pb-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Upload Successful!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Your recording has been uploaded successfully and is now under review. We'll notify you once it's approved
              and live.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                <a href="/recordings">View All Recordings</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href="/recordings/upload">Upload Another</a>
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Upload{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Recording
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Share your educational content with our community. Upload webinars, workshops, and tutorials.
          </p>
        </div>
      </section>

      {/* Upload Form */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* File Uploads */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Video Upload */}
              <div>
                <Label className="text-lg font-semibold text-gray-900 mb-4 block">Video File *</Label>
                {uploadedFiles.video ? (
                  <div className="border-2 border-green-200 rounded-3xl p-6 bg-green-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileVideo className="w-8 h-8 text-green-600" />
                        <div>
                          <p className="font-medium text-gray-900">{uploadedFiles.video.name}</p>
                          <p className="text-sm text-gray-600">
                            {(uploadedFiles.video.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile("video")}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-gray-300 rounded-3xl p-8 text-center hover:border-blue-400 transition-colors">
                    <FileVideo className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Drag and drop your video file here, or click to browse</p>
                    <Input
                      type="file"
                      accept="video/*"
                      onChange={(e) => e.target.files?.[0] && handleFileUpload("video", e.target.files[0])}
                      className="hidden"
                      id="video-upload"
                    />
                    <Button type="button" variant="outline" asChild className="rounded-full">
                      <label htmlFor="video-upload" className="cursor-pointer">
                        <Upload className="w-4 h-4 mr-2" />
                        Choose Video File
                      </label>
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">Supported formats: MP4, MOV, AVI (Max 2GB)</p>
                  </div>
                )}
              </div>

              {/* Thumbnail Upload */}
              <div>
                <Label className="text-lg font-semibold text-gray-900 mb-4 block">Thumbnail Image *</Label>
                {uploadedFiles.thumbnail ? (
                  <div className="border-2 border-green-200 rounded-3xl p-6 bg-green-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <ImageIcon className="w-8 h-8 text-green-600" />
                        <div>
                          <p className="font-medium text-gray-900">{uploadedFiles.thumbnail.name}</p>
                          <p className="text-sm text-gray-600">{(uploadedFiles.thumbnail.size / 1024).toFixed(2)} KB</p>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile("thumbnail")}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-gray-300 rounded-3xl p-8 text-center hover:border-blue-400 transition-colors">
                    <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Upload a thumbnail image for your video</p>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => e.target.files?.[0] && handleFileUpload("thumbnail", e.target.files[0])}
                      className="hidden"
                      id="thumbnail-upload"
                    />
                    <Button type="button" variant="outline" asChild className="rounded-full">
                      <label htmlFor="thumbnail-upload" className="cursor-pointer">
                        <Upload className="w-4 h-4 mr-2" />
                        Choose Image
                      </label>
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">Recommended: 1280x720px, JPG or PNG</p>
                  </div>
                )}
              </div>
            </div>

            {/* Recording Details */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Recording Details</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="title" className="text-sm font-medium text-gray-700 mb-2 block">
                    Title *
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter recording title"
                    className="rounded-2xl border-gray-200"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="instructor" className="text-sm font-medium text-gray-700 mb-2 block">
                    Instructor Name *
                  </Label>
                  <Input
                    id="instructor"
                    name="instructor"
                    value={formData.instructor}
                    onChange={handleInputChange}
                    placeholder="Enter instructor name"
                    className="rounded-2xl border-gray-200"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="category" className="text-sm font-medium text-gray-700 mb-2 block">
                    Category *
                  </Label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white"
                    required
                  >
                    <option value="">Select category</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Webinar">Webinar</option>
                    <option value="Masterclass">Masterclass</option>
                    <option value="Tutorial">Tutorial</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="duration" className="text-sm font-medium text-gray-700 mb-2 block">
                    Duration *
                  </Label>
                  <Input
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    placeholder="e.g., 1h 30m"
                    className="rounded-2xl border-gray-200"
                    required
                  />
                </div>
              </div>

              <div className="mt-6">
                <Label htmlFor="description" className="text-sm font-medium text-gray-700 mb-2 block">
                  Description *
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Provide a detailed description of your recording content..."
                  rows={4}
                  className="rounded-2xl border-gray-200 resize-none"
                  required
                />
              </div>

              <div className="mt-6">
                <Label htmlFor="tags" className="text-sm font-medium text-gray-700 mb-2 block">
                  Tags (comma-separated)
                </Label>
                <Input
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="e.g., AI, Education, Content Creation"
                  className="rounded-2xl border-gray-200"
                />
              </div>

              <div className="mt-6 flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="premium"
                    checked={formData.premium}
                    onChange={handleInputChange}
                    className="rounded"
                  />
                  <span className="text-sm text-gray-700">Premium Content</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="downloadable"
                    checked={formData.downloadable}
                    onChange={handleInputChange}
                    className="rounded"
                  />
                  <span className="text-sm text-gray-700">Allow Downloads</span>
                </label>
              </div>
            </div>

            {/* Upload Progress */}
            {isUploading && (
              <div className="bg-blue-50 rounded-3xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Uploading...</h4>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">{uploadProgress}% complete</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                disabled={!uploadedFiles.video || !uploadedFiles.thumbnail || isUploading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUploading ? "Uploading..." : "Upload Recording"}
              </Button>
              <p className="text-sm text-gray-600 mt-4">
                By uploading, you agree to our terms of service and content guidelines.
              </p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
