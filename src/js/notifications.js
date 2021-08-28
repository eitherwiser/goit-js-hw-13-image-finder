import { success, error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

function ApiNoticeSuccess() {
  success({
    title: 'Success',
    delay: 1000,
    text: 'The search proceeded successfully',
  });
}

function ApiNoticeError() {
  error({
    title: 'Error',
    delay: 1000,
    text: 'Somthing went wrong. Please try again.',
  });
}

export { ApiNoticeSuccess, ApiNoticeError };