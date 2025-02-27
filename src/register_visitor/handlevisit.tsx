import { useState } from 'react';
import Login from './VisitorLogin';
import Purpose from './Purpose';
import Details from './Detail';
import { VisitDetails } from './Purpose';
function Handlevisit() {
  const [currentView, setCurrentView] = useState<'login' | 'purpose' | 'details'>('login');
  const [visitDetails, setVisitDetails] = useState<VisitDetails | null>(null);

  const handleViewChange = (view: 'login' | 'purpose' | 'details', details: VisitDetails | null = null) => {
    setCurrentView(view);
    if (details) {
      setVisitDetails(details);
    }
  };

  return (
    <>
      {currentView === 'login' && (
        <Login onNext={() => handleViewChange('purpose')} />
      )}
      {currentView === 'purpose' && (
        <Purpose 
          onBack={() => handleViewChange('login')}
          onNext={(details) => handleViewChange('details', details)} 
        />
      )}
      {currentView === 'details' && visitDetails && (
        <Details 
          details={visitDetails}
          onBack={() => handleViewChange('purpose')} 
        />
      )}
    </>
  );
}

export default Handlevisit;