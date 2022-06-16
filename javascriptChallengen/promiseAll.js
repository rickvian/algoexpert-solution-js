// // try reject
// const promise1 = new Promise((res)=> setTimeout(()=>res('time done 1'),100 ))
// const promise2 = new Promise((res)=> setTimeout(()=>res('time done 3'),100 ))
// const promise3 = new Promise((res)=> setTimeout(()=>res('time done 5'),100 ))

// try reject
const promise1 = new Promise((res) =>
  setTimeout(() => res("time done 1"), 6000)
);
const promise2 = new Promise((res, reject) =>
  setTimeout(() => reject("reject timeout"), 5000)
);
const promise3 = new Promise((res) =>
  setTimeout(() => res("time done 5"), 6000)
);

const promiseAll = (promises) =>
  new Promise((resolve, reject) => {
    let outputs = [];
    let i = 0;
    promises.forEach((promise) => {
      promise
        .then((result) => {
          outputs[i] = result;
          i++;

          if (i === promises.length) {
            resolve(outputs);
          }
        })
        .catch(reject);
    });
  });

Promise.all([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Promise all rejected:", error);
  });

promiseAll([]).then(console.log);
