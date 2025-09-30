import { Link } from '@mui/material';

export default function SkipLink() {
  return (
    <Link href="#main" sx={{
      position: 'absolute',
      top: '-40px',
      left: '0',
      backgroundColor: '#000',
      color: 'white',
      padding: '10px',
      zIndex: '1000',
      ':focus': {
        top: '0'
      }
    }}>
      Aller au contenu principal
    </Link>
  );
}