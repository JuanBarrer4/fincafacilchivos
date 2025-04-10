import users from '../models/User.js';

export const welcome = (req, res) => {
  res.send('API LISTA!');
};

export const loginUser = async (req, res) => {
  const { usuario, contraseña } = req.body;

  const user = users.find(u => u.usuario === usuario && u.contraseña === contraseña);

  if (!user) {
    return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
  }

  res.json({
    mensaje: `¡Bienvenido ${user.nombre}! Tu rol es: ${user.rol}`,
    nombre: user.nombre,
    usuario: user.usuario,
    rol: user.rol
  });
};
