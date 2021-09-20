import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Corretora extends Model {
  @Column
  nome: string;

  @Column({ allowNull: true })
  site: string;

  @Column({ allowNull: true })
  usuarioAcesso: string;

  @Column({ allowNull: true })
  senhaAcesso: string;
}
