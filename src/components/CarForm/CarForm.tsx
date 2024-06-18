import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material';
import { useAppDispatch } from '../../store/store';
import { createCar } from '../../store/car/carThunk';

import styles from './CarForm.module.css';
import ColorPickerWithError from './components/ColorPickerWithError';
import TextFieldWithError from './components/TextFieldWithError';

interface CarFormProps {
  type: string;
}

function CarForm({ type }: CarFormProps) {
  const dispatch = useAppDispatch();
  const buttonText = type === 'create' ? 'Create' : 'Update';

  const formik = useFormik({
    initialValues: {
      name: '',
      color: '#000000',
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(createCar(values));

      resetForm();
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Car brand is required'),
      color: Yup.string().required('Car color is required'),
    }),
  });

  return (
    <form action="" className={styles.form} onSubmit={formik.handleSubmit}>
      <TextFieldWithError formik={formik} />
      <ColorPickerWithError formik={formik} />

      <Button variant="outlined" type="submit" size="small">
        {buttonText}
      </Button>
    </form>
  );
}

export default CarForm;
