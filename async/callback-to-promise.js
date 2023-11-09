class UserStorage{
  loginUser = (id, password) => new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(id === 'ellie' && password === 'dream' || id === 'coder' && password === 'academy'){
        resolve(id);
      }else reject(new Error('not found'));
    }, 2000)
  });

  getRoles = (user) => new Promise((resolve, reject) => {
    setTimeout(() => {
      if(user === 'ellie') resolve({name: 'ellie', role: 'admin'})
      else reject(new Error('no access'));
    })
  });
}

const userStorage = new UserStorage();
const id = prompt('id 입력');
const password = prompt('password 입력');
userStorage.loginUser(id, password)
.then(userStorage.getRoles)
.catch(console.log)
.then(console.log)
.catch(console.log);