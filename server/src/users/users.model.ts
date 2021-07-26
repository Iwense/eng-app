import { Column, Model, Table, DataType, HasMany } from "sequelize-typescript"
import { Dictionary } from "src/dictionary/dictionary.model";

// Минимальные значения для создания пользователя
interface IUserCreation{
    email:string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, IUserCreation>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @Column({type: DataType.STRING, allowNull: false })
    password: string;

    @Column({type: DataType.STRING, allowNull: true })
    name: string;

    @Column({type: DataType.STRING, allowNull: true })
    city: string;

    @HasMany( () => Dictionary)
    dictionaries: Dictionary[]

}