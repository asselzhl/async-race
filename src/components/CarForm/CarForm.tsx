import { Button, TextField } from '@mui/material';
import { MuiColorInput } from 'mui-color-input';
import { useState } from 'react';

import styles from './CarForm.module.css';

interface CarFormProps {
  type: string;
}

function CarForm({ type }: CarFormProps) {
  const [color, setColor] = useState('#ffffff');
  const buttonText = type === 'create' ? 'Create' : 'Update';

  const handleChange = (newColor: string) => {
    setColor(newColor);
  };

  return (
    <form action="" className={styles.form}>
      <TextField
        label="Car brand"
        size="small"
        name="name"
        className={styles['text-field']}
      />

      <MuiColorInput
        format="hex"
        isAlphaHidden
        value={color}
        onChange={handleChange}
        size="small"
        className={styles['text-field']}
      />

      <Button variant="outlined" type="submit" size="small">
        {buttonText}
      </Button>
    </form>
  );
}

export default CarForm;
