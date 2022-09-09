import './MyButton.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const MyButton = styled(Button)(({theme})=>({
  color: theme.palette.primary.dark,
  backgroundColor: theme.palette.primary.light,
  borderColor: theme.palette.primary.dark,
  borderRadius: '10px',
  height: '55px',
  marginBottom: 10,
  boxShadow: 'none',
 
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    borderColor: theme.palette.primary.dark,
    boxShadow: 'none',
  },
}))
export default MyButton; 