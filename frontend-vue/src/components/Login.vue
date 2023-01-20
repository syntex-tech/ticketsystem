
<template>
  <div class="container-box">
    <div class="login-box">
      <h1>Lege jetzt los.</h1>
      <form>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br>
        <label for="password">Passwort:</label>
        <input type="password" id="password" name="password" required>
        <br>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
    export default{

    }
</script>

<style>
.container-box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65vh; /* Or any value that works for you */
}

.login-box {
  border: 2px solid gray;
  border-radius: 10px;
  background-color: #e2e2e2;
  padding: 20px;
  box-shadow: 0px 0px 10px 0px #ccc;
  width: 500px; /* Or any value that works for you*/
}
h1 {
  text-align: center;
  font-size: 2em;
  margin-top: 50px;
  margin-bottom: 30px;
}

form {
  width: 300px;
  margin: 0 auto;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
}

label {
  font-size: 1.2em;
  display: block;
  margin-bottom: 10px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
}

input[type="email"]:focus,
input[type="password"]:focus {
  border: 2px solid rgb(75, 75, 75);
}

button {
  background-color: #00a136;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.2s ease-in-out;
}

button:hover {
    background: #00852c;
}


</style>