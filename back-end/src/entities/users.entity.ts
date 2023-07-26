import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { getRounds, hashSync } from "bcryptjs";
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
  @Column({ type: "boolean", default: false })
  admin: boolean;
  @Column({ type: "varchar", length: 120 })
  password: string;
  @Column({ type: "date" })
  registrationDate: string | Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export { User}
