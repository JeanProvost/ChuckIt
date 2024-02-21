import React from 'react';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';

function AppFormField({ name, ...otherProps }) {
   const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

   const handlePress = () => {
        setFieldTouched(name);
   };

    return (
        <>
        
            <AppTextInput
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                onPress={handlePress}
                {...otherProps}
            />
            {<ErrorMessage error={errors[name]} visible={touched[name]} />}
        </>
    );
}

export default AppFormField;