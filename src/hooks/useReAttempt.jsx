import { useNavigate } from 'react-router-dom';

export function useReAttempt() {
  const navigate = useNavigate();

  const handleReAttempt = () => {
    navigate('/'); 
  };

  return { handleReAttempt };
}
