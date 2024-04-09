export default {
  name: 'Digiself',
  layout: {
    main: {
      profile: 'Tài khoản',
      logout: 'Đăng xuất',
    },
  },
  login: {
    title: 'Đăng nhập',
    email: 'Email',
    password: 'Mật khẩu',
    btnLogin: 'Đăng nhập',
  },
  validation: {
    general: 'Đã xảy ra lỗi. Vui lòng thử lại sau.',
    invalid: 'Giá trị không hợp lệ.',
    email: 'Vui lòng nhập địa chỉ email hợp lệ.',
    required: 'Trường này là bắt buộc.',
    min: 'Vui lòng nhập ít nhất {length} ký tự.',
    max: 'Vui lòng nhập tối đa {length} ký tự.',
    alphaNumeric: 'Vui lòng nhập ký tự chữ và số.',
    number: 'Vui lòng nhập số.',
    halfSizeLetter: 'Vui lòng nhập ký tự nửa chiều rộng.',
    greaterOrEqual: 'Giá trị phải lớn hơn hoặc bằng {value}.',
  },
};
