import { FormikProps } from 'formik';
import { TextField } from '@mui/material';
import styles from '../CarForm.module.css';
import { useAppDispatch } from '../../../store/store';

interface CarFormValues {
  name: string;
  color: string;
  id?: string;
}
type CarFormAction = (data: { name: string }) => {
  type: string;
  payload: { name: string };
};

interface TextFieldProps {
  formik: FormikProps<CarFormValues>;
  onChangeAction: CarFormAction;
}

function TextFieldWithError({ formik, onChangeAction }: TextFieldProps) {
  const dispatch = useAppDispatch();
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue('name', e.target.value);

    dispatch(onChangeAction({ name: e.target.value }));
  };
  return (
    <div>
      <TextField
        label="Car brand"
        size="small"
        name="name"
        value={formik.values.name}
        onChange={handleNameChange}
        className={styles['text-field']}
      />
      <div className={styles.error}>
        {formik.errors.name && formik.touched.name && formik.errors.name}
      </div>
    </div>
  );
}

export default TextFieldWithError;
