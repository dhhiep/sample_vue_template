export default {
  name: 'Digiself',
  layout: {
    main: {
      profile: 'Account',
      logout: 'Log out',
    },
  },
  login: {
    title: 'Log in',
    email: 'Email',
    password: 'Password',
    btnLogin: 'Log in',
  },
  validation: {
    general: 'An error occurred. Please try again later.',
    invalid: 'Invalid value.',
    email: 'Please enter a valid email address.',
    required: 'This field is required.',
    min: 'Please enter at least {length} characters.',
    max: 'Please enter no more than {length} characters.',
    alphaNumeric: 'Please enter alphabetic and numeric characters only.',
    number: 'Please enter a number.',
    halfSizeLetter: 'Please enter half-width characters.',
    greaterOrEqual: 'Value must be greater than or equal to {value}.',
  },
};
