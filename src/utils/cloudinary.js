import cloudinary from "cloudinary";

export default class CloudinaryImages {
  static sendImage(img_full_path, public_id) {
    cloudinary.v2.uploader.upload(
      img_full_path,
      { public_id: public_id },
      function (error, result) {
        if (error) {
          console.log(error);
        } else {
          console.log(result);
        }
      }
    );
  }

  static getImageURL(public_id, extension, options) {
    return cloudinary.v2.url(public_id + `.${extension}`, options);
  }
}
