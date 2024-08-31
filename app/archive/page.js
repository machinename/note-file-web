'use client'

import styles from "./page.module.css";
import { useContext } from 'react';
import { AppContext } from "../context/app_provider";
import NoteGUI from '../components/note_gui';

export default function Archive() {
  const { notes } = useContext(AppContext);
  
  return (
    <main className={styles.content}>
      <>
        {notes.map((note, index) => (
          note.isArchived && <NoteGUI note={note} mode={'update'} key={index}  />
        ))}
      </>
      <p>
        App Is Still In Very Every Development.
      </p>
    </main>
  );
}

