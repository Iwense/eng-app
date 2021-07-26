import { Column, Model, Table, DataType, BelongsTo, ForeignKey } from "sequelize-typescript"
import { User } from "src/users/users.model";

export interface IDictionaryCreation{
    engWord: string;
    translateWord: string;
    userId: number;
}

@Table({tableName: 'dictionary'})
export class Dictionary extends Model<Dictionary, IDictionaryCreation>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({type: DataType.STRING, allowNull: false })
    engWord: string;

    @Column({type: DataType.STRING, allowNull: false })
    translateWord: string;

    @ForeignKey(()=> User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    owner: User
}