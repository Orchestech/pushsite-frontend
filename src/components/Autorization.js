
function Autorization() {
  return (
    <div className="container">
        <form className="justify-content-center m-auto" style={{maxWidth: "500px"}}>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Почта</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Пароль</label>
                <input type="password" class="form-control" id="exampleInputPassword1"></input>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">Запомнить</label>
            </div>
            <button type="submit" class="btn btn-primary">Авторизироватся</button>
        </form>
    </div>
  );
}

export default Autorization;