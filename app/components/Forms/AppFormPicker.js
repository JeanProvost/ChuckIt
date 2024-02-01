import React from 'react';
import AppPicker from '../AppPicker';
import { useFormikContext } from 'formik';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({name, items, PickerItemComponent, placeholder, width, numberOfColumns }) {
    const { setFieldTouched, handleChange, errors, touched, values, setFieldValue } = useFormikContext();

    return (
        <>
            <AppPicker
                items={items}
                onSelectItem={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                PickerItemComponent={PickerItemComponent}
                selectedItem={values[name]}
                numberOfColumns={numberOfColumns}
                width={width}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;