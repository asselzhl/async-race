import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/store';
import { createCar, updateCar } from '../../store/carList/carListThunk';

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

const formConfigByType = {
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

  const currentFormConfig = formConfigByType[type];

  const carFormData = useSelector(currentFormConfig.selector);

  const formik = useFormik({
    initialValues: carFormData,
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      dispatch(currentFormConfig.onSubmitAction(values));

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
        onChangeAction={currentFormConfig.onChangeAction}
      />
      <ColorPickerWithError
        formik={formik}
        onChangeAction={currentFormConfig.onChangeAction}
      />

      <Button variant="outlined" type="submit" size="small">
        {currentFormConfig.buttonText}
      </Button>
    </form>
  );
}
