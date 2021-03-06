import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import FormHelperText from '@material-ui/core/FormHelperText'
import {withStyles} from '@material-ui/core/styles'

import {FormBuilder, Field, FieldError, Validators} from '../shared/Forms'

import styles from './styles'

const Form = props => {
  const {classes} = props

  return (
    <form
      className="auth-form"
      onSubmit={event => props.handleSubmit(event, props.values, props.login)}
    >
      <Field
        name="email"
        placeholder="Enter email"
        formFieldProps={{
          label: 'email',
          value: props.values.email,
          onChange: props.handleChange
        }}
        Component={Input}
        renderFormError={() => <FieldError errors={props.formErrors.email} />}
      />

      <Field
        name="password"
        placeholder="Enter password"
        formFieldProps={{
          label: 'password',
          type: 'password',
          value: props.values.password,
          onChange: props.handleChange
        }}
        Component={Input}
        renderFormError={() => (
          <FieldError errors={props.formErrors.password} />
        )}
      />

      {props.loginError && (
        <FormHelperText className="auth-form-error">
          {props.loginError}
        </FormHelperText>
      )}

      <div className={classes.rememberForgotPassword}>
        <Link to="/reset-password" classes={classes.rememberMe}>
          Forgot Password?
        </Link>
      </div>

      <Button
        variant="contained"
        color="primary"
        label="Submit"
        type="submit"
        className="auth-submit-button"
      >
        Submit
      </Button>
    </form>
  )
}

const LoginForm = FormBuilder({
  state: {
    values: {
      email: '',
      password: ''
    },
    formErrors: {
      email: [],
      password: []
    }
  },
  validators: {
    email: [
      [Validators.isRequired, 'Email is required.'],
      [Validators.isEmail, 'Email is invalid.']
    ],
    password: [[Validators.isRequired, 'Password is required.']]
  }
})(Form)

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LoginForm)
