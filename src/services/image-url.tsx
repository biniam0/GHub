const getCroppedImageUrl = (url: string) => {
  const idx = url.indexOf("media/") + "media/".length;
  const croppedUrl = url.slice(0, idx) + "crop/600/400/" + url.slice(idx);
  return croppedUrl;
};

export default getCroppedImageUrl;
