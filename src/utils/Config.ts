// import { PERMISSIONS } from 'react-native-permissions';

export default {
  regex: {
    setTitleRegex: /^[a-zA-Z 0-9#]*$/,
    setQuestionRegex: /^[\S\s]*[a-zA-Z 0-9'?_-]*$/,
    alphaNumericRegex: /^[\S\s]*[a-zA-Z 0-9]*$/,
  },
  error: {
    error_internet_connection:
      'Something went wrong!! Please check your internet and try again',
    error_set_title_empty: 'Please enter set title!',
    error_set_title_regex:
      'Set Title can only contain alphanumeric characters and #. Please check and fix.',
    error_report_by_user:
      'We have received your request and necessary action will be taken within 24 hours.',
    error_block_user:
      'Are you sure you want to block this user. No more interaction will be allowed between you and this user.',
    error_add_set_question: 'You only add 15 questions in a Set !!!!',
    error_duplicate_set_title:
      'A Set of same name already exists. Please enter a different name!',
    error_answer_value_empty: 'Please enter answer!',
    error_answer_value_regex:
      'Answer can only contain alphanumeric characters and #. Please check and fix.',
    error_duplicate_note_title:
      'A Note of same name already exists. Please enter a different name!',
  },
  //   permissions: {
  //     // Permission Messages
  //     permission_camera:
  //       'Camera permission is required to select images. Please allow this permission in the app settings!!',
  //     permission_gallery:
  //       'Gallery permission is required to select images. Please allow this permission in the app settings!!',
  //     permission_location:
  //       'Location permission is required to see users close to your location. Please allow this permission in the app settings!!',

  //     //Permissions ANDROID
  //     ANDROID_CAMERA: PERMISSIONS.ANDROID.CAMERA,
  //     ANDROID_READ_EXTERNAL_STORAGE: 'photo',

  //     //Permissions IOS
  //     IOS_CAMERA_PERMISSION: PERMISSIONS.IOS.CAMERA,
  //     IOS_PHOTO_LIBRARY: PERMISSIONS.IOS.PHOTO_LIBRARY,
  //     IOS_MEDIA_LIBRARY: PERMISSIONS.IOS.MEDIA_LIBRARY,
  //   },
  static_url: {},
  icons: {
    QUESTION_ICON: 'QuestionIcon',
  },
  colors: {
    WHITE: '#ffffff',
    GRAY: 'gray',
    LIGHT_GREY: 'lightgrey',
    BLACK: 'black',
    RED: 'red',
    GREEN: 'green',
    theme: '#317abf',
    cyan: '#1ecbe1',
  },
  constants: {
    getFreeDelivery: 'GET FREE DELIVERY',
    bottleZoo: 'BOTTLEZOO - ALCOHOL ON DEMAND',
    liquorStore: 'Are you a liquor store?',
    sendCustomers: 'WE CAN SEND YOU CUSTOMERS.',
    joinNetwork:
      'Find out how you can join our network & be listed in our search options.',
    moreInfo: 'MORE INFO',
    terms: 'Terms and Conditions',
    privacy: 'Privacy Policy',
    contact: 'Contact Us',
    support: 'Support',
    chat: 'Chat Now',
    email: 'Email Support',
    faq: 'FAQs',
    follow: 'Follow Us',
    weAccept: 'We Accept',
    consentText:
      'This app requires you to be atleast 18 years of age to view its content.',
    age: 'Are you 18 years of age or above ?',
    signUp: 'SIGN UP',
    signIn: 'SIGN IN',
    agree: 'I agree to the Privacy Policy.',
    alreadyHaveAccount: 'Already have an account? Sign in',
    remember: 'Remember Me',
    forgotPassword: 'Forgot password?',
    noAccount: `Don't have an account? Sign Up`,
    sendPassword: 'SEND PASSWORD RESET EMAIL',
  },
};
