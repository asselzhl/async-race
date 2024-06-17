import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/store';
import { createCar, updateCar } from '../../store/car/carThunk';

import styles from './CarForm.module.css';
import ColorPickerWithError from './components/ColorPickerWithError';
import TextFieldWithError from './components/TextFieldWithError';
import {
  getNewCarFormData,
  getUpdatedCarFormData,
} from '../../store/selectors';
import {
  setNewCarFormData,
  setUpdatedCarFormData,
} from '../../store/carForm/carFormSlice';

interface CarFormProps {
  type: 'create' | 'update';
}

function CarForm({ type }: CarFormProps) {
  const dispatch = useAppDispatch();
  const buttonText = type === 'create' ? 'Create' : 'Update';

  const onChangeAction =
    type === 'create' ? setNewCarFormData : setUpdatedCarFormData;
  const onSubmitAction = type === 'create' ? createCar : updateCar;
  const selector =
    type === 'create' ? getNewCarFormData : getUpdatedCarFormData;

  const carFormData = useSelector(selector);

  const formik = useFormik({
    initialValues: carFormData,
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      dispatch(onSubmitAction(values));

      resetForm();
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Car brand is required'),
      color: Yup.string().required('Car color is required'),
    }),
  });

  return (
    <form action="" className={styles.form} onSubmit={formik.handleSubmit}>
      <TextFieldWithError formik={formik} onChangeAction={onChangeAction} />
      <ColorPickerWithError formik={formik} onChangeAction={onChangeAction} />

      <Button variant="outlined" type="submit" size="small">
        {buttonText}
      </Button>
    </form>
  );
}

export default CarForm;
