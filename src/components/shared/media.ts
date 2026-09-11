export function isVideo(src: string) {
  return /\.(mp4|webm|mov|m4v|avi)$/i.test(src)
}
