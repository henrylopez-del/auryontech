"use client";

import { useState } from "react";
import styles from "./MaterialTemplate.module.css";

type Opt = { x: string; c: boolean };

export default function MaterialQuiz({ q, opts }: { q: string; opts: Opt[] }) {
  const [picked, setPicked] = useState<number | null>(null);
  const correct = picked !== null && opts[picked]?.c;

  return (
    <div className={styles.quiz}>
      <div className={styles.quizLabel}>Comprueba lo que aprendiste</div>
      <div className={styles.quizQ}>{q}</div>
      <div className={styles.quizOpts}>
        {opts.map((o, i) => {
          const active = picked === i;
          const cls = [
            styles.quizOpt,
            active && o.c ? styles.quizOk : "",
            active && !o.c ? styles.quizBad : "",
          ]
            .filter(Boolean)
            .join(" ");
          return (
            <button
              key={i}
              type="button"
              className={cls}
              onClick={() => setPicked(i)}
              aria-pressed={active}
            >
              {o.x}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div className={correct ? styles.quizFbOk : styles.quizFbBad}>
          {correct ? "Correcto." : "No es esa. Repasa la lección y vuelve a intentar."}
        </div>
      )}
    </div>
  );
}
