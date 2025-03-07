import { useState, useRef, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faKey, faCamera, faUpload, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import Webcam from 'react-webcam';
import { VisitDetails } from './Purpose';
export interface LoginProps {
  onNext: (details: VisitDetails | null) => void;
}

function VisitorLogin({ onNext }: LoginProps) {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [inviteCode, setInviteCode] = useState<string>('');
  const [showCamera, setShowCamera] = useState<boolean>(false);
  const [image, setImage] = useState<string | null>(null);
  const [visitorName, setVisitorName] = useState<string>('');
  const [visitorLastName, setvisitorLastName] = useState<string>('');
  const webcamRef = useRef<Webcam>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCheckIn = () => {
    
    onNext({
      visitorName: visitorName + ' ' + visitorLastName,
      phoneNumber: phoneNumber,
      purpose: "purpose"
    });
  };

  const captureImage = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);
      setShowCamera(false);
    }
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="custom-blue flex flex-col items-center p-6">
      <div className="relative w-24 h-24 mt-0 mb-10">
        {image ? (
          <div className="relative">
            <img
              src={image}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <button
              onClick={() => setImage(null)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
            >
              <FontAwesomeIcon icon={faTimes} className="text-sm" />
            </button>
          </div>
        ) : (
          <img
            src="https://ui-avatars.com/api/?name=MyGate&background=fde047&color=000&size=200"
            alt="Logo"
            className="w-24 h-24 rounded-full"
          />
        )}
      </div>

      {showCamera && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg">
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="rounded-lg"
            />
            <div className="flex justify-center mt-4 space-x-4">
              <button
                onClick={captureImage}
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Capture
              </button>
              <button
                onClick={() => setShowCamera(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-md space-y-4">
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setShowCamera(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <FontAwesomeIcon icon={faCamera} className="mr-2" />
            Camera
          </button>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            ref={fileInputRef}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <FontAwesomeIcon icon={faUpload} className="mr-2" />
            Upload
          </button>
        </div>

        <div className="border border-gray-200 rounded-lg p-4 flex items-center">
          <FontAwesomeIcon icon={faMobile} className="text-gray-400 mr-3" />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="flex-1 outline-none"
          />
        </div>

        <div className="border border-gray-200 rounded-lg p-4 grid grid-cols-2 gap-2 justify-between items-center">
          <div  className='flex items-center'>
            <FontAwesomeIcon icon={faUser} className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Name"
              value={visitorName}
              onChange={(e) => setVisitorName(e.target.value)}
              className="outline-none mr-2"
            />
          </div>
          <div  className='flex items-center'>
          <input
            type="text"
            placeholder="Lastname"
            value={visitorLastName}
            onChange={(e) => setvisitorLastName(e.target.value)}
            className="outline-none mr-2"
          />
          </div>
        </div>

        <button
          onClick={handleCheckIn}
          className="w-full bg-blue-500 text-l text-white font-bold py-3 rounded-lg"
        >
          Register
        </button>
        <div className='flex items-center'>
          OR
        </div>

        <div className="border border-gray-200 rounded-lg p-4 flex items-center">
          <FontAwesomeIcon icon={faKey} className="text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Invite Code"
            value={inviteCode}
            onChange={(e) => setInviteCode(e.target.value)}
            className="flex-1 outline-none"
          />
        </div>
        <button
          onClick={handleCheckIn}
          className="w-full bg-blue-500 text-l text-white font-bold py-3 rounded-lg"
        >
          Check In
        </button>
      </div>

    </div>
  );
}

export default VisitorLogin;