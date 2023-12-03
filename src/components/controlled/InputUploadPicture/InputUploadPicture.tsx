function InputUploadPicture() {
  return (
    <div>
      <label htmlFor="upload-picture">Upload picture:</label>
      <input
        type="file"
        id="upload-picture"
        name="upload-picture"
        accept="image/png, image/jpeg"
      />
    </div>
  );
}

export default InputUploadPicture;
