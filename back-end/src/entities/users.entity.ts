import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  fullname: string;
  @Column({ type: "varchar", length: 45, unique: true })
  email: string;
  @Column({ type: "integer" })
  telephone: number;
  @Column({ type: "date" })
  registrationDate: Date;
}

export { User}
