import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ChangeEvent } from 'react';

import styles from './SortOptions.module.css';

interface SortOptionsProps {
  handleSortChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function SortOptions({ handleSortChange }: SortOptionsProps) {
  return (
    <div className={styles.wrapper}>
      <FormControl>
        <FormLabel id="sort-by">Sort by</FormLabel>
        <RadioGroup
          row
          defaultValue="id"
          name="sortBy"
          onChange={handleSortChange}
        >
          <FormControlLabel value="id" control={<Radio />} label="ID" />
          <FormControlLabel value="wins" control={<Radio />} label="Wins" />
          <FormControlLabel value="time" control={<Radio />} label="Time" />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel id="order-by">Order by</FormLabel>
        <RadioGroup
          row
          defaultValue="ASC"
          name="orderBy"
          onChange={handleSortChange}
        >
          <FormControlLabel value="ASC" control={<Radio />} label="Ascending" />
          <FormControlLabel
            value="DESC"
            control={<Radio />}
            label="Descending"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
