function validar () {
    if (user !== "") {
        if (pass !== "") {
            navigation.navigate("Home");
        } else{
            alert("Senha ou usuário inválidos");
        }
    } else{
        alert("Usuário ou senha inválidos");
    }
}

return (
    <view style={styles.app}>
        
        <text style={styles.title}>Login</text>

        <view style={styles.paddingBottom}>
            <text style={styles.label}>Usuário</text>
            <textInput style={styles.campo} placeholder="Digite seu usuário" value={user}></textInput>
        </view>

    </view>
)