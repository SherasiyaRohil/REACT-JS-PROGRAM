import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Pro5() {
  return (
    <Stack spacing={2} direction="row" justifyContent="center" alignItems="center" padding={50} sx={{ ":hover": { bgcolor: 'grey' } }}>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}