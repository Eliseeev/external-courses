function debounce(func, ms) {
  let isReady = false;

  // eslint-disable-next-line func-names
  return function () {
    if (isReady) return;
    // eslint-disable-next-line prefer-rest-params
    func.apply(this, arguments);
    isReady = true;

    setTimeout(() => { isReady = false; }, ms);
  };
}

const input = document.querySelector('#input');
const text = document.querySelector('#text');

function onInputChange() {
  text.innerHTML = input.value;
}

// eslint-disable-next-line no-unused-vars
const debouncedInputChange = debounce(onInputChange, 1000);
