import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./users.entity";

@Entity("contacts")
class Contact {
    @PrimaryGeneratedColumn("increment")
    id: number;
  
    @Column({ type: "varchar", length: 45 })
    fullname: string;
    @Column({ type: "varchar", length: 45, unique: true })
    email: string;
    @Column({ type: "integer" })
    telephone: number;
    @CreateDateColumn({ type: "date" })
    createdAt: string;
  
    @ManyToOne(() => User)
    user: User;
  }
  
  export { Contact };
  