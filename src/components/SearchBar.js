import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';


const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(location);
  };

  return (
    <Stack direction="column" alignItems="center" spacing={2} mb={2}>
        <TextField
        label="Enter location"
        variant="outlined"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        />
        <Button type="submit" variant="contained" color="success" size="large" onClick={handleSubmit}>
        Search
        </Button>
    </Stack>
  );
};

export default SearchBar;