import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const Overview = () => {

  const token = `br9d4a7rh5rbhn690a50`
  const url = `https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${token}`;

  const [companies, setCompanies] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(url);
        setCompanies(response.data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [url]);

  return (
    <div>
      {companies &&
        <Autocomplete
          id="search-company"
          freeSolo
          options={companies.map((option) => option.description)}
          renderInput={(params) => (
            <TextField {...params} label="search company" margin="normal" variant="outlined" />
          )}
        />
      }
    </div>
  );
}

export default Overview;
