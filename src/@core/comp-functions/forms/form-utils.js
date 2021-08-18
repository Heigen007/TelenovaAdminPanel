export const useInputImageRenderer = (inputEl, callback) => {
  const inputImageRenderer = () => {
    console.log(inputEl.value);
    const files = inputEl.value?.files
    let readers = [];
    function readAsDataUrl(file){
      return new Promise(function(resolve,reject){
        console.log(file);
          let fr = new FileReader();

          fr.onload = function(){
              resolve(fr.result);
          };

          fr.onerror = function(){
              reject(fr);
          };

          fr.readAsDataURL(file);
      });
    }
    // reader.addEventListener(
    //   'load',
    //   () => {
    //     console.log(reader.result);
    //     callback([reader.result, 1])
    //   },
    //   false,
    // )

    if (files) {
      for(let i = 0;i < files.length;i++){
        console.log(1);
        readers.push(readAsDataUrl(files[i]));
      }
    }
    Promise.all(readers).then((values) => {
      console.log(values);
      callback(values)
    });
  }
  const inputImageRenderer2 = () => {
    const files = inputEl.value.files
    let readers = [];
    function readAsDataUrl(file){
      return new Promise(function(resolve,reject){
        console.log(file);
          let fr = new FileReader();

          fr.onload = function(){
              resolve(fr.result);
          };

          fr.onerror = function(){
              reject(fr);
          };

          fr.readAsDataURL(file);
      });
    }
    // reader.addEventListener(
    //   'load',
    //   () => {
    //     console.log(reader.result);
    //     callback([reader.result, 1])
    //   },
    //   false,
    // )

    if (files) {
      for(let i = 0;i < files.length;i++){
        console.log(1);
        readers.push(readAsDataUrl(files[i]));
      }
    }
    Promise.all(readers).then((values) => {
      console.log(values);
      callback(values)
    });
  }
  const inputImageRenderer3 = () => {
    const files = inputEl.value.files
    let readers = [];
    function readAsDataUrl(file){
      return new Promise(function(resolve,reject){
        console.log(file);
          let fr = new FileReader();

          fr.onload = function(){
              resolve(fr.result);
          };

          fr.onerror = function(){
              reject(fr);
          };

          fr.readAsDataURL(file);
      });
    }

    if (files) {
      for(let i = 0;i < files.length;i++){
        console.log(1);
        readers.push(readAsDataUrl(files[i]));
      }
    }
    Promise.all(readers).then((values) => {
      console.log(values);
      callback(values)
    });
  }
  const inputImageRenderer4 = inputImageRenderer3
  const inputImageRenderer5 = inputImageRenderer3
  const inputImageRenderer6 = inputImageRenderer3
  const inputImageRenderer7 = inputImageRenderer3
  const inputImageRenderer8 = inputImageRenderer3
  return {
    inputImageRenderer,
    inputImageRenderer2,
    inputImageRenderer3,
    inputImageRenderer4,
    inputImageRenderer5,
    inputImageRenderer6,
    inputImageRenderer7,
    inputImageRenderer8

  }
}

export const _ = null
