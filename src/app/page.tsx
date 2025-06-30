import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Typography from '@mui/material/Typography';
import RecentPlogs from '@/components/RecentPlogs';
import PostsList from '@/app/Posts/page';


export default function Home() {
  
  return (
    <section className='md:container mx-auto sm:width-full px-4 pe-4!important'>
      <Navbar></Navbar>
      <Box sx={{ height: '1px', backgroundColor: '#c4c1c1', width: '100%', my: 2 }} />
      <Typography
        variant="h1"
        sx={{ fontWeight: 'bold',
    fontSize: '10vw',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing:"7px",
    width: '100%' }}
      >
        The Blog
      </Typography>
      <Box sx={{ height: '1px', backgroundColor: '#c4c1c1', width: '100%', my: 2 }} />
      <RecentPlogs></RecentPlogs>
      <PostsList></PostsList>

    </section>
  );
}
