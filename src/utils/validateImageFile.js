const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = ["image/png", "image/jpeg"];

const validateImageFile = (file) => {
  if (!file || !file.name) {
    return "";
  }

  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    return "Only PNG and JPEG images are allowed.";
  }

  if (file.size > MAX_IMAGE_SIZE) {
    return "Images must be smaller than 5 MB.";
  }

  return "";
};

export default validateImageFile;
