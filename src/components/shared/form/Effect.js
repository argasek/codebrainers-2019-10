import { connect } from 'formik';
import { useEffect, useRef } from 'react';

const Effect = ({ formik, onChange }) => {
  const ref = useRef(null);
  useEffect(() => {
    onChange(formik, ref.current);
    ref.current = formik;
  }, [ formik, onChange ]);
  return null;
};
export default connect(Effect);