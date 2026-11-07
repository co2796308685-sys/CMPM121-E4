export type EnemyKind = "drone" | "dart" | "turret" | "lancer";
export type Formation = "line" | "vee" | "column" | "pincer";

export interface Wave {
  at: number;
  kind: EnemyKind;
  count: number;
  formation: Formation;
  x: number;
}

export interface Sector {
  name: string;
  subtitle: string;
  length: number;
  waves: Wave[];
  boss?: boolean;
}

const line = (at: number, kind: EnemyKind, count: number, x = 240): Wave => ({
  at,
  kind,
  count,
  formation: "line",
  x,
});

const vee = (at: number, kind: EnemyKind, count: number, x = 240): Wave => ({
  at,
  kind,
  count,
  formation: "vee",
  x,
});

const column = (
  at: number,
  kind: EnemyKind,
  count: number,
  x: number,
): Wave => ({
  at,
  kind,
  count,
  formation: "column",
  x,
});

const pincer = (at: number, kind: EnemyKind, count: number): Wave => ({
  at,
  kind,
  count,
  formation: "pincer",
  x: 240,
});

export const SECTORS: Sector[] = [
  {
    name: "Outer Drift",
    subtitle: "Scouts ahead",
    length: 1560,
    waves: [
      line(60, "drone", 4),
      vee(360, "drone", 5, 168),
      vee(660, "drone", 5, 312),
      line(960, "drone", 6),
      column(1200, "drone", 4, 120),
      column(1260, "drone", 4, 360),
    ],
  },
  {
    name: "Shatter Belt",
    subtitle: "Divers incoming",
    length: 1800,
    waves: [
      vee(60, "drone", 6),
      line(300, "dart", 4),
      column(600, "dart", 5, 144),
      column(720, "dart", 5, 336),
      line(1020, "drone", 7),
      vee(1140, "dart", 5),
      line(1440, "dart", 6),
    ],
  },
  {
    name: "Gun Lanes",
    subtitle: "Turrets online",
    length: 1920,
    waves: [
      line(60, "turret", 1),
      vee(240, "drone", 6),
      line(540, "turret", 2),
      column(840, "dart", 6, 240),
      line(1080, "turret", 2),
      line(1140, "drone", 6),
      line(1500, "turret", 3),
    ],
  },
  {
    name: "Lancer Gate",
    subtitle: "Crossfire",
    length: 1920,
    waves: [
      pincer(60, "lancer", 4),
      vee(360, "dart", 6),
      pincer(600, "lancer", 6),
      line(780, "turret", 2),
      pincer(1140, "lancer", 6),
      vee(1260, "drone", 8),
      line(1560, "dart", 8),
    ],
  },
  {
    name: "Last Approach",
    subtitle: "Everything they have",
    length: 2040,
    waves: [
      line(60, "turret", 3),
      pincer(180, "lancer", 6),
      column(540, "dart", 6, 120),
      column(540, "dart", 6, 360),
      vee(900, "drone", 9),
      line(1020, "turret", 2),
      pincer(1320, "lancer", 8),
      vee(1560, "dart", 8),
    ],
  },
  {
    name: "The Warden",
    subtitle: "The Warden approaches",
    length: 0,
    waves: [],
    boss: true,
  },
];
