import { FormikProps } from 'formik';
import { TextField } from '@mui/material';
import styles from '../CarForm.module.css';

interface CarFormValues {
  name: string;
  color: string;
}

interface TextFieldProps {
  formik: FormikProps<CarFormValues>;
}

function TextFieldWithError({ formik }: TextFieldProps) {
  return (
    <div>
      <TextField
        label="Car brand"
        size="small"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        className={styles['text-field']}
      />
      <div className={styles.error}>
        {formik.errors.name && formik.touched.name && formik.errors.name}
      </div>
    </div>
  );
}

export default TextFieldWithError;
