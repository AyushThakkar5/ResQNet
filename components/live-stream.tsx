"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Video, VideoOff, Mic, MicOff, Camera } from "lucide-react"

export function LiveStream() {
  const [isStreaming, setIsStreaming] = useState(false)
  const [videoEnabled, setVideoEnabled] = useState(true)
  const [audioEnabled, setAudioEnabled] = useState(true)

  const toggleStream = () => {
    setIsStreaming(!isStreaming)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Live Stream (Optional)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
          {isStreaming ? (
            <div className="text-center space-y-2">
              <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse mx-auto"></div>
              <p className="text-sm text-muted-foreground">Live Streaming</p>
            </div>
          ) : (
            <div className="text-center space-y-2">
              <Camera className="h-12 w-12 mx-auto text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Camera Preview</p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center space-x-2">
          <Button variant="outline" size="sm" onClick={() => setVideoEnabled(!videoEnabled)}>
            {videoEnabled ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
          </Button>
          <Button variant="outline" size="sm" onClick={() => setAudioEnabled(!audioEnabled)}>
            {audioEnabled ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
          </Button>
          <Button onClick={toggleStream} variant={isStreaming ? "destructive" : "default"}>
            {isStreaming ? "Stop Stream" : "Start Stream"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
