const getCroppedImageUrl = (url: string) => {
  if (!url) return ""
  const idx = url.indexOf("media/") + "media/".length;
  const croppedImageUrl = url.slice(0, idx) + "crop/600/400/" + url.slice(idx);
  return croppedImageUrl;
};

export default getCroppedImageUrl;
