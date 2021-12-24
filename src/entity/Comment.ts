import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Post} from "./Post";
import {User} from "./User";

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn('increment')
    id:string;

    @Column('text')
    content: string;

    @ManyToOne(type => User, user => user.comments)
    user: User;

    @ManyToOne(type => Post,post => post.comments)
    post:Post;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
