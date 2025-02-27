import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { VisitDetails } from './Purpose';

export interface DetailsProps {
    details: VisitDetails;
    onBack: () => void;
}

function Details({ details, onBack }: DetailsProps) {
  const { visitorName, phoneNumber, purpose } = details;

  return (
    <div className="bg-white flex flex-col justify-center p-6 rounded-xl shadow-lg">
      <img 
        src="https://ui-avatars.com/api/?name=MyGate&background=fde047&color=000" 
        alt="Logo" 
        className="w-20 h-20 mx-auto mt-0 mb-6 rounded-full"
      />
      
      <div className="bg-white rounded-xl p-6 justify-center">
        <div className="flex justify-between  mb-6">
          <div>
            <h2 className="text-2xl font-bold">{visitorName}</h2>
            <p className="text-gray-600">{phoneNumber}</p>
            <p className="text-gray-800">Piyush Chemicals</p>
          </div>
          <img 
            src={`https://ui-avatars.com/api/?name=${visitorName}&background=e2e8f0&color=000`}
            alt="Visitor" 
            className="w-10 h-10 rounded-full"
          />
        </div>

        <button className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-lg mb-6">
          {purpose}
        </button>

        <div className="mb-6">
          <h3 className="font-bold mb-3">Host Detail</h3>
          <div className="flex items-center">
            <img 
              src="https://ui-avatars.com/api/?name=Sidharth+Raina&background=e2e8f0&color=000" 
              alt="Host" 
              className="w-8 h-8 rounded-full mr-3"
            />
            <div>
              <p className="font-bold">Sidharth Raina</p>
              <p className="text-gray-600 text-sm">Admin</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center text-green-500 mb-6">
          <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
          <span>Approved</span>
        </div>

        <div className="text-center mb-6">
          <p className="text-gray-600 text-sm">Your Guest Code is</p>
          <p className="text-2xl font-bold">583224</p>
        </div>

        <button 
          className="w-full bg-blue-100 text-blue-800 font-bold py-3 px-6 rounded-lg flex items-center justify-center"
          onClick={onBack}
        >
          Change Details
          <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
        </button>
      </div>
    </div>
  );
}

export default Details;