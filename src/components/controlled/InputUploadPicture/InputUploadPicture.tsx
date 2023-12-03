import { useDispatch } from 'react-redux';
import { setImage } from '../../../redux/imageSlice';

function InputUploadPicture() {
  const dispatch = useDispatch();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result;
        dispatch(setImage(base64Data));
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <label htmlFor="upload-picture">Upload picture:</label>
      <input
        type="file"
        id="upload-picture"
        name="upload-picture"
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default InputUploadPicture;
