import { Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Grid className='bg-black text-white mt-5 text-center' container color={'white' } sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
     
      <Grid className='pt-2' item xs={12} >
        <Typography variant="body2" component="p" align="center">
          &copy; 2024 Fashion Trends. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Made with love by Fashion Trends.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
