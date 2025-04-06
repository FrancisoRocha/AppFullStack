const registrar = (req, res) => {
  const { nombre, email, password } = req.body;

  console.log(nombre);
  console.log(email);
  console.log(password);

  res.json({ msj: "Registrando Usuario..." });
};

const perfil = (req, res) => {
  res.json({ msj: "Mostando perfil" });
};

export { registrar, perfil };
