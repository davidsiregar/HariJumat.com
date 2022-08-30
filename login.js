const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.remove("right-panel-active");
});

const objectUser = [
  {
    name: "admin",
    email: "admin@gmail.com",
    password: "admin123",
  },
];

// ini fungsi untuk login
function signIn() {
  var iniEmail = document.getElementById("email").value;
  var iniPassword = document.getElementById("password").value;

  for (let i = 0; i < objectUser.length; i++) {
    if (iniEmail == objectUser[i].email && iniPassword == objectUser[i].password) {
      console.log("bisa login nih boss!!");
      return;
    }
  }
  console.log("pass salah boss!!");
}

// ini fungsi untuk registrasi new user
function signUp() {
  let iniNama = document.getElementById("registName").value;
  let iniEmail = document.getElementById("registEmail").value;
  let iniPassword = document.getElementById("registPassword").value;
  let userBaru = {
    nama: iniNama,
    email: iniEmail,
    password: iniPassword,
  };

  for (let i = 0; i < objectUser.length; i++) {
    if (iniNama == objectUser[i].nama) {
      alert("namanya udh ada boss!");
      return;
    } else if (iniPassword.length < 8) {
      alert("minimal 8 karakter boss!!");
      return;
    }
  }
  objectUser.push(userBaru);
  console.log(objectUser);
}
