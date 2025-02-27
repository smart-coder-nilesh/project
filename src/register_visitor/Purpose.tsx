import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserTie, faTruck, faUsers, faCrown, faStore, faTimes 
} from '@fortawesome/free-solid-svg-icons';


export interface VisitDetails {
    visitorName: string;
    phoneNumber: string;
    purpose: string;
  }

  export interface PurposeType {
    id: number;
    title: string;
    icon: any; // FontAwesome icon type
  }  
export interface PurposeProps {
    onBack: () => void;
    onNext: (details: VisitDetails) => void;
  }
function Purpose({ onBack, onNext }: PurposeProps) {
  const purposes: PurposeType[] = [
    { id: 1, title: 'Interview', icon: faUserTie },
    { id: 2, title: 'Delivery', icon: faTruck },
    { id: 3, title: 'Meeting', icon: faUsers },
    { id: 4, title: 'VVIP', icon: faCrown },
    { id: 5, title: 'Vendor', icon: faStore }
  ];

  const handlePurposeSelect = (purpose: PurposeType) => {
    onNext({ 
      visitorName: 'Raj',
      phoneNumber: '7889XXXXXX',
      purpose: purpose.title
    });
  };

  return (
    <div className="bg-white p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Purpose of Visit</h1>
        <button onClick={onBack}>
          <FontAwesomeIcon icon={faTimes} className="text-xl" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {purposes.map((purpose) => (
          <button
            key={purpose.id}
            onClick={() => handlePurposeSelect(purpose)}
            className="flex flex-col items-center p-4"
          >
            <FontAwesomeIcon 
              icon={purpose.icon} 
              className="text-3xl text-blue-500 mb-2" 
            />
            <span className="text-sm text-center">{purpose.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Purpose;