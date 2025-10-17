export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const validateName = (name) => {
  return name.trim().length >= 2;
};

export const getFieldError = (field, value) => {
  switch (field) {
    case 'name':
      if (!value) return 'Ad soyad gereklidir';
      if (!validateName(value)) return 'Ad soyad en az 2 karakter olmalıdır';
      return '';
    
    case 'email':
      if (!value) return 'E-posta gereklidir';
      if (!validateEmail(value)) return 'Geçerli bir e-posta adresi giriniz';
      return '';
    
    case 'password':
      if (!value) return 'Şifre gereklidir';
      if (!validatePassword(value)) return 'Şifre en az 6 karakter olmalıdır';
      return '';
    
    default:
      return '';
  }
};
