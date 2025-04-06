import React from 'react';
import { 
  Box, 
  Container, 
  Paper, 
  Typography, 
  TextField, 
  Button, 
  Grid,
  AppBar,
  Toolbar
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  diseases: Yup.string().required('Diseases information is required'),
  drugName: Yup.string().required('Drug name is required'),
  date: Yup.date().required('Date is required'),
});

const MedicalDashboard = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log('Form values:', values);
    resetForm();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Medical Information Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Patient Information
          </Typography>
          
          <Formik
            initialValues={{
              name: '',
              diseases: '',
              drugName: '',
              date: new Date(),
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleChange, setFieldValue }) => (
              <Form>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="name"
                      name="name"
                      label="Patient Name"
                      value={values.name}
                      onChange={handleChange}
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                      variant="outlined"
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="diseases"
                      name="diseases"
                      label="Diseases"
                      multiline
                      rows={3}
                      value={values.diseases}
                      onChange={handleChange}
                      error={touched.diseases && Boolean(errors.diseases)}
                      helperText={touched.diseases && errors.diseases}
                      variant="outlined"
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="drugName"
                      name="drugName"
                      label="Drug Name"
                      value={values.drugName}
                      onChange={handleChange}
                      error={touched.drugName && Boolean(errors.drugName)}
                      helperText={touched.drugName && errors.drugName}
                      variant="outlined"
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Date"
                        value={values.date}
                        onChange={(newValue) => setFieldValue('date', newValue)}
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            error: touched.date && Boolean(errors.date),
                            helperText: touched.date && errors.date,
                            variant: "outlined"
                          }
                        }}
                      />
                    </LocalizationProvider>
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      sx={{ 
                        mt: 2,
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: 'none',
                        fontSize: '1.1rem'
                      }}
                    >
                      Submit Information
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Paper>
      </Container>
    </Box>
  );
};

export default MedicalDashboard; 