import { FormikProps } from 'formik';
import { MuiColorInput } from 'mui-color-input';

import styles from '../CarForm.module.css';
import { useAppDispatch } from '../../../store/store';
import { CarFormAction } from '../../../store/carForm/carFormSlice';

interface CarFormValues {
  name: string;
  color: string;
}

interface ColorPickerProps {
  formik: FormikProps<CarFormValues>;
  onChangeAction: CarFormAction;
}

export function ColorPickerWithError({
  formik,
  onChangeAction,
}: ColorPickerProps) {
  const dispatch = useAppDispatch();
  const handleColorChange = (color: string) => {
    formik.setFieldValue('color', color);

    dispatch(onChangeAction({ color }));
  };
  return (
    <div>
      <MuiColorInput
        format="hex"
        isAlphaHidden
        name="color"
        value={formik.values.color}
        onChange={handleColorChange}
        size="small"
        className={styles['text-field']}
      />
      <div className={styles.error}>
        {formik.errors.color && formik.touched.color && formik.errors.color}
      </div>
    </div>
  );
}
