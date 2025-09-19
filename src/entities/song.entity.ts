import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Track } from './track.entity';

@Entity('songs')
export class Song extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  artist: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  album?: string;

  @Column({ type: 'int', nullable: true })
  duration?: number; // in seconds

  @Column({ type: 'varchar', length: 50, nullable: true })
  genre?: string;

  @Column({ type: 'date', nullable: true })
  releaseDate?: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  label?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  rightsHolder?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  isrc?: string; // International Standard Recording Code

  @OneToMany(() => Track, (track) => track.song)
  tracks: Track[];
}