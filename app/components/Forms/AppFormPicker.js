import React from 'react';
import AppPicker from '../AppPicker';
import { useFormikContext } from 'formik';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({name, items, placeholder }) {
    const { setFieldTouched, handleChange, errors, touched, values, setFieldValue } = useFormikContext();

    return (
        <>
            <AppPicker 
                items={items}
                onSelectItem={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;