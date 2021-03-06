import {Column, Entity,  OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Post} from "./Post";
import {Comment} from "./Comment";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('increment')
    id:string;

    @Column('varchar')
    username: string;

    @Column({type: 'varchar', select: false})
    passwordDigest: string;

    @OneToMany(type => Comment, comment => comment.user)
    comments: Comment[];

    @OneToMany(type => Post, post => post.author)
    posts:Post[];

    @UpdateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
