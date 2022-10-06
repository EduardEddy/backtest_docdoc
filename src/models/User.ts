import { DataTypes} from 'sequelize';
import db from '../../config/db/connection';

const User = db.define('users',{
    nombre: DataTypes.STRING,
    edad:DataTypes.INTEGER,
    correo:DataTypes.STRING,
    clave: DataTypes.STRING,
},{
    createdAt: false,
    updatedAt: false
});

User.sync()

export default User;