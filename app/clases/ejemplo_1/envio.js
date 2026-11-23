function costoEnvio(total, envioGratis) {
    if (envioGratis || total >= 50) {
        return 0;
    }

    return 5;
}

module.exports = { costoEnvio };