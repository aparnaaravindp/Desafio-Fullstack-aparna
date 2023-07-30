import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { getRounds, hashSync } from "bcryptjs";
import { Contact } from "./contacts.entity";
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
  @Column({ type: "varchar", length: 120 })
  password: string;
  @CreateDateColumn({ type: "date" })
  createdAt: string;
  @UpdateDateColumn({ type: "date" })
  updatedAt: string;
  @OneToMany(() => Contact, contact => contact.user)
  contacts: Contact[]

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
