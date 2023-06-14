import React from "react";
interface ImageUploaderProps {
    label: string;
    accept: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
  }
const ImageUploader:React.FC <ImageUploaderProps>= (
    {label,
    accept,
    onChange,
    error}) => {
  return (
  <div>
  <label>{label}</label>
  <input type="file" accept={accept} onChange={onChange} />
  {error && <p>{error}</p>}
</div>)
};

export default ImageUploader;
