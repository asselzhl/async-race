import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/store';
import { createCar, updateCar } from '../../store/car/carThunk';

import styles from './CarForm.module.css';
import { ColorPickerWithError } from './components/ColorPickerWithError';
import { TextFieldWithError } from './components/TextFieldWithError';

import {
  setNewCarFormData,
  setUpdatedCarFormData,
} from '../../store/carForm/carFormSlice';
import {
  getNewCarFormData,
  getUpdatedCarFormData,
} from '../../store/carForm/selectors';

interface CarFormProps {
  type: 'create' | 'update';
}

const dataByType = {
  create: {
    buttonText: 'Create',
    onSubmitAction: createCar,
    selector: getNewCarFormData,
    onChangeAction: setNewCarFormData,
  },
  update: {
    buttonText: 'Update',
    onSubmitAction: updateCar,
    selector: getUpdatedCarFormData,
    onChangeAction: setUpdatedCarFormData,
  },
} as const;

// TODO: type errors
export function CarForm({ type }: CarFormProps) {
  const dispatch = useAppDispatch();

  const config = dataByType[type];

  const carFormData = useSelector(config.selector);

  const formik = useFormik({
    initialValues: carFormData,
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      dispatch(config.onSubmitAction(values));

      resetForm();
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Car brand is required'),
      color: Yup.string().required('Car color is required'),
    }),
  });

  return (
    <form action="" className={styles.form} onSubmit={formik.handleSubmit}>
      <TextFieldWithError
        formik={formik}
        onChangeAction={config.onChangeAction}
      />
      <ColorPickerWithError
        formik={formik}
        onChangeAction={config.onChangeAction}
      />

      <Button variant="outlined" type="submit" size="small">
        {config.buttonText}
      </Button>
    </form>
  );
}
