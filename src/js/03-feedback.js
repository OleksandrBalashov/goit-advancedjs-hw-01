import debounce from 'lodash.debounce';

const KEY_STORAGE = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[name="email"]'),
  textarea: document.querySelector('textarea[name="message"]'),
};

refs.form.addEventListener('input', debounce(handleInput, 500));
refs.form.addEventListener('submit', handleSubmit);

const dataStorage = JSON.parse(localStorage.getItem(KEY_STORAGE));

if (!!dataStorage) {
  refs.input.value = dataStorage.email;
  refs.textarea.value = dataStorage.message;
}

const data = {};

function handleInput() {
  const formData = new FormData(refs.form);

  formData.forEach((key, name) => {
    data[name] = key;
  });

  localStorage.setItem(KEY_STORAGE, JSON.stringify(data));
}

function handleSubmit(event) {
  event.preventDefault();

  console.log(data);

  localStorage.removeItem(KEY_STORAGE, JSON);
  refs.form.reset();
}