import { ChangeEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { HardDriveUpload, UploadCloud } from 'lucide-react';

export default function UploadImage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);

    if (file) {
      // Create a URL for the selected file and set it as the image URL
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    } else {
      setImageUrl(null);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-56'>Đổi Ảnh Đại Diện</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] bg-gray-500 py-10'>
        <h1>Chọn Một Hình Ảnh</h1>
        <div className='flex items-center justify-between gap-4'>
          <div className='bg-gray-600 rounded-lg w-44 h-44'>
            <label htmlFor='uploadInput' className='cursor-pointer'>
              <div className='flex flex-col space-y-2'>
                <div
                  className={`flex w-32 h-32 mx-auto mt-2 rounded-full ${
                    selectedFile ? '' : 'bg-primary'
                  }`}
                >
                  <UploadCloud
                    className={`m-auto text-white ${
                      selectedFile ? 'hidden' : ''
                    }`}
                  />
                  {selectedFile && (
                    <div className=''>
                      {imageUrl && (
                        <img
                          src={imageUrl}
                          alt='Selected'
                          className='w-32 h-32 rounded-full object-cover'
                        />
                      )}
                    </div>
                  )}
                </div>

                <span className='flex mx-auto font-bold'>Tải Lên Hình Ảnh</span>
              </div>
              <input
                id='uploadInput'
                type='file'
                accept='image/*'
                className='hidden'
                onChange={(event) => handleFileChange(event)}
              />
            </label>
          </div>
          <div className='bg-gray-600 rounded-lg w-44 h-44'>
            <label htmlFor='uploadInputGif' className='cursor-pointer'>
              <div className='flex flex-col space-y-2'>
                <div className='flex w-32 h-32 mx-auto mt-2 bg-primary rounded-full'>
                  <HardDriveUpload className='m-auto text-white' />
                </div>
                <span className='flex mx-auto font-bold'>Chọn Ảnh GIF</span>
              </div>
              <input
                id='uploadInputGif'
                type='file'
                accept='image/gif'
                className='hidden'
                onChange={(event) => handleFileChange(event)}
              />
            </label>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
